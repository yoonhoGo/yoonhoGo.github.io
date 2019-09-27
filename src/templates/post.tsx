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
      frontmatter: { title, date, slug, tags, image },
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
  
  const url = `${siteUrl}/blog/${slug}`
  const disqusConfig = {
    identifier: slug,
    title,
    url,
  }

  if (!timeToRead || !html) {
    throw new Error("Error 28592")
  }

  return (
    <DefaultLayout>
      <Header />
      <div className="columns is-gaples is-centered" style={{ margin: "0rem" }}>
        <div className="column is-padding">
          <div className="is-sticky">
            <SidebarMenu title={title} content={tableOfContents} />
          </div>
        </div>
        <main className="column is-narrow">
          <SEO title={title} description={excerpt} url={url} image={image} />
          <article
            className="container is-tablet is-margin-center"
            style={{ padding: "0 0.75em" }}
          >
            <section>
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
              <SimpleLinkTags tags={tags || []} prefix={"/blog/tags?select="} />
            </section>
            <section id="post-whoami" style={{ marginTop: "2em" }}>
              <About />
            </section>
            <section id="post-comment" style={{ marginTop: "2em" }}>
              <Disqus config={disqusConfig} />
            </section>
          </article>
        </main>
        <div className="column is-padding"></div>
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
        image
      }
      timeToRead
      tableOfContents(pathToSlugField: "fields.path")
    }
  }
`
