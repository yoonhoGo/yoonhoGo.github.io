import Image, { FluidObject } from "gatsby-image"
import React from "react"
import { PostMetadata, Title, IPostMetadataProps } from "../typography"
import SimpleTags from "../simpleTags"
import { File } from "../../graphqlTypes"

export interface IPostCardProps {
  title: string
  meta: IPostMetadataProps
  summary?: string
  image?: string | FluidObject
  tags?: string[]
  path: string
  rel?: "prev" | "next"
}
export default function PostCard({
  title,
  meta,
  image,
  summary,
  tags,
  path,
  rel,
}: IPostCardProps) {
  return (
    <a className="box" rel={rel} href={path}>
      <div className="columns is-centered is-vcentered">
        <div className="column">
          <Title>{title}</Title>
          <PostMetadata {...meta} />
          {summary && <div className="content">{summary}</div>}
          {tags && <SimpleTags tags={tags} />}
        </div>
        {image && (
          <div className="column is-4">
            {typeof image === "string" ? (
              <figure className="image is-16by9">
                <img src={image} alt={title} />
              </figure>
            ) : (
              <Image fluid={image} alt={title} />
            )}
          </div>
        )}
      </div>
    </a>
  )
}
