import { techCategories } from '../data/techStack'

function TechTile({ item, ...rest }) {
  return (
    <div
      className="tech-item"
      data-tooltip={`${item.name} — ${item.blurb}`}
      style={{ '--glow': item.color }}
      {...rest}
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
  )
}

/**
 * Tech stack rows rendered as infinite right-to-left marquees.
 * Hovering a row pauses the drift; individual icons still lift, glow
 * in their brand color and show a tooltip.
 */
export default function TechStack() {
  return (
    <section className="section" id="tech">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub">
          The tools I use across IT, automation, data engineering and
          development — drifting right to left, hover to pause and inspect any
          icon.
        </p>
        <div className="tech-grid reveal">
          {techCategories.map((group) => {
            const duration = Math.max(18, group.items.length * 3.2)
            return (
              <div className="tech-category" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tech-marquee">
                  <div
                    className="tech-track"
                    style={{ animationDuration: `${duration}s` }}
                  >
                    {group.items.map((item) => (
                      <TechTile item={item} key={`${group.category}-${item.name}`} />
                    ))}
                    {/* seamless-loop duplicates (hidden from AT) */}
                    {group.items.map((item) => (
                      <TechTile
                        item={item}
                        key={`${group.category}-${item.name}-dup`}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

