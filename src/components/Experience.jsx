import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">
          Where I've applied IT support, automation and data engineering in the
          real world.
        </p>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item reveal" key={job.role + job.period}>
              <div className="timeline-marker" />
              <div className="job-card">
                <div className="job-head">
                  <div>
                    <h3>
                      {job.role}
                      {job.subtitle ? (
                        <span className="job-subtitle"> ({job.subtitle})</span>
                      ) : null}
                    </h3>
                    <p className="job-company">
                      {job.company}
                      {job.location ? ` — ${job.location}` : ''}
                    </p>
                  </div>
                  <span className={`job-period ${job.current ? 'current' : ''}`}>
                    {job.period}
                  </span>
                </div>
                <ul className="job-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
