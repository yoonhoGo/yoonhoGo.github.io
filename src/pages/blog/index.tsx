import React from "react"

import Layout from "../../components/index/layout"
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
      <article style={{ padding: "1em 1em"}}>
        <div className="container is-tablet is-margin-center">
          <Posts />
        </div>
      </article>
    </Layout>
  )
}

export default BlogPage
