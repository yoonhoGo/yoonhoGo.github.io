import React from "react"
import { CommentCount, DisqusConfig } from "gatsby-plugin-disqus"
import { useStaticQuery, graphql } from "gatsby"

export interface ITitleProps {
  children: string
}
export function Title({ children }: ITitleProps) {
  return (
    <h1 className="title" style={{ wordBreak: "keep-all" }} id={children}>
      {children}
    </h1>
  )
}

export interface IPostMetadataProps {
  date: string
  timeToRead: number
  disqusConfig?: DisqusConfig
}
export function PostMetadata({
  date,
  timeToRead,
  disqusConfig,
}: IPostMetadataProps) {
  return (
    <h5 id="post-metadata" className="subtitle">
      {date && <time>{date}</time>}
      {timeToRead && (
        <>
          {" • "}
          <span>{timeToRead} min read</span>
        </>
      )}
      {disqusConfig && (
        <>
          {" • "}
          <CommentCount config={disqusConfig} placeholder="..." />
        </>
      )}
    </h5>
  )
}
