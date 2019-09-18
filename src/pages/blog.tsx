import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max960 from "../components/styled/Max960"

const BlogPostsPage = () => (
  <Layout>
    <article>
      <Max960 className="container is-margin-center">
        hi
      </Max960>
    </article>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPostsPage
