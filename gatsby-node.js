const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { fields: [frontmatter___order], order: ASC }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            order
                            section
                            title
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const SRDTemplate = require.resolve(`./src/templates/SRDTemplate.js`);

    const srdPages = result.data.allMarkdownRemark.edges;

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log('path', `srd/${node.frontmatter.slug}`);
        createPage({
            path: `srd/${node.frontmatter.slug}`,
            component: SRDTemplate,
            context: {
                // additional data can be passed via context
                ...node.frontmatter,
                srdPages,
            },
        })
    });
}
