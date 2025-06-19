import fs from 'fs';
import path from 'path';
import { fetchSRDPages } from '../srdDataUtils';

export const onAfterRenderHtml = async () => {
    const pages = await fetchSRDPages();

    const metaPage = pages.find((page) => page.frontmatter.title === 'meta');
    const version = metaPage?.frontmatter?.version;

    const combinedMarkdown = pages.map((page) => page.content).join('\n\n');
    const combinedWithTitle = `# Mausritter\n\n${combinedMarkdown}`;

    // Write combinedWithTitle to mausritter-srd in dist/client/srd
    const outputDir = path.join(process.cwd(), 'dist/client/srd');
    const outputPath = path.join(outputDir, `mausritter-srd-${version}.md`);
    fs.writeFileSync(outputPath, combinedWithTitle);
};
