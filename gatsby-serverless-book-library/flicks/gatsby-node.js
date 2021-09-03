const path = require(`path`);
const _ = require("lodash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allBooks {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  result.data.allBooks.edges.forEach((edge) => {
    createPage({
      path: `/${_.kebabCase(edge.node.title)}/`,
      component: path.resolve(`./src/templates/BookDetails.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        title: edge.node.title,
      },
    });
  });
};
