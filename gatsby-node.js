/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require("fs")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    /**
     * for blog post
     */
    createNodeField({
      node,
      name: `path`,
      value: getPath(node.frontmatter.slug) + "/",
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await createPostPage({ createPage, graphql })
  createPostsToJson({ graphql })
}

async function createPostPage({ createPage, graphql }) {
  const {
    data: {
      allMarkdownRemark: { nodes },
    },
  } = await graphql(/* GraphQL */ `
    query CreatePostPage {
      allMarkdownRemark {
        nodes {
          fields {
            path
          }
          excerpt(format: PLAIN)
          timeToRead
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
  `)

  nodes.forEach((node, index) => {
    const blogPostTemplate = path.resolve(`src/templates/post.tsx`)
    const slug = node.frontmatter.slug
    createPage({
      path: getPath(slug),
      component: blogPostTemplate,
      context: {
        slug,
        previous: index === nodes.length - 1 ? null : nodes[index + 1],
        next: index === 0 ? null : nodes[index - 1],
      },
    })
  })
}

function getPath(slug) {
  return "/blog" + slug
}

async function createPostsToJson({ graphql }) {
  const { data } = await graphql(/* GraphQL */ `
    query PostsToJson {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            path
          }
          excerpt(format: PLAIN)
          timeToRead
          internal {
            content
          }
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
  `)
  fs.writeFile(
    __dirname + "/static/json/posts.json",
    JSON.stringify(data.allMarkdownRemark.nodes),
    err => {
      if (err) {
        console.error(err)
      }
      console.log("export static posts at /static/json/posts.json")
    }
  )
}
