const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== `MarkdownRemark`) return;

  const fileNode = getNode(node.parent);
  const sourceInstance = fileNode && fileNode.sourceInstanceName;
  const isWiki = sourceInstance === 'wiki';
  const legalSlug = node.frontmatter && node.frontmatter.slug;

  if (legalSlug) {
    createNodeField({ node, name: `slug`, value: legalSlug });
    createNodeField({ node, name: `isWiki`, value: false });
  } else if (isWiki) {
    const slug = createFilePath({ node, getNode, basePath: `wiki` });
    createNodeField({ node, name: `slug`, value: `/wiki${slug}` });
    createNodeField({ node, name: `isWiki`, value: true });
  } else {
    const slug = createFilePath({ node, getNode, basePath: `contents` });
    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `isWiki`, value: false });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              isWiki
            }
            frontmatter {
              layout
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, isWiki } = node.fields;

    if (isWiki) {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/wiki-page.js`),
        context: { slug },
      });
    } else if (node.frontmatter.layout === 'legal') {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/legal-page.js`),
        context: { slug },
      });
    } else {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: { slug },
      });
    }
  });
};
