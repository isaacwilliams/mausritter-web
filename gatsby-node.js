const path = require(`path`);
const { first, prop } = require('lodash/fp');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { Client } = require('@notionhq/client');
const snakeCase = require('lodash/fp/snakeCase');

const parseNotionTextProperty = text => {
    let annotationStartMarkup = '';
    let annotationEndMarkup = '';

    if (text.annotations.bold) {
        annotationStartMarkup += '<strong>';
        annotationEndMarkup += '</strong>';
    }

    if (text.annotations.italic) {
        annotationStartMarkup += '<em>';
        annotationEndMarkup += '</em>';
    }

    if (text.annotations.strikethrough) {
        annotationStartMarkup += '<del>';
        annotationEndMarkup += '</del>';
    }

    if (text.annotations.underline) {
        annotationStartMarkup += '<u>';
        annotationEndMarkup += '</u>';
    }

    if (text.annotations.code) {
        annotationStartMarkup += '<code>';
        annotationEndMarkup += '</code>';
    }

    return `${annotationStartMarkup}${text.text.content}${annotationEndMarkup}`;
};

const parseNotionProperty = property => {
    switch (property.type) {
        case 'number':
            return property.number;
        case 'title':
            return property.title[0].plain_text;
        case 'rich_text':
            return property.rich_text.map(parseNotionProperty).join('');
        case 'text':
            return parseNotionTextProperty(property);
        case 'select':
            return property.select?.name;
        case 'multi_select':
            return property.multi_select.map(({ name }) => name);
        case 'status':
            return property.status.name;
        case 'checkbox':
            return property.checkbox;
        default:
            return property;
    }
};

const parseNotionPage = page => {
    const { id, properties } = page;

    const parsedProperties = Object.entries(properties).reduce(
        (acc, [key, value]) => {
            acc[snakeCase(key)] = parseNotionProperty(value);
            return acc;
        },
        {}
    );

    return {
        id,
        properties: parsedProperties,
    };
};

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
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
