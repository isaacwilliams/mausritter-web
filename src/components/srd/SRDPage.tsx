import { styled } from 'styled-components';
import { useData } from 'vike-react/useData';
import Navigation from '../navigation/Navigation';
import BodyText from '../styles/BodyText';
import ContentContainer from '../layout/ContentContainer';
import font from '../styles/font';

import { SRDPage, SRDPageFrontmatter } from './srdTypes';
import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import SRDBodyText from './SRDBodyText';
import SRDMarkdownRenderer from './SRDMarkdownRenderer';

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
    margin-bottom: 20rem;
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

const SRDTemplate = () => {
    const { pages, currentPage } = useData() as {
        pages: SRDPageFrontmatter[];
        currentPage?: SRDPage;
    };

    const pagesMapBySection = pages.reduce<{
        [section: string]: SRDPageFrontmatter[];
    }>((acc, page) => {
        const section = page.section || 'Uncategorized';
        if (!acc[section]) {
            acc[section] = [];
        }
        acc[section].push(page);
        return acc;
    }, {});

    const groupedPages = Object.entries(pagesMapBySection)
        .sort(([a], [b]) => a.localeCompare(b))
        .sort(([sectionA], [sectionB]) => {
            // Sort sections by a predefined order
            const order = ['Player rules', 'GM rules and resources'];
            const indexA = order.indexOf(sectionA);
            const indexB = order.indexOf(sectionB);
            return indexA - indexB;
        });

    return (
        <SRDContainer>
            <TOC>
                <h1>Mausritter SRD</h1>

                {groupedPages.map(([sectionTitle, entries], index) => (
                    <div key={index}>
                        <TOCSectionTitle>{sectionTitle}</TOCSectionTitle>

                        <ul>
                            {entries.map((entry, index) => {
                                const isCurrent =
                                    currentPage?.frontmatter.slug ===
                                    entry.slug;

                                return (
                                    <li
                                        key={index}
                                        className={isCurrent ? 'current' : ''}
                                    >
                                        <a href={`/srd/${entry.slug}`}>
                                            {entry.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </TOC>
            <BodyContainer>
                {currentPage && (
                    <SRDBodyText>
                        <SRDMarkdownRenderer content={currentPage.content} />
                    </SRDBodyText>
                )}
            </BodyContainer>
        </SRDContainer>
    );
};

export default SRDTemplate;
