import React from "react"

interface IMediaBox {
  imageSrc?: string
  alt?: string
  children: JSX.Element | JSX.Element[]
}

export default function MediaBox({ imageSrc, children, alt }: IMediaBox) {
  return (
    <div className="box wow zoomIn slow">
      <article className="media">
        <div className="media-left">
          {imageSrc ? (
            <figure className="image is-64x64">
              <img src={imageSrc} alt={alt} />
            </figure>
          ) : (
            <span className="icon is-large">
              <i className="far fa-image fas fa-3x"></i>
            </span>
          )}
        </div>
        <div className="media-content">
          <div className="content">{children}</div>
        </div>
      </article>
    </div>
  )
}
