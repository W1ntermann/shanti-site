import { SUPPORTED_LOCALES } from "@/lib/locales";
import { I18nProvider } from "../components/I18nProvider";
import { Providers } from "./providers";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

const localeLabels: Record<string, string> = {
  en: "English",
  ru: "Русский",
  hi: "हिन्दी",
  fa: "فارسی",
  ar: "العربية",
  zh: "中文",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = localeLabels[locale] ?? "English";

  return {
    title: {
      template: "%s | StarQuantum AI",
      default: "StarQuantum AI — Autonomous AI Trading Engine",
    },
    description:
      "StarQuantum AI is an autonomous AI engine that detects market manipulation, identifies opportunities, and executes strategies with precision — 24/7.",
    alternates: {
      canonical: `https://starquantum.io/${locale === "en" ? "" : locale}`,
      languages: {
        en: "https://starquantum.io/",
        ru: "https://starquantum.io/ru",
        hi: "https://starquantum.io/hi",
        fa: "https://starquantum.io/fa",
        ar: "https://starquantum.io/ar",
        zh: "https://starquantum.io/zh",
      },
    },
    openGraph: {
      locale: {
        en: "en_US",
        ru: "ru_RU",
        hi: "hi_IN",
        fa: "fa_IR",
        ar: "ar_SA",
        zh: "zh_CN",
      }[locale],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Note: In Next.js 15, params is a Promise; we can't await in a client-adjacent layout
  // so we pass locale to a client wrapper that extracts it.
  return (
    <LocaleLayoutInner params={params}>{children}</LocaleLayoutInner>
  );
}

async function LocaleLayoutInner({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <I18nProvider locale={locale}>
      <Providers>{children}</Providers>
    </I18nProvider>
  );
}