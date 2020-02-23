import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  //plugins
  .use(LanguageDetector) // language detector used in browser environment for i18next
  //binding
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    //logging
    debug: true,
    //languages, namespaces, resources
    resources: {
        "en": { translation: require('./translations/en.json') },
        "fr": { translation: require('./translations/fr.json') }
    },
    fallbackLng: "en",
    whitelist: ['en', 'fr'],
    //translation defaults
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
