import { NextRequest, NextResponse } from 'next/server';
import { testSMTPConnection } from '@/lib/smtpService';

export async function GET(request: NextRequest) {
  try {
    console.log('Testing SMTP connection...');
    const isConnected = await testSMTPConnection();
    
    return NextResponse.json({ 
      success: isConnected,
      message: isConnected ? 'SMTP connection successful!' : 'SMTP connection failed',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 