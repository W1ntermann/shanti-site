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

  // Debug helper: when `localStorage.i18n_show_keys === '1'`, make `i18n.t()` return the key string
  // so components display keys like `home.tokenomics.title` (useful for locating missing translations).
  if (typeof window !== 'undefined') {
    const originalT = i18n.t.bind(i18n) as any;

    const isShowingKeys = () => window.localStorage?.getItem('i18n_show_keys') === '1';

    i18n.t = ((key: any, ...rest: any[]) => {
      if (isShowingKeys()) {
        if (typeof key === 'string') return key;
        if (Array.isArray(key)) return key.join(',');
        // fallback for objects
        try {
          return JSON.stringify(key);
        } catch (err) {
          return String(key);
        }
      }

      return originalT(key, ...rest);
    }) as any;

    // Expose a small helper to toggle the mode from the console if needed.
    (window as any).toggleI18nShowKeys = (on?: boolean) => {
      if (on === undefined) on = !isShowingKeys();
      window.localStorage.setItem('i18n_show_keys', on ? '1' : '0');
      // reload to ensure React components pick up any static rendering of text
      window.location.reload();
    };
  }

  export default i18n;
