import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const password = formData.get('password') as string

  if (password === process.env.SITE_PASSWORD) {
    const response = NextResponse.redirect(new URL('/', request.url), 303)
    response.cookies.set('demo_access', password, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    })
    return response
  }

  return NextResponse.redirect(new URL('/login?error=1', request.url), 303)
}
