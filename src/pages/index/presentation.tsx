import React from "react"
import styled from "styled-components"

import Max960 from "../../components/styled/Max960"
import presentationImage from "./images/IMG_0133.jpg"

export default function Presentation(props: { id?: string }) {
  return (
    <StyledArticle id="presentations" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-primary">Presentations</h1>
        <div className="box">
          <div className="timeline">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">Start</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <p className="heading">January 2016</p>
                <p>Timeline content - Can include any HTML element</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-32x32">
                <img src="http://bulma.io/images/placeholders/32x32.png" />
              </div>
              <div className="timeline-content">
                <p className="heading">February 2016</p>
                <p>Timeline content - Can include any HTML element</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2017</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <i className="fa fa-flag"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">March 2017</p>
                <p>Timeline content - Can include any HTML element</p>
              </div>
            </div>
            <div className="timeline-header">
              <span className="tag is-medium is-primary">End</span>
            </div>
          </div>
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
