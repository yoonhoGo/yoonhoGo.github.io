import React, { Profiler } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SmallIconLabel from "./components/SmallIconLabel"
import InnerItemsCenter from "../styled/InnerItemsCenter"
import Max960 from "../styled/Max960"

export default function About(props: { id?: string }) {
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
    <article id="about" className="hero is-medium">
      <div className="hero-body">
        <Max960 className="container is-margin-center animated slideInUp">
          <div className="columns">
            <div className="column is-narrow">
              <Profile
                profilePhotoSrc="https://avatars0.githubusercontent.com/u/6959851?s=460&v=4"
                smallIconLabels={[
                  {
                    iconName: "fab fa-github",
                    label: "@yoonhoGo",
                  },
                  {
                    iconName: "fab fa-instagram",
                    label: "@ynh_g",
                  },
                  {
                    iconName: "fas fa-at",
                    label: "rhdbsgh0629@naver.com",
                  },
                ]}
              />
            </div>
            <div className="column">
              <div className="content">
                <p>
                  <strong>Yoonho Ko</strong> <small>{author}</small>
                  <br />
                  정보보안을 기초로하여 인프라 및 운용 시스템 보안을 개발하고
                  싶다는 비전을 가지고 있습니다. 특히, 지난 세대의 서버 운용에서
                  벗어나 현대의 트렌드에 발맞춘 모던 서버 개발에 관심이
                  많습니다. 빠른 개발, 안정적인 운영, 지속적이고 유연한
                  유지관리를 개발 철학으로 생각하고 있습니다.
                  <br />
                  <small>
                    Information Security Department, BaekSeok University
                    graduate. Fields of study are Back-end Server engineering
                    and security, PaaS Cloud infrastructure for security,
                    microservice, scale-out, serverless. Mainly using languages
                    are Typescript, Python, Java. Contributed projects are
                    GraphQL API deployed production, OAuth2 auth server,
                    Tensorflow stock prediction, etc.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Max960>
      </div>
    </article>
  )
}

const ProfilePhotho = styled.img`
  /* margin: 0.5em; */
  border-radius: 0.75rem;
`

interface IProfile {
  profilePhotoSrc: string
  smallIconLabels?: Array<{
    iconName: string
    label: string
  }>
}

function Profile({ profilePhotoSrc, smallIconLabels }: IProfile) {
  return (
    <InnerItemsCenter>
      <div>
        <figure className="image is-128x128">
          <ProfilePhotho src={profilePhotoSrc} />
        </figure>
      </div>
      {smallIconLabels && (
        <span>
          {smallIconLabels.map(({ iconName, label }, index) => (
            <React.Fragment key={index}>
              <SmallIconLabel iconName={iconName}>{label}</SmallIconLabel>
              <br />
            </React.Fragment>
          ))}
        </span>
      )}
    </InnerItemsCenter>
  )
}
