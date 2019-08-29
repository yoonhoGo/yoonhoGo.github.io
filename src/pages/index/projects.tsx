import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import GitHubButton from "react-github-btn"
import { GitHub } from "../../graphqlTypes"

export default function Projects(props: { id?: string }) {
  const data: { github: GitHub } = useStaticQuery(graphql`
    query getGithubInfo {
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
    <article className="hero is-dark">
      <div className="hero-body">
        <div className="section">
          <div className="container">
            <h1 className="title">Projects</h1>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p>
                    <Link to="https://github.com/yoonhoGo">
                      <span className="icon has-text-white-ter">
                        <i className="fab fa-github fa-lg"></i>
                      </span>
                      <span className="is-size-3 has-text-white-ter">
                        GitHub
                      </span>
                    </Link>
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
                  <Link to="https://github.com/yoonhoGo?tab=repositories">
                  <p className="heading has-text-white-ter">Repositories</p>
                    <p className="title">
                      {data.github.viewer.repositories.totalCount}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <Link to="https://github.com/yoonhoGo?tab=following">
                  <p className="heading has-text-white-ter">Following</p>
                    <p className="title">
                      {data.github.viewer.following.totalCount}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <Link to="https://github.com/yoonhoGo?tab=followers">
                  <p className="heading has-text-white-ter">Followers</p>
                    <p className="title">
                      {data.github.viewer.followers.totalCount}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <Link to="https://github.com/yoonhoGo?tab=stars">
                  <p className="heading has-text-white-ter">Stars</p>
                    <p className="title">
                      {data.github.viewer.starredRepositories.totalCount}
                    </p>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </article>
  )
}
