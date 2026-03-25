# Deployment Guide

Complete guide to deploying your portfolio to production.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Vercel Deployment](#vercel-deployment-recommended)
3. [Netlify Deployment](#netlify-deployment)
4. [AWS Deployment](#aws-deployment)
5. [GitHub Pages](#github-pages)
6. [Docker Deployment](#docker-deployment)
7. [Post-Deployment](#post-deployment)
8. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All personal information is updated in `/lib/data/portfolio.ts`
- [ ] Resume PDF is added to `/public/resume.pdf`
- [ ] All images are optimized and loading correctly
- [ ] All links are working (external and internal)
- [ ] Contact form is configured
- [ ] Environment variables are set up correctly
- [ ] SEO meta tags are customized
- [ ] All sections are proofread for typos
- [ ] Site performs well (test with Lighthouse)
- [ ] Mobile responsiveness is verified

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Project

```bash
# Ensure all changes are committed
git add .
git commit -m "Final portfolio update before deployment"
git push origin main
```

### Step 2: Create Vercel Account

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Verify your email

### Step 3: Import Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Select a Git Repository"
3. Choose your portfolio repository
4. Click "Import"

### Step 4: Configure Project

Vercel will automatically detect Next.js settings. For custom configuration:

1. **Framework Preset**: Next.js
2. **Build & Development Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Step 5: Set Environment Variables

1. Go to "Settings" → "Environment Variables"
2. Add the following:

```
NEXT_PUBLIC_GITHUB_USERNAME=your_username
GITHUB_TOKEN=your_github_token
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

3. Click "Save"

### Step 6: Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your site is now live!

### Step 7: Connect Custom Domain (Optional)

1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration steps
4. Wait for DNS propagation (up to 48 hours)

**Vercel provides free HTTPS and automatic deployments on every push to main.**

---

## Netlify Deployment

### Step 1: Build Your Project

```bash
npm run build
```

### Step 2: Create Netlify Account

1. Go to [netlify.com/signup](https://netlify.com/signup)
2. Sign up with GitHub
3. Authorize Netlify to access your repositories

### Step 3: Create New Site

1. Click "New site from Git"
2. Select GitHub
3. Choose your repository

### Step 4: Configure Build Settings

**Build Command**: `npm run build`
**Publish Directory**: `.next`

Add Environment Variables in "Site Settings" → "Build & Deploy" → "Environment":

```
NEXT_PUBLIC_GITHUB_USERNAME=your_username
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

### Step 5: Deploy

1. Click "Deploy site"
2. Netlify generates a temporary domain (e.g., `xxx.netlify.app`)
3. Wait for the build (usually 2-3 minutes)

### Step 6: Connect Domain

1. Go to "Domain Settings"
2. Add your custom domain
3. Update your DNS records with Netlify's nameservers

---

## AWS Deployment

### Using Amplify (Easiest)

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Manual S3 + CloudFront Deployment

1. **Build the project**
```bash
npm run build
npm run export  # If using static export
```

2. **Create S3 bucket**
```bash
aws s3 mb s3://your-portfolio-bucket
```

3. **Upload files**
```bash
aws s3 sync ./out s3://your-portfolio-bucket
```

4. **Set up CloudFront**
   - Distribution domain: Your S3 bucket
   - Set default root object: `index.html`
   - Enable HTTPS

5. **Point domain to CloudFront**
   - Update DNS CNAME record to CloudFront domain

---

## GitHub Pages

Note: GitHub Pages works best with static sites. For Next.js:

1. **Add `output: export` to next.config.js**

```javascript
const nextConfig = {
  output: 'export',
};
```

2. **Build and deploy**

```bash
npm run build
git add .
git commit -m "Update for GitHub Pages deployment"
git push origin main
```

3. **Go to repository Settings**
   - Section: "Pages"
   - Source: Deploy from a branch
   - Branch: main / (folder): /(root)

4. **Your site will be available at**
```
https://yourusername.github.io/portpoliyo
```

---

## Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies stage
FROM base AS installer
COPY package*.json ./
RUN npm install

# Build stage
FROM installer AS builder
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_GITHUB_USERNAME=your_username \
  -e NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com \
  portfolio:latest
```

### Deploy to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag portfolio:latest yourusername/portfolio:latest

# Push image
docker push yourusername/portfolio:latest
```

---

## Post-Deployment

### 1. Test Your Site

- [ ] Visit your domain in different browsers
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Test contact form
- [ ] Verify social media links

### 2. Set Up Analytics

Add Google Analytics to track visitors:

1. Create a Google Analytics account
2. Get your Measurement ID
3. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
```

4. Install analytics package:
```bash
npm install @react-ga/core @react-ga/page-view
```

### 3. Submit to Search Engines

**Google Search Console**:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap.xml

**Bing Webmaster Tools**:
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify ownership

### 4. Set Up Redirects (Optional)

In `next.config.js`:
```javascript
async redirects() {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true,
    },
  ];
}
```

### 5. Configure Email Forwarding

For contact form emails, use services like:
- [SendGrid](https://sendgrid.com/)
- [Mailgun](https://mailgun.com/)
- [Resend](https://resend.com/)

### 6. Set Up SSL/TLS

Most platforms (Vercel, Netlify) provide free SSL. Verify:
- HTTPS is enabled
- Certificate is valid
- Mixed content warnings are resolved

### 7. Performance Optimization

Run Lighthouse audit:
1. Open DevTools
2. Go to "Lighthouse" tab
3. Run audit
4. Address any issues

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

---

## Troubleshooting

### Build Fails on Deployment

```bash
# Clear build cache
rm -rf .next node_modules
npm install
npm run build
```

### Pages Not Updating After Deploy

```bash
# Hard refresh in browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)

# Or clear browser cache
```

### Environment Variables Not Working

1. Verify variables are set in deployment platform
2. Check spelling in code (case-sensitive)
3. Ensure `NEXT_PUBLIC_` prefix for client-side variables
4. Redeploy after updating variables

### Images Not Loading

1. Verify image URLs are correct
2. Check image dimensions
3. Ensure images are publicly accessible
4. Check for CORS issues

### Contact Form Not Working

1. Verify email service is configured
2. Check API keys in environment variables
3. Review server logs for errors
4. Test email functionality locally

### Custom Domain Not Working

1. Wait for DNS propagation (up to 48 hours)
2. Verify DNS records in domain registrar
3. Check CNAME or A records are correctly configured
4. Use [whatsmydns.net](https://whatsmydns.net/) to debug DNS

---

## Monitoring & Maintenance

### Weekly Tasks
- Check for any error messages
- Verify all links are working
- Monitor analytics

### Monthly Tasks
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Backup data/configurations

### Quarterly Tasks
- Update portfolio content with new projects
- Refresh skills section
- Review and optimize performance
- Update resume

---

## Quick Reference

| Platform | Difficulty | Free Tier | Best For |
|----------|-----------|-----------|----------|
| Vercel | Easy | Yes | Next.js |
| Netlify | Easy | Yes | Any static site |
| AWS Amplify | Medium | 12 months free | Scaling |
| GitHub Pages | Medium | Yes | Simple sites |
| Docker | Hard | Depends | Containers |

---

## Need Help?

- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Visit [Vercel Support](https://vercel.com/support)
- Check [Netlify Docs](https://docs.netlify.com)
- Ask on [Stack Overflow](https://stackoverflow.com/)

---

**Happy deploying! 🚀**
