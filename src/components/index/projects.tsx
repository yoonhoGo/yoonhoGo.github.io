import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import GitHubButton from "react-github-btn"
import { GetGithubInfoQuery } from "../../graphqlTypes"
import Max960 from "../styled/Max960"
import SimpleTags from "./components/simpleTags"

export default function Projects(props: { id?: string }) {
  const data: GetGithubInfoQuery = useStaticQuery(graphql`
    query GetGithubInfo {
      github {
        viewer {
          repositories {
            totalCount
          }
          following {
            totalCount
          }
          followers {
            totalCount
          }
          starredRepositories {
            totalCount
          }
        }
      }
    }
  `)

  return (
    <article id="projects" className="hero is-dark">
      <div className="hero-body">
        <Max960 className="container animated slideInRight slow">
          <h1 className="title">Projects</h1>
          <div className="columns is-multiline">
            <ProjectBox size="is-full">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p>
                      <a href="https://github.com/yoonhoGo">
                        <span className="icon has-text-white-ter is-large">
                          <i className="fab fa-github fa-lg"></i>
                        </span>
                        <span className="is-size-3 has-text-white-ter">
                          GitHub
                        </span>
                      </a>
                    </p>
                    <p>
                      <GitHubButton
                        href="https://github.com/yoonhoGo"
                        data-show-count={true}
                        aria-label="Follow @yoonhoGo on GitHub"
                      >
                        Follow @yoonhoGo
                      </GitHubButton>
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://github.com/yoonhoGo?tab=repositories">
                      <p className="heading has-text-white-ter">Repositories</p>
                      <p className="title">
                        {data.github.viewer.repositories.totalCount}
                      </p>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://github.com/yoonhoGo?tab=following">
                      <p className="heading has-text-white-ter">Following</p>
                      <p className="title">
                        {data.github.viewer.following.totalCount}
                      </p>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://github.com/yoonhoGo?tab=followers">
                      <p className="heading has-text-white-ter">Followers</p>
                      <p className="title">
                        {data.github.viewer.followers.totalCount}
                      </p>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://github.com/yoonhoGo?tab=stars">
                      <p className="heading has-text-white-ter">Stars</p>
                      <p className="title">
                        {data.github.viewer.starredRepositories.totalCount}
                      </p>
                    </a>
                  </div>
                </div>
              </nav>
            </ProjectBox>
            <ProjectBox>
              <div className="content">
                <h4 className="has-text-white-ter">Serverless GraphQL API(외주)</h4>
                <p>
                  기업용 회계 솔루션을 만드는 회사에서 GraphQL API를 만들는
                  외주를 받아 진행했습니다.
                </p>
                <SimpleTags
                  tags={[
                    "GraphQL",
                    "AWS",
                    "Prisma",
                    "Typescript",
                    "Node.js",
                    "Apollo",
                  ]}
                />
              </div>
            </ProjectBox>
            <ProjectBox>
              <div className="content">
                <h4 className="has-text-white-ter">Python Crawler(외주)</h4>
                <p>
                  인터넷 쇼핑몰을 운영하는 회사로부터 의뢰를 받아 인스타그램을 포함한 사이트
                  세 곳의 크롤러를 제작하여 판매하였습니다.
                </p>
                <SimpleTags
                  tags={[
                    "Python",
                    "Parallel Programming"
                  ]}
                />
              </div>
            </ProjectBox>
          </div>
        </Max960>
      </div>
    </article>
  )
}

function ProjectBox({
  children,
  size,
}: {
  children: JSX.Element | JSX.Element[]
  size?:
    | "is-full"
    | "is-three-quarters"
    | "is-two-thirds"
    | "is-half"
    | "is-one-third"
    | "is-one-quarter"
    | "is-full"
    | "is-four-fifths"
    | "is-three-fifths"
    | "is-two-fifths"
    | "is-one-fifth"
}) {
  return (
    <div className={`column ${size || ""}`}>
      <div className="box has-background-grey-dark has-text-white-ter">{children}</div>
    </div>
  )
}
