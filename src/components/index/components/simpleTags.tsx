import React from "react"

interface ISimpleTags {
  tags: string[] 
  size?: 'are-medium' | 'are-large'
}

export default function SimpleTags({ tags, size }: ISimpleTags) {
  return (
    <div className={`tags ${ size}`}>
      {tags.map(tag => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  )
}
