import React, { useState } from 'react';

import SiteContainer from '../../src/components/layout/SiteContainer';
import Navigation from '../../src/components/navigation/Navigation';

import CustomItemTool from '../../src/components/generators/customItem/CustomItemTool';

const IndexPage = () => {
    const [bodyPrintMode, setBodyPrintMode] = useState(false);

    return (
        <SiteContainer dark={!bodyPrintMode}>
            {!bodyPrintMode && <Navigation showLanguage={true} />}

            <CustomItemTool
                bodyPrintMode={bodyPrintMode}
                setBodyPrintMode={setBodyPrintMode}
            />
        </SiteContainer>
    );
};

export default IndexPage;
