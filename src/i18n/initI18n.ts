import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

const getLocalStorageLanguage = () => {
    if (typeof window === 'undefined') return undefined;
    return window?.localStorage?.getItem('i18nextLng') || undefined;
};

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .use(detector)
    .use(
        resourcesToBackend((language: string, namespace: string) =>
            import(
                `../locales/${language}/${namespace}.json` /* webpackChunkName: "locales/[request]" */
            )
        )
    )

    // init i18next
    .init({
        lng: getLocalStorageLanguage(),
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development' ? true : false,
        load: 'languageOnly',
        react: {
            transSupportBasicHtmlNodes: false,
        },
        ns: ['mouse_generator'],
    });

export default i18n;
