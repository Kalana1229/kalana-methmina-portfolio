# Customization Guide

Complete guide to customize your portfolio to match your personal brand and style.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Projects & Content](#projects--content)
3. [Skills & Experience](#skills--experience)
4. [Styling & Colors](#styling--colors)
5. [Animations](#animations)
6. [Contact Form](#contact-form)
7. [Social Links](#social-links)
8. [Advanced Customization](#advanced-customization)

---

## Personal Information

Located in `/lib/data/portfolio.ts`

### Update Your Bio

```typescript
export const PERSONAL_INFO = {
  name: 'Your Full Name',
  title: 'Your Professional Title',
  description: 'A brief description of who you are and what you do',
  shortBio: 'Extended bio for the About section',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'City, State, Country',
  avatar: 'https://avatars.githubusercontent.com/u/your-id', // GitHub avatar or custom image
  resume: '/resume.pdf', // Path to your resume
};
```

### Add Your Resume

1. Create a PDF of your resume
2. Place it in `/public/resume.pdf`
3. Update the `resume` path in `PERSONAL_INFO`

### Update Social Links

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
  cv: '/resume.pdf',
};
```

---

## Projects & Content

Located in `/lib/data/portfolio.ts`

### Add a New Project

```typescript
{
  id: 'project-1',  // Unique identifier
  title: 'Project Name',
  description: 'One-line description',
  longDescription: 'Detailed description of the project',
  image: 'https://example.com/image.jpg', // Use your own images
  tags: ['React', 'Node.js', 'MongoDB'], // Technologies used
  category: 'fullstack', // frontend, backend, fullstack, security, devops, ai-ml
  github: 'https://github.com/username/repo', // GitHub repository link
  live: 'https://project-url.com', // Live demo link (optional)
  featured: true, // Show in featured projects
}
```

### Project Images

Best practices:
- Use high-quality images (1200x600px minimum)
- Optimize images before adding (use [TinyPNG](https://tinypng.com/))
- Format: JPG for photos, PNG for graphics, WebP for better compression
- Host images on Cloudinary, Imgur, or similar

```typescript
image: 'https://res.cloudinary.com/your-cloud/image/upload/v1234/project.jpg'
```

### Remove a Project

Simply delete the object from the `PROJECTS` array.

---

## Skills & Experience

Located in `/lib/data/portfolio.ts`

### Add Skills

```typescript
export const SKILLS: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',  // Must match categories
    profession: 'Expert',  // Beginner, Intermediate, Advanced, Expert
  },
  // Add more...
];
```

**Skill Categories**:
- Frontend
- Backend
- Tools
- Cybersecurity
- DevOps

**Proficiency Levels**: Beginner (30%), Intermediate (60%), Advanced (80%), Expert (100%)

### Add Work Experience

```typescript
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Job Title',
    startDate: '2023-01-01', // Format: YYYY-MM-DD
    endDate: null, // null if current job
    current: true,
    description: 'What you accomplished and what you worked on',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
];
```

### Add Education

```typescript
export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016-09-01',
    endDate: '2020-06-01',
    gpa: 3.8, // Optional
  },
];
```

---

## Styling & Colors

Located in `/tailwind.config.js`

### Change Primary Colors

```javascript
theme: {
  extend: {
    colors: {
      'accent': '#3b82f6',      // Primary accent color
      'accent-dark': '#1e40af', // Darker accent
      'accent-light': '#93c5fd', // Lighter accent
      'primary': '#0f172a',     // Main background
      'primary-light': '#1e293b',
      'text-primary': '#f1f5f9',
      'text-secondary': '#cbd5e1',
      'text-tertiary': '#94a3b8',
    },
  },
},
```

### Change Typography

```javascript
fontFamily: {
  'sans': ['Poppins', 'system-ui', 'sans-serif'],
  'mono': ['JetBrains Mono', 'monospace'],
},
```

To use custom fonts from Google Fonts:

1. Go to [fonts.google.com](https://fonts.google.com/)
2. Select your fonts
3. Copy the import statement to `app/layout.tsx`

```typescript
import { Poppins, Merriweather } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: '400' });
```

### Modify Border Radius

```javascript
borderRadius: {
  'xl': '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
},
```

### Adjust Spacing

```javascript
spacing: {
  '13': '3.25rem',
  '15': '3.75rem',
  '128': '32rem',
},
```

---

## Animations

Located in `/tailwind.config.js` and `/styles/globals.css`

### Modify Animation Speed

```javascript
animation: {
  'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'fade-in': 'fadeIn 0.5s ease-in',
  'slide-in-up': 'slideInUp 0.5s ease-out',
},
```

### Disable Animations

In `/styles/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Add Custom Animations

