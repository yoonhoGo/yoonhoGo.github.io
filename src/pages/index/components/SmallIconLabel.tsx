import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export interface ISmallIconLabel {
  children: string
  iconName: string
  href?: string
  link?: string
}

export default function SmallIconLabel({
  iconName,
  children,
  link,
  href,
}: ISmallIconLabel) {
  const innerHTML = (
    <CenteredLine>
      <span className="icon">
        <i className={iconName + " fa-sm"}></i>
      </span>
      <small>{children}</small>
    </CenteredLine>
  )

  if (href) {
    return <a href={href}>{innerHTML}</a>
  } else if (link) {
    return <Link to={link}>{innerHTML}</Link>
  } else {
    return innerHTML
  }
}

const CenteredLine = styled.span`
  display: inline-flex;
  justify-items: center;
`
