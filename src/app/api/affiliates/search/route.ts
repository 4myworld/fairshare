import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q') || ''
  return NextResponse.json({
    query: q,
    results: [],
    note: 'Connect affiliate APIs (Amazon PA-API, CJ, Impact) and return normalized results.'
  })
}
