import React from "react"

export interface ISmallIconLabel {
  iconName: string
  children: string
}

export default function SmallIconLabel({ iconName, children }: ISmallIconLabel) {
  return (
    <>
      <span className="icon">
        <i className={iconName + " fa-sm"}></i>
      </span>
      <small>{children}</small>
    </>
  )
}
