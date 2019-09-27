import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import _get from "lodash/get"
import React from "react"

import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, PostMetadata } from "../components/typography"
import {
  PostTemplateQuery,
  SitePageContext,
  MarkdownRemarkFrontmatter,
  MarkdownRemarkFields,
} from "../graphqlTypes"
import { SimpleLinkTags } from "../components/simpleTags"
import SidebarMenu from "../components/blog/sidebar"
import DefaultLayout from "../components/defaultLayout"
import Header from "../components/header"
import PostCard from "../components/blog/postCard"

export default function PostTemplate({
  data,
  pageContext,
}: {
  data: PostTemplateQuery
  pageContext: SitePageContext
}) {
  const {
    markdownRemark: {
      frontmatter: { title, date, slug, tags, image },
      html,
      timeToRead,
      tableOfContents,
      excerpt,
      fields: { path },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data

  if (!siteUrl || !slug || !title) {
    throw new Error("Error 55084")
  }

  const url = siteUrl + path
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
      <div className="columns is-gaples is-centered is-marginless">
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
            <section id="post-others" style={{ marginTop: "2em" }}>
              <PageNavigation
                previous={pageContext.previous}
                next={pageContext.next}
              />
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

interface IPageNavigationProps {
  next?: SitePageContext["next"]
  previous?: SitePageContext["previous"]
  others?: any
}

function PageNavigation({ next, previous }: IPageNavigationProps) {
  const previousFrontmatter =
    previous && (previous.frontmatter as MarkdownRemarkFrontmatter)
  const nextFrontmatter =
    next && (next.frontmatter as MarkdownRemarkFrontmatter)

  return (
    <div className="columns">
      {previous && (
        <div className="column">
          <PostCard
            rel="prev"
            title={(previousFrontmatter && previousFrontmatter.title) || ""}
            summary={previous.excerpt || ""}
            path={(previous.fields as MarkdownRemarkFields).path as string}
            meta={{
              date: previousFrontmatter && previousFrontmatter.date,
              timeToRead: previous.timeToRead || 0,
            }}
            tags={
              (previousFrontmatter && previousFrontmatter.tags) as (
                | string[]
                | undefined)
            }
          />
        </div>
      )}
      {next && (
        <div className="column">
          <PostCard
            rel="next"
            title={(nextFrontmatter && nextFrontmatter.title) || ""}
            summary={next.excerpt || ""}
            path={(next.fields as MarkdownRemarkFields).path as string}
            meta={{
              date: nextFrontmatter && nextFrontmatter.date,
              timeToRead: next.timeToRead || 0,
            }}
            tags={
              (nextFrontmatter && nextFrontmatter.tags) as (
                | string[]
                | undefined)
            }
          />
        </div>
      )}
    </div>
  )
}
