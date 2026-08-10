#!/usr/bin/env node
/**
 * import-keys.mjs — bulk-load provider API keys into a .env file ready for
 * Vercel's "Import .env" button.
 *
 * Usage:
 *   node scripts/import-keys.mjs <input-file>          → writes ./.env.production
 *   node scripts/import-keys.mjs <input-file> <output> → writes to <output>
 *
 * Accepted input formats (auto-detected by file extension):
 *
 *   JSON (.json) — any of these shapes work:
 *     { "groq": ["gsk_1", "gsk_2"], "gemini": ["AIza..."] }
 *     { "providers": { "groq": ["..."], "gemini": ["..."] } }
 *     { "keys": [ { "provider": "groq", "key": "gsk_..." }, ... ] }
 *     [ { "provider": "groq", "key": "gsk_..." }, ... ]
 *
 *   .env (.env, .envfile, or no extension) — one PROVIDER_*_KEYS line
 *     per provider, comma-separated values. This is essentially a
 *     passthrough with light validation.
 *
 *   CSV (.csv) — first column provider, second column key. First row may
 *     be a header ("provider,key"). Provider name normalisation as below.
 *
 * Provider name normalisation:
 *   Input names are lower-cased, stripped of punctuation, and matched
 *   against a small alias table. So "Google AI Studio", "google-ai-studio",
 *   "google_ai_studio", "gemini" all collapse to the "gemini" provider.
 *
 * Unknown providers are reported on stderr but skipped rather than
 * blocking the import; you can add them to providers.ts later.
 *
 * The output file is written with UNIX line endings and looks like:
 *
 *   PROVIDER_GROQ_KEYS=gsk_1,gsk_2,gsk_3
 *   PROVIDER_GEMINI_KEYS=AIza1,AIza2
 *   ...
 *
 * You then open Vercel Project → Settings → Environment Variables →
 * "Import .env" and drop this file in. Vercel prompts you to pick which
 * environments (Production/Preview/Development) to apply to.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { extname, resolve } from 'node:path'
import { argv, exit, stderr, stdout } from 'node:process'

// ------------------------------------------------------------
// Provider aliases → canonical id used by providers.ts
// ------------------------------------------------------------
const ALIASES = {
  groq: ['groq'],
  cerebras: ['cerebras'],
  gemini: [
    'gemini',
    'google',
    'googleaistudio',
    'googleai',
    'aistudio',
    'goog',
  ],
  github: ['github', 'githubmodels', 'ghm', 'ghmodels'],
  nvidia: ['nvidia', 'nvidianim', 'nim'],
  mistral: ['mistral', 'mistralai'],
  cohere: ['cohere'],
  zhipu: ['zhipu', 'zhipuai', 'zai', 'glm', 'bigmodel'],
  ollama: ['ollama', 'ollamacloud'],
  reka: ['reka', 'rekafreekey'],
  openrouter: ['openrouter', 'or'],
  llm7: ['llm7', 'llm7anonok'],
  opencodezen: ['opencodezen', 'opencode', 'ocz', 'zen'],
  cloudflare: ['cloudflare', 'cf', 'cloudflareworkersai', 'workersai'],
  custom: ['custom', 'customopenaicompatible', 'openai'],
}

function normalize(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]/g, '')
}

function canonicalise(providerName) {
  const n = normalize(providerName)
  for (const [canonical, aliases] of Object.entries(ALIASES)) {
    if (aliases.map(normalize).includes(n)) return canonical
  }
  return null
}

function envVarFor(canonical) {
  return `PROVIDER_${canonical.toUpperCase()}_KEYS`
}

// ------------------------------------------------------------
// Parsers
// ------------------------------------------------------------

/** Returns a Map<canonicalProvider, string[]>. */
function parseJson(text) {
  let data
  try {
    data = JSON.parse(text)
  } catch (err) {
    throw new Error(`Input is not valid JSON: ${err.message}`)
  }

  const collected = new Map()

  // Field-name variants — FreeLLMAPI and similar tools use different keys
  // for provider identity and the API-key value. Try them all.
  const PROVIDER_FIELDS = [
    'provider',
    'providerId',
    'provider_id',
    'providerName',
    'provider_name',
    'platform',
    'name',
    'service',
    'type',
    'source',
    'vendor',
  ]
  const KEY_FIELDS = [
    'key',
    'value',
    'apiKey',
    'api_key',
    'secret',
    'token',
    'credential',
  ]
  const pickField = (obj, candidates) => {
    for (const c of candidates) {
      if (obj && typeof obj[c] === 'string' && obj[c].length > 0) return obj[c]
    }
    return undefined
  }

  const problemSamples = []
  const add = (rawProvider, key, sampleItem) => {
    if (!key || typeof key !== 'string') return
    if (!rawProvider) {
      // Save one un-parsed item for diagnostics.
      if (problemSamples.length < 1 && sampleItem) problemSamples.push(sampleItem)
      return
    }
    const canon = canonicalise(rawProvider)
    if (!canon) {
      stderr.write(`⚠  skipping unknown provider: "${rawProvider}"\n`)
      return
    }
    if (!collected.has(canon)) collected.set(canon, [])
    collected.get(canon).push(key.trim())
  }

  const addFromItem = (item) => {
    if (!item || typeof item !== 'object') return
    const p = pickField(item, PROVIDER_FIELDS)
    const k = pickField(item, KEY_FIELDS)
    add(p, k, item)
  }

  // Shape 1: top-level array of items
  if (Array.isArray(data)) {
    for (const item of data) addFromItem(item)
  } else if (data && typeof data === 'object') {
    // Shape 2: { keys: [...] } or { data: [...] } or { items: [...] }
    const wrappers = ['keys', 'data', 'items', 'apiKeys', 'credentials']
    let handled = false
    for (const w of wrappers) {
      if (Array.isArray(data[w])) {
        for (const item of data[w]) addFromItem(item)
        handled = true
        break
      }
    }
    if (!handled && data.providers) {
      // Shape 3: providers: { name: [keys] } or providers: [ {name, keys} ]
      const p = data.providers
      if (Array.isArray(p)) {
        for (const item of p) {
          const providerName = pickField(item, PROVIDER_FIELDS)
          const keys = item?.keys || item?.apiKeys || item?.data || []
          if (Array.isArray(keys)) {
            for (const k of keys) {
              add(
                providerName,
                typeof k === 'string' ? k : pickField(k, KEY_FIELDS),
                k
              )
            }
          }
        }
      } else if (typeof p === 'object') {
        for (const [name, entry] of Object.entries(p)) {
          const keys = Array.isArray(entry) ? entry : entry?.keys || entry?.apiKeys || []
          if (Array.isArray(keys)) {
            for (const k of keys) {
              add(name, typeof k === 'string' ? k : pickField(k, KEY_FIELDS), k)
            }
          }
        }
      }
      handled = true
    }
    if (!handled) {
      // Shape 4: { providerName: [keys] } or { providerName: { keys: [...] } }
      for (const [name, entry] of Object.entries(data)) {
        const keys = Array.isArray(entry)
          ? entry
          : Array.isArray(entry?.keys)
            ? entry.keys
            : Array.isArray(entry?.apiKeys)
              ? entry.apiKeys
              : null
        if (keys) {
          for (const k of keys) {
            add(name, typeof k === 'string' ? k : pickField(k, KEY_FIELDS), k)
          }
        }
      }
    }
  } else {
    throw new Error('Unrecognised JSON structure.')
  }

  // Self-diagnostics: if we found NOTHING useful, dump the first problematic
  // item's field names (not values) so the user can update the parser.
  if (collected.size === 0 && problemSamples.length > 0) {
    const sample = problemSamples[0]
    const fieldNames = Object.keys(sample).join(', ')
    stderr.write(
      '\n' +
        'Could not identify the provider field on any item.\n' +
        `The first item's field names are: [${fieldNames}]\n` +
        `Tell me those field names (or share the file structure) and I'll\n` +
        `update PROVIDER_FIELDS / KEY_FIELDS at the top of parseJson().\n`
    )
  }

  return collected
}

