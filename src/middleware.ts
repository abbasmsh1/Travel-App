import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// Array of paths that require authentication
const protectedPaths = ['/dashboard', '/profile']

// Array of paths that should redirect to dashboard if user is authenticated
const authPaths = ['/auth/login', '/auth/register']

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const { pathname } = request.nextUrl

  try {
    if (token) {
      // Verify the token
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'your-jwt-secret-key'
      )
      await jwtVerify(token, secret)

      // If user is authenticated and tries to access auth pages, redirect to dashboard
      if (authPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } else {
      // If no token and trying to access protected routes, redirect to login
      if (protectedPaths.some(path => pathname.startsWith(path))) {
        const url = new URL('/auth/login', request.url)
        url.searchParams.set('from', pathname)
        return NextResponse.redirect(url)
      }
    }
  } catch (error) {
    // If token verification fails, clear the cookie and redirect to login
    if (protectedPaths.some(path => pathname.startsWith(path))) {
      const response = NextResponse.redirect(new URL('/auth/login', request.url))
      response.cookies.delete('auth-token')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
} 