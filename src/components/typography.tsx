import React from "react"
import { CommentCount, DisqusConfig } from "gatsby-plugin-disqus"

export function Title({
  children,
  isCenter,
}: {
  children: Children
  isCenter?: boolean
}) {
  return (
    <h1
      className={`title ${isCenter ? "has-text-centerd" : ""}`}
      style={{ wordBreak: "keep-all" }}
      id="post-title"
    >
      {children}
    </h1>
  )
}

export function PostMetadata({
  date,
  timeToRead,
  isCenter,
  disqusConfig,
}: {
  date: string
  timeToRead: number
  isCenter?: boolean
  disqusConfig: DisqusConfig
}) {
  return (
    <h5 id="post-metadata" className={`subtitle ${isCenter ? "has-text-centerd" : ""}`}>
      <time>{date}</time>
      {" • "}
      <span>{timeToRead} min read</span>
      {" • "}
      <CommentCount config={disqusConfig} placeholder="..." />
    </h5>
  )
}
