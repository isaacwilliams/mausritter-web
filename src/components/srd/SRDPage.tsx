import { styled } from 'styled-components';
import { useData } from 'vike-react/useData';
import Navigation from '../navigation/Navigation';
import BodyText from '../styles/BodyText';
import ContentContainer from '../layout/ContentContainer';
import font from '../styles/font';

import { SRDIndex, SRDPage, SRDPageFrontmatter } from './srdTypes';
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
    }

    ul.subtitles {
        margin-left: 1.2rem;

        a {
            color: #777;
            font-weight: normal;
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
    const { index, currentPage } = useData() as {
        index: SRDIndex;
        currentPage?: SRDPage;
    };

    return (
        <SRDContainer>
            <TOC>
                <h1>Mausritter SRD</h1>

                {index.sections.map(({ title, pages }, index) => (
                    <div key={index}>
                        <TOCSectionTitle>{title}</TOCSectionTitle>

                        <ul>
                            {pages.map((entry, index) => {
                                const isCurrent =
                                    currentPage?.frontmatter.slug ===
                                    entry.slug;

                                return (
                                    <>
                                        <li
                                            key={index}
                                            className={
                                                isCurrent ? 'current' : ''
                                            }
                                        >
                                            <a href={`/srd/${entry.slug}`}>
                                                {entry.title}
                                            </a>
                                        </li>
                                        {entry.subtitles && (
                                            <ul className="subtitles">
                                                {entry.subtitles.map(
                                                    (subtitle, subIndex) => (
                                                        <li key={subIndex}>
                                                            <a
                                                                href={`/srd/${entry.slug}#${subtitle.slug}`}
                                                            >
                                                                {subtitle.title}
                                                            </a>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </>
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
