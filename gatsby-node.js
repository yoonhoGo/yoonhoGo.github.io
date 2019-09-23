/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

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
    console.log(`TCL: exports.createPages -> slug`, slug)
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
      },
    })
  })
}
