import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend((language: string, namespace: string) =>
            import(
                `../locales/${language}/${namespace}.json` /* webpackChunkName: "locales/[request]" */
            )
        )
    )

    // init i18next
    .init({
        detection: {
            order: ['querystring', 'localStorage'],
            caches: ['localStorage'],
            lookupQuerystring: 'lang',
            lookupLocalStorage: 'i18nextLng'
        },
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development' ? true : false,
        load: 'languageOnly',
        react: {
            transSupportBasicHtmlNodes: false,
        },
        ns: ['mouse_generator']
    });

export default i18n;
