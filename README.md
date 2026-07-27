# https://tnzl.github.io

Personal site for **Tanzeel Ur Rahman** — Astro static site deployed to GitHub Pages.

## Pages

- `/` — Landing (intro, circular portrait, GitHub / LinkedIn / email)
- `/articles` — Markdown articles
- `/projects` — Project write-ups
- `/photography` — Image gallery

Site mark: T-Rex logo in the header (links home).

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

1. Create a repo named `tnzl.github.io` under your GitHub account (or push this project there).
2. Push the `main` branch.
3. Repo **Settings → Pages → Build and deployment**: source **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on each push to `main`.

Site URL: `https://tnzl.github.io`

## Replace demo content

| What | Where |
|------|--------|
| Portrait | `public/portrait.jpg` (your photo). Replace anytime with a new square-ish JPEG. |
| Articles | `src/content/articles/*.md` |
| Projects | `src/content/projects/*.md` |
| Photos | `public/photography/*.jpg` + list in `src/data/site.ts` |
| Bio / links | `src/data/site.ts` |

Frontmatter fields are defined in `src/content.config.ts`.
