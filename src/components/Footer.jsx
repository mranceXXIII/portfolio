import { useState } from 'react'
import { profile } from '../data/profile'

/**
 * Brand icon that falls back to a Google Material Symbol if the CDN
 * asset ever disappears (Simple Icons has removed several brand logos,
 * e.g. LinkedIn, OpenAI, Canva).
 */
function BrandIcon({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <span className="material-symbols-outlined brand-fallback" aria-hidden="true">
        {fallback}
      </span>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  )
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <h2>Let's build something.</h2>
        <p>
          Open to opportunities in IT support, automation, data engineering and
          analytics. Reach me on any of these:
        </p>
        <div className="contact-row">
          <a className="icon-link" href={`mailto:${profile.email}`}>
            <span className="material-symbols-outlined" aria-hidden="true">mail</span>
            Email
          </a>
          <a className="icon-link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            {profile.phone}
          </a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <BrandIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              fallback="work"
            />
            LinkedIn
          </a>
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer">
            <BrandIcon
              src="https://cdn.simpleicons.org/github/0f172a"
              alt="GitHub"
              fallback="code"
            />
            GitHub
          </a>
        </div>
        <div className="footer-meta">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React + Vite · Deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  )
}
