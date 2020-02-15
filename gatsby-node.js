const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
            allRestApiApiV1Works {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
      `
    )
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    const workTemplate = path.resolve(`src/templates/work-page.js`)
    result.data.allRestApiApiV1Works.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: workTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  }