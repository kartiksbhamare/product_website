# SMTP Email Setup Guide for SalonSync

✅ **Your website now uses FREE Gmail SMTP for unlimited emails!**

## 🎯 What's Already Done

- ✅ SMTP email service configured
- ✅ Beautiful HTML email templates
- ✅ Forms connected to send emails to `salonsync.first@gmail.com`
- ✅ Professional email formatting with SalonSync branding
- ✅ Automatic reply-to functionality

## 🔧 Setup Steps (5 minutes)

### Step 1: Enable Gmail App Passwords

1. **Go to your Google Account**: [myaccount.google.com](https://myaccount.google.com)
2. **Security** → **2-Step Verification** (enable if not already enabled)
3. **App passwords** → **Select app: Mail** → **Select device: Other**
4. **Name it**: "SalonSync Website"
5. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 2: Create Environment File

Create a file named `.env.local` in your project root:

```bash
# Gmail SMTP Configuration
GMAIL_USER=salonsync.first@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password-here
```

**Important**: Replace `your-16-character-app-password-here` with the actual app password from Step 1.

### Step 3: Test the Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your website and fill out a contact form
3. Check `salonsync.first@gmail.com` for the email!

## 📧 Email Features

### Beautiful HTML Emails
- 🎨 SalonSync branded design with gradient header
- 📱 Mobile-responsive layout
- 🏷️ Organized field display
- 🕐 Indian timezone timestamps
- 💬 Proper message formatting

### Professional Details
- **From**: "SalonSync Website" <salonsync.first@gmail.com>
- **Reply-To**: Customer's email (so you can reply directly)
- **Subject**: Automatic prefixing (e.g., "SalonSync Contact: General Inquiry")
- **Content**: Both HTML and plain text versions

## 🔒 Security & Benefits

### Why SMTP is Better
- ✅ **FREE**: No monthly limits or costs
- ✅ **UNLIMITED**: Send as many emails as you need
- ✅ **RELIABLE**: Gmail's infrastructure
- ✅ **SECURE**: Encrypted transmission
- ✅ **PROFESSIONAL**: Emails come from your domain

### Security Features
- 🔐 App passwords (not your main Gmail password)
- 🚫 Environment variables (credentials not in code)
- 🛡️ Gmail's spam protection
- 📧 Automatic email validation

## 📱 What Emails Look Like

When someone submits a form, you'll receive a professional email with:

```
🎉 New Contact Form - SalonSync

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +91 98765 43210
🏢 Company: ABC Salon

💬 Message:
I'm interested in implementing SalonSync for my salon. 
Can we schedule a demo?

📅 Submitted: 15/12/2024, 2:30:00 PM IST
🌐 Source: SalonSync Website - Contact Page
```

## 🚀 Deployment Notes

### For Production (Vercel/Netlify)
Add environment variables in your hosting platform:
- `GMAIL_USER`: salonsync.first@gmail.com
- `GMAIL_APP_PASSWORD`: your-app-password

### For Development
The `.env.local` file works automatically with Next.js.

## 🔧 Troubleshooting

### Common Issues

**"Authentication failed"**
- Check if 2-Step Verification is enabled
- Verify the app password is correct (16 characters)
- Make sure you're using the app password, not your Gmail password

**"Connection timeout"**
- Check your internet connection
- Verify Gmail SMTP is not blocked by firewall

**"Emails not received"**
- Check spam folder
- Verify `salonsync.first@gmail.com` is correct
- Test with a different email address

### Testing Connection

The system includes a connection test function. Check the server logs for:
```
SMTP connection verified successfully
Email sent successfully: <message-id>
```

## 📊 Current Status

- ✅ SMTP service configured
- ✅ Email templates ready
- ✅ Forms connected
- ⏳ **Waiting for Gmail App Password setup**
- ⏳ **Need to create .env.local file**

## 🎯 Next Steps

1. **Set up Gmail App Password** (2 minutes)
2. **Create .env.local file** (1 minute)
3. **Test with a form submission** (1 minute)
4. **Start receiving leads!** 🎉

## 💡 Pro Tips

- **Reply directly** to form emails (reply-to is set to customer's email)
- **Check spam folder** initially until Gmail learns your patterns
- **Monitor email delivery** through Gmail's sent folder
- **Backup important inquiries** as needed

---

**Total setup time**: ~5 minutes
**Cost**: FREE forever
**Email limit**: Unlimited (Gmail's daily limits apply: ~500/day) 