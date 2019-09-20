import React from "react"

export function Title({ children }: { children: Children }) {
  return <h1 className="title has-text-centered">{children}</h1>
}

export function DateAndTTR({
  date,
  timeToRead,
}: {
  date: string
  timeToRead: number
}) {
  return (
    <h5 className="subtitle has-text-centered">
      <time>{date}</time>
      {" • "}
      <span>{timeToRead} min read</span>
    </h5>
  )
}
