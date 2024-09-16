import { NextResponse } from 'next/server';

export async function POST(request) {
  return NextResponse.redirect(new URL('/addedPlaneamiento', request.url), {
    status: 303,
});
}