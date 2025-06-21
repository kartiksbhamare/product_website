import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_salonsync';
const EMAILJS_TEMPLATE_ID = 'template_salonsync';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

interface EmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  salon_name?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: data.to_email,
      from_name: data.from_name,
      from_email: data.from_email,
      subject: data.subject,
      message: data.message,
      phone: data.phone || 'Not provided',
      company: data.company || 'Not provided',
      salon_name: data.salon_name || 'Not provided',
      submission_time: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative: Simple form submission to a service like Formspree
export const sendEmailViaFormspree = async (data: any): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.from_email,
        name: data.from_name,
        phone: data.phone,
        company: data.company,
        message: data.message,
        subject: data.subject,
        _replyto: data.from_email,
        _subject: `SalonSync: ${data.subject}`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send email via Formspree:', error);
    return false;
  }
}; 