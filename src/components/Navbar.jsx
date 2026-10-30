import { profile } from '../data/profile'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="nav-logo">
          JR<span>.</span>XXIII
        </a>
        <ul className="nav-links">
          <li><a href="#stats">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#credentials">Credentials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a
          className="nav-cta"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.simpleicons.org/github/ffffff"
            alt="GitHub"
            width="16"
            height="16"
          />
          GitHub
        </a>
      </div>
    </nav>
  )
}
