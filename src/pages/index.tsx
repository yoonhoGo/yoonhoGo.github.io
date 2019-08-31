import React from "react"

import "../static/mystyles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "./index/about"
import Projects from "./index/projects"
import Experience from "./index/experience"
import Contact from "./index/contact"
import AwardsAndCertificate from "./index/awardsAndCertificate";
import Presentation from "./index/presentation";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Projects />
    <Presentation />
    <Experience />
    <AwardsAndCertificate />
    <Contact />
  </Layout>
)

export default IndexPage
