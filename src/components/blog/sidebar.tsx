import React, { useRef } from "react"

export default function SidebarMenu({
  title,
  content,
}: {
  title: string
  content?: string
}) {
  const ulTag = String(content).match("<ul>(?<tag>(.|\s|\n)*)</ul>")
  const liTag = ulTag && ulTag.groups && ulTag.groups.tag
  return (
    <aside className="menu is-small">
      <a onClick={() => typeof window !== "undefined" && window.history.back()}>⬅︎ Back</a>
      <p
        className="menu-label"
        style={{
          fontSize: "medium",
        }}
      >
        <a href="#">{title}</a>
      </p>
      {liTag && (
        <>
          <p className="menu-label">Content</p>
          <ul
            className="menu-list"
            dangerouslySetInnerHTML={{ __html: liTag }}
          ></ul>
        </>
      )}
      <p className="menu-label">Footer</p>
      <ul className="menu-list">
        <li>
          <a href="#post-whoami">Who am I?</a>
        </li>
        <li>
          <a href="#post-comment">Comment</a>
        </li>
      </ul>
    </aside>
  )
}

function MenuList() {
  useRef()
  return <></>
}
