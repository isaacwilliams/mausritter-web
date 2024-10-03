import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

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
        lng: window?.localStorage?.getItem('i18nextLng') || undefined,
        debug: process.env.NODE_ENV === 'development' ? true : false,
        load: 'languageOnly',
        react: {
            transSupportBasicHtmlNodes: false,
        },
        ns: ['mouse_generator'],
        // order and from where user language should be detected, only using navigator for now
        detection: {
            order: ['navigator'],
        },
    });

export default i18n;
