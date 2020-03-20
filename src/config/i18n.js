import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locale/en.json';
import fr from '../locale/fr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            fr,

        },
        fallbackLng: 'en',
        debug: process.env.NODE_ENV !== 'production',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
    });
export default i18n;
