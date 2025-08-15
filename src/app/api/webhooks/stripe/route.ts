import { NextResponse } from 'next/server'

export async function POST() {
  // TODO: verify Stripe signature, handle events, and enqueue longer work
  return NextResponse.json({ received: true })
}
