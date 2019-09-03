import React from "react"

import "../static/mystyles.scss"
import "animate.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/index/about"
import Projects from "../components/index/projects"
import Experience from "../components/index/experience"
import Contact from "../components/index/contact"
import AwardsAndCertificate from "../components/index/awardsAndCertificate"
import Presentation from "../components/index/presentation"
import backgroundImage from "../images/cool-background.png"

const IndexPage = () => {
  return (
    <Layout>
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
      <AwardsAndCertificate />
      <Contact />
    </Layout>
  )
}

export default IndexPage
