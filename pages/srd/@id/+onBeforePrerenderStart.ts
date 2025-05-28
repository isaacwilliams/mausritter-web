import { fetchSRDPages } from '../srdDataUtils';

export async function onBeforePrerenderStart() {
    const pages = await fetchSRDPages();

    return pages.map((page) => `/srd/${page.frontmatter.slug}`);
}
