import { certifications, education } from '../data/resume'
import { DEVICON, SIMPLE } from '../data/profile'

const ICONS = {
  azure: { url: DEVICON('azure'), color: '#0078d4' },
  snowflake: { url: SIMPLE('snowflake', '29b5e8'), color: '#29b5e8' },
  claude: { url: SIMPLE('claude', 'd97757'), color: '#d97757' },
}

export default function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="container">
        <h2 className="section-title">Certifications & Education</h2>
        <p className="section-sub">
          Formal credentials backing the hands-on work.
        </p>
        <div className="creds-grid">
          <div>
            <h3 className="creds-heading">Certifications</h3>
            <div className="cert-list reveal">
              {certifications.map((cert) => {
                const icon = cert.icon ? ICONS[cert.icon] : null
                return (
                  <div className="cert-card" key={cert.name}>
                    {icon ? (
                      <img src={icon.url} alt="" loading="lazy" />
                    ) : (
                      <span
                        className="material-symbols-outlined"
                        style={{ color: 'var(--accent)' }}
                        aria-hidden="true"
                      >
                        {cert.material}
                      </span>
                    )}
                    <span>{cert.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className="creds-heading">Education</h3>
            <div className="edu-card reveal">
              <span className="material-symbols-outlined edu-icon" aria-hidden="true">
                school
              </span>
              <h4>{education.degree}</h4>
              <p className="edu-school">
                {education.school} · {education.period}
              </p>
              <p className="edu-distinction">🎓 {education.distinction}</p>
              <div className="card-topics">
                {education.coursework.map((c) => (
                  <span className="topic-pill" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
