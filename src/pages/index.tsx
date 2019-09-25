import React from "react"

import "../static/mystyles.scss"
import "animate.css"

import Layout from "../components/index/layout"
import SEO from "../components/seo"

import About from "../components/index/about"
import Projects from "../components/index/projects"
import Experience from "../components/index/experience"
import Contact from "../components/index/contact"
import AwardsAndCertificate from "../components/index/awardsAndCertificate"
import Presentation from "../components/index/presentation"
import backgroundImage from "../images/cool-background.png"
import ExtracurricularActivities from "../components/index/extracurricularActivities"

const IndexPage = () => {
  return (
    <Layout
      menu={[
        { tagType: "a", to: "#about", name: "About" },
        { tagType: "a", to: "#projects", name: "Projects" },
        { tagType: "a", to: "#presentations", name: "Presentations" },
        { tagType: "a", to: "#experience", name: "WorkExperience" },
        {
          tagType: "a",
          to: "#extracurricularActivities",
          name: "ExtracurricularActivities",
        },
        {
          tagType: "a",
          to: "#awardsAndCertificate",
          name: "AwardsAndCertificate",
        },
        { tagType: "a", to: "#contact", name: "Contact" },
      ]}
    >
      <SEO title="Home" />
      <div
        className="hero is-medium"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-body">
          <div className="container has-text-centered has-text-white">
            <span className="title is-1 has-text-white animated bounce">
              Welcome.
              <br />
              I'm 윤호
            </span>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Presentation />
      <Experience />
      <ExtracurricularActivities />
      <AwardsAndCertificate />
      <Contact />
    </Layout>
  )
}

export default IndexPage
