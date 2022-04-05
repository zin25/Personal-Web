exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      {
        contentful: allContentfulBlogs {
          nodes {
            slug
          }
        }
      }
    `)
  
    const contentfulTemplate = require.resolve('./src/templates/blog-templates.js')

    if (result.errors) {
        return
      }

      result.data.contentful.nodes.forEach(post => {
        createPage ({
          component: contentfulTemplate,
          path: `/${post.slug}`,
          context: {
            slug: post.slug
          }
        })
      })
    }
  