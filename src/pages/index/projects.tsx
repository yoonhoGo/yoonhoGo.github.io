import React from "react"

export default function Projects(props: { id?: string }) {
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Projects</h1>
          <h2 className="subtitle">GitHub Repositories</h2>
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Tweets</p>
                <p className="title">3,456</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Followers</p>
                <p className="title">456K</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Likes</p>
                <p className="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
