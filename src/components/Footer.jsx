import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <h2>Let's build something.</h2>
        <p>
          I'm open to freelance and full-time work on full-stack apps, Power BI
          solutions, and AI-agent tooling. The fastest way to reach me is via
          GitHub.
        </p>
        <a
          className="icon-link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn.simpleicons.org/github/0f172a" alt="GitHub" />
          github.com/{profile.handle}
        </a>
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
