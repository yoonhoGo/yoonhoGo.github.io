import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"
import About from "./index/_about.mdx"
import Projects from "./index/_projects.mdx"
import Presentations from "./index/_presentations.mdx"
import Expreriences from "./index/_experiences.mdx"
import ExtracurricularActivities from "./index/_extracurricular-activities.mdx"
import AwardsAndCertificate from "./index/_awards-certificate.mdx"

const features = [
  <About />,
  <Projects />,
  <Presentations />,
  <Expreriences />,
  <ExtracurricularActivities />,
  <AwardsAndCertificate />,
]

function Feature({ sections }) {
  return sections.map(section => (
    <section className={styles.feature}>
      <div className="container">{section}</div>
    </section>
  ))
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello. I'm Yoonho`}
      description="안녕하세요. 저는 윤호구요. 여기는 저의 소개 페이지입니다."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog/")}
            >
              Visit Blog
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Feature sections={features} />
      </main>
    </Layout>
  )
}

export default Home
