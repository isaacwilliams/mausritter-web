import { visit } from 'unist-util-visit';

/**
 * remark plugin to transform :::statblock::: into a statblock directive node
 */
export default function remarkStatblockDirective() {
    return (tree) => {
        visit(tree, (node) => {
            console.log(node.type);

            if (
                node.type === 'containerDirective' &&
                node.name === 'statblock'
            ) {
                node.data = node.data || {};
                node.data.hName = 'div';
                node.data.hProperties = {
                    className: ['statblock'],
                };
            }
        });
    };
}
