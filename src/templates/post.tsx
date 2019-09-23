import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import _get from "lodash/get"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, PostMetadata } from "../components/typography"
import { PostTemplateQuery } from "../graphqlTypes"
import SimpleTags from "../components/simpleTags"

export default function PostTemplate({ data }: { data: PostTemplateQuery }) {
  const {
    markdownRemark: {
      frontmatter: { title, date, slug, tags },
      html,
      timeToRead,
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data

  if (!siteUrl || !slug || !title) {
    throw new Error("Error 55084")
  }
  const disqusConfig = {
    url: siteUrl + slug,
    identifier: slug,
    title,
  }

  if (!timeToRead || !html) {
    throw new Error("Error 28592")
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
            timeToRead={timeToRead}
            disqusConfig={disqusConfig}
          />
          <div className="content">
            <div className="blog-post">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
          <SimpleTags tags={tags || []} />
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
        slug
        tags
      }
      timeToRead
    }
  }
`
