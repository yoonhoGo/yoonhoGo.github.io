import _ from "lodash"
import _get from "lodash/get"
import { graphql } from "gatsby"
import React, { useState, useEffect } from "react"

import Layout from "../../components/index/layout"
import { useQueryString } from "../../hooks/useLocation"
import { headerMenu } from "."
import Posts from "../../components/blog/posts"
import SEO from "../../components/seo"
import { BlogTagsPageQuery, MarkdownRemark } from "../../graphqlTypes"

const BlogTagsPage = ({
  data: { site, allMarkdownRemark },
}: {
  data: BlogTagsPageQuery
}) => {
  const siteUrl = _get(site, "siteMetadata.siteUrl", "https://yoonho.ga")
  const queryString = useQueryString()
  const selectedTags =
    typeof queryString.queries.select === "string"
      ? [queryString.queries.select]
      : queryString.queries.select

  const [group] = useState(allMarkdownRemark.group)
  const [tags, setTags] = useState()

  useEffect(() => {
    const tags = _.chain(allMarkdownRemark.group)
      .map(({ fieldValue, nodes }) => ({
        count: nodes.length,
        tag: fieldValue,
        isSelected: _.includes(selectedTags || [], fieldValue),
      }))
      .value()
    setTags(tags)
  }, [])

  const getPosts = () =>
    _.chain(group)
      .filter(({ fieldValue }) => {
        return _.includes(selectedTags, fieldValue)
      })
      .map("nodes")
      .reduce((prev, curr) => _.intersectionWith(prev, curr, _.isEqual))
      .value()

  const posts = selectedTags ? getPosts() : allMarkdownRemark.nodes

  return (
    <Layout menu={headerMenu}>
      <SEO title="Blog Tags" url={siteUrl + "/blog/tags"} />
      <article style={{ padding: "1em" }}>
        <div className="container is-tablet is-margin-center">
          <Tags tags={tags || []} />
          <Posts data={posts as MarkdownRemark[]} />
        </div>
      </article>
    </Layout>
  )
}

export default BlogTagsPage

function Tags({
  tags,
}: {
  tags: Array<{
    tag: string
    isSelected: boolean
    count: number
  }>
}) {
  const { stringify, dispatch } = useQueryString()

  function onAddTag(tag: string) {
    return () => {
      dispatch({
        queryName: "select",
        value: tag,
        operation: "add",
      })

      if (typeof window !== "undefined") window.location.search = stringify()
    }
  }

  function onRemoveTag(tag: string) {
    return () => {
      dispatch({
        queryName: "select",
        value: tag,
        operation: "remove",
      })

      if (typeof window !== "undefined") window.location.search = stringify()
    }
  }

  return (
    <div className="field is-grouped is-grouped-multiline">
      {tags.map(({ tag, isSelected, count }) => {
        return (
          <div className="control" key={"tag-" + tag}>
            {isSelected ? (
              <span className="tags has-addons" onClick={onRemoveTag(tag)}>
                <a className={"tag is-link"}>
                  {tag}({count})
                </a>
                <a className="tag is-delete"></a>
              </span>
            ) : (
              <a className="tag" onClick={onAddTag(tag)}>
                {tag}({count})
              </a>
            )}
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query BlogTagsPage {
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
      group(field: frontmatter___tags) {
        fieldValue
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
            featuredImage {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  originalImg
                  originalName
                  presentationHeight
                  presentationWidth
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
