const path = require(`path`);
const { first, prop } = require('lodash/fp');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { Client } = require('@notionhq/client');
const { parseNotionPage } = require('./src/utils/notionUtils');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const notion = new Client({
        auth: process.env.MAUSRITTER_NOTION_API_KEY,
    });

    const databaseId = '542dceff9af344b99327109f29cb309d';
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Status',
            status: {
                equals: 'Done',
            },
        },
        sorts: [
            {
                property: 'Name',
                direction: 'ascending',
            },
        ],
    });

    const creatures = response.results.map(parseNotionPage);

    const result = await graphql(`
        {
            allFile(
                sort: { fields: childMarkdownRemark___frontmatter___order }
                filter: { sourceInstanceName: { eq: "srd-markdown" } }
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
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const SRDTemplate = require.resolve(`./src/templates/SRDTemplate.js`);
    const BestiaryTemplate = require.resolve(
        `./src/templates/BestiaryTemplate.tsx`
    );

    result.data.allFile.edges.forEach(({ node: { markdown } }) => {
        createPage({
            path: `srd/${markdown.frontmatter.slug}`,
            component: SRDTemplate,
            context: markdown.frontmatter,
        });
    });

    const firstPage = first(result.data.allFile.edges).node.markdown;

    console.log(JSON.stringify(creatures, null, 2));

    createPage({
        path: `srd`,
        component: SRDTemplate,
        context: firstPage.frontmatter,
    });

    createPage({
        path: `bestiary`,
        component: BestiaryTemplate,
        context: {
            creatures: creatures,
        },
    });

    // first(result.data.allFile).node
};
