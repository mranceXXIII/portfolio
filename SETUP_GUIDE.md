# 🚀 Setup & Deployment Guide

Complete guide to get this portfolio live on **https://mranceXXIII.github.io/portfolio/**.

> Repo: https://github.com/mranceXXIII/portfolio.git

---

## 1. Prerequisites

| Requirement | Check with | Notes |
| --- | --- | --- |
| Node.js 18+ | `node --version` | This project was built with Node 26 |
| npm 9+ | `npm --version` | Ships with Node |
| Git | `git --version` | With GitHub credentials configured |

> **npm 11+ note:** if install warns about blocked install scripts (esbuild),
> approve it once: `npm install-scripts approve esbuild && npm rebuild esbuild`

---

## 2. Local setup

```bash
# clone (or use your existing local copy)
git clone https://github.com/mranceXXIII/portfolio.git
cd portfolio

npm install
npm run dev          # dev server → http://localhost:5173/portfolio/
```

Other commands:

```bash
npm run build        # production build → dist/
npm run preview      # serve the production build locally
```

---

## 3. Deploy to GitHub Pages

### Step 1 — Push the code

```bash
git add .
git commit -m "feat: portfolio site"
git remote add origin https://github.com/mranceXXIII/portfolio.git   # if not set
git push -u origin main
```

> ⚠️ The branch must be named **`main`** — the deploy workflow triggers on
> `main`. If your branch is `master`, rename it first:
> `git branch -M main`

### Step 2 — Enable GitHub Pages (one time only)

1. Open the repo on GitHub → **Settings**
2. In the left sidebar → **Pages**
3. Under **Build and deployment** → **Source** → select **GitHub Actions**
4. That's it — the included workflow at
   `.github/workflows/deploy.yml` builds and publishes automatically on
   every push to `main` (you can also trigger it manually from the
   **Actions** tab → *Deploy to GitHub Pages* → **Run workflow**).

### Step 3 — Verify

- Go to the **Actions** tab and wait for the *Deploy to GitHub Pages* run to
  turn green (~1–2 minutes).
- Visit **https://mranceXXIII.github.io/portfolio/**

---

## 4. Important configuration

### Base path

`vite.config.js` sets `base: '/portfolio/'` to match the repository name.

- Repo named `portfolio` → no changes needed.
- Repo named anything else → change `base` to `'/<repo-name>/'`, or remove it
  entirely (and use a `gh-pages`-style root domain).

### Custom domain (optional)

1. Add a `CNAME` file in `public/` containing your domain, e.g. `joshuarance.dev`
2. Update `base` in `vite.config.js` to `'/'`
3. Configure DNS per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 5. Updating content

Everything you may want to edit lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/profile.js` | Name, tagline, avatar, GitHub handle, icon URL helpers |
| `src/data/techStack.js` | Tech-stack categories, icons, hover colors & tooltips |
| `src/data/projects.js` | All project cards (originals + forks) |
| `src/index.css` | Theme — all colors are CSS variables at the top |

After editing, just commit and push — the workflow redeploys automatically.

### Adding your private projects later

1. Run `gh auth login` in a terminal (one-time)
2. Ask your AI assistant to list your private repos and add them to
   `src/data/projects.js` with an `origin: 'private'` field and a new tab
   in `src/components/Projects.jsx`
3. Commit + push — done

---

## 6. Troubleshooting

| Symptom | Fix |
| --- | --- |
| 404 on the deployed site | Check **Settings → Pages → Source = GitHub Actions**; confirm the Actions run succeeded |
| Blank page / broken assets | `base` in `vite.config.js` doesn't match the repo name |
| Assets load but look unstyled | Check the browser console for blocked CDN requests (fonts/icons come from jsDelivr & Google Fonts) |
| GitHub stats show cached values | You hit the GitHub API rate limit (60/hr unauthenticated) — the fallback data is shown; it recovers within the hour |
| Workflow doesn't run | Branch must be `main`; check **Settings → Actions → General → Actions permissions** is enabled |
