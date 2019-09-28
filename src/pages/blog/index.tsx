import _get from "lodash/get"
import { graphql } from "gatsby"
import React from "react"

import Layout from "../../components/index/layout"
import Posts from "../../components/blog/posts"
import SEO from "../../components/seo"
import { BlogPageQuery, MarkdownRemark } from "../../graphqlTypes"

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

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { nodes },
  },
}: {
  data: BlogPageQuery
}) => {
  const siteUrl = _get(site, "siteMetadata.siteUrl", "https://yoonho.ga")
  return (
    <Layout menu={headerMenu}>
      <SEO title="Blog Home" url={siteUrl + "/blog"} />
      <article style={{ padding: "1em" }}>
        <div className="container is-tablet is-margin-center">
          <Posts data={nodes as MarkdownRemark[]} />
        </div>
      </article>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          path
        }
        timeToRead
        excerpt(format: PLAIN)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          tags
          image
        }
      }
    }
  }
`
