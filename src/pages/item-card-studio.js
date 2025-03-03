import React, { useState } from 'react';
import { styled } from 'styled-components';

import SEO from '../components/layout/SEO';
import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';

import CustomItemTool from '../components/generators/customItem/CustomItemTool';

const IndexPage = () => {
    const [bodyPrintMode, setBodyPrintMode] = useState(false);

    return (
        <SiteContainer dark={!bodyPrintMode}>
            <SEO title="Item card studio" />

            {!bodyPrintMode && <Navigation showLanguage={true} />}

            <CustomItemTool
                bodyPrintMode={bodyPrintMode}
                setBodyPrintMode={setBodyPrintMode}
            />
        </SiteContainer>
    );
};

export default IndexPage;
