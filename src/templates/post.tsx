import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/blog/small-about"

export default function Template({ data }: any) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, wordCount } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="section">
        <div className="container is-tablet is-margin-center">
          <h1 className="title has-text-centered">{frontmatter.title}</h1>
          <h2 className="subtitle">
            <span>{frontmatter.date}</span>
            {" • "}
            <span>
              {frontmatter.language === "Korean"
                ? Math.ceil(wordCount.words / 265)
                : Math.ceil(wordCount.words / 500)}{" "}
              min read
            </span>
          </h2>
          <div className="content">
            <div className="blog-post">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
        <About />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        language
      }
      wordCount {
        words
      }
    }
  }
`
