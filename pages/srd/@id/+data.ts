import { fetchSRDPages } from '../srdDataUtils';

export async function data(pageContext) {
    const pages = await fetchSRDPages();

    const pageFrontmatters = pages.map((page) => page.frontmatter);

    const currentPage = pages.find(
        (page) => page.frontmatter.slug === pageContext.routeParams.id,
    );

    return { pages: pageFrontmatters, currentPage };
}
