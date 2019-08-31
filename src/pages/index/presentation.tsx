import React from "react"
import Max960 from "../../components/styled/Max960"

export default function Presentation(props: { id?: string }) {
  return (
    <article id="presentations" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-primary">Presentations</h1>
      </Max960>
    </article>
  )
}
