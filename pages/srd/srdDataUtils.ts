import { promises as fs } from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import {
    SRDIndex,
    SRDPage,
    SRDPageFrontmatter,
} from '../../src/components/srd/srdTypes';

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

/**
 * Creates subtitles for a given SRD page.
 * Subtitles are derived from reading the page content and extracting
 * headings that are marked with the `##` syntax.
 */
const createSubTitlesForPage = (
    page: SRDPage,
): SRDPageFrontmatter['subtitles'] => {
    const subtitles: SRDPageFrontmatter['subtitles'] = [];
    const lines = page.content.split('\n');

    lines.forEach((line) => {
        // Only match lines that start with exactly two hashes followed by a space
        const match = line.match(/^##\s+(.+)/);
        if (match) {
            let title = match[1].trim();
            // Remove all leading hashes and whitespace from the title
            title = title.replace(/^#+\s*/, '');
            const slug = title
                .toLowerCase()
                .replace(/[.,]/g, '') // remove "." and ","
                .replace(/\s+/g, '-');
            subtitles.push({ title, slug });
        }
    });

    return subtitles;
};

export const createSRDPageIndex = (
    pages: SRDPage[],
    currentPage?: SRDPage,
): SRDIndex => {
    const pagesMapBySection: { [section: string]: SRDPageFrontmatter[] } = {};

    // Create subtitles for each page
    pages.forEach((page) => {
        if (page.frontmatter.subtitles) return;
        if (page !== currentPage) return;

        page.frontmatter.subtitles = createSubTitlesForPage(page);
    });

    pages.forEach((page) => {
        const section = page.frontmatter.section || 'Uncategorized';
        if (!pagesMapBySection[section]) {
            pagesMapBySection[section] = [];
        }
        pagesMapBySection[section].push(page.frontmatter);
    });

    const sections: SRDIndex['sections'] = Object.entries(
        pagesMapBySection,
    ).map(([section, pages]) => ({
        title: section,
        pages: pages.sort(
            (a, b) =>
                (a.order ?? 0) - (b.order ?? 0) ||
                a.title.localeCompare(b.title),
        ),
    }));

    // sort the sections by the order of the first page in each section
    sections.sort((a, b) => {
        const orderA = a.pages[0]?.order ?? 0;
        const orderB = b.pages[0]?.order ?? 0;
        return orderA - orderB || a.title.localeCompare(b.title);
    });

    return { sections };
};
