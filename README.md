# Emu Oil Landing Pages

A Next.js project with multiple landing pages targeting different market segments for Australian Emu Oil products.

## 🎯 Landing Pages

- **Skin Care** (`/skin-care`) - For eczema, psoriasis, and skin conditions
- **Pain Relief** (`/pain-relief`) - For arthritis and joint pain
- **Wholesale** (`/wholesale`) - For B2B partners and distributors

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd emu-oil-landing-pages

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## 📁 Project Structure

```
├── components/
│   └── shared/          # Reusable components
│       ├── Layout.js    # Main layout wrapper
│       ├── Header.js    # Navigation header
│       ├── Footer.js    # Site footer
│       ├── Button.js    # Reusable button component
│       └── LeadCaptureForm.js # Form component
├── lib/
│   ├── content.js       # Static content management
│   └── imageRequirements.js # Image specifications
├── pages/
│   ├── index.js         # Homepage
│   ├── skin-care/       # Skin care landing page
│   ├── pain-relief/     # Pain relief landing page
│   ├── wholesale/       # Wholesale landing page
│   └── api/             # API endpoints
├── public/
│   └── images/          # Static images
└── styles/
    └── globals.css      # Global styles with Tailwind
```

## 🎨 Theming

Each landing page has its own theme:
- **Skin Care**: Green theme (`theme="skincare"`)
- **Pain Relief**: Orange/Red theme (`theme="painrelief"`)
- **Wholesale**: Blue theme (`theme="wholesale"`)

Themes are defined in `tailwind.config.js` and applied via CSS classes.

## 📱 Features

- **Responsive Design** - Mobile-first approach
- **Theme System** - Different colors per landing page
- **Animations** - Framer Motion for smooth interactions
- **Form Handling** - React Hook Form with validation
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance** - Image optimization, code splitting
- **Analytics Ready** - Google Analytics integration points

## 🛠️ Built With

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework  
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📊 Content Management

Content is managed through static files in `/lib/content.js`:

```javascript
// Example content structure
export const landingPageContent = {
  skinCare: {
    meta: { title: "...", description: "..." },
    hero: { headline: "...", cta: "..." },
    problems: [...],
    solutions: [...],
    testimonials: [...]
  }
}
```

## 🖼️ Image Requirements

All image specifications are documented in `/lib/imageRequirements.js`. 

For development, we use:
- Unsplash for lifestyle images
- Placeholder services for product images
- SVG icons for UI elements

## 🔧 Configuration

### Environment Variables
Create `.env.local` for environment-specific settings:

```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
EMAILJS_SERVICE_ID=your-emailjs-service-id
EMAILJS_TEMPLATE_ID=your-emailjs-template-id
```

### Customization
- **Colors**: Edit `tailwind.config.js`
- **Content**: Edit `/lib/content.js`
- **Layout**: Edit components in `/components/shared/`

## 📈 Analytics & Tracking

The project includes tracking setup for:
- Google Analytics
- Facebook Pixel (ready for integration)
- Custom conversion tracking per landing page

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Skin Care**: Green tones (#4caf50, #2e7d32)
- **Pain Relief**: Orange/Red tones (#ff5722, #d84315)  
- **Wholesale**: Blue tones (#1565c0, #0d47a1)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
All components support theming and are fully responsive.

## 📝 Content Guidelines

### Writing Style
- **Benefit-focused** headlines
- **Problem-solution** structure
- **Social proof** integration
- **Clear CTAs** throughout

### SEO Best Practices
- Unique meta titles/descriptions per page
- Structured data markup
- Optimized images with alt text
- Internal linking strategy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, contact:
- Email: developer@example.com
- Phone: +61 5 9026 6800

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Emu Oil Naturally** 