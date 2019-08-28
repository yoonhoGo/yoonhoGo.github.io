import React from "react"
import { useStaticQuery, graphql } from "gatsby";

export default function About(props: {id?: string}) {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const author = data.site.siteMetadata.author
  return (
    <article className="media section">
      <figure className="media-left">
        <p className="image is-128x128">
          <img src="https://avatars0.githubusercontent.com/u/6959851?s=460&v=4" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>Yoonho Ko</strong> <small>{author}</small>
            <br />
            정보보안을 기초로하여 인프라 및 운용 시스템 보안을 개발하고 싶다는 비전을 가지고 있습니다. 특히, 지난 세대의 서버 운용에서 벗어나 현대의 트렌드에 발맞춘 모던 서버 개발에 관심이 많습니다. 빠른 개발, 안정적인 운영, 지속적이고 유연한 유지관리를 개발 철학으로 생각하고 있습니다.
            <br />
            <small>
            Information Security Department, BaekSeok University graduate. Fields of study are Back-end Server engineering and security, PaaS Cloud infrastructure for security, microservice, scale-out, serverless. Mainly using languages are Typescript, Python, Java. Contributed projects are GraphQL API deployed production, OAuth2 auth server, Tensorflow stock prediction, etc.
            </small>
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small">
                <i className="fas fa-reply"></i>
              </span>
            </a>
            <a className="level-item">
              <span className="icon is-small">
                <i className="fas fa-retweet"></i>
              </span>
            </a>
            <a className="level-item">
              <span className="icon is-small">
                <i className="fas fa-heart"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
      {/* <div className="media-right">
        <button className="delete"></button>
      </div> */}
    </article>
  )
}
