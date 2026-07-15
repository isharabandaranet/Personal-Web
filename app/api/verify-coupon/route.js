import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { code } = body;

    // Use environment variable for the valid code, or a fallback for testing
    const validCoupon = process.env.VALID_PASSCODE || 'BANKTRANSFER100'; 

    if (code && code.trim().toUpperCase() === validCoupon.toUpperCase()) {
      return NextResponse.json({ success: true, message: 'Coupon applied successfully. Download unlocked.' });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid coupon code or passcode.' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying coupon:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
