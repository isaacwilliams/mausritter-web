import { fetchSRDPages } from '../srdDataUtils';

export async function onBeforePrerenderStart() {
    const pages = await fetchSRDPages();

    return pages
        .filter((page) => page.frontmatter.title !== 'meta')
        .map((page) => `/srd/${page.frontmatter.slug}`);
}
