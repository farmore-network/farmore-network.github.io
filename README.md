# Nodods Holdings - About Us Pages


## Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations
- **Fully Responsive**: Optimized for all screen sizes
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter cards
- **TypeScript**: Full type safety throughout
- **Tailwind CSS**: Utility-first styling with custom theme
- **App Router**: Uses Next.js 14 App Router architecture

## Project Structure

```
nodods-about/
├── src/
│   ├── app/
│   │   ├── about/           # About page - company overview, mission, vision
│   │   ├── rand4u/          # Rand4U venture page
│   │   ├── team/            # Leadership and team members
│   │   ├── culture/         # Company values and DNA
│   │   ├── contact/         # Contact information
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout with navigation & footer
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── Navigation.tsx   # Responsive navigation
│       └── Footer.tsx       # Site footer
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Pages

1. **Homepage** (`/`) - Hero section with company introduction
2. **About** (`/about`) - Company overview, mission, vision, and philosophy
3. **Rand4U** (`/rand4u`) - Current venture details and how it works
4. **Team** (`/team`) - Leadership profiles and team members
5. **Culture** (`/culture`) - Core values and company DNA
6. **Contact** (`/contact`) - Contact information and locations

## Design Features

- **Typography**: Sora (display) + DM Sans (body)
- **Color Palette**: Dark theme with teal accent (#00d4aa)
- **Animations**: Fade-in, slide-up effects on page load
- **Components**: Responsive navigation, gradient cards, hover effects

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd nodods-about

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Configuration

### Tailwind Theme

Custom colors and typography are defined in `tailwind.config.ts`:

```typescript
colors: {
  nodods: {
    black: "#0a0a0a",
    dark: "#141414",
    gray: "#1a1a1a",
    muted: "#6b6b6b",
    light: "#f5f5f5",
    white: "#ffffff",
    accent: "#00d4aa",
    "accent-dark": "#00b894",
  },
}
```

### SEO

Meta tags are configured in each page's `metadata` export and the root `layout.tsx`.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Company Information

**Nodods Holdings (Pty) Ltd**
- Founded: 2024
- Headquarters: Cape Town, South Africa
- Website: nodods.com
- Current Venture: Rand4U (rand4u.com)

## Contact

- General: reply@nodods.com
- Rand4U: reply@rand4u.com

---
