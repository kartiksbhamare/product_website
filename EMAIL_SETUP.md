# Email Setup Guide for SalonSync

Your website forms are now configured to send emails to `salonsync.first@gmail.com` when submitted. Here are the steps to make it work:

## Option 1: EmailJS (Recommended - Free & Easy)

EmailJS allows you to send emails directly from your website without a backend server.

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account
   - Free plan includes 200 emails/month

2. **Create Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" as your email service
   - Connect your Gmail account (`salonsync.first@gmail.com`)

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```
Subject: {{subject}}

New form submission from SalonSync website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company/Salon: {{company}}{{salon_name}}

Message:
{{message}}

---
Submitted: {{submission_time}}
```

4. **Get Your Keys**
   - Note down your:
     - Service ID (e.g., `service_abc123`)
     - Template ID (e.g., `template_xyz789`)
     - Public Key (from Account > API Keys)

5. **Update Configuration**
   - Edit `src/lib/emailService.ts`
   - Replace the placeholder values:
     ```typescript
     const EMAILJS_SERVICE_ID = 'your_service_id_here';
     const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
     const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
     ```

## Option 2: Formspree (Alternative - Also Free)

Formspree is another simple form handling service.

### Setup Steps:

1. **Create Formspree Account**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for free account
   - Free plan includes 50 submissions/month

2. **Create New Form**
   - Click "New Form"
   - Set email to: `salonsync.first@gmail.com`
   - Get your form endpoint URL

3. **Update Code**
   - In `src/lib/emailService.ts`, update the Formspree URL:
     ```typescript
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     ```

4. **Use Formspree Method**
   - In your form components, replace `sendEmail()` with `sendEmailViaFormspree()`

## Option 3: Netlify Forms (If deploying to Netlify)

If you deploy to Netlify, you can use their built-in form handling:

1. Add `netlify` attribute to your forms
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Forms will automatically send to your email

## Testing

After setup, test your forms:

1. Fill out the contact form
2. Check your email (`salonsync.first@gmail.com`)
3. Verify you receive the form submission

## Current Status

✅ Forms are ready to send emails
✅ Email templates are configured
⏳ Waiting for you to set up EmailJS/Formspree account
⏳ Need to update API keys in the code

## Troubleshooting

- Check browser console for errors
- Verify API keys are correct
- Make sure EmailJS service is active
- Check spam folder for emails

## Security Note

The current setup sends emails from the frontend. For production, consider:
- Using environment variables for API keys
- Implementing rate limiting
- Adding CAPTCHA to prevent spam 