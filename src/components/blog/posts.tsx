import _filter from "lodash/filter"
import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import { BlogPostsQuery } from "../../graphqlTypes"
import SimpleTags from "../../components/simpleTags"
import { Title, PostMetadata } from "../../components/typography"

export default function Posts({
  filter,
  getRawPosts,
}: {
  filter?: <T>(edge: T) => boolean
  getRawPosts?: <T>(edge: T) => void
}) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    allMarkdownRemark: { edges },
  }: BlogPostsQuery = useStaticQuery(graphql`
    query BlogPosts {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              path
            }
            timeToRead
            excerpt(format: PLAIN)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              slug
              tags
            }
          }
        }
      }
    }
  `)

  if (getRawPosts && edges) {
    getRawPosts(edges)
  }

  const posts = filter ? _filter(edges, filter) : edges

  return (
    <>
      {posts.map(({ node }) => {
        const {
          timeToRead,
          frontmatter: { title, date, slug, tags },
          fields: { path },
          excerpt,
        } = node
        const disqusConfig = {
          url: siteUrl + slug,
          identifier: slug,
          title,
        }
        return (
          <Link className="box" to={path}>
            <div className="columns">
              <div className="column">
                <Title>{title}</Title>
                <PostMetadata
                  date={date}
                  timeToRead={timeToRead as number}
                  disqusConfig={disqusConfig}
                />
                <div className="content">
                  {excerpt}
                </div>
                <SimpleTags tags={tags || []} />
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
