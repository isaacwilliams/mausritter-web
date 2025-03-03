import React, { createContext, useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { navigate } from 'vike/client/router';

const LanguageContext = createContext(
    {} as {
        language: string;
        setLanguage: (language: string) => void;
    },
);

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { i18n } = useTranslation(undefined);

    if (!i18n) {
        return children; // or a loading indicator
    }

    return (
        <LanguageContext.Provider
            value={{
                language: i18n.language,
                setLanguage: (language: string) => {
                    i18n.changeLanguage(language);
                    navigate(`?lang=${language}`, {
                        overwriteLastHistoryEntry: true,
                    });
                },
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
