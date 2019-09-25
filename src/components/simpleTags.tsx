import React from "react"

interface ISimpleTags {
  tags: string[]
  size?: "are-medium" | "are-large"
}

export default function SimpleTags({ tags, size }: ISimpleTags) {
  return (
    <div className={`tags ${size}`}>
      {tags.map(tag => (
        <span className="tag" key={"tag-" + tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
interface ISimpleLinkTags extends ISimpleTags {
  tags: string[]
  size?: "are-medium" | "are-large"
  prefix: string
}

export function SimpleLinkTags({ tags, size, prefix }: ISimpleLinkTags) {
  return (
    <div className={`tags ${size}`}>
      {tags.map(tag => (
        <a href={prefix + tag} className="tag" key={"tag-" + tag}>
          {tag}
        </a>
      ))}
    </div>
  )
}
