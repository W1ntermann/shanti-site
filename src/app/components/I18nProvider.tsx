"use client";

import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  useEffect(() => {
    const updateDocumentDirection = (lng: string) => {
      document.documentElement.dir = i18n.dir(lng);
      document.documentElement.lang = lng;
    };

    updateDocumentDirection(i18n.language);
    i18n.on("languageChanged", updateDocumentDirection);
    return () => {
      i18n.off("languageChanged", updateDocumentDirection);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}