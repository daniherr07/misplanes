import { NextResponse } from 'next/server';

export async function POST(request) {
  return NextResponse.redirect(new URL('/default', request.url), {
    status: 303,
});
}