/**
 * Link-graph smoke test.  Run with:  node scripts/smoke.mjs
 *
 * Boots Vite in SSR mode so the real TypeScript modules and ?raw markdown
 * imports execute, then asserts the graph, resolver, backlinks, search and
 * concept index, and server-renders every route.
 *
 * Worth running after editing notes: it will tell you if a [[link]] stopped
 * resolving or a chapter fell out of the graph.
 */
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const load = (p) => server.ssrLoadModule(p)
let fail = 0
const ok = (c, msg, extra='') => { console.log(`  ${c?'✓':'✗'} ${msg}${extra?'  '+extra:''}`); if(!c) fail++ }

console.log('\n── link graph ──')
const lg = await load('/src/lib/linkGraph.ts')
const stats = lg.graphStats()
ok(stats.chapters === 12, 'chapters indexed', String(stats.chapters))
ok(stats.links > 40, 'links in graph', String(stats.links))
ok(stats.connected === 12, 'every chapter connected', `${stats.connected}/12`)
ok(stats.orphans.length === 0, 'no orphans')
ok(stats.concepts > 20, 'concepts extracted', String(stats.concepts))

console.log('\n── resolution (the casing/dash cases from his real notes) ──')
for (const [t, from, want] of [
  ['chapter 2 — Power', 'global-politics', 'global-politics/ch2'],
  ['Chapter 3 — Sovereignty', 'global-politics', 'global-politics/ch3'],
  ['Chapter 1: Introduction to Economics', 'maths', 'economics/ch1'],
  ['Chapter 2: Demand and Supply', 'global-politics', 'economics/ch2'],
  ['Chapter 1: SA1 Focus — Unit 1 पहचान (Identity)', 'english', 'hindi/ch1'],
]) {
  const r = lg.resolveWikilink(t, from)
  ok(r.kind === 'chapter' && r.ref.key === want, `[[${t.slice(0,34)}]]`, r.kind==='chapter'?r.ref.key:r.kind)
}
const stub = lg.resolveWikilink('Chapter 9: Does Not Exist', 'economics')
ok(stub.kind === 'unresolved', 'unknown target → stub')

console.log('\n── backlinks ──')
const bl = lg.backlinksFor('economics/ch1')
ok(bl.length >= 3, 'economics/ch1 has inbound links', String(bl.length))
ok(bl.every(b => b.context.length > 0), 'every backlink carries context')
ok(!bl.some(b => b.context.includes('[[')), 'contexts have link syntax stripped')

console.log('\n── search ──')
const s1 = lg.search('sovereignty')
ok(s1.length > 0, 'search "sovereignty"', `${s1.length} hits, top: ${s1[0]?.ref.key}`)
const s2 = lg.search('opportunity cost')
ok(s2.length > 0, 'search "opportunity cost"', `${s2.length} hits, top: ${s2[0]?.ref.key}`)
ok(lg.search('a').length === 0, 'one-char query returns nothing')
ok(lg.search('zzzznotathing').length === 0, 'nonsense query returns nothing')

console.log('\n── concepts ──')
const cross = lg.conceptIndex().filter(c => c.subjectIds.length > 1)
ok(cross.length > 0, 'cross-subject concepts found', String(cross.length))
console.log('    e.g. ' + cross.slice(0,6).map(c=>c.term).join(' · '))
ok(lg.conceptIndex().some(c => c.definition), 'some concepts have definitions pulled from Exam-Ready blocks')

console.log('\n── wikilink parser ──')
const wl = await load('/src/lib/wikilink.ts')
const p = wl.extractWikilinks('see [[A|alias]] and [[B#Head]] and [[C]] but `[[notalink]]` counts too')
ok(p.length === 4, 'parses alias, heading and bare forms', JSON.stringify(p.map(x=>x.target)))
ok(p[0].alias === 'alias' && p[1].heading === 'Head', 'alias and heading captured')

console.log('\n── server-render every page ──')
const { MemoryRouter } = await load('/node_modules/react-router-dom/dist/index.js').catch(()=>import('react-router-dom'))
const App = (await load('/src/App.tsx')).default
for (const route of ['/', '/subject/global-politics', '/subject/global-politics/chapter/ch2', '/concepts', '/graph', '/nope']) {
  try {
    const html = renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)))
    ok(html.length > 400, `renders ${route}`, `${html.length}B`)
    if (route.includes('chapter')) {
      ok(html.includes('wikilink'), '  chapter page emits resolved wikilinks')
      ok(!html.includes('[['), '  no raw [[brackets]] left in output')
      ok(html.includes('Linked mentions') || html.includes('Links from here'), '  backlinks panel present')
    }
  } catch (e) { ok(false, `renders ${route}`, e.message.slice(0,90)) }
}

await server.close()
console.log(fail ? `\n${fail} FAILED\n` : '\nAll checks passed.\n')
process.exit(fail ? 1 : 0)
