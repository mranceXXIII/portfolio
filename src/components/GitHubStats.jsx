import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

/**
 * Live GitHub stats from the public API with a graceful static fallback
 * if the request is rate-limited or offline.
 */
const FALLBACK = {
  public_repos: 17,
  followers: 4,
  following: 3,
  memberSince: profile.memberSince,
}

export default function GitHubStats() {
  const [stats, setStats] = useState(FALLBACK)
  const [live, setLive] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('https://api.github.com/users/mranceXXIII')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          memberSince: profile.memberSince,
        })
        setLive(true)
      })
      .catch(() => {
        /* keep fallback values */
      })
    return () => {
      cancelled = true
    }
  }, [])

  const cards = [
    { value: stats.public_repos, label: 'Public Repositories' },
    { value: stats.followers, label: 'Followers' },
    { value: stats.following, label: 'Following' },
    { value: stats.memberSince, label: 'On GitHub since' },
  ]

  return (
    <section className="section" id="stats">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-sub">
          Full-stack and AI-agent developer shipping real tools — from Power BI
          plugins for AI agents to Express + Prisma backends. {live ? 'Live' : 'Cached'}{' '}
          numbers from GitHub:
        </p>
        <div className="stats-grid reveal">
          {cards.map((card) => (
            <div className="stat-card" key={card.label}>
              <div className="stat-value">{card.value}</div>
              <div className="stat-label">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
