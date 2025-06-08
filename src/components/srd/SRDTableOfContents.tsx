import { styled } from 'styled-components';

import colors from '../styles/colors';
import font from '../styles/font';

import srdLogo from './srd-logo.svg';
import { useData } from 'vike-react/useData';
import { SRDIndex, SRDPage } from './srdTypes';

const SRDTitleLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
`;

const SRDTitle = styled.h1`
    font-size: 0;
    color: transparent;
    background: url(${srdLogo}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 6rem;
`;

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
        background: ${colors.highlight};

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

const SRDTableOfContents = () => {
    const { index, currentPage } = useData() as {
        index: SRDIndex;
        currentPage?: SRDPage;
    };

    return (
        <TOC>
            <SRDTitleLink href="/srd">
                <SRDTitle>Mausritter System Reference Document</SRDTitle>
            </SRDTitleLink>

            {index.sections.map(({ title, pages }, index) => (
                <div key={index}>
                    <TOCSectionTitle>{title}</TOCSectionTitle>

                    <ul>
                        {pages.map((entry, index) => {
                            const isCurrent =
                                currentPage?.frontmatter.slug === entry.slug;

                            return (
                                <>
                                    <li
                                        key={index}
                                        className={isCurrent ? 'current' : ''}
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
    );
};

export default SRDTableOfContents;
