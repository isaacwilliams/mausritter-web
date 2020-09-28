import React from 'react';
import styled from 'styled-components';
import { groupBy, get } from 'lodash/fp';
import { Link } from 'gatsby';

import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';
import BodyText from '../components/styles/BodyText';

import font from '../components/styles/font';

const FloatingNavDark = styled(Navigation)`
    background: #100113;
    color: white;
`

const BodyTextSmall = styled(BodyText)`
    font-size: 1rem;
`

const TOC = styled.nav`
    position: fixed;

    width: 20rem;
    height: 100%;

    padding-top: 4rem;
    padding-right: 1rem;
    margin-right: 2rem;

    font-size: 1rem;
    line-height: 1;

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
    padding-bottom: 1rem;
`;

const BodyContainer = styled.div`
    margin-left: 24rem;
    max-width: 30rem;
    padding-top: 6rem;
    padding-bottom: 4rem;
`

const SRDContainer = styled.div`
    position: relative;
`

const SRDTemplate = ({ data, pageContext: { srdPages } }) => {
    const simplifiedPages = srdPages.map(get('node.frontmatter'));
    const groupedPages = Object.entries(groupBy('section', simplifiedPages));
    const page = get('markdownRemark', data);
    const frontmatter = get('frontmatter', page);

    console.log(page);

    return (
        <SiteContainer>
            <FloatingNavDark />

            <SRDContainer>
                <TOC>
                    {groupedPages.map(([sectionTitle, entries], index) => (
                        <ul key={index}>
                            <TOCSectionTitle>{sectionTitle}</TOCSectionTitle>

                            <ul>
                                {entries.map((entry, index) => {
                                    const currentPage = entry.slug === frontmatter.slug;

                                    return (
                                        <li key={index} className={currentPage ? 'current' : undefined}>
                                            <Link to={`/srd/${entry.slug}`}>{entry.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ul>
                    ))}
                </TOC>
                <BodyContainer>
                    <BodyTextSmall dangerouslySetInnerHTML={{ __html: page.html }} />
                </BodyContainer>
            </SRDContainer>
        </SiteContainer>
    );

    return null;
};

export default SRDTemplate;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
            tableOfContents
        }
    }
`;
