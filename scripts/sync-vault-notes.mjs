#!/usr/bin/env node
/**
 * Keeps site copies of vault notes byte-identical to the Obsidian originals.
 *
 * The repo lives inside the vault at `<vault>/_Study Site/ibdp-hub`, so the
 * vault's subject folders are two levels up. Vercel never runs this (it has
 * no vault) — run it locally before committing:
 *
 *   npm run notes:check   # exit 1 and list any note that differs
 *   npm run notes:sync    # copy vault -> site for every mapped note
 *
 * Add a line to MAP whenever a vault note is published to the site.
 */
import { readFileSync, copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vault = resolve(repo, '../../01 - Subjects')

const MAP = [
  ['Economics HL/Economics HL — Demand — Notes.md', 'economics/ch3-notes.md'],
  ['Design Technology SL/DT A1.1 — Ergonomics — Notes.md', 'design-tech/ch2-notes.md'],
  ['Maths AI HL/Maths AHL 2.10 — Log-Log and Semi-Log Graphs — Notes.md', 'maths/ch3-notes.md'],
  ['Global Politics HL/GP Rights & Justice 1 — Contested Meanings — Notes.md', 'global-politics/ch6-notes.md'],
]

const sync = process.argv.includes('--sync')
let drift = 0
for (const [v, s] of MAP) {
  const from = resolve(vault, v)
  const to = resolve(repo, 'src/content', s)
  if (!existsSync(from)) { console.error(`missing in vault: ${v}`); drift++; continue }
  const same = existsSync(to) && readFileSync(from).equals(readFileSync(to))
  if (same) { console.log(`ok       ${s}`); continue }
  if (sync) { copyFileSync(from, to); console.log(`synced   ${s}`) }
  else { console.error(`DIFFERS  ${s}  <-  ${v}`); drift++ }
}
if (drift) process.exit(1)
