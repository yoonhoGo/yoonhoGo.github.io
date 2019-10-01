import _get from "lodash/get"
import _map from "lodash/map"
import React from "react"
import {
  BlogPostsQuery,
  MarkdownRemark,
  MarkdownRemarkFrontmatter,
  MarkdownRemarkFields,
} from "../../graphqlTypes"
import PostCard from "./postCard"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export default function Posts({ data }: { data: MarkdownRemark[] }) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata()

  return (
    <>
      {_map(data, node => {
        const {
          timeToRead,
          frontmatter: { title, date, slug, tags, image, featuredImage },
          fields: { path },
          excerpt,
        } = node as MarkdownRemark & {
          timeToRead: number
          frontmatter: MarkdownRemarkFrontmatter & {
            title: string
            date: string
            slug: string
            tags: string[] | []
            image?: string
            featuredImage?: File
          }
          fields: MarkdownRemarkFields & {
            path: string
          }
          excerpt: string
        }
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
            image={image || (_get(featuredImage, 'childImageSharp.fluid'))}
          />
        )
      })}
    </>
  )
}
