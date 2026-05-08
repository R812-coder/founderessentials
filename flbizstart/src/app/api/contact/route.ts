import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In production, you'd forward this to an email service or webhook.
    // For now, log it to Vercel function logs.
    console.log('[contact form submission]', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[contact form error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
