import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Імпорт файлів перекладів
import en from '../locales/en/translation.json';
import ru from '../locales/ru/translation.json';
import hi from '../locales/hi/translation.json'; // Hinglish
import fa from '../locales/fa/translation.json'; // Farsi
import ar from '../locales/ar/translation.json'; // Modern Standard Arabic
import zh from '../locales/zh/translation.json'; // Chinese

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
      hi: { // Hinglish
        translation: hi,
      },
      fa: { // Farsi
        translation: fa,
      },
      ar: { // Modern Standard Arabic
        translation: ar,
      },
      zh: { // Chinese
        translation: zh,
      },
    },
    lng: 'en', // мова за замовчуванням
    fallbackLng: 'en', // мова, яка буде використана, якщо переклад для поточної мови відсутній
    interpolation: {
      escapeValue: false, // react вже захищає від XSS
    },
  });

export default i18n;
