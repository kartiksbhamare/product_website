import nodemailer from 'nodemailer';

// SMTP Configuration for Gmail
const createTransporter = () => {
  // Try multiple environment variable names for flexibility
  const user = process.env.GMAIL_USER || process.env.SMTP_USER || 'salonsync.first@gmail.com';
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || process.env.GMAIL_PASS;
  
  console.log('SMTP Config Debug:', {
    user: user,
    hasPassword: !!pass,
    passwordLength: pass ? pass.length : 0,
    passwordPreview: pass ? `${pass.substring(0, 4)}...` : 'none'
  });
  
  if (!pass || pass === 'your-app-password-here') {
    throw new Error('Gmail App Password not configured. Please set GMAIL_APP_PASSWORD in .env.local');
  }
  
  // Alternative configuration for better compatibility
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

interface EmailOptions {
  to: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  salon_name?: string;
  type?: 'contact' | 'demo';
}

export const sendSMTPEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f472b6, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #7c3aed; }
          .value { margin-top: 5px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎉 New ${options.type === 'demo' ? 'Demo Request' : 'Contact Form'} - SalonSync</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${options.from_name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${options.from_email}</div>
            </div>
            
            ${options.phone ? `
            <div class="field">
              <div class="label">📱 Phone:</div>
              <div class="value">${options.phone}</div>
            </div>
            ` : ''}
            
            ${options.company ? `
            <div class="field">
              <div class="label">🏢 Company:</div>
              <div class="value">${options.company}</div>
            </div>
            ` : ''}
            
            ${options.salon_name ? `
            <div class="field">
              <div class="label">💇 Salon Name:</div>
              <div class="value">${options.salon_name}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value" style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #7c3aed;">
                ${options.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div class="footer">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br>
              <strong>🌐 Source:</strong> SalonSync Website ${options.type === 'demo' ? '- Demo Page' : '- Contact Page'}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version
    const textContent = `
New ${options.type === 'demo' ? 'Demo Request' : 'Contact Form'} - SalonSync

Name: ${options.from_name}
Email: ${options.from_email}
Phone: ${options.phone || 'Not provided'}
${options.company ? `Company: ${options.company}` : ''}
${options.salon_name ? `Salon Name: ${options.salon_name}` : ''}

Message:
${options.message}

---
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
Source: SalonSync Website ${options.type === 'demo' ? '- Demo Page' : '- Contact Page'}
    `.trim();

    const mailOptions = {
      from: `"SalonSync Website" <${process.env.GMAIL_USER || 'salonsync.first@gmail.com'}>`,
      to: options.to,
      replyTo: options.from_email,
      subject: options.subject,
      text: textContent,
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return true;

  } catch (error) {
    console.error('Failed to send email via SMTP:', error);
    return false;
  }
};

// Test email configuration
export const testSMTPConnection = async (): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP connection failed:', error);
    return false;
  }
}; 