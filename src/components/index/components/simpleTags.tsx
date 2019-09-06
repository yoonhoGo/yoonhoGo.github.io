import React from "react"

export default function SimpleTags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  )
}
