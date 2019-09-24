import React from "react"

import Layout from "../../components/layout"
import Posts from "../../components/blog/posts"

export const headerMenu = [
  {
    name: "Posts",
    to: "/blog/posts",
  },
  {
    name: "Tags",
    to: "/blog/tags",
  },
]

const BlogPage = () => {
  return (
    <Layout menu={headerMenu}>
      <article className="section">
        <div className="container is-tablet is-margin-center">
          <Posts />
        </div>
      </article>
    </Layout>
  )
}

export default BlogPage
