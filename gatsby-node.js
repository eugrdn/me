const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({actions: {createPage}, graphql}) =>
  graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(({errors, data}) => {
    if (errors) {
      return Promise.reject(errors);
    }
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(({node}, index) =>
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/layouts/post.js`),
        context: {
          slug: node.fields.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      }),
    );
  });

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode, basePath: 'pages'});
    createNodeField({
      node,
      name: 'slug',
      value,
    });
  }
};
