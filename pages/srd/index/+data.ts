import { createSRDPageIndex, fetchSRDPages } from '../srdDataUtils';

export async function data() {
    const pages = await fetchSRDPages();

    const index = createSRDPageIndex(pages);

    return { index };
}
