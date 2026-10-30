import { profile } from '../data/profile'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <img className="hero-avatar" src={profile.avatar} alt={`${profile.name} avatar`} />
        {profile.hireable && (
          <div className="hero-badge">
            <span className="dot" />
            Open to work
          </div>
        )}
        <h1>
          Hi, I'm <em>{profile.name}</em>
        </h1>
        <p className="title">{profile.title}</p>
        <p className="hero-roles">
          {profile.roles.join(' · ')}
        </p>
        <p className="hero-location">
          <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
          {profile.location}
        </p>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.simpleicons.org/github/0f172a"
              alt="GitHub"
              width="18"
              height="18"
            />
            github.com/{profile.handle}
          </a>
        </div>
      </div>
    </header>
  )
}
