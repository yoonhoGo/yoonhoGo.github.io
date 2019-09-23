import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

type Size = "is-small"

export interface IIconLabel {
  children: string | JSX.Element | JSX.Element[]
  iconName: string
  href?: string
  link?: string
  isFull?: boolean
  size?: Size
}

export default function IconLabel({
  iconName,
  children,
  link,
  href,
  isFull,
  size,
}: IIconLabel) {
  const iconClass = "icon" + (size ? ` ${size}`:  " is-small")

  const innerHTML = (
    <CenteredLine isFull={isFull}>
      <span className={iconClass} style={{ marginRight: "0.2em"}}>
        <i className={iconName + " fa-sm"}></i>
      </span>
      <Label size={size}>{children}</Label>
    </CenteredLine>
  )

  if (href) {
    return <a href={href} className="has-text-grey-dark">{innerHTML}</a>
  } else if (link) {
    return <Link to={link}>{innerHTML}</Link>
  } else {
    return innerHTML
  }
}

export const CenteredLine = styled.span`
  display: ${({ isFull }: { isFull?: boolean }) =>
    isFull ? "flex" : "inline-flex"};
`

export const Label = styled.span`
  font-size: ${({ size }: { size?: Size }) =>
    size === "is-small" ? "smaller" : ""};
`
