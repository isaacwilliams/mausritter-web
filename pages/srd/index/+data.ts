import { createSRDPageIndex, fetchSRDPages } from '../srdDataUtils';

export async function data() {
    const pages = await fetchSRDPages();

    const currentPage = pages.filter(
        (page) => page.frontmatter.title !== 'meta',
    )[0];

    const index = createSRDPageIndex(pages);

    const metaPage = pages.find((page) => page.frontmatter.title === 'meta');
    const downloadUrl = `/srd/mausritter-srd-${metaPage?.frontmatter.version}.md`;

    return { index, currentPage, downloadUrl };
}
