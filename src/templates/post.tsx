import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import _get from "lodash/get"
import React from "react"

import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, PostMetadata } from "../components/typography"
import { PostTemplateQuery } from "../graphqlTypes"
import { SimpleLinkTags } from "../components/simpleTags"
import SidebarMenu from "../components/blog/sidebar"
import DefaultLayout from "../components/defaultLayout"
import Header from "../components/header"

export default function PostTemplate({ data }: { data: PostTemplateQuery }) {
  const {
    markdownRemark: {
      frontmatter: { title, date, slug, tags },
      html,
      timeToRead,
      tableOfContents,
      excerpt,
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
    <DefaultLayout>
      <Header />
      <div className="columns is-gaples">
        <div className="column">
          <div className="section is-sticky">
            <SidebarMenu title={title} content={tableOfContents} />
          </div>
        </div>
        <main className="column is-narrow">
          <SEO title={title} description={excerpt} />
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
              <div
                className="content is-medium is-family-serif font-family-serif"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
              <SimpleLinkTags tags={tags || []} prefix={'/blog/tags?select='}/>
            </section>
            <section className="section" id="post-whoami">
              <About />
            </section>
            <section className="section" id="post-comment">
              <Disqus config={disqusConfig} />
            </section>
          </article>
        </main>
        <div className="column"></div>
      </div>
    </DefaultLayout>
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
      excerpt(format: PLAIN)
      fields {
        path
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        tags
      }
      timeToRead
      tableOfContents(pathToSlugField: "fields.path")
    }
  }
`
