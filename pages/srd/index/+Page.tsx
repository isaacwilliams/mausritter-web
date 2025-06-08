import React from 'react';
import { useData } from 'vike-react/useData';

import SiteContainer from '../../../src/components/layout/SiteContainer';
import Navigation from '../../../src/components/navigation/Navigation';
import Footer from '../../../src/components/navigation/Footer';

import SRDContainer from '../../../src/components/srd/SRDContainer';
import SRDTableOfContents from '../../../src/components/srd/SRDTableOfContents';
import SRDBodyText from '../../../src/components/srd/SRDBodyText';
import SRDMarkdownRenderer from '../../../src/components/srd/SRDMarkdownRenderer';
import { SRDIndex, SRDPage } from '../../../src/components/srd/srdTypes';

const IndexPage = () => {
    const { currentPage } = useData() as {
        index: SRDIndex;
        currentPage?: SRDPage;
    };

    return (
        <SiteContainer>
            <Navigation />

            <SRDContainer>
                <SRDTableOfContents />

                {currentPage && (
                    <SRDBodyText>
                        <SRDMarkdownRenderer content={currentPage.content} />
                    </SRDBodyText>
                )}
            </SRDContainer>

            <Footer />
        </SiteContainer>
    );
};

export default IndexPage;
