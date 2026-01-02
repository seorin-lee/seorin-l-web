# Seorin Lee - Personal Landing Page

A high-end personal landing page with NewJeans Phoning App aesthetic featuring Y2K Retro/Cyber-pop design.

## Features

### Visual Design
- **Y2K Retro Interface**: Early 2000s OS-inspired design with Windows-like UI elements
- **Glassmorphism**: Frosted glass effects with rounded corners and soft shadows
- **Color Palette**:
  - Pastel blue (#a8daff)
  - Soft pink (#ffc8dd)
  - Vibrant yellow (#ffed4e)
  - Clean gradient background

### Components

#### Hero Section
- Animated logo with name "Seorin Lee" using Righteous font
- Gradient text effect with bouncy spring animations
- Chat bubble with "Hello Web" message
- Floating decorative emoji elements (✨, 💫, ⭐)

#### CV Window
- Windows-style draggable window UI
- Classic title bar with colored window controls
- Blue hyperlinked text for external links (Seoul National University, NAVER Corp, etc.)
- Sections: Experience, Education, Skills
- Animated skill tags with hover effects

#### Navigation
- App icon-style navigation buttons (Home, About, Work, Contact)
- Glossy, jelly-like hover animations
- Social media links (LinkedIn, GitHub) with gradient backgrounds
- Tooltips on hover

#### Decorative Elements
- Floating emoji stickers with continuous animations
- Pixel art hearts
- Rotating geometric shapes
- Sparkle effects
- Custom Y2K-styled scrollbar

### Animations
- Framer Motion for all animations
- Bouncy, elastic spring animations
- Floating effects for decorative elements
- Scale and rotate transitions on hover
- Sequential entrance animations

### Typography
- **Display font**: Righteous (retro-style)
- **Bubble font**: Fredoka (friendly, rounded)
- **Body font**: Pretendard (Korean text support)

### Responsive Design
- Fully mobile-responsive
- Breakpoints for mobile, tablet, and desktop
- Adaptive spacing and sizing

## Tech Stack
- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.23.26
- **TypeScript**: Full type safety

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/
│   ├── Navigation.tsx       # Header navigation with app icons
│   ├── Hero.tsx            # Hero section with animated logo
│   ├── CVWindow.tsx        # CV content in window UI
│   └── DecorativeElements.tsx  # Floating decorations
├── globals.css            # Y2K color palette and utilities
├── layout.tsx            # Root layout with metadata
└── page.tsx             # Main page composition
```

## Customization

### Update Personal Information
Edit `app/components/CVWindow.tsx` to update:
- Name and introduction
- Experience and education
- Skills
- External links

### Change Colors
Modify CSS variables in `app/globals.css`:
```css
--pastel-blue: #a8daff;
--pastel-pink: #ffc8dd;
--vibrant-yellow: #ffed4e;
```

### Social Links
Update social media links in `app/components/Navigation.tsx`.

## License
© 2026 Seorin Lee