function parseEnv(text) {
  const collected = new Map()
  const lines = text.split(/\r?\n/)
  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const eq = line.indexOf('=')
    if (eq < 0) continue
    const key = line.slice(0, eq).trim()
    let value = line.slice(eq + 1).trim()
    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    // Only accept PROVIDER_*_KEYS
    const m = key.match(/^PROVIDER_([A-Z0-9]+)_KEYS$/)
    if (!m) continue
    const canon = canonicalise(m[1])
    if (!canon) {
      stderr.write(`⚠  skipping unknown provider env-var: "${key}"\n`)
      continue
    }
    const keys = value.split(',').map((k) => k.trim()).filter(Boolean)
    collected.set(canon, (collected.get(canon) || []).concat(keys))
  }
  return collected
}

function parseCsv(text) {
  const collected = new Map()
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0)
  let start = 0
  // Skip header row if it looks like one
  const first = lines[0]?.toLowerCase() || ''
  if (first.startsWith('provider') || first.startsWith('name')) start = 1
  for (let i = start; i < lines.length; i++) {
    const parts = lines[i].split(',').map((s) => s.trim())
    if (parts.length < 2) continue
    const [rawProvider, key] = parts
    if (!key) continue
    const canon = canonicalise(rawProvider)
    if (!canon) {
      stderr.write(`⚠  skipping unknown provider on line ${i + 1}: "${rawProvider}"\n`)
      continue
    }
    if (!collected.has(canon)) collected.set(canon, [])
    collected.get(canon).push(key)
  }
  return collected
}

