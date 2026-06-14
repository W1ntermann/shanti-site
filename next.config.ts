import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // i18n locales — these are NOT Next.js built-in i18n (which requires next export),
  // instead we use middleware-based i18n routing
  trailingSlash: false,
};

export default nextConfig;