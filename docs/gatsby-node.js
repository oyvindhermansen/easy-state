const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const markdownTemplate = path.resolve('src/templates/docs.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              order
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      console.log(res.errors);
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: markdownTemplate
      });
    });
  });
};
