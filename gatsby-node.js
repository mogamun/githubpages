const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const legalSlug = node.frontmatter && node.frontmatter.slug;
    if (legalSlug) {
      createNodeField({ node, name: `slug`, value: legalSlug });
    } else {
      const slug = createFilePath({ node, getNode, basePath: `contents` });
      createNodeField({ node, name: `slug`, value: slug });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              layout
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const template = node.frontmatter.layout === 'legal'
      ? path.resolve(`./src/templates/legal-page.js`)
      : path.resolve(`./src/templates/blog-post.js`);

    createPage({
      path: node.fields.slug,
      component: template,
      context: { slug: node.fields.slug },
    });
  });
};
