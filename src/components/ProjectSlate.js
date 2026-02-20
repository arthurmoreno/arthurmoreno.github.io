import * as React from "react"
import * as styles from "./ProjectSlate.module.css"
import projects from "../../content/projects/projects"

const ProjectSlate = () => {
  const [active, setActive] = React.useState(0)
  const sliderRef = React.useRef(null)

  React.useEffect(() => {
    if (!sliderRef.current) return
    const slide = sliderRef.current.children[active]
    if (slide && slide.scrollIntoView) {
      slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }, [active])

  return (
    <div>
      <div className={styles.controls}>
        <button
          onClick={() => setActive(i => Math.max(0, i - 1))}
          disabled={active === 0}
          aria-label="Previous project"
        >
          ◀
        </button>
        <div className={styles.counter} aria-hidden>
          {active + 1}/{projects.length}
        </div>
        <button
          onClick={() => setActive(i => Math.min(projects.length - 1, i + 1))}
          disabled={active === projects.length - 1}
          aria-label="Next project"
        >
          ▶
        </button>
      </div>

      <div className={styles.viewport}>
        <div className={styles.slider} ref={sliderRef}>
          {projects.map((p, idx) => (
            <section
              key={p.id}
              className={styles.slate}
              role="article"
              aria-label={p.title}
              data-active={idx === active}
            >
              <div
                className={styles.thumb}
                style={{ backgroundImage: `url(${p.thumbnail})` }}
              />
              <div className={styles.content}>
                <h2>{p.title}</h2>
                <p className={styles.engineTag}>{p.engine} · {p.genre}</p>
                <p className={styles.desc}>{p.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSlate
