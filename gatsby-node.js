const path = require(`path`);
const { first } = require('lodash/fp');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allFile(
                sort: { fields: childMarkdownRemark___frontmatter___order }
                filter: {sourceInstanceName: {eq: "srd-markdown"}}
            ) {
                edges {
                    node {
                        markdown: childMarkdownRemark {
                            frontmatter {
                                title
                                section
                                slug
                            }
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

    result.data.allFile.edges.forEach(({ node: { markdown } }) => {
        createPage({
            path: `srd/${markdown.frontmatter.slug}`,
            component: SRDTemplate,
            context: markdown.frontmatter,
        })
    });

    const firstPage = first(result.data.allFile.edges).node.markdown;

    createPage({
        path: `srd`,
        component: SRDTemplate,
        context: firstPage.frontmatter,
    });

    // first(result.data.allFile).node
}
