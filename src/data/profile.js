// Icon sources (all verified working):
//  - DevIcon via jsDelivr:      https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<tech>/<tech>-<variant>.svg
//  - Simple Icons via cdn:      https://cdn.simpleicons.org/<slug>/<color>
//  - Google Material Symbols:   used where a brand icon is no longer hosted
//                               (Power BI, OpenAI, Canva, Excel) — rendered via CSS class.
export const DEVICON = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`

export const SIMPLE = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`

export const profile = {
  name: 'Mark Joshua G. Rance',
  handle: 'mranceXXIII',
  github: 'https://github.com/mranceXXIII',
  avatar: 'https://avatars.githubusercontent.com/u/259816577?v=4',
  title: 'IT Support · Automation Specialist · Data Engineer',
  tagline:
    'IT professional with nearly two years across IT support & systems administration, business process automation, and data engineering & analytics — building AI agent workflows, ETL/ELT + CDC pipelines, and front-end tools that cut manual work.',
  hireable: true,
  memberSince: 'February 2026',
  location: 'Makati City, Metro Manila, Philippines',
  email: 'rancegmarkjoshua23work@gmail.com',
  phone: '0936 810 4846',
  linkedin: 'https://linkedin.com/in/markjoshuarance23',
  roles: [
    'IT Support Specialist',
    'Automation Specialist',
    'Data Engineer',
    'Data Analyst',
    'Front-End Developer',
    'AI-Assisted Developer',
  ],
}

