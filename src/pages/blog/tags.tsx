import _ from "lodash"
import _get from "lodash/get"
import { graphql } from "gatsby"
import React, { useState, useEffect } from "react"

import Layout from "../../components/index/layout"
import { useQueryString } from "../../hooks/useLocation"
import { headerMenu } from "."
import Posts from "../../components/blog/posts"
import SEO from "../../components/seo"
import { BlogTagsPageQuery } from "../../graphqlTypes"

const BlogTagsPage = ({ data: { site } }: { data: BlogTagsPageQuery }) => {
  const siteUrl = _get(site, "siteMetadata.siteUrl", "https://yoonho.ga")
  const queryString = useQueryString()
  const selectedTags =
    typeof queryString.queries.select === "string"
      ? [queryString.queries.select]
      : queryString.queries.select

  const [edges, setEdges] = useState()
  const [tags, setTags] = useState()

  useEffect(() => {
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
    setTags(tags)
  }, [edges])

  return (
    <Layout menu={headerMenu}>
      <SEO title="Blog Tags" url={siteUrl + "/blog/tags"} />
      <article style={{ padding: "1em" }}>
        <div className="container is-tablet is-margin-center">
          <Tags tags={tags || []} />
          <Posts
            getRawPosts={setEdges}
            filter={
              selectedTags &&
              _.matches({
                node: {
                  frontmatter: {
                    tags: selectedTags,
                  },
                },
              })
            }
          />
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
  }
`
