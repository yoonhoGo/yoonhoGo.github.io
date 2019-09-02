import React from "react"
import Img, { FluidObject } from "gatsby-image"
import styled from "styled-components"

import "../static/mystyles.scss"
import "animate.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "./index/about"
import Projects from "./index/projects"
import Experience from "./index/experience"
import Contact from "./index/contact"
import AwardsAndCertificate from "./index/awardsAndCertificate"
import Presentation from "./index/presentation"
import { useStaticQuery, graphql } from "gatsby"
import { File, ImageSharp } from "../graphqlTypes"
import backgroundImage from "../images/cool-background.png"

const IndexPage = () => {
  const ImageData: { backgroundImage: File } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "cool-background.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageSharp = ImageData.backgroundImage.childImageSharp as ImageSharp
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Img className="hero is-middle" fluid={imageSharp.fluid as FluidObject} /> */}
      <div
        className="hero is-medium"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-body">
          <div className="container has-text-centered has-text-white">
            <strong className="is-size-1 has-text-white animated bounce">
              Welcome.
              <br />
              I'm 윤호
            </strong>
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
