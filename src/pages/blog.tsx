import React from "react"

import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Title, PostMetadata } from "../components/typography"
import { BlogPageQuery } from "../graphqlTypes"

const BlogPostsPage = ({ data }: { data: BlogPageQuery }) => {
  const { siteUrl } = data.site.siteMetadata
  return (
    <Layout
      menu={[
        {
          name: "Posts",
        },
        {
          name: "Series",
        },
        {
          name: "Tags",
        },
      ]}
    >
      <article className="section">
        <div className="container is-desktop is-margin-center">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const {
              timeToRead,
              frontmatter: { title, date, slug },
            } = node
            const disqusConfig = {
              url: siteUrl + slug,
              identifier: slug,
              title,
            }
            return (
              <Link className="box" to={slug}>
                <Title>{title}</Title>
                <PostMetadata
                  date={date}
                  timeToRead={timeToRead as number}
                  disqusConfig={disqusConfig}
                />
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
  query BlogPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`
