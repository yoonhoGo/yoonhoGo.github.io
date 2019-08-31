import React from "react"
import styled from "styled-components";

import Max960 from "../../components/styled/Max960"
import presentationImage from "./images/IMG_0133.jpg"

export default function Presentation(props: { id?: string }) {
  return (
    <StyledArticle id="presentations" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-primary">Presentations</h1>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Max960>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  background-image: url("${presentationImage}");
  background-size: cover;
  background-attachment: fixed;
`
