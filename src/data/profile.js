// Icon sources (all verified working):
//  - DevIcon via jsDelivr:      https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<tech>/<tech>-original.svg
//  - Simple Icons via cdn:      https://cdn.simpleicons.org/<slug>/<color>
//  - Google Material Symbols:   used where a brand icon is no longer hosted
//                               (Power BI, OpenAI, Canva) — rendered via CSS class.
export const DEVICON = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`

export const SIMPLE = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`

export const profile = {
  name: 'Joshua Rance XXIII',
  handle: 'mranceXXIII',
  github: 'https://github.com/mranceXXIII',
  avatar: 'https://avatars.githubusercontent.com/u/259816577?v=4',
  title: 'Full-Stack & AI Agent Developer',
  tagline:
    'I build full-stack web systems, Power BI tooling for AI agents, and LLM-powered developer workflows — from Python assistants to Express + Prisma backends.',
  hireable: true,
  memberSince: 'February 2026',
}
