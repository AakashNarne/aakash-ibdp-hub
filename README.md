# Aakash IBDP Hub

A personal study hub for Aakash's IB Diploma Programme. Six subjects, one live site, grows as you learn.

**Features**
- Clean, distraction-free notes rendered from Markdown
- Flip-card flashcards (Q on front, A on back — tap or press Space to flip; ← → to navigate)
- Per-section checkboxes with per-chapter and per-subject % progress bars
- Progress saved in the browser (localStorage) — persists between sessions on the same device
- Dark mode toggle
- Fully responsive — works on phone, tablet, laptop

Currently loaded: **Economics HL — Chapter 1: Introduction to Economics** (Ellie Tragakes, 3rd ed.). Other subjects are placeholders and will fill in as chapters are added.

---

## Running locally

Requires Node 18 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # test the production build locally
```

---

## Deploying to Vercel (recommended — 5 minutes)

1. **Push this folder to a GitHub repo.** Make a new repo (e.g. `aakash-ibdp-hub`) — can be private. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/aakash-ibdp-hub.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub.

3. Click **"Add New Project"** → select the repo → **Deploy**.
   Vercel auto-detects Vite. Leave every setting on default.

4. Done. Vercel gives you a URL like `aakash-ibdp-hub.vercel.app`. Every future push to `main` auto-deploys.

**Optional:** In Vercel settings, add a custom domain (e.g. `study.aakash.family` if you own the domain).

### Alternative: GitHub Pages

Slightly more setup. In `package.json`, add:
```json
"homepage": "https://YOUR-USERNAME.github.io/aakash-ibdp-hub"
```
And in `vite.config.ts`, set `base: '/aakash-ibdp-hub/'`. Then run `npm run build`, push the `dist` folder to a `gh-pages` branch, and enable Pages in repo settings. Vercel is simpler.

---

## Adding a new chapter

The whole point of this site is that it grows with Aakash. When a new chapter finishes at school or tuition, adding it is 3 files and 5 minutes.

**Step 1.** Create the notes markdown file, e.g. `src/content/economics/ch2-notes.md`. Write normal markdown. Use `##` for sections (this drives the progress checkboxes).

**Step 2.** Create the flashcards file, e.g. `src/content/economics/ch2-flashcards.ts`:

```ts
import type { Flashcard } from '../types'

export const ch2Flashcards: Flashcard[] = [
  { q: 'What is demand?', a: 'The quantity buyers are willing and able to purchase at each price...' },
  { q: 'What is the law of demand?', a: 'As price rises, quantity demanded falls, ceteris paribus.', hint: 'Downward sloping curve' },
  // add as many as you like
]
```

**Step 3.** Register the chapter in `src/content/index.ts`. Add two imports at the top:

```ts
import { ch2Flashcards } from './economics/ch2-flashcards'
import ch2Notes from './economics/ch2-notes.md?raw'
```

Then add a new object to the Economics `chapters: []` array:

```ts
{
  id: 'ch2',
  title: 'Chapter 2: Competitive Markets — Demand and Supply',
  subtitle: 'How markets set prices',
  notes: ch2Notes,
  sections: [
    'Section 2.1 — Demand',
    'Section 2.2 — Supply',
    'Section 2.3 — Market Equilibrium',
    // list one entry per H2 heading in your notes
  ],
  flashcards: ch2Flashcards,
  updated: '2026-08-15',
},
```

**Step 4.** Commit and push. Vercel auto-deploys within a minute.

```bash
git add .
git commit -m "Add Economics Ch2"
git push
```

That's it. New chapter live at the same URL.

### Adding a new subject

All six subjects are already registered. If you ever need a new one (extended essay, ToK, etc.), add another entry to the `subjects` array in `src/content/index.ts` following the same shape.

---

## File map

```
src/
├── content/
│   ├── index.ts              ← Registry: subjects + chapters. Edit this to add chapters.
│   ├── types.ts              ← Type definitions (don't need to touch)
│   └── economics/
│       ├── ch1-notes.md      ← Markdown notes
│       └── ch1-flashcards.ts ← Q&A pairs
├── components/               ← Reusable UI pieces (Layout, Flashcards, ProgressBar, Icon)
├── pages/                    ← Route-level pages (Home, SubjectPage, ChapterPage)
├── hooks/
│   └── useProgress.ts        ← localStorage-backed progress tracking
├── styles/
│   └── globals.css           ← Tailwind + typography styles for notes
├── App.tsx                   ← Routes
└── main.tsx                  ← Entry point
```

---

## Troubleshooting

- **`npm install` errors** → Make sure you're on Node 18+. Check with `node -v`.
- **Progress got reset** → Progress is stored per-device in the browser. Clearing site data resets it. If Aakash uses multiple devices, each has its own progress.
- **Markdown formatting looks off** → Preview the `.md` file in Obsidian first. GFM (GitHub-flavoured markdown) tables, headers, lists, code blocks, and blockquotes all render. Emoji work. Images: place in `public/` and reference `/filename.png` in markdown.
- **Vercel build fails** → Check the deploy log. Most common cause: a typo in `src/content/index.ts` after adding a chapter (missing comma, wrong import path). Fix locally with `npm run build`, then push.

---

Built August 2026.
