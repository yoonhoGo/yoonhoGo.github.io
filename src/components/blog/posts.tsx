import _map from "lodash/map"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { BlogPostsQuery, MarkdownRemark } from "../../graphqlTypes"
import PostCard from "./postCard"

export default function Posts({ data }: { data: MarkdownRemark[] }) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  }: BlogPostsQuery = useStaticQuery(graphql`
    query BlogPosts {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      {_map(data, node => {
        const {
          timeToRead,
          frontmatter: { title, date, slug, tags, image },
          fields: { path },
          excerpt,
        } = node
        const disqusConfig = {
          url: siteUrl + path,
          identifier: path,
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
