import React from 'react';
import { useData } from 'vike-react/useData';

import SiteContainer from '../../src/components/layout/SiteContainer';
import Navigation from '../../src/components/navigation/Navigation';
import Footer from '../../src/components/navigation/Footer';

import SRDContainer from '../../src/components/srd/SRDContainer';
import SRDTableOfContents from '../../src/components/srd/SRDTableOfContents';
import SRDBodyText from '../../src/components/srd/SRDBodyText';
import SRDMarkdownRenderer from '../../src/components/srd/SRDMarkdownRenderer';
import { SRDIndex, SRDPage } from '../../src/components/srd/srdTypes';
import useIsMobile from '../../src/components/hooks/useIsMobile';
import SRDTableOfContentsList from '../../src/components/srd/SRDTableOfContentsList';

const IndexPage = () => {
    const { index, currentPage } = useData() as {
        currentPage?: SRDPage;
        index: SRDIndex;
    };

    const isMobile = useIsMobile();

    return (
        <SiteContainer>
            <Navigation
                extraItems={
                    <SRDTableOfContentsList
                        index={index}
                        currentPage={currentPage}
                    />
                }
            />

            <SRDContainer>
                {!isMobile && (
                    <SRDTableOfContents
                        index={index}
                        currentPage={currentPage}
                    />
                )}

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
