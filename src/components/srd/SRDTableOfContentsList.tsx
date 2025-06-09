import { styled } from 'styled-components';
import colors from '../styles/colors';
import font from '../styles/font';
import TableOfContentsItem from './SRDTableOfContentsItem';
import { SRDIndex, SRDPage } from './srdTypes';
import media from '../styles/media';

const TOCList = styled.div`
    margin-top: 1.6rem;
    font-size: 1rem;
    line-height: 1.4;

    a {
        ${font.body};
        color: black;
        font-weight: bold;
        text-decoration: underline;
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

    padding-bottom: 0.4rem;
`;

const TOCListSection = styled.div`
    margin-bottom: 1.6rem;
`;

const SRDTableOfContentsList: React.FC<{
    index: SRDIndex;
    currentPage?: SRDPage;
}> = ({ index, currentPage }) => (
    <TOCList>
        {index.sections.map(({ title, pages }, sectionIdx) => (
            <TOCListSection key={sectionIdx}>
                <TOCSectionTitle>{title}</TOCSectionTitle>
                <ul>
                    {pages.map((entry, pageIdx) => {
                        const isCurrent =
                            currentPage?.frontmatter.slug === entry.slug;
                        return (
                            <TableOfContentsItem
                                key={pageIdx}
                                entry={entry}
                                isCurrent={isCurrent}
                            />
                        );
                    })}
                </ul>
            </TOCListSection>
        ))}
    </TOCList>
);

export default SRDTableOfContentsList;
