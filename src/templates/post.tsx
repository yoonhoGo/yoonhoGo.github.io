import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import _get from "lodash/get"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, PostMetadata } from "../components/typography"
import { PostTemplateQuery, MarkdownRemark } from "../graphqlTypes"

export default function PostTemplate({ data }: { data: PostTemplateQuery }) {
  console.log(`TCL: PostTemplate -> data`, data)
  const {
    markdownRemark,
    site: {
      siteMetadata: { siteUrl },
    },
  } = data
  const {
    frontmatter: { title, date, slug },
    html,
    timeToRead,
  } = markdownRemark
  const disqusConfig = {
    url: siteUrl + slug,
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
  query PostTemplate($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      timeToRead
    }
  }
`
