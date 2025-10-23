# Yak Media - VaynerMedia Inspired Website

A modern, responsive marketing agency website built with React, TypeScript, and Tailwind CSS.

Inspired by VaynerMedia. Original Figma design: https://www.figma.com/design/WQABn9vSAi2H7zber5lFpN/Yak-Media-Home

## Features

- ⚡ Fast and responsive design
- 🎨 Modern UI with Tailwind CSS
- 🚀 Built with Vite for optimal performance
- 📱 Mobile-first responsive design
- 🎯 SEO optimized
- ♿ Accessibility enhanced
- 🌐 Multi-page routing with React Router
- 📍 Location-specific pages for Arizona cities
- 💼 Service pages (Creative, Media, Strategy, Integrated)
- 📝 Blog functionality
- 📧 Contact forms

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server will start at `http://localhost:3000`

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the settings from `vercel.json`
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── figma/          # Figma-exported components
│   └── ...             # Page components
├── styles/             # Global styles
│   └── globals.css     # CSS variables and utilities
├── assets/             # Static assets
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Tailwind imports
```

## Pages

- **Home** - Main landing page with hero and services overview
- **Services** - Creative, Media, Strategy, Integrated services
- **Blog** - News and insights
- **Contact** - Contact form and information
- **Location Pages** - Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale
- **Content Creation** - Location-specific content creation pages
- **Legal** - Privacy Policy, Copyright Policy, Terms of Service

## Fixes from Figma Export

The following issues were fixed from the Figma export:

- ✅ Added missing Tailwind CSS configuration
- ✅ Added PostCSS configuration
- ✅ Added TypeScript configuration
- ✅ Fixed package dependencies (replaced JSR packages with npm equivalents)
- ✅ Replaced 4000+ lines of compiled CSS with proper Tailwind directives
- ✅ Fixed typo in component name (ScottsdatePage → ScottsdalePage)
- ✅ Added proper .gitignore
- ✅ Added Vercel deployment configuration
- ✅ Made site fully responsive and production-ready

## Performance Optimizations

- Lazy loading of route components
- Code splitting
- Optimized images with fallbacks
- CSS performance utilities
- Preloading of critical resources

## License

Private - © 2025 Yak Media

## Contact

- Email: kyle@yak.media
- Phone: (480) 244-6470
