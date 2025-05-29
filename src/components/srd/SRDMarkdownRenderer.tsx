import React from 'react';
import Markdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// Custom table component to add class to headers containing dX
const CustomTable: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (
    props,
) => {
    return <table {...props}>{props.children}</table>;
};

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
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
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
