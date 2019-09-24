import _filter from "lodash/filter"
import React, { useState } from "react"

import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import { Title, PostMetadata } from "../../components/typography"
import { BlogPageQuery } from "../../graphqlTypes"
import SimpleTags from "../../components/simpleTags"

const BlogPostsPage = ({ data }: { data: BlogPageQuery }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    allMarkdownRemark: { edges },
  } = data
  const headerMenu = [
    {
      name: "Posts",
      to: "/blog/posts",
    },
    {
      name: "Series",
      to: "/blog/series",
    },
    {
      name: "Tags",
      to: "/blog/tags",
    },
  ]
  const [filter, setFilter] = useState()

  const posts = filter
    ? _filter(edges, edge => {
        return JSON.stringify(edge.node.frontmatter).includes(filter)
      })
    : edges

  return (
    <Layout menu={headerMenu}>
      <article className="section">
        <div className="container is-tablet is-margin-center">
          <Filter setFilter={setFilter} />
          {posts.map(({ node }) => {
            const {
              timeToRead,
              frontmatter: { title, date, slug, tags },
              fields: { path },
            } = node
            const disqusConfig = {
              url: siteUrl + slug,
              identifier: slug,
              title,
            }
            return (
              <Link className="box" to={path}>
                <div className="columns">
                  <div className="column">
                    <Title>{title}</Title>
                    <PostMetadata
                      date={date}
                      timeToRead={timeToRead as number}
                      disqusConfig={disqusConfig}
                    />
                    <SimpleTags tags={tags || []} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostsPage

export const pageQuery = graphql`
  query BlogPostsPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            path
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            tags
          }
        }
      }
    }
  }
`

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
