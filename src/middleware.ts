import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Laisser passer la page login et les assets
  if (pathname.startsWith('/login') || pathname.startsWith('/_next') || pathname.startsWith('/images') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  const cookie = request.cookies.get('demo_access')
  if (cookie?.value === process.env.SITE_PASSWORD) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images).*)'],
}
