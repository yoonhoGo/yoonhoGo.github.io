import React from "react"

import "../static/mystyles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "./index/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section">
      <About id="about" />
      {/* <Projects /> */}
    </section>
  </Layout>
)

export default IndexPage
