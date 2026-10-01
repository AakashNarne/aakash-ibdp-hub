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
 * Add a line to MAP whenever a vault note (or its .flashcards.json deck) is
 * published to the site.
 */
import { readFileSync, copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vault = resolve(repo, '../../01 - Subjects')

const MAP = [
  ['Economics HL/Economics HL — Demand — Notes.md', 'economics/ch3-notes.md'],
  ['Economics HL/Economics HL — Supply — Notes.md', 'economics/ch4-notes.md'],
  ['Economics HL/Economics HL — Competitive Market Equilibrium — Notes.md', 'economics/ch5-notes.md'],
  ['Economics HL/Economics HL — Critique of Maximizing Behaviour — Notes.md', 'economics/ch6-notes.md'],
  ['Design Technology SL/DT A1.1 — Ergonomics — Notes.md', 'design-tech/ch2-notes.md'],
  ['Design Technology SL/DT B1.1 — User-centred design — Notes.md', 'design-tech/ch3-notes.md'],
  ['Design Technology SL/DT C1.1 — Responsibility of the designer — Notes.md', 'design-tech/ch4-notes.md'],
  ['Design Technology SL/DT C1.2 — Inclusive design — Notes.md', 'design-tech/ch5-notes.md'],
  ['Maths AI HL/Maths AHL 2.10 — Log-Log and Semi-Log Graphs — Notes.md', 'maths/ch3-notes.md'],
  ['Maths AI HL/Maths SL 1.5 and AHL 1.9 — Logarithm Fundamentals — Notes.md', 'maths/ch4-notes.md'],
  ['Global Politics HL/GP Rights & Justice 1 — Contested Meanings — Notes.md', 'global-politics/ch6-notes.md'],
  ['Global Politics HL/GP Rights & Justice 2 — Interactions — Notes.md', 'global-politics/ch7-notes.md'],
  ['Global Politics HL/GP Rights & Justice 3 — Nature, Practice and Study — Notes.md', 'global-politics/ch8-notes.md'],
  ['Global Politics HL/GP Rights & Justice 4 — Debates — Notes.md', 'global-politics/ch9-notes.md'],
  // Flashcard decks (vault JSON, imported directly by src/content/index.ts)
  ['Economics HL/Economics HL — Demand — Notes.flashcards.json', 'economics/ch3-flashcards.json'],
  ['Global Politics HL/GP Rights & Justice 1 — Contested Meanings — Notes.flashcards.json', 'global-politics/ch6-flashcards.json'],
  ['Economics HL/Economics HL — Supply — Notes.flashcards.json', 'economics/ch4-flashcards.json'],
  ['Economics HL/Economics HL — Competitive Market Equilibrium — Notes.flashcards.json', 'economics/ch5-flashcards.json'],
  ['Economics HL/Economics HL — Critique of Maximizing Behaviour — Notes.flashcards.json', 'economics/ch6-flashcards.json'],
  ['Design Technology SL/DT B1.1 — User-centred design — Notes.flashcards.json', 'design-tech/ch3-flashcards.json'],
  ['Design Technology SL/DT C1.1 — Responsibility of the designer — Notes.flashcards.json', 'design-tech/ch4-flashcards.json'],
  ['Design Technology SL/DT C1.2 — Inclusive design — Notes.flashcards.json', 'design-tech/ch5-flashcards.json'],
  ['Maths AI HL/Maths SL 1.5 and AHL 1.9 — Logarithm Fundamentals — Notes.flashcards.json', 'maths/ch4-flashcards.json'],
  ['Global Politics HL/GP Rights & Justice 2 — Interactions — Notes.flashcards.json', 'global-politics/ch7-flashcards.json'],
  ['Global Politics HL/GP Rights & Justice 3 — Nature, Practice and Study — Notes.flashcards.json', 'global-politics/ch8-flashcards.json'],
  ['Global Politics HL/GP Rights & Justice 4 — Debates — Notes.flashcards.json', 'global-politics/ch9-flashcards.json'],
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
