const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const {getBlogRelPath} = require('./src/utils/blog-path');

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
              tags
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
        path: getBlogRelPath(node.fields.slug),
        component: path.resolve('src/components/layout/post.js'),
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

exports.onCreatePage = ({page, actions}) => {
  const {deletePage, createPage} = actions;

  return new Promise(resolve => {
    if (~page.componentPath.indexOf('/src/pages/index/')) {
      deletePage(page);
    }

    if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
      createPage({
        ...page,
        path: '/',
      });
    }

    resolve();
  });
};
