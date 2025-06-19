import { createSRDPageIndex, fetchSRDPages } from '../srdDataUtils';

export async function data(pageContext) {
    const pages = await fetchSRDPages();

    const currentPage = pages.find(
        (page) => page.frontmatter.slug === pageContext.routeParams.id,
    );

    const index = createSRDPageIndex(pages);

    const metaPage = pages.find((page) => page.frontmatter.title === 'meta');
    const downloadUrl = `/srd/mausritter-srd-${metaPage?.frontmatter.version}.md`;

    return { index, currentPage, downloadUrl };
}
