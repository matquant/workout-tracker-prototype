import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // If user is accessing protected routes and not logged in (check cookie?)
  // For simplicity, we'll check for a 'session_token' cookie.
  // In a real implementation with NextAuth, we'd use 'export { default } from "next-auth/middleware"'
  
  const token = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');

  if (!token && !request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
};
