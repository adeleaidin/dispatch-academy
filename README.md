# Kyrgyz Dispatch Academy — Free Course (Next.js + Tailwind)

A minimal, serious-looking site to host your 10 English presentations for dispatcher training.

## Quick Start

1) Install dependencies:
```bash
npm install
```
2) Run locally:
```bash
npm run dev
```
3) Add your PDFs to:
```
public/presentations/
```
Make sure filenames match the `modules` array in `app/page.js`.

## Deploy (Vercel)

- Create a new GitHub repo and push this folder (or upload via GitHub UI).
- In Vercel, click **Add New Project** → **Import Git Repository** → select your repo → Framework: *Next.js* → Deploy.
- After deploy, add your custom domain if needed.

## Customize
- Texts and numbers: edit `app/page.js`.
- Styling: Tailwind is ready in `app/globals.css`.
- SEO: update `app/layout.js` `metadata`.

## Notes
- Icons: `lucide-react`
- Animations: `framer-motion`
- All content is yours; the placeholder stats are illustrative.
