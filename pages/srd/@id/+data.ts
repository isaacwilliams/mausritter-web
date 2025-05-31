import { createSRDPageIndex, fetchSRDPages } from '../srdDataUtils';

export async function data(pageContext) {
    const pages = await fetchSRDPages();

    const currentPage = pages.find(
        (page) => page.frontmatter.slug === pageContext.routeParams.id,
    );

    const index = createSRDPageIndex(pages, currentPage);

    return { index, currentPage };
}
