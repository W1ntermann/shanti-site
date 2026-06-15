import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "ru", "hi", "fa", "ar", "zh"];
const DEFAULT_LOCALE = "en";

export default function proxy(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;

  // Redirect www → non-www
  if (hostname.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.hostname = hostname.replace(/^www\./, "");
    return NextResponse.redirect(url, 301);
  }

  // Skip static assets, Next.js internals, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(?:xml|txt|ico|png|jpg|jpeg|webp|svg|gif|mp4|webm|woff2?|ttf|eot|css|js|json|webmanifest|pdf)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if path already starts with a supported locale
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (firstSegment && SUPPORTED_LOCALES.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Redirect root or non-locale paths to the default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};