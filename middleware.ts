import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const theme = request.cookies.get('theme-bdr-portfolio')?.value || 'dark';
  const response = NextResponse.next();
  response.headers.set('x-theme', theme);
  return response;
}

export const config = {
  matcher: ['/', '/(.*)'],
};
