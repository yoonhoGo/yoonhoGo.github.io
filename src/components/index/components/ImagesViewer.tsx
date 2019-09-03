import React, { useState } from "react"
import Image, { FluidObject } from "gatsby-image"

interface IImagesViewer {
  images: Array<
    | {
        type: "src"
        alt?: string
        src: string
        thumbnail?: string
      }
    | {
        type: "fluid"
        alt?: string
        fluid: FluidObject
        thumbnail?: FluidObject
      }
  >
}

export default function ImagesViewer(props: IImagesViewer) {
  const images = props.images.map((image, index) => {
    const [isActive, setActive] = useState(false)
    const onOpen = () => setActive(true)
    const onClose = () => setActive(false)
    let Img, ThumbnailImg
    switch (image.type) {
      case "fluid": {
        Img = <Image alt={image.alt} fluid={image.fluid} />
        ThumbnailImg = (
          <Image alt={image.alt} fluid={image.thumbnail || image.fluid} />
        )
        break
      }
      case "src": {
        Img = <img alt={image.alt} src={image.src} />
        ThumbnailImg = (
          <img alt={image.alt} src={image.thumbnail || image.src} />
        )
        break
      }
    }

    return (
      <React.Fragment key={index}>
        <div className={"modal" + (isActive ? " is-active" : "")} onClick={onClose}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <p className="image">{Img}</p>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
          ></button>
        </div>

        <div className="column">
          <figure className="image is-96x96" onClick={onOpen}>
            {ThumbnailImg}
          </figure>
        </div>
      </React.Fragment>
    )
  })

  return <div className="columns is-mobile is-multiline ">{images}</div>
}
