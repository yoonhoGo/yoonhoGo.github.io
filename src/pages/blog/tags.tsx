import React from "react"
import _ from "lodash"

import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import { Title, PostMetadata } from "../../components/typography"
import { BlogPageQuery, GraphQlSourceFieldsEnum } from "../../graphqlTypes"
import SimpleTags from "../../components/simpleTags"
import { useQueryString } from "../../hooks/useLocation"

const BlogTagsPage = ({ data }: { data: BlogPageQuery }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    allMarkdownRemark: { edges },
  } = data

  const queryString = useQueryString()
  const selectedTags =
    typeof queryString.queries.select === "string"
      ? [queryString.queries.select]
      : queryString.queries.select

  const tags = _.chain(edges)
    .flatMap("node.frontmatter.tags")
    .countBy()
    .mapValues((count, tag) => ({
      count,
      tag,
      isSelected: _.includes(selectedTags || [], tag),
    }))
    .sortBy("tag")
    .value()
  _.remove(tags, tagObj => tagObj.tag === "null")

  const matchedPosts = !selectedTags
    ? edges
    : _.filter(
        edges,
        _.matches({
          node: {
            frontmatter: {
              tags: selectedTags,
            },
          },
        })
      )

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
          <Tags tags={tags} />
          {matchedPosts.map(({ node }) => {
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
              <Link className="box" to={path} key={"tags-" + slug}>
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

export default BlogTagsPage

export const pageQuery = graphql`
  query BlogTagsPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark {
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
      window.location.search = stringify()
    }
  }

  function onRemoveTag(tag: string) {
    return () => {
      dispatch({
        queryName: "select",
        value: tag,
        operation: "remove",
      })
      window.location.search = stringify()
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
