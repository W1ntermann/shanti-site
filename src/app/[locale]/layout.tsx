import { SUPPORTED_LOCALES } from "@/lib/locales";
import { I18nProvider } from "../components/I18nProvider";
import { Providers } from "./providers";
import type { Metadata } from "next";

import enSeo from "@/locales/en/translation.json";
import ruSeo from "@/locales/ru/translation.json";
import hiSeo from "@/locales/hi/translation.json";
import faSeo from "@/locales/fa/translation.json";
import arSeo from "@/locales/ar/translation.json";
import zhSeo from "@/locales/zh/translation.json";

const seoData: Record<string, { title: string; description: string; keywords: string[]; ogLocale: string }> = {
  en: enSeo.home.seo as any,
  ru: ruSeo.home.seo as any,
  hi: hiSeo.home.seo as any,
  fa: faSeo.home.seo as any,
  ar: arSeo.home.seo as any,
  zh: zhSeo.home.seo as any,
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale] ?? seoData.en;

  return {
    title: {
      template: "%s | StarQuantum AI",
      default: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `https://www.starquantum.io/${locale}`,
      languages: {
        en: "https://www.starquantum.io/en",
        ru: "https://www.starquantum.io/ru",
        hi: "https://www.starquantum.io/hi",
        fa: "https://www.starquantum.io/fa",
        ar: "https://www.starquantum.io/ar",
        zh: "https://www.starquantum.io/zh",
      },
    },
    openGraph: {
      type: "website",
      url: `https://www.starquantum.io/${locale}`,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "https://www.starquantum.io/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      siteName: "StarQuantum AI",
      locale: seo.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      site: "@starquantum_io",
      title: seo.title,
      description: seo.description,
      images: ["https://www.starquantum.io/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
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