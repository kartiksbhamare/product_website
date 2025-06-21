import { NextRequest, NextResponse } from 'next/server';
import { sendSMTPEmail } from '@/lib/smtpService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, salonName, message } = body;

    // Send email using SMTP
    const emailSent = await sendSMTPEmail({
      to: 'salonsync.first@gmail.com',
      from_name: name,
      from_email: email,
      subject: 'SalonSync Demo Request',
      message: message || 'Demo request submitted',
      phone: phone,
      salon_name: salonName,
      type: 'demo'
    });

    if (emailSent) {
      return NextResponse.json({ 
        success: true, 
        message: 'Demo request submitted successfully' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process demo request' },
      { status: 500 }
    );
  }
} 