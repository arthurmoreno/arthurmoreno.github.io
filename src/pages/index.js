import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ProjectSlate from "../components/ProjectSlate"

const links = [
  {
    text: "Aetherion Documentation",
    url: "https://arthurmoreno.github.io/aetherion-docs/",
    description: "Documentation for the Aetherion engine and tools.",
  },
  {
    text: "Life Simulation Project",
    url: "https://arthurmoreno.github.io/life-sim-website/",
    description: "Interactive life simulation project — demos, source, and notes.",
  },
  {
    text: "Itch.io",
    url: "https://arthurmoreno.itch.io/",
    description: "My itch.io page with playable demos and game projects.",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={`${styles.textCenter} ${styles.hero}`}>
      <h1 className={styles.heroHeading}>
        Hi all, I'm Arthur Moreno <span role="img" aria-label="wave">👋</span>
      </h1>
      <p className={styles.intro} style={{ marginTop: `var(--space-3)` }}>
        A passionate Full Stack Software Developer 🚀 experienced building Web
        and Mobile applications with JavaScript / React / Node.js / React
        Native and other modern libraries and frameworks.
      </p>

      <div className={styles.heroButtons}>
        <a href="mailto:arthur@yourdomain.com" className={styles.actionButton}>
          CONTACT ME
        </a>
        <a href="/resume.pdf" className={`${styles.actionButton} ${styles.secondaryButton}`}>
          DOWNLOAD MY RESUME
        </a>
      </div>

      <div className={styles.socialLinks} aria-hidden>
        <a href="https://github.com/arthurmoreno" style={{ margin: `0 8px`, color: `inherit` }}>GitHub</a>
        <a href="#" style={{ margin: `0 8px`, color: `inherit` }}>LinkedIn</a>
        <a href="#" style={{ margin: `0 8px`, color: `inherit` }}>Twitter</a>
      </div>
    </div>



    <section className={styles.portfolioIntro} aria-labelledby="portfolio-intro">
      <h3 id="portfolio-intro">Selected Work & Approach</h3>
      <p>
        Below are selected projects that showcase my approach to building
        thoughtful, accessible, and performant applications. Each entry
        highlights the problem solved, the technologies I used, and a short
        demo or link to the source code.
      </p>
    </section>
    <ProjectSlate />

    {/* Experiences section */}
    {/** This renders a grid of experience cards similar to the design requested */}
    <section className={styles.experiencesSection} aria-labelledby="experiences">
      <h2 id="experiences" className={styles.experiencesHeading}>Experiences</h2>
      <div className={styles.experiencesGrid}>
        <article className={styles.expCard}>
          <div className={styles.expTop}>
            <div className={`${styles.expLogo} ${styles["logo-blue"]}`}>F</div>
          </div>
          <div className={styles.expBody}>
            <h3 className={styles.expCompany}>Facebook</h3>
            <div className={styles.expRole}>Software Engineer</div>
            <div className={styles.expDates}>June 2018 – Present</div>
            <p className={styles.expDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className={styles.expList}>
              <li>Worked on large-scale front-end features and UX improvements</li>
              <li>Designed performant components and improved accessibility</li>
            </ul>
          </div>
        </article>

        <article className={styles.expCard}>
          <div className={styles.expTop}>
            <div className={`${styles.expLogo} ${styles["logo-red"]}`}>Q</div>
          </div>
          <div className={styles.expBody}>
            <h3 className={styles.expCompany}>Quora</h3>
            <div className={styles.expRole}>Front-End Developer</div>
            <div className={styles.expDates}>May 2017 – May 2018</div>
            <p className={styles.expDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className={styles.expList}>
              <li>Built interactive UIs and performance improvements</li>
              <li>Collaborated closely with design and backend teams</li>
            </ul>
          </div>
        </article>

        <article className={styles.expCard}>
          <div className={styles.expTop}>
            <div className={`${styles.expLogo} ${styles["logo-pink"]}`}>A</div>
          </div>
          <div className={styles.expBody}>
            <h3 className={styles.expCompany}>Airbnb</h3>
            <div className={styles.expRole}>Software Engineer Intern</div>
            <div className={styles.expDates}>Jan 2015 – Sep 2015</div>
            <p className={styles.expDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className={styles.expList}>
              <li>Implemented features for core web experiences</li>
              <li>Improved test coverage for shared components</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Arthur Moreno" />

export default IndexPage
