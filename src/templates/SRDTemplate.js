import React from 'react';
import { styled } from 'styled-components';
import lodash from 'lodash/fp';
const { groupBy, get } = lodash;
import { Link, graphql } from 'gatsby';

import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';
import BodyText from '../components/styles/BodyText';
import ContentContainer from '../components/layout/ContentContainer';

import font from '../components/styles/font';

const FloatingNavDark = styled(Navigation)`
    background: #100113;
    color: white;
`;

const BodyTextSmall = styled(BodyText)`
    font-size: 1.2rem;
`;

const SRDContainer = styled(ContentContainer)`
    display: grid;
    grid-template-columns: 20rem 3fr;
`;

const BodyContainer = styled.div``;

const TOC = styled.nav`
    position: sticky;
    top: 0;
    left: 0;

    align-self: start;

    padding-top: 4rem;
    padding-right: 4rem;

    font-size: 1rem;
    line-height: 1.4;

    a {
        ${font.body};
        color: black;
        font-weight: bold;
    }

    ul {
        list-style: none;

        ul {
            margin: 0;
        }
    }

    li {
        margin: 0;
        padding: 0.2rem;
    }

    li.current {
        background: yellow;

        a {
            color: black;
        }
    }
`;

const TOCSectionTitle = styled.div`
    ${font.display};
    padding-top: 1.6rem;
    padding-bottom: 0.4rem;
`;

const SRDTemplate = ({
    data: {
        page: { html, frontmatter },
        toc,
    },
}) => {
    const tocPages = toc.edges.map(get('node.markdown.frontmatter'));
    const groupedPages = Object.entries(groupBy('section', tocPages));

    return (
        <SiteContainer>
            <FloatingNavDark />

            <SRDContainer>
                <TOC>
                    <h1>Mausritter SRD</h1>
                    {groupedPages.map(([sectionTitle, entries], index) => (
                        <div key={index}>
                            <TOCSectionTitle>{sectionTitle}</TOCSectionTitle>

                            <ul>
                                {entries.map((entry, index) => {
                                    const currentPage =
                                        entry.slug === frontmatter.slug;

                                    return (
                                        <li
                                            key={index}
                                            className={
                                                currentPage
                                                    ? 'current'
                                                    : undefined
                                            }
                                        >
                                            <Link to={`/srd/${entry.slug}`}>
                                                {entry.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </TOC>
                <BodyContainer>
                    <BodyTextSmall dangerouslySetInnerHTML={{ __html: html }} />
                </BodyContainer>
            </SRDContainer>
        </SiteContainer>
    );
};

export default SRDTemplate;

export const pageQuery = graphql`
    query ($slug: String!) {
        page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
        }

        toc: allFile(
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
`;
