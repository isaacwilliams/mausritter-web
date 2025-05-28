export type SRDPageFrontmatter = {
    title: string;
    slug: string;
    section?: string;
    order?: number;
};

export type SRDPage = {
    frontmatter: SRDPageFrontmatter;
    content: string;
    filename: string;
};
