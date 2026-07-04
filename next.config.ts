import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // i18n locales — these are NOT Next.js built-in i18n (which requires next export),
  // instead we use middleware-based i18n routing
  trailingSlash: false,
  
  // Redirects for canonical URL handling
  async redirects() {
    return [
      // HTTP to HTTPS redirects
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.starquantum.io/:path*",
        permanent: true,
      },
      // Non-www to www redirect
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "starquantum.io",
          },
        ],
        destination: "https://www.starquantum.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;