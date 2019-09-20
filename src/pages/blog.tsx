import React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GetAllMarkDownRemarkQuery } from "../graphqlTypes"
import { Title, PostMetadata } from "../components/typography"

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
              fields: { slug },
            } = node
            const disqusConfig = {
              identifier: slug,
              title,
            }
            return (
              <Link className="box" to={path}>
                <Title>{title}</Title>
                <PostMetadata date={date} timeToRead={timeToRead as number} disqusConfig={disqusConfig} />
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
          fields {
            slug
          }
        }
      }
    }
  }
`
