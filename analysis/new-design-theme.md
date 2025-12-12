# New Design Theme - H-Town Rags Redesign

## Design Philosophy
"Modern Vintage" - Combining contemporary web design with vintage aesthetic elements to reflect the brand's heritage clothing focus while providing a cutting-edge user experience.

## Color Palette

### Primary Colors
```css
--primary-red: #E31C45;        /* Heritage brand red - kept from original */
--primary-dark: #1A1A1A;       /* Rich black for premium feel */
--primary-cream: #FAF7F0;      /* Warm cream for vintage touch */
```

### Secondary Colors
```css
--accent-gold: #D4A574;        /* Vintage gold accent */
--accent-teal: #2C7A7B;        /* Modern teal for CTAs */
--neutral-warm: #8B7355;       /* Warm brown for vintage elements */
--neutral-cool: #64748B;       /* Cool grey for modern elements */
```

### Background Colors
```css
--bg-primary: #FFFFFF;         /* Clean white */
--bg-secondary: #FAF7F0;       /* Warm cream sections */
--bg-accent: #F8F5F0;          /* Light vintage paper */
--bg-dark: #1A1A1A;           /* Dark sections */
```

### Text Colors
```css
--text-primary: #1A1A1A;       /* Main text */
--text-secondary: #64748B;     /* Secondary text */
--text-light: #FFFFFF;         /* Light text on dark */
--text-muted: #94A3B8;         /* Muted text */
```

## Typography

### Font Families
```css
--font-display: 'Playfair Display', serif;    /* Vintage headers */
--font-heading: 'Montserrat', sans-serif;     /* Modern headings */
--font-body: 'Inter', sans-serif;             /* Clean body text */
--font-accent: 'Bebas Neue', sans-serif;      /* Impact text */
```

### Font Sizes (Mobile First)
```css
/* Mobile */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */

/* Desktop scales up 1.2x */
```

## Design Elements

### Spacing System
```css
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-24: 6rem;       /* 96px */
```

### Border Radius
```css
--radius-sm: 0.25rem;   /* Subtle rounding */
--radius-md: 0.5rem;    /* Standard buttons */
--radius-lg: 1rem;      /* Cards */
--radius-xl: 1.5rem;    /* Feature elements */
--radius-full: 9999px;  /* Pills/circles */
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.07);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
--shadow-vintage: 3px 3px 0 #D4A574;  /* Retro offset */
```

## Component Styling

### Buttons
- Primary: Teal background with hover effects
- Secondary: Outlined with vintage gold
- Ghost: Transparent with underline animation
- Vintage: Offset shadow effect

### Cards
- Clean white with subtle shadows
- Vintage paper texture option
- Hover lift effect
- Border accent options

### Navigation
- Sticky header with blur backdrop
- Mega menu with product previews
- Mobile-first hamburger menu
- Breadcrumbs with vintage styling

## Special Features

### Interactive Elements
1. **Parallax scrolling** for hero sections
2. **Hover animations** on product cards
3. **Smooth scroll** navigation
4. **Loading animations** with vintage feel
5. **Micro-interactions** on buttons and links

### Modern Features
1. **Dark mode toggle** (optional)
2. **Accessibility controls**
3. **Performance optimized**
4. **PWA capabilities**
5. **Lazy loading** for images

## Animation Guidelines
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
--transition-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## Responsive Breakpoints
```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
--ultra: 1536px;
```

## Design Principles
1. **Mobile-first** approach
2. **Accessibility** WCAG 2.1 AA compliant
3. **Performance** optimized (Core Web Vitals)
4. **Vintage meets modern** aesthetic
5. **User-centered** design
6. **Conversion** optimized
7. **Brand** consistency