
import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  // Monta automáticamente /auth/login, /auth/logout, /auth/callback, etc.
  return auth0.middleware(request);
}

export const config = {
  matcher: [
    // protege todo excepto assets y metadatos
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};