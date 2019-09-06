import React from "react"

interface IMediaBox {
  imageSrc: string
  children: JSX.Element | JSX.Element[]
}

export default function MediaBox({ imageSrc, children }: IExperienceBox) {
  return (
    <div className="box animated zoomIn slow delay-2s">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={imageSrc} alt="Erion Co., Ltd. (Seoul)" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">{children}</div>
        </div>
      </article>
    </div>
  )
}
