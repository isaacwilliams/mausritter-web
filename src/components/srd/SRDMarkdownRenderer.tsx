import React from 'react';
import Markdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { DiceTableWrapper } from './DiceTableWrapper';
import remarkDirective from 'remark-directive';
import rehypeDirective from 'remark-directive-rehype';
import remarkStatblockDirective from './remarkStatblockDirective';
import Statblock from './Statblock';

const CustomTable: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (
    props,
) => (
    <DiceTableWrapper>
        <table {...props}>{props.children}</table>
    </DiceTableWrapper>
);

const CustomTH: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = (
    props,
) => {
    const { children, ...rest } = props;

    const text =
        typeof children === 'string'
            ? children
            : Array.isArray(children)
              ? children.join('')
              : '';

    const diceRegex = /d\d+/i;
    const className = diceRegex.test(text) ? 'dice-header' : undefined;

    return (
        <th className={className} {...rest}>
            {children}
        </th>
    );
};

const SRDMarkdownRenderer: React.FC<{
    content: string;
}> = ({ content }) => {
    return (
        <Markdown
            remarkPlugins={[
                remarkGfm,
                remarkDirective,
                remarkStatblockDirective,
            ]}
            rehypePlugins={[rehypeSlug, rehypeDirective]}
            components={{
                table: CustomTable,
                th: CustomTH,
            }}
        >
            {content}
        </Markdown>
    );
};

export default SRDMarkdownRenderer;
