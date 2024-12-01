import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("sb-access-token");

  const publicRoutes = ["/login", "/signup"];
  const protectedRoutes = ["/cart", "/product-details", "/:id"];

  const pathname = request.nextUrl.pathname;

  // Exclude public routes from protection
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Protect specified routes
  if (
    protectedRoutes.includes(pathname) || // Exact matches
    pathname.match(/^\/[a-zA-Z0-9_-]+$/) // Matches dynamic routes like /:id
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Apply to all routes but exclude public ones in the logic
};
