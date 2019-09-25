/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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
      value: getPath(node.frontmatter.slug) + '/',
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await createPostPage({ createPage, graphql })
}

async function createPostPage({ createPage, graphql}) {
  const result = await graphql(/* GraphQL */`
    query CreatePostPage {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const blogPostTemplate = path.resolve(`src/templates/post.tsx`)
    const slug = node.frontmatter.slug
    createPage({
      path: getPath(slug),
      component: blogPostTemplate,
      context: {
        slug,
      },
    })
  })
}

function getPath(slug) {
  return '/blog' + slug
}