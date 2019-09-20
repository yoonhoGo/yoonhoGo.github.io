import React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GetAllMarkDownRemarkQuery } from "../graphqlTypes"

const BlogPostsPage = () => {
  const data: GetAllMarkDownRemarkQuery = useStaticQuery(pageQuery)
  return (
    <Layout menu={[
      {
        name: "Posts",
      },
      {
        name: "Series",
      },
      {
        name: "Tags",
      },
    ]}>
      <article className="section">
        <div className="container is-desktop is-margin-center">
          {data.allMarkdownRemark.edges.map(({node}) => {
            const {
              timeToRead,
              frontmatter: { title, date, path },
            } = node
            return (
              <Link className="box" to={path}>
                <div className="title">{title}</div>
                <div>
                  {" "}
                  <span>{date}</span>
                  {" • "}
                  <span>{timeToRead} min read</span>
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
  query GetAllMarkDownRemark {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
