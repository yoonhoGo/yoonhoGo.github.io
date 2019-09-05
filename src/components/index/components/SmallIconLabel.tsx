import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export interface ISmallIconLabel {
  children: string | JSX.Element | JSX.Element[]
  iconName: string
  href?: string
  link?: string
  isFull?: boolean
}

export default function SmallIconLabel({
  iconName,
  children,
  link,
  href,
  isFull,
}: ISmallIconLabel) {
  const innerHTML = (
    <CenteredLine isFull={isFull}>
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

export const CenteredLine = styled.span`
  display: ${({ isFull }: { isFull?: boolean }) =>
    isFull ? "flex" : "inline-flex"};
  justify-items: center;
`
