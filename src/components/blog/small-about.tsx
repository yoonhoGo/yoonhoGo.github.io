import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import IconLabel from "../IconLabel"
import InnerItemsCenter from "../styled/InnerItemsCenter"
import { SmallAboutComponentQuery } from "../../graphqlTypes"

export default function SmallAbout(props: { id?: string }) {
  const {
    site: {
      siteMetadata: { author, bio },
    },
    github: {
      repositoryOwner: { avatarUrl },
    },
  }: SmallAboutComponentQuery = useStaticQuery(graphql`
    query SmallAboutComponent {
      site {
        siteMetadata {
          author
          bio
        }
      }
      github {
        repositoryOwner(login: "yoonhoGo") {
          avatarUrl(size: 256)
        }
      }
    }
  `)
  
  return (
    <div className="container is-tablet is-margin-center">
      <div className="columns">
        <div className="column is-narrow">
          <Profile
            profilePhotoSrc={avatarUrl}
            smallIconLabels={[
              {
                iconName: "fab fa-github",
                label: "@yoonhoGo",
                href: "https://github.com/yoonhoGo",
              },
              {
                iconName: "fab fa-instagram",
                label: "@ynh_g",
                href: "https://www.instagram.com/ynh_g/",
              },
              {
                iconName: "fas fa-at",
                label: "rhdbsgh0629@naver.com",
                href: "mailto:rhdbsgh0629@naver.com",
              },
            ]}
          />
        </div>
        <div className="column">
          <div className="content">
            <p>
              <strong>Yoonho Ko</strong> <small>{author}</small>
              <br />
              {bio}
              <br />
              <small>
                Information Security Department, BaekSeok University graduate.
                Fields of study are Back-end Server engineering and security,
                PaaS Cloud infrastructure for security, microservice, scale-out,
                serverless. Mainly using languages are Typescript(Javascript),
                Python. Contributed projects are GraphQL API deployed
                production, OAuth2 auth server, Tensorflow stock prediction,
                etc.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
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
    href?: string
  }>
}

function Profile({ profilePhotoSrc, smallIconLabels }: IProfile) {
  return (
    <div className="box">
      <InnerItemsCenter>
        <figure className="image is-128x128">
          <ProfilePhotho src={profilePhotoSrc} />
        </figure>
      </InnerItemsCenter>
      {smallIconLabels && (
        <span>
          {smallIconLabels.map(({ iconName, label, href }, index) => (
            <React.Fragment key={index}>
              <IconLabel iconName={iconName} href={href} isFull>
                {label}
              </IconLabel>
            </React.Fragment>
          ))}
        </span>
      )}
    </div>
  )
}
