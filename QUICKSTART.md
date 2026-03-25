# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18+
- npm or yarn
- Git (optional)
- Code editor (VS Code recommended)

## Step 1: Install Dependencies (1 min)

```bash
cd portpoliyo
npm install
```

## Step 2: Customize Your Info (2 min)

Edit `/lib/data/portfolio.ts` and update:

```typescript
export const PERSONAL_INFO = {
  name: 'YOUR NAME HERE',
  title: 'Your Job Title',
  email: 'your.email@example.com',
  // ... other fields
};
```

## Step 3: Add Your Projects (1 min)

In the same file, update the `PROJECTS` array with your work.

## Step 4: Run Locally (30 sec)

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Step 5: Deploy (30 sec)

```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

Then follow the [Deployment Guide](./DEPLOYMENT.md) forbit Vercel or Netlify.

---

## That's It! 🎉

Your portfolio is now running. For more detailed customization, see [CUSTOMIZATION.md](./CUSTOMIZATION.md).

## Common Next Steps

- [ ] Add project images
- [ ] Update resume PDF
- [ ] Connect GitHub integration
- [ ] Set up contact form email
- [ ] Configure custom domain
- [ ] Submit to Google Search Console

## Need Help?

- Check the main [README.md](./README.md)
- Visit [Customization Guide](./CUSTOMIZATION.md)
- See [Deployment Guide](./DEPLOYMENT.md)

---

Happy building! 🚀
