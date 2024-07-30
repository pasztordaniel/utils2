import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import hu from './locales/hu.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      hu: { translation: hu },
      en: { translation: en },
    },
  });

export default i18n;

export * from 'react-i18next';
