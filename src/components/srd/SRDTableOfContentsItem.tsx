import React, { useState } from 'react';
import { styled } from 'styled-components';
import { SRDPageFrontmatter } from './srdTypes';
import colors from '../styles/colors';

interface SRDEntryProps {
    entry: SRDPageFrontmatter;
    isCurrent: boolean;
}

const ListItem = styled.li<{ $current: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0.2rem;
    background: ${({ $current }) => ($current ? colors.highlight : 'none')};
    &.current a {
        color: black;
    }
`;

const EntryLink = styled.a`
    flex: 1 1 auto;
    text-decoration: none;
    color: black;
    font-weight: bold;
`;

const ToggleButton = styled.button`
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1em;
    padding: 0 0.5em;
    color: rgba(0, 0, 0, 0.6);
`;

const SubtitlesList = styled.ul`
    list-style: none;
    margin-left: 1.2rem;
    padding: 0;
    a {
        color: #777;
        font-weight: normal;
    }
`;

const TableOfContentsItem: React.FC<SRDEntryProps> = ({ entry, isCurrent }) => {
    const [open, setOpen] = useState(isCurrent);
    const hasSubtitles =
        Array.isArray(entry.subtitles) && entry.subtitles.length > 0;

    return (
        <>
            <ListItem
                $current={isCurrent}
                className={isCurrent ? 'current' : ''}
            >
                <EntryLink href={`/srd/${entry.slug}`}>{entry.title}</EntryLink>
                {hasSubtitles && (
                    <ToggleButton
                        aria-label={
                            open ? 'Collapse subtitles' : 'Expand subtitles'
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen((o) => !o);
                        }}
                        tabIndex={0}
                    >
                        {open ? '▾' : '▸'}
                    </ToggleButton>
                )}
            </ListItem>
            {hasSubtitles && open && (
                <SubtitlesList className="subtitles">
                    {entry.subtitles &&
                        entry.subtitles.map((subtitle, subIndex) => (
                            <li key={subIndex}>
                                <a href={`/srd/${entry.slug}#${subtitle.slug}`}>
                                    {subtitle.title}
                                </a>
                            </li>
                        ))}
                </SubtitlesList>
            )}
        </>
    );
};

export default TableOfContentsItem;