// ------------------------------------------------------------
// Main
// ------------------------------------------------------------

async function main() {
  const args = argv.slice(2)
  if (args.length < 1 || args.includes('--help') || args.includes('-h')) {
    stdout.write(
      [
        'Usage: node scripts/import-keys.mjs <input-file> [output-file]',
        '',
        'Accepts .json, .env, or .csv. Output defaults to ./.env.production.',
        'See the top of this file for accepted input shapes.',
      ].join('\n') + '\n'
    )
    exit(0)
  }

  const inputPath = resolve(args[0])
  const outputPath = resolve(args[1] || './.env.production')

  const text = await readFile(inputPath, 'utf8')
  const ext = extname(inputPath).toLowerCase()

  let collected
  if (ext === '.json') collected = parseJson(text)
  else if (ext === '.csv') collected = parseCsv(text)
  else if (ext === '.env' || ext === '' || ext === '.envfile') collected = parseEnv(text)
  else {
    stderr.write(
      `Unrecognised extension "${ext}". Rename to .json, .env, or .csv or pass a supported file.\n`
    )
    exit(1)
  }

  if (collected.size === 0) {
    stderr.write('No keys found in input. Nothing to write.\n')
    exit(1)
  }

  // De-duplicate each provider's keys.
  const canonicalOrder = Object.keys(ALIASES)
  const lines = []
  let totalKeys = 0
  for (const canon of canonicalOrder) {
    const keys = collected.get(canon)
    if (!keys || keys.length === 0) continue
    const unique = Array.from(new Set(keys))
    totalKeys += unique.length
    lines.push(`${envVarFor(canon)}=${unique.join(',')}`)
  }

  const output =
    '# Generated by scripts/import-keys.mjs — provider API keys for the LLM router.\n' +
    '# Upload to Vercel via: Project Settings → Environment Variables → "Import .env".\n' +
    '# NEVER commit this file — .gitignore should exclude .env* by default.\n' +
    lines.join('\n') +
    '\n'

  await writeFile(outputPath, output, 'utf8')

  stdout.write(
    `✓ Wrote ${lines.length} provider${lines.length === 1 ? '' : 's'} ` +
      `(${totalKeys} total keys) → ${outputPath}\n`
  )
  stdout.write('  Next: upload this file to Vercel via Import .env, then redeploy.\n')
}

main().catch((err) => {
  stderr.write(`Error: ${err.message}\n`)
  exit(1)
})
