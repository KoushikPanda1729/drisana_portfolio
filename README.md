# Drisana Dasgupta - UI/UX Designer Portfolio

A modern, SEO-optimized portfolio website built with Next.js 16, Ant Design, and TypeScript.

## Features

✨ **Modern Design**
- Beautiful gradient hero section with glassmorphism effects
- Responsive layout with mobile-first approach
- Smooth scrolling navigation
- Professional card-based layouts

📱 **Mobile Responsive**
- Hamburger drawer menu on mobile devices
- Optimized for all screen sizes (desktop, tablet, mobile)
- Touch-friendly interface

🎨 **Portfolio Sections**
- Hero section with introduction and CTAs
- About section with professional summary
- Featured projects with images and details
- Interactive skills progress bars
- Education and certifications
- Contact form with validation
- Resume download button
- Social media integration

🚀 **SEO Optimized**
- Complete meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data (JSON-LD) for better search engine indexing
- Auto-generated sitemap.xml
- Robots.txt configuration
- Semantic HTML structure
- Fast loading with Next.js optimizations

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** Ant Design 6.x
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Ant Design theming
- **Icons:** Ant Design Icons
- **Image Optimization:** Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Personal Information

Edit `/app/page.tsx`:
- Update name, title, and bio in the Hero section
- Modify contact details (phone, email, location)
- Update social media links

### 2. Resume

Replace `/public/resume.pdf` with your actual resume PDF file. The download button will automatically use this file.

### 3. Projects

Update the `projects` array in `/app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Title',
    year: '2024',
    image: 'https://your-image-url.com/image.jpg', // or '/projects/local-image.jpg'
    description: 'Brief project description',
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
      'Key achievement 3'
    ],
    tags: ['Figma', 'UI Design', 'Mobile']
  }
];
```

**Adding Project Images:**
- **Option 1:** Place images in `/public/projects/` and use `/projects/image.jpg`
- **Option 2:** Use external URLs (Unsplash is pre-configured)
- **Option 3:** Add new domains in `/next.config.ts`

### 4. Skills

Modify the `skills` object in `/app/page.tsx`:

```typescript
const skills = {
  design: [
    { name: 'Figma', level: 95 },
    // Add more skills
  ],
  principles: [
    { name: 'Typography', level: 90 },
    // Add more
  ],
  technical: [
    { name: 'HTML/CSS', level: 75 },
    // Add more
  ]
};
```

### 5. SEO & Metadata

**Update Site Metadata** (`/app/layout.tsx`):
- Site title and description
- Keywords
- Author information
- Social media preview settings

**Update Structured Data** (`/app/schema.ts`):
- Personal details
- Social media profiles
- Education info
- Skills list

**Update URLs** (Replace `https://drisanadasgupta.com` with your domain):
- `/app/sitemap.ts`
- `/app/robots.ts`
- `/app/schema.ts`

### 6. Theme Colors

Edit `/app/layout.tsx` in the ConfigProvider:

```typescript
theme={{
  token: {
    colorPrimary: '#6366f1', // Change primary color
    fontFamily: inter.style.fontFamily,
    borderRadius: 8,
  },
}}
```

## Project Structure

```
drisana-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata & Ant Design setup
│   ├── page.tsx         # Main portfolio page (all sections)
│   ├── globals.css      # Global styles & responsive utilities
│   ├── schema.ts        # JSON-LD structured data for SEO
│   ├── sitemap.ts       # Auto-generated sitemap
│   └── robots.ts        # Robots.txt configuration
├── public/
│   ├── resume.pdf       # Your resume file
│   └── projects/        # (optional) Local project images
├── next.config.ts       # Next.js & image configuration
└── package.json         # Dependencies
```

## Available Sections

1. **Hero** - Name, title, intro with CTA buttons
2. **About** - Professional summary and key strengths
3. **Projects** - Featured work with images, descriptions, and tags
4. **Skills** - Progress bars for tools, principles, and technical skills
5. **Education** - Academic background and certifications
6. **Contact** - Contact form and direct contact information
7. **Footer** - Social links and copyright

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify:** Connect Git repo and deploy
- **AWS Amplify:** Use Next.js preset
- **Railway/Render:** Configure with `npm run build && npm start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- ⚡ Server-side rendering with Next.js App Router
- 🖼️ Optimized images with Next.js Image
- 📦 Code splitting and lazy loading
- 🎯 Minimal bundle size
- 🔍 SEO-friendly with structured data

## License

Open source - free for personal use

---

Built with Next.js 16 and Ant Design 6
