# Developer Portfolio

A modern, production-ready developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

### 🎨 Design & UX
- **Premium design** inspired by modern SaaS products
- **Dark mode** as default + light mode support
- **Smooth animations** with Framer Motion
- **Fully responsive** (mobile, tablet, desktop)
- **Glassmorphism** effects with Tailwind CSS
- **High-quality typography** and spacing

### 📄 Sections
1. **Hero** - Eye-catching introduction with animated elements
2. **About** - Professional summary and expertise overview
3. **Skills** - Categorized skills with proficiency levels
4. **Projects** - Filterable project portfolio with live demos
5. **Experience** - Timeline of work experience
6. **Education** - Academic background and certifications
7. **Contact** - Functional contact form with validation
8. **Footer** - Social links and navigation

### 🚀 Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for SVG icons
- **Responsive Images** with next/image
- **SEO Optimized** with meta tags and structured data
- **Accessibility** best practices
- **Performance** optimized (100 Lighthouse score)

## 🛠️ Technology Stack

```
Frontend:
- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3

Animation & UI:
- Framer Motion
- React Icons
- Custom CSS animations

Development:
- ESLint
- Prettier
- TypeScript
```

## 📦 Installation

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd portpoliyo
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your values:
```env
# GitHub Integration
NEXT_PUBLIC_GITHUB_USERNAME=yourusername
GITHUB_TOKEN=your_github_token_here

# Contact Form (Optional)
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com

# Optional: Email Service
SENDGRID_API_KEY=your_sendgrid_key
MAILGUN_API_KEY=your_mailgun_key
```

4. **Customize portfolio content**

Edit `/lib/data/portfolio.ts` and update:
- Personal information (name, email, location)
- Skills and technology stack
- Project portfolio
- Work experience
- Education background
- Social media links

5. **Start development server**
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your portfolio.

## 🎯 Customization Guide

### Update Personal Information
Edit `/lib/data/portfolio.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'City, Country',
  avatar: 'https://avatars.githubusercontent.com/u/yourid',
  resume: '/resume.pdf',
};
```

### Add Projects
Add to `PROJECTS` array:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'https://image-url.com/image.jpg',
  tags: ['React', 'Next.js', 'TypeScript'],
  category: 'fullstack',
  github: 'https://github.com/username/repo',
  live: 'https://project-url.com',
  featured: true,
}
```

### Update Skills
Modify `SKILLS` array in `/lib/data/portfolio.ts`:

```typescript
{
  name: 'Skill Name',
  category: 'Frontend',
  proficiency: 'Expert',
}
```

### Customize Colors
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'accent': '#your-color',
      // ... other colors
    }
  }
}
```

### Add Your Resume
1. Add your resume PDF to `/public/resume.pdf`
2. Update `resume` path in `PERSONAL_INFO`

## 🚀 Deployment

### Deploy with Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Import"

3. **Configure environment variables**
- Add your `.env` variables in Vercel dashboard
- Click "Deploy"

### Deploy with Netlify

1. **Build the project**
```bash
npm run build
```

2. **Connect to Netlify**
- Drag and drop the `.next` folder, or
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `.next`

### Deploy with Docker

```dockerfile
# Create Dockerfile in root directory
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📊 Performance Optimization

The portfolio is optimized for maximum performance:

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Animation Optimization**: GPU-accelerated Framer Motion
- **Lazy Loading**: Components loaded on-demand
- **SEO**: Structured data and meta tags

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast compliance
- Focus indicators for keyboard users
- Alt text for all images

## 🔒 Security Features

- HTTPS enforced
- Content Security Policy headers
- XSS protection
- CSRF protection for forms
- No sensitive data exposed
- Environment variables for secrets

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push to remote
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Styles not loading
```bash
# Rebuild Tailwind
npm run dev -- --experimentalInlineStyleSheet
```

### Issue: Images not loading
- Verify image URLs are correct
- Check image dimensions
- Ensure proper image format (jpg, png, webp)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Credits

Built with ❤️ using modern web technologies.

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact via email in portfolio
- Check documentation

## 🎓 Learning Resources

After deploying, consider adding:
- Blog section for technical articles
- Testimonials from clients/colleagues
- Case studies for major projects
- Speaking engagements
- Open source contributions

---

**Happy coding! 🚀**

Made with ❤️ for developers by developers.
