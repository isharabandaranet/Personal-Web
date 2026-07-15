import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { order_id, amount, currency } = body;

    const merchant_id = process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID || '';
    const merchant_secret = process.env.PAYHERE_MERCHANT_SECRET || '';

    if (!merchant_id || !merchant_secret) {
      return NextResponse.json({ error: 'Merchant ID or Secret not configured on the server.' }, { status: 500 });
    }

    // Format amount to 2 decimal places as required by PayHere
    const formattedAmount = parseFloat(amount).toFixed(2);

    // PayHere Hash Generation Logic:
    // md5(merchant_id + order_id + amount_formatted + currency + md5(merchant_secret)) in uppercase
    const hashedSecret = crypto.createHash('md5').update(merchant_secret).digest('hex').toUpperCase();
    const hashString = merchant_id + order_id + formattedAmount + currency + hashedSecret;
    const hash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

    return NextResponse.json({ hash, amount: formattedAmount });
  } catch (error) {
    console.error('Error generating PayHere hash:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
