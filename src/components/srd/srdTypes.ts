export type SRDSection = {
    title: string;
    pages: SRDPageFrontmatter[];
};

export type SRDIndex = {
    sections: SRDSection[];
};

export type SRDPageFrontmatter = {
    title: string;
    slug: string;
    section?: string;
    order?: number;
    version?: string;
    subtitles?: {
        title: string;
        slug: string;
    }[];
};

export type SRDPage = {
    frontmatter: SRDPageFrontmatter;
    content: string;
    filename: string;
};
