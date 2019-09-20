import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, PostMetadata } from "../components/typography"
import { MarkdownRemark } from "../graphqlTypes"

export default function Template({ data }: any) {
  const {
    markdownRemark,
    site: {
      siteMetadata: { siteUrl },
    },
  } = data // data.markdownRemark holds your post data
  const {
    frontmatter: { title, date },
    html,
    timeToRead,
    fields: { slug },
  } = markdownRemark as MarkdownRemark
  const disqusConfig = {
    url: siteUrl + location.pathname,
    identifier: slug,
    title,
  }
  return (
    <Layout>
      <SEO title={title} />
      <article className="container is-tablet is-margin-center">
        <section className="section">
          <Link to="/blog" replace>
            {"⬅︎ Back"}
          </Link>
          <Title>{title}</Title>
          <PostMetadata
            date={date}
            timeToRead={timeToRead as number}
            disqusConfig={disqusConfig}
          />
          <div className="content">
            <div className="blog-post">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html as string }}
              />
            </div>
          </div>
        </section>
        <section className="section">
          <About />
        </section>
        <section className="section">
          <Disqus config={disqusConfig} />
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      fields {
        slug
      }
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
