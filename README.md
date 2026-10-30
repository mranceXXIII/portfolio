# Portfolio — Joshua Rance XXIII

Personal developer portfolio for [github.com/mranceXXIII](https://github.com/mranceXXIII).
Built with **React + Vite**, deployed on **GitHub Pages**.

## Features

- Light, minimal theme with Inter typography
- **Tech-stack icon grid with hover effects** — icons lift, glow in their brand
  color, and show a tooltip (DevIcon + Simple Icons CDNs, Google Material Symbols
  for brands no longer hosted)
- Live GitHub stats (public API, graceful fallback when rate-limited)
- Projects split into **Original** and **Forks & Community** tabs with tech chips
- Scroll-reveal animations, fully responsive

## Stack

| Layer     | Tech                          |
| --------- | ----------------------------- |
| Framework | React 18 + Vite 6             |
| Styling   | Hand-rolled CSS design system |
| Fonts     | Google Fonts (Inter, JetBrains Mono, Material Symbols) |
| Icons     | DevIcon, Simple Icons, Material Symbols |
| Hosting   | GitHub Pages via GitHub Actions |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploying

1. Create a GitHub repository named **`portfolio`** (the `base` in
   `vite.config.js` assumes this name — change it if you name the repo
   differently).
2. Push this folder to `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git remote add origin https://github.com/mranceXXIII/portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
   on every push to `main`. Site will be live at
   `https://mranceXXIII.github.io/portfolio/`.

## Customizing

- **Profile / tagline:** `src/data/profile.js`
- **Tech stack & icons:** `src/data/techStack.js`
- **Projects:** `src/data/projects.js`
- **Theme:** CSS variables at the top of `src/index.css`
