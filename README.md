# Omalu Sobechukwu - Personal Portfolio Website

A professional, modern portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and provides easy ways to connect with me.

![Portfolio Preview](src/assets/hero-bg.jpg)

## 🌐 Live Demo

**Live URL:** [Your published URL here]

**GitHub Repository:** [https://github.com/sobeomalu17/Advances-in-web.git](https://github.com/sobeomalu17/Advances-in-web.git)

## 👤 About Me

**Name:** Omalu Sobechukwu  
**Matric Number:** 22120613190  
**Email:** omalusobechukwu@gmail.com  
**Phone:** +234 702 669 5606  
**WhatsApp:** +234 916 432 2404

I am a passionate and experienced developer dedicated to building exceptional web applications. With a strong foundation in modern web technologies, I transform ideas into functional, beautiful digital solutions.

## ✨ Features

### Hero Section
- Full-screen hero with animated background image
- Typewriter animation effect for subtitle
- Floating particle animations
- Smooth scroll navigation
- Social media links

### About Section
- Personal biography and introduction
- Skills showcase with animated cards
- Technology stack badges
- Contact information display

### Projects Section
- Featured project cards with hover effects
- Project detail pages with:
  - Problem statement
  - Solution overview
  - Key features
  - Technologies used
  - Lessons learned
  - Screenshots/images
  - Live demo and source code links

### Contact Section
- Multiple contact methods (Email, Phone, WhatsApp)
- Animated social links
- Call-to-action buttons
- Beautiful background effects

### Additional Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll-triggered animations using Framer Motion
- Dark theme with cyan/teal accent colors
- Professional background images throughout
- SEO optimized with React Helmet
- Clean, modern UI with glass-morphism effects

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - UI component library
- **Framer Motion** - Animation library

### Other Libraries
- **Lucide React** - Icon library
- **React Helmet Async** - SEO meta tags
- **Class Variance Authority** - Component variants

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
│   ├── hero-bg.jpg
│   ├── about-bg.jpg
│   ├── projects-bg.jpg
│   └── contact-bg.jpg
├── components/
│   ├── animations/      # Animation wrapper components
│   │   ├── ScrollReveal.tsx
│   │   └── StaggerContainer.tsx
│   ├── ui/              # Shadcn UI components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── ProjectsSection.tsx
├── data/
│   └── projects.ts      # Project data
├── pages/
│   ├── Index.tsx        # Home page
│   ├── ProjectDetails.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles & design tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sobeomalu17/Advances-in-web.git
cd Advances-in-web
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
bun run build
```

The build output will be in the `dist/` directory.

## 🎨 Design System

### Color Palette
- **Background:** Dark navy (`hsl(220 20% 7%)`)
- **Primary:** Cyan/Teal (`hsl(174 72% 56%)`)
- **Secondary:** Dark gray (`hsl(220 15% 15%)`)
- **Muted:** Gray (`hsl(215 15% 55%)`)

### Typography
- **Display Font:** Sora (headings)
- **Body Font:** Inter (paragraphs)

### Animations
- Scroll-triggered reveals
- Staggered entrance animations
- Hover interactions
- Typewriter text effect
- Floating particles

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Laptops (1024px+)
- Large desktops (1280px+)

## 📧 Contact

Feel free to reach out through any of the following channels:

- **Email:** [omalusobechukwu@gmail.com](mailto:omalusobechukwu@gmail.com)
- **Phone:** +234 702 669 5606
- **WhatsApp:** [+234 916 432 2404](https://wa.me/2349164322404)
- **GitHub:** [sobeomalu17](https://github.com/sobeomalu17/Advances-in-web.git)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Omalu Sobechukwu**
