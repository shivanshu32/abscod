# Abscod Informatics Website

A modern, SEO-optimized Next.js website for Abscod Informatics - a software development company targeting international clients through Google Ads.

## Features

- **SEO Optimized**: Full metadata, Open Graph tags, Twitter cards, and structured data (Schema.org)
- **Google Ads Ready**: Individual landing pages for each service optimized for conversions
- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Next.js App Router with optimized images and fonts
- **Accessibility**: Semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact page with form
│   ├── portfolio/       # Portfolio/case studies
│   ├── privacy-policy/  # Privacy policy
│   ├── terms-of-service/# Terms of service
│   ├── services/
│   │   ├── page.tsx     # Services overview
│   │   └── [slug]/      # Individual service landing pages
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Homepage
│   ├── robots.ts        # Robots.txt generation
│   ├── sitemap.ts       # Sitemap generation
│   └── not-found.tsx    # 404 page
├── components/          # Reusable UI components
└── lib/
    ├── constants.ts     # Site config, services data
    └── utils.ts         # Utility functions
```

## Services (Landing Pages)

1. Custom Software Development
2. Web Application Development
3. Mobile App Development
4. Cloud Solutions & DevOps
5. UI/UX Design Services
6. Software Consulting
7. API Development & Integration
8. Enterprise Software Solutions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## SEO Configuration

Update the following files for your specific needs:

1. `src/lib/constants.ts` - Site configuration, contact info, services
2. `src/app/layout.tsx` - Global metadata and verification codes
3. `public/manifest.json` - PWA configuration

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Google Ads Integration

Each service page is optimized for Google Ads with:

- Clear value propositions in headlines
- Quick contact forms above the fold
- Trust signals (testimonials, stats)
- Strong CTAs
- FAQ sections for common queries
- Schema.org structured data for rich snippets

## Customization

### Update Company Info

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Company Name",
  domain: "yourdomain.com",
  url: "https://yourdomain.com",
  email: "contact@yourdomain.com",
  phone: "+1 (555) 123-4567",
  address: "Your Address",
};
```

### Add/Modify Services

Edit the `SERVICES` array in `src/lib/constants.ts` to add or modify service offerings.

### Update Branding

1. Replace `public/logo.png` with your logo
2. Update colors in Tailwind classes (primary: yellow-500, secondary: gray-900)
3. Update `public/manifest.json` for PWA branding

## License

© 2024 Abscod Informatics. All rights reserved.
