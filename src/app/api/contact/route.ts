import { NextRequest, NextResponse } from 'next/server';
import { sendSMTPEmail } from '@/lib/smtpService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, subject } = body;

    // Send email using SMTP
    const emailSent = await sendSMTPEmail({
      to: 'salonsync.first@gmail.com',
      from_name: name,
      from_email: email,
      subject: `SalonSync Contact: ${subject}`,
      message: message,
      phone: phone,
      company: company,
      type: 'contact'
    });

    if (emailSent) {
      return NextResponse.json({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 