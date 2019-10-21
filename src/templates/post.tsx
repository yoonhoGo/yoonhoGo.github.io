import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import _get from "lodash/get"
import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  EmailIcon,
} from "react-share"

import SEO from "../components/seo"
import About from "../components/blog/small-about"
import { Title, PostMetadata } from "../components/typography"
import {
  PostTemplateQuery,
  SitePageContext,
  MarkdownRemarkFrontmatter,
  MarkdownRemarkFields,
  MarkdownRemark,
  Site,
  SiteSiteMetadata,
  File,
} from "../graphqlTypes"
import { SimpleLinkTags } from "../components/simpleTags"
import SidebarMenu from "../components/blog/sidebar"
import DefaultLayout from "../components/defaultLayout"
import Header from "../components/header"
import PostCard from "../components/blog/postCard"
import Label from "../components/label"

export default function PostTemplate({
  data,
  pageContext,
}: {
  data: PostTemplateQuery
  pageContext: SitePageContext
}) {
  const {
    markdownRemark: {
      frontmatter: { title, date, slug, tags, image, featuredImage },
      html,
      timeToRead,
      tableOfContents,
      excerpt,
      fields: { path },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data as {
    markdownRemark: MarkdownRemark & {
      frontmatter: MarkdownRemarkFrontmatter & {
        title: string
        data: string
        slug: string
        tags: string[] | []
        image?: string
        featuredImage?: File
      }
      html: string
      timeToRead: number
      tableOfContents: string
      excerpt: string
      fields: MarkdownRemarkFields & {
        path: string
      }
    }
    site: Site & {
      siteMetadata: SiteSiteMetadata & {
        siteUrl: string
      }
    }
  }

  if (!siteUrl || !slug || !title) {
    throw new Error("Error 55084")
  }

  const url = siteUrl + path
  const disqusConfig = {
    identifier: path,
    title,
    url,
  }

  if (!timeToRead || !html) {
    throw new Error("Error 28592")
  }

  const publicURL =
    _get(featuredImage, "publicURL") &&
    siteUrl + _get(featuredImage, "publicURL")
  const seoImage = image || publicURL || undefined

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
          <SEO title={title} description={excerpt} url={url} image={seoImage} />
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
              {tags && (
                <SimpleLinkTags
                  label="Tags:"
                  tags={tags}
                  prefix={"/blog/tags?select="}
                />
              )}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Label>Share:</Label>
                <span style={{ margin: "3px" }}>
                  <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon size={32} borderRadius={10} />
                  </FacebookShareButton>
                </span>
                <span style={{ margin: "3px" }}>
                  <TwitterShareButton url={url} title={title}>
                    <TwitterIcon size={32} borderRadius={10} />
                  </TwitterShareButton>
                </span>
                <span style={{ margin: "3px" }}>
                  <TelegramShareButton url={url} title={title}>
                    <TelegramIcon size={32} borderRadius={10} />
                  </TelegramShareButton>
                </span>
                <span style={{ margin: "3px" }}>
                  <EmailShareButton
                    url={url}
                    subject={title}
                    body="body"
                  >
                    <EmailIcon size={32} borderRadius={10} />
                  </EmailShareButton>
                </span>
              </span>
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
        featuredImage {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              originalImg
              originalName
              presentationHeight
              presentationWidth
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
          publicURL
        }
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