```javascript
keyframes: {
  'custom-animation': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
},
animation: {
  'custom': 'custom-animation 0.6s ease-out',
}
```

---

## Contact Form

Located in `components/sections/ContactSection.tsx`

### Change Form Fields

Modify the form to include additional fields:

```typescript
interface FormData {
  name: string;
  email: string;
  phone?: string;  // Add new field
  subject: string;
  category?: string;  // Select field
  message: string;
}
```

### Configure Email Service

Choose one:

**Option 1: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 2: Mailgun**
```bash
npm install mailgun.js
```

**Option 3: Resend**
```bash
npm install resend
```

Update `/lib/services/email.ts` with your chosen service.

### Enable Contact Form Submissions

1. Create `/app/api/email/send/route.ts`
2. Implement email sending logic
3. Update form submission handler in `ContactSection.tsx`

---

## Social Links

### Add More Social Platforms

In `/lib/data/portfolio.ts`:

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  instagram: 'https://instagram.com/yourusername',
  codepen: 'https://codepen.io/yourusername',
  dribbble: 'https://dribbble.com/yourusername',
  youtube: 'https://youtube.com/@yourusername',
  email: 'mailto:your.email@example.com',
};
```

### Update Social Icons in Footer

In `/components/sections/Footer.tsx`:

```typescript
import { 
  FiGithub, FiLinkedin, FiTwitter, 
  FiInstagram, FiYoutube, FiMail 
} from 'react-icons/fi';

const socialIcons = [
  { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  { icon: FiInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: FiMail, href: SOCIAL_LINKS.email, label: 'Email' },
];
```

---

## Advanced Customization

### Add Dark/Light Mode Switcher

Already implemented! Located in `components/sections/Navbar.tsx`

To customize theme colors, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      dark: '#0f172a',
      light: '#ffffff',
    },
  },
}
```

### Create New Sections

1. Create component in `/components/sections/`
2. Export from `/components/sections/index.ts`
3. Import and add to `/app/page.tsx`

Example template:

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui';

export const NewSection: React.FC = () => {
  return (
    <Section id="section-id">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Section Title</h2>
          {/* Add content */}
        </motion.div>
      </Container>
    </Section>
  );
};
```

### Modify Navigation Menu

Edit `components/sections/Navbar.tsx`:

```typescript
const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, // Add new item
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];
```

### Add Blog Section

1. Create `components/sections/BlogSection.tsx`
2. Create `/lib/data/blog.ts` with blog posts
3. Create individual post pages in `/app/blog/[slug]/page.tsx`

### Integrate Analytics

Update `app/layout.tsx`:

```typescript
<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `,
}} />
```

### SEO Customization

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Professional Title',
  description: 'Your professional description',
  keywords: ['Your', 'Keywords', 'Here'],
  // ... other meta tags
};
```

### Performance Optimization

1. **Image Optimization** - Already using Next.js Image component
2. **Code Splitting** - Already implemented
3. **Lazy Loading** - Add to components:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Loading...</div>,
});
```

4. **Compression** - Add to `next.config.js`:

```javascript
compress: true,
```

---

## Testing Changes Locally

After customizing, test before deployment:

```bash
# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
npm start
```

---

## Common Customizations Quick Reference

| Change | File | Property |
|--------|------|----------|
| Title & Description | `/lib/data/portfolio.ts` | `PERSONAL_INFO` |
| Projects | `/lib/data/portfolio.ts` | `PROJECTS` |
| Skills | `/lib/data/portfolio.ts` | `SKILLS` |
| Colors | `/tailwind.config.js` | `theme.colors` |
| Fonts | `/app/layout.tsx` | Font imports |
| Navigation | `/components/sections/Navbar.tsx` | `NAV_ITEMS` |
| Social Links | `/lib/data/portfolio.ts` | `SOCIAL_LINKS` |

---

## Need More Help?

- Check individual component files for inline comments
- Visit [Tailwind CSS Docs](https://tailwindcss.com/)
- Check [Framer Motion Docs](https://www.framer.com/motion/)
- Review [Next.js Documentation](https://nextjs.org/docs)

---

**Happy customizing! 🎨**
