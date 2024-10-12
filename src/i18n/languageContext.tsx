import React, { createContext, useContext } from 'react';

import { useTranslation } from 'react-i18next';

const LanguageContext = createContext(
    {} as {
        language: string;
        setLanguage: (language: string) => void;
    }
);

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();

    return (
        <LanguageContext.Provider
            value={{
                language: i18n.language,
                setLanguage: (language: string) => {
                    i18n.changeLanguage(language);
                    window.localStorage.setItem('i18nextLng', language);
                },
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
