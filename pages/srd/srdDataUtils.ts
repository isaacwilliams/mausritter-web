import { promises as fs } from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import { SRDPage, SRDPageFrontmatter } from '../../src/components/srd/srdTypes';

export const fetchSRDPages = async (): Promise<SRDPage[]> => {
    const dir = path.join(process.cwd(), 'content/srd-markdown');

    const files = await fs.readdir(dir);
    const mdFiles = files.filter((f) => f.endsWith('.md'));

    const pages = await Promise.all(
        mdFiles.map(async (filename): Promise<SRDPage> => {
            const filePath = path.join(dir, filename);
            const content = await fs.readFile(filePath, 'utf-8');
            const { attributes: frontmatter, body } =
                frontMatter<SRDPage['frontmatter']>(content);

            return {
                frontmatter,
                content: body,
                filename,
            };
        }),
    );

    const sortedPages = [...pages].sort((a, b) => {
        const orderA = a.frontmatter.order ?? 0;
        const orderB = b.frontmatter.order ?? 0;

        if (orderA !== orderB) {
            return orderA - orderB;
        }

        return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });

    return sortedPages;
};
