import { techCategories } from '../data/techStack'

/**
 * Tech stack grid with the requested hover effect:
 * icon tiles lift + scale, glow in the technology's brand color,
 * and reveal a tooltip with a short description.
 */
export default function TechStack() {
  return (
    <section className="section" id="tech">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub">
          The tools I reach for daily — hover any icon to see it in action.
        </p>
        <div className="tech-grid reveal">
          {techCategories.map((group) => (
            <div className="tech-category" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tech-row">
                {group.items.map((item) => (
                  <div
                    className="tech-item"
                    key={item.name}
                    data-tooltip={`${item.name} — ${item.blurb}`}
                    style={{ '--glow': item.color }}
                  >
                    {item.type === 'image' ? (
                      <img src={item.url} alt={item.name} loading="lazy" />
                    ) : (
                      <span
                        className="material-symbols-outlined"
                        style={{ color: item.color }}
                        aria-hidden="true"
                      >
                        {item.text}
                      </span>
                    )}
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
