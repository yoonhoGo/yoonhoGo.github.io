import React from "react"

import "../static/mystyles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "./index/about"
import Projects from "./index/projects"
import Experience from "./index/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Projects />
    <Experience />
  </Layout>
)

export default IndexPage
