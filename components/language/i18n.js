import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import en from './ENG/en';
import rus from './RUS/rus';
import hy from './ARM/hy';


const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  rus: {
    translation: {
      ...rus,
    },
  },
  hy: {
    translation: {
      ...hy,
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en','rus','hy'],
    resources,
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
