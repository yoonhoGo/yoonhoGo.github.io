import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  AboutComponentQuery,
  Site,
  SiteSiteMetadata,
  GitHub,
  GitHub_RepositoryOwner,
  SiteSiteMetadataSocialUsernames,
} from "../../graphqlTypes"
import SimpleTags from "../simpleTags"
import Profile from "../profile"

export default function About({ id }: { id?: string }) {
  const {
    site: {
      siteMetadata: { author, bio, socialUsernames },
    },
    github: {
      repositoryOwner: { avatarUrl },
    },
  }: AboutComponentQuery & {
    site: Site & {
      siteMetadata: SiteSiteMetadata & {
        author: string
        bio: string
        socialUsernames: SiteSiteMetadataSocialUsernames
      }
    }
    github: GitHub & {
      repositoryOwner: GitHub_RepositoryOwner
    }
  } = useStaticQuery(graphql`
    query AboutComponent {
      site {
        siteMetadata {
          author
          bio
          socialUsernames {
            email
            github
            twitter
            instagram
          }
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
    <section id="about" className="hero is-medium">
      <div className="hero-body">
        <div className="container is-desktop is-margin-center wow slideInUp">
          <div className="columns">
            <div className="column is-narrow">
              <div className="box">
                <Profile
                  profilePhotoSrc={avatarUrl}
                  smallIconLabels={[
                    {
                      iconName: "fab fa-github",
                      label: "@" + socialUsernames.github,
                      href: "https://github.com/" + socialUsernames.github,
                    },
                    {
                      iconName: "fab fa-instagram",
                      label: "@" + socialUsernames.instagram,
                      href:
                        "https://www.instagram.com/" +
                        socialUsernames.instagram,
                    },
                    {
                      iconName: "fab fa-twitter",
                      label: "@" + socialUsernames.twitter,
                      href:
                        "https://www.twitter.com/" + socialUsernames.twitter,
                    },
                    {
                      iconName: "fas fa-at",
                      label: socialUsernames.email || "",
                      href: "mailto:" + socialUsernames.email,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="column">
              <div className="content">
                <p>
                  <strong>Yoonho Ko</strong> <small>{author}</small>
                  <br />
                  {bio}
                  <br />
                  <small>
                    Information Security Department, BaekSeok University
                    graduate. Fields of study are Back-end Server engineering
                    and security, PaaS Cloud infrastructure for security,
                    microservice, scale-out, serverless. Mainly using languages
                    are Typescript(Javascript), Python. Contributed projects are
                    GraphQL API deployed production, OAuth2 auth server,
                    Tensorflow stock prediction, etc.
                  </small>
                </p>
              </div>
              Skills Stack:{" "}
              <SimpleTags
                size="are-medium"
                tags={[
                  "Python3.x",
                  "Typescript",
                  "Javascript",
                  "AWS EC2",
                  "AWS ECS",
                  "AWS Fargate",
                  "AWS DynamoDB",
                  "AWS Lambda",
                  "AWS Route53",
                  "AWS Aurora(MySQL/PostgreSQL)",
                  "AWS Cognito",
                  "AWS S3",
                  "Node.js",
                  "Express.js",
                  "Prisma",
                  "Serverless Framework",
                  "GraphQL",
                  "OAuth2.0",
                  "React.js",
                  "Docker",
                  "Kubernetes",
                  "Git",
                  "GitHub",
                  "ElasticSearch",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
