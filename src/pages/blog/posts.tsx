import _filter from "lodash/filter"
import React, { useState } from "react"

import Layout from "../../components/index/layout"
import { headerMenu } from "."
import Posts from "../../components/blog/posts"

const BlogPostsPage = () => {
  const [filter, setFilter] = useState()

  return (
    <Layout menu={headerMenu}>
      <article style={{ padding: "1em 1em"}}>
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
