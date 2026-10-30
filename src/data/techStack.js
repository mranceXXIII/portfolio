import { DEVICON, SIMPLE } from './profile'

const materialIcon = (text, color) => ({ type: 'material', text, color })
const imageIcon = (url, color) => ({ type: 'image', url, color })

/**
 * Each entry: name, category, icon (image or material symbol), color (hover glow),
 * level description shown in the tooltip.
 */
export const techCategories = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', ...imageIcon(DEVICON('python'), '#3776ab'), blurb: 'AI assistants & automation' },
      { name: 'TypeScript', ...imageIcon(DEVICON('typescript'), '#3178c6'), blurb: 'Typed agent workflows' },
      { name: 'JavaScript', ...imageIcon(DEVICON('javascript'), '#f7df1e'), blurb: 'Full-stack web apps' },
      { name: 'PHP', ...imageIcon(DEVICON('php'), '#777bb4'), blurb: 'Web management systems' },
      { name: 'PowerShell', ...imageIcon(DEVICON('powershell'), '#5391fe'), blurb: 'AI agent plugins & DevOps' },
      { name: 'HTML5', ...imageIcon(DEVICON('html5'), '#e34f26'), blurb: 'Semantic markup' },
      { name: 'CSS3', ...imageIcon(DEVICON('css3'), '#1572b6'), blurb: 'Responsive layouts' },
      { name: 'Sass', ...imageIcon(DEVICON('sass'), '#cc6699'), blurb: 'Scalable styling' },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { name: 'Node.js', ...imageIcon(DEVICON('nodejs'), '#5fa04e'), blurb: 'REST APIs & tooling' },
      { name: 'Express', ...imageIcon(DEVICON('express', 'original'), '#ffffff'), blurb: 'Backend framework' },
      { name: 'Prisma', ...imageIcon(DEVICON('prisma'), '#2d3748'), blurb: 'Type-safe ORM' },
      { name: 'PostgreSQL', ...imageIcon(DEVICON('postgresql'), '#4169e1'), blurb: 'Relational databases' },
      { name: 'Databricks', ...imageIcon(SIMPLE('databricks', 'ff3621'), '#ff3621'), blurb: 'Data engineering at scale' },
      { name: 'Power BI', ...materialIcon('insights', '#f2c811'), blurb: 'DAX · TMDL · Power Query' },
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'Claude', ...imageIcon(SIMPLE('claude', 'd97757'), '#d97757'), blurb: 'Agent harnesses & skills' },
      { name: 'GitHub Copilot', ...imageIcon(SIMPLE('githubcopilot', '000000'), '#000000'), blurb: 'AI pair programming' },
      { name: 'LangChain', ...imageIcon(SIMPLE('langchain', '1c3c3c'), '#1c3c3c'), blurb: 'LLM application chains' },
      { name: 'Hugging Face', ...imageIcon(SIMPLE('huggingface', 'ffd21e'), '#ffd21e'), blurb: 'Models & datasets' },
      { name: 'Ollama', ...imageIcon(SIMPLE('ollama', '000000'), '#000000'), blurb: 'Local LLM inference' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'React', ...imageIcon(DEVICON('react'), '#61dafb'), blurb: 'Component-driven UIs' },
      { name: 'Vite', ...imageIcon(DEVICON('vitejs'), '#646cff'), blurb: 'Lightning-fast builds' },
      { name: 'Git', ...imageIcon(DEVICON('git'), '#f05032'), blurb: 'Version control' },
      { name: 'Figma', ...imageIcon(SIMPLE('figma', 'f24e1e'), '#f24e1e'), blurb: 'UI design & prototyping' },
      { name: 'Canva', ...materialIcon('design_services', '#00c4cc'), blurb: 'Visual assets & branding' },
      { name: 'GitHub Pages', ...imageIcon(SIMPLE('github', '181717'), '#181717'), blurb: 'Static site deployment' },
    ],
  },
]
