const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/templates/NodePageTemplate/index.js`);

    resolve(
      graphql(
        `
          {
            allNodePage(
              filter: {status: {eq:true}}
            ) {
              edges {
                 node {
                  status
                  nid:drupal_internal__nid
                  path { alias }
                }
              }
            }
          }
        `
      )
      // @todo: Add starters for other content types.
        .then((result) => {
          if (result.errors) reject(result.errors);
          if (!result.data) reject('No data found. Fix your GraphQL stuff');
          console.log('Creating Page Nodes');
          result.data.allNodePage.edges.forEach(({ node }) => {
            createPage({
              path: node.path.alias,
              component: pageTemplate,
              context: {
                slug: node.nid
              }
            })
          });
        })
    )
  })
}
