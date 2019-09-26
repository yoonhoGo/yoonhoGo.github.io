import _filter from "lodash/filter"
import _get from "lodash/get"
import { graphql } from "gatsby"
import React, { useState } from "react"

import Layout from "../../components/index/layout"
import { headerMenu } from "."
import Posts from "../../components/blog/posts"
import SEO from "../../components/seo"
import { BlogPostsPageQuery } from "../../graphqlTypes"

const BlogPostsPage = ({ data: { site } }: { data: BlogPostsPageQuery }) => {
  const siteUrl = _get(site, "siteMetadata.siteUrl", "https://yoonho.ga")
  const [filter, setFilter] = useState()
  return (
    <Layout menu={headerMenu}>
      <SEO title="Blog Posts" url={siteUrl + "/blog/posts"} />
      <article style={{ padding: "1em" }}>
        <div className="container is-tablet is-margin-center">
          <Filter setFilter={setFilter} />
          <Posts
            filter={
              filter &&
              (edge => {
                return JSON.stringify(edge.node.frontmatter).includes(filter)
              })
            }
          />
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostsPage

function Filter({ setFilter }: { setFilter: (obj: any) => void }) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    return setFilter(event.target.value)
  }
  return (
    <div className="field">
      <label className="label">Filter</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Filter"
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogPostsPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
