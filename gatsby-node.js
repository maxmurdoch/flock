/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const R = require('ramda')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')
const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
  // https://github.com/danielmahon/gatsby-remark-relative-images#to-convert-frontmatter-images
  fmImagesToRelative(node)
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  return new Promise(resolve => {
    return graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const isSettingsPage = R.pathEq(
        ['node', 'frontmatter', 'title'],
        'settings'
      )

      // remove settings page because it's just a place to store global info in the CMS
      const markdownPages = R.reject(
        isSettingsPage,
        result.data.allMarkdownRemark.edges
      )

      markdownPages.forEach(({node}) => {
        const {
          fields: {slug},
          id,
          frontmatter: {title}
        } = node

        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          context: {
            title,
            id,
            slug
          }
        })
      })
      resolve()
    })
  })
}
