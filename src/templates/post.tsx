import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, DateAndTTR } from "../components/typography"

export default function Template({ data }: any) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="container is-tablet is-margin-center">
        <section className="section">
          <Link to="/blog" replace>
            {"⬅︎ Back"}
          </Link>
          <Title>{frontmatter.title}</Title>
          <DateAndTTR date={frontmatter.date} timeToRead={timeToRead}/>
          <div className="content">
            <div className="blog-post">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </section>
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
      }
      timeToRead
    }
  }
`
