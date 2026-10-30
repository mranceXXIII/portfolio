import { DEVICON, SIMPLE } from './profile'

const materialIcon = (text, color) => ({ type: 'material', text, color })
const imageIcon = (url, color) => ({ type: 'image', url, color })

/**
 * Tech stack from the resume skill matrix. Each entry: name, icon (image or
 * material symbol), color (hover glow), blurb (tooltip).
 * Rendered as infinite right-to-left marquees that pause on hover.
 */
export const techCategories = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', ...imageIcon(DEVICON('python'), '#3776ab'), blurb: 'Automation · analytics · pipelines' },
      { name: 'SQL', ...materialIcon('database', '#336791'), blurb: 'Data engineering & warehousing' },
      { name: 'PySpark', ...imageIcon(SIMPLE('apachespark', 'e25a1c'), '#e25a1c'), blurb: 'Spark transformations at scale' },
      { name: 'JavaScript', ...imageIcon(DEVICON('javascript'), '#f7df1e'), blurb: 'Full-stack web apps' },
      { name: 'TypeScript', ...imageIcon(DEVICON('typescript'), '#3178c6'), blurb: 'Typed agent workflows' },
      { name: 'PHP', ...imageIcon(DEVICON('php'), '#777bb4'), blurb: 'Web management systems' },
      { name: 'Java', ...imageIcon(DEVICON('java'), '#ea2d2e'), blurb: 'OOP & academic training' },
      { name: 'C++', ...imageIcon(DEVICON('cplusplus'), '#00599c'), blurb: 'Systems & algorithms' },
      { name: 'C', ...imageIcon(DEVICON('c'), '#555555'), blurb: 'Foundations' },
      { name: 'PowerShell', ...imageIcon(DEVICON('powershell'), '#5391fe'), blurb: 'IT automation & tooling' },
      { name: 'HTML5', ...imageIcon(DEVICON('html5'), '#e34f26'), blurb: 'Semantic markup' },
      { name: 'CSS3', ...imageIcon(DEVICON('css3'), '#1572b6'), blurb: 'Responsive layouts' },
      { name: 'Sass', ...imageIcon(DEVICON('sass'), '#cc6699'), blurb: 'Scalable styling' },
    ],
  },
  {
    category: 'Data Engineering & BI',
    items: [
      { name: 'Databricks', ...imageIcon(SIMPLE('databricks', 'ff3621'), '#ff3621'), blurb: 'Lakehouse · medallion ETL/ELT' },
      { name: 'MS Fabric', ...materialIcon('dataset', '#742774'), blurb: 'Lakehouse architecture POC' },
      { name: 'Snowflake', ...imageIcon(SIMPLE('snowflake', '29b5e8'), '#29b5e8'), blurb: 'Snowflake SQL' },
      { name: 'Power BI', ...materialIcon('insights', '#f2c811'), blurb: 'Dashboards & trend analysis' },
      { name: 'CDC Pipelines', ...materialIcon('sync_alt', '#0ea5e9'), blurb: 'Change Data Capture integration' },
      { name: 'Pandas', ...imageIcon(SIMPLE('pandas', '150458'), '#150458'), blurb: 'Data cleaning & preprocessing' },
      { name: 'NumPy', ...imageIcon(DEVICON('numpy'), '#013243'), blurb: 'Numerical pipelines' },
      { name: 'scikit-learn', ...imageIcon(SIMPLE('scikitlearn', 'f7931e'), '#f7931e'), blurb: 'Regression & clustering' },
      { name: 'Jupyter', ...imageIcon(DEVICON('jupyter'), '#f37726'), blurb: 'Analytics notebooks' },
      { name: 'PostgreSQL', ...imageIcon(DEVICON('postgresql'), '#4169e1'), blurb: 'Relational databases' },
      { name: 'MySQL', ...imageIcon(DEVICON('mysql'), '#00618a'), blurb: 'Academic & app databases' },
      { name: 'SQLite', ...imageIcon(DEVICON('sqlite'), '#0f80cc'), blurb: 'Lightweight embedded DB' },
      { name: 'Excel', ...materialIcon('table_chart', '#217346'), blurb: 'Power Query · pivots · dashboards' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'AI Agents', ...imageIcon(SIMPLE('claude', 'd97757'), '#d97757'), blurb: 'Daily ops: docs, email, scheduling, Jira' },
      { name: 'GitHub Copilot', ...imageIcon(SIMPLE('githubcopilot', '000000'), '#000000'), blurb: 'AI-assisted development' },
      { name: 'LangChain', ...imageIcon(SIMPLE('langchain', '1c3c3c'), '#1c3c3c'), blurb: 'LLM application chains' },
      { name: 'Hugging Face', ...imageIcon(SIMPLE('huggingface', 'ffd21e'), '#ffd21e'), blurb: 'Models & datasets' },
      { name: 'Ollama', ...imageIcon(SIMPLE('ollama', '000000'), '#000000'), blurb: 'Local LLM inference' },
      { name: 'Selenium', ...imageIcon(SIMPLE('selenium', '43b02a'), '#43b02a'), blurb: 'Browser automation & scraping' },
    ],
  },
  {
    category: 'Backend & Web',
    items: [
      { name: 'Node.js', ...imageIcon(DEVICON('nodejs'), '#5fa04e'), blurb: 'REST APIs & tooling' },
      { name: 'Express', ...imageIcon(DEVICON('express'), '#ffffff'), blurb: 'Backend framework' },
      { name: 'Prisma', ...imageIcon(DEVICON('prisma'), '#2d3748'), blurb: 'Type-safe ORM' },
      { name: 'Flask', ...imageIcon(DEVICON('flask'), '#ffffff'), blurb: 'Python web apps & GUIs' },
      { name: 'Django', ...imageIcon(DEVICON('django'), '#092e20'), blurb: 'Python full-stack' },
      { name: 'Bootstrap', ...imageIcon(DEVICON('bootstrap'), '#7952b3'), blurb: 'Responsive UI fast' },
      { name: 'React', ...imageIcon(DEVICON('react'), '#61dafb'), blurb: 'Component-driven UIs' },
      { name: 'Vite', ...imageIcon(DEVICON('vitejs'), '#646cff'), blurb: 'Lightning-fast builds' },
    ],
  },
  {
    category: 'IT, Cloud & Tools',
    items: [
      { name: 'Azure', ...imageIcon(DEVICON('azure'), '#0078d4'), blurb: 'AZ-900 certified fundamentals' },
      { name: 'Linux', ...imageIcon(DEVICON('linux'), '#fcc624'), blurb: 'Enterprise environment support' },
      { name: 'Windows', ...materialIcon('desktop_windows', '#0078d6'), blurb: 'Domain & endpoint administration' },
      { name: 'macOS', ...materialIcon('laptop_mac', '#555555'), blurb: 'Installation & maintenance' },
      { name: 'M365 Admin', ...materialIcon('apps', '#d83b01'), blurb: 'Users, access & configurations' },
      { name: 'HubSpot CRM', ...imageIcon(SIMPLE('hubspot', 'ff7a59'), '#ff7a59'), blurb: 'CRM admin & data QA' },
      { name: 'Jira', ...imageIcon(SIMPLE('jira', '0052cc'), '#0052cc'), blurb: 'Task & sprint management' },
      { name: 'Git', ...imageIcon(DEVICON('git'), '#f05032'), blurb: 'Version control' },
      { name: 'Figma', ...imageIcon(SIMPLE('figma', 'f24e1e'), '#f24e1e'), blurb: 'UI design & prototyping' },
    ],
  },
]

