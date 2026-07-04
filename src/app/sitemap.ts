import { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.starquantum.io";

  // Root page that redirects to /en
  const rootUrl = {
    url: baseUrl,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 1.0,
    alternates: {
      languages: {
        "en": `${baseUrl}/en`,
        "ru": `${baseUrl}/ru`,
        "hi": `${baseUrl}/hi`,
        "fa": `${baseUrl}/fa`,
        "ar": `${baseUrl}/ar`,
        "zh": `${baseUrl}/zh`,
        "x-default": `${baseUrl}/en`,
      },
    },
  };

  // Locale-specific pages
  const localeUrls = SUPPORTED_LOCALES.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        SUPPORTED_LOCALES.map((l) => [
          l,
          `${baseUrl}/${l}`,
        ]),
      ),
    },
  }));

  return [rootUrl, ...localeUrls];
}