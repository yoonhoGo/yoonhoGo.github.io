import React from "react"
import { CommentCount, DisqusConfig } from "gatsby-plugin-disqus"

export function Title({ children }: { children: Children }) {
  return <h1 className="title has-text-centered" style={{ wordBreak: "keep-all" }}>{children}</h1>
}

export function PostMetadata({
  date,
  timeToRead,
  disqusConfig,
}: {
  date: string
  timeToRead: number
  disqusConfig: DisqusConfig
}) {
  return (
    <h5 className="subtitle has-text-centered">
      <time>{date}</time>
      {" • "}
      <span>{timeToRead} min read</span>
      {" • "}
      <CommentCount config={disqusConfig} placeholder="..." />
    </h5>
  )
}
