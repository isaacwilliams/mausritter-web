import { createSRDPageIndex, fetchSRDPages } from '../srdDataUtils';

export async function data() {
    const pages = await fetchSRDPages();

    const currentPage = pages[0];

    const index = createSRDPageIndex(pages);

    return { index, currentPage };
}
