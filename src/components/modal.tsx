import React, { useState, ReactElement } from "react"

export interface IModal {
  children: Children
}

export function useModal(): [
  (event: React.MouseEvent<Element, MouseEvent>) => void,
  ({ children }: IModal) => JSX.Element,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [isActive, setIsActive] = useState(false)

  const openModal = (event: React.MouseEvent) => setIsActive(true)
  const closeModal = (event: React.MouseEvent) => setIsActive(false)

  const Modal = ({ children }: IModal) => {
    return (
      <div className={`modal${isActive ? " is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content">{children}</div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    )
  }

  return [openModal, Modal, isActive, setIsActive]
}
