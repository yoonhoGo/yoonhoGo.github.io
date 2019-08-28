import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Projects</h1>
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <a className="subtitle" href="https://github.com/yoonhoGo">
                GitHub
              </a>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Repositories</p>
                <Link to="https://github.com/yoonhoGo?tab=repositories">
                  <p className="title">
                    {data.github.viewer.repositories.totalCount}
                  </p>
                </Link>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Following</p>
                <Link to="https://github.com/yoonhoGo?tab=following">
                <p className="title">
                  {data.github.viewer.following.totalCount}
                </p>
                </Link>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Followers</p>
                <Link to="https://github.com/yoonhoGo?tab=followers">
                <p className="title">
                  {data.github.viewer.followers.totalCount}
                </p>
                </Link>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Stars</p>
                <Link to="https://github.com/yoonhoGo?tab=stars">
                <p className="title">
                  {data.github.viewer.starredRepositories.totalCount}
                </p>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
