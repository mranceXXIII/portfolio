import { useState } from 'react'
import { projects } from '../data/projects'

const TABS = [
  { id: 'original', label: 'Original Projects' },
  { id: 'other', label: 'Data & IT Work' },
  { id: 'fork', label: 'Forks & Community' },
  { id: 'all', label: 'All' },
]

function TechChip({ tech }) {
  return (
    <span className="tech-chip">
      {tech.icon ? (
        <img src={tech.icon} alt="" loading="lazy" />
      ) : (
        <span className="material-symbols-outlined" aria-hidden="true">
          {tech.material}
        </span>
      )}
      {tech.name}
    </span>
  )
}

export default function Projects() {
  const [tab, setTab] = useState('original')

  const visible = projects
    .filter((p) => (tab === 'all' ? true : p.origin === tab))
    .sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false))

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          Everything public on my GitHub — original builds first, then forks
          from the AI-agent ecosystem I work in.
        </p>
        <div className="project-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <article
              key={project.name}
              className={`project-card reveal ${project.featured ? 'featured' : ''}`}
            >
              <div className="card-head">
                <span className="material-symbols-outlined" aria-hidden="true">
                  {project.origin === 'fork' ? 'call_split' : 'deployed_code'}
                </span>
                <h3>{project.name}</h3>
              </div>
              <p className="card-desc">{project.description}</p>
              <div className="card-topics">
                {project.topics.map((topic) => (
                  <span className="topic-pill" key={topic}>
                    {topic}
                  </span>
                ))}
              </div>
              <div className="card-tech">
                {project.tech.map((tech) => (
                  <TechChip key={tech.name} tech={tech} />
                ))}
              </div>
              <div className="card-footer">
                {project.language ? (
                  <span className="lang">
                    <span className="dot" style={{ background: project.langColor }} />
                    {project.language}
                  </span>
                ) : (
                  <span className="lang">—</span>
                )}
                {project.url || project.homepage ? (
                  <a
                    className="card-link"
                    href={project.homepage ?? project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.homepage ? 'Visit site' : 'View on GitHub'} →
                  </a>
                ) : (
                  <span className="card-link muted">Internal project</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
