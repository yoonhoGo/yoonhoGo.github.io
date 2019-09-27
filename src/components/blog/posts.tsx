import _filter from "lodash/filter"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { BlogPostsQuery } from "../../graphqlTypes"
import PostCard from "./postCard"

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
              image
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
          frontmatter: { title, date, slug, tags, image },
          fields: { path },
          excerpt,
        } = node
        const disqusConfig = {
          url: siteUrl + path,
          identifier: slug,
          title,
        }
        return (
          <PostCard
            title={title}
            summary={excerpt || ""}
            path={path}
            meta={{
              date: date,
              timeToRead: timeToRead as number,
              disqusConfig,
            }}
            tags={tags}
            image={image}
          />
        )
      })}
    </>
  )
}
