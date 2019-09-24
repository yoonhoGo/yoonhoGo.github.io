import React from "react"

import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import { Title, PostMetadata } from "../../components/typography"
import { BlogPageQuery } from "../../graphqlTypes"
import SimpleTags from "../../components/simpleTags"

const BlogPage = ({ data }: { data: BlogPageQuery }) => {
  const {
    siteMetadata: { siteUrl },
  } = data.site

  return (
    <Layout
      menu={[
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
      ]}
    >
      <article className="section">
        <div className="container is-tablet is-margin-center">
          {data.allMarkdownRemark.edges.map(({ node }) => {
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

export default BlogPage

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
