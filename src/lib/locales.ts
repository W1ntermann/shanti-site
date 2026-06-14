export const SUPPORTED_LOCALES = ["en", "ru", "hi", "fa", "ar", "zh"] as const;
export const DEFAULT_LOCALE = "en";
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  hi: "हिन्दी",
  fa: "فارسی",
  ar: "العربية",
  zh: "中文",
};