import { fetchSRDPages } from '../srdDataUtils';

export async function data() {
    const pages = await fetchSRDPages();

    const pageFrontmatters = pages.map((page) => page.frontmatter);

    return { pages: pageFrontmatters };
}
