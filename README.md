# BookBot AI - WhatsApp Booking Bot for Salons

A modern, mobile-friendly product website for BookBot AI, an AI-powered WhatsApp booking bot designed specifically for salons, spas, and beauty businesses.

## Features

- **Modern Design**: Clean, professional design with soft colors (blush pink, deep purple)
- **Mobile-First**: Fully responsive design optimized for all devices
- **Interactive Demo**: Live WhatsApp chat simulation with QR code functionality
- **Real-time Stats**: Animated counter components showing business impact
- **Lead Generation**: Contact forms and demo request functionality
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization

## Pages

- **Home**: Hero section with demo, stats, features preview, and testimonials
- **How It Works**: Step-by-step process explanation with visual timeline
- **Features**: Comprehensive feature breakdown with use cases
- **Pricing**: Transparent pricing tiers with feature comparison
- **Live Demo**: Interactive WhatsApp demo with lead capture
- **Contact**: Contact form with multiple communication channels

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom color scheme
- **Icons**: Lucide React
- **QR Codes**: qrcode.react
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── demo/              # Live demo page
│   ├── features/          # Features page
│   ├── how-it-works/      # How it works page
│   ├── pricing/           # Pricing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Navigation.tsx     # Navigation header
│   ├── StatsCounter.tsx   # Animated counter
│   └── WhatsAppDemo.tsx   # Interactive demo
public/                    # Static assets
```

## Key Components

### WhatsAppDemo
Interactive WhatsApp conversation simulator with:
- Chat interface mockup
- QR code generation
- Toggle between chat and QR views

### StatsCounter
Animated counter component with:
- Smooth easing animations
- Customizable duration and formatting
- Performance optimized

### Navigation
Responsive navigation with:
- Mobile hamburger menu
- Smooth scrolling
- Active state indicators

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:
- **Blush Pink**: #f472b6 (salon-pink)
- **Deep Purple**: #7c3aed (salon-purple)
- **Gradients**: Various pink-to-purple combinations

### Content
All content is easily customizable by editing the respective page components. Key areas:
- Hero messaging
- Feature descriptions
- Pricing tiers
- Contact information

## Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with one click

### Other Platforms
The project works with any platform supporting Next.js:
- Netlify
- AWS Amplify  
- Docker containers

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimized with tree-shaking
- **Images**: Next.js Image optimization
- **Fonts**: Optimized loading with next/font

## SEO Features

- Semantic HTML structure
- Open Graph tags
- Twitter Card support
- Structured data markup
- Mobile-friendly design
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary to BookBot AI.

## Support

For questions or support, contact the development team or visit our [contact page](./src/app/contact/page.tsx).

---

Built with ❤️ for salon owners who want to automate their booking process and grow their business with AI.
