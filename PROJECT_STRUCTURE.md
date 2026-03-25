next-env.d.ts
.eslintrc.json
.gitignore
.env.example
.prettierrc
postcss.config.js
tsconfig.json
tailwind.config.js
next.config.js
vercel.json
package.json
README.md
DEPLOYMENT.md
CUSTOMIZATION.md
QUICKSTART.md

/app
  - layout.tsx
  - page.tsx

/components
  /ui
    - index.ts
    - Button.tsx
    - Badge.tsx
    - Card.tsx
    - Layout.tsx
    - Form.tsx
  /sections
    - index.ts
    - Navbar.tsx
    - Footer.tsx
    - HeroSection.tsx
    - AboutSection.tsx
    - SkillsSection.tsx
    - ProjectsSection.tsx
    - ExperienceSection.tsx
    - ContactSection.tsx

/lib
  - types.ts
  - utils.ts
  - ThemeProvider.tsx
  /data
    - portfolio.ts
  /services
    - github.ts
    - email.ts

/styles
  - globals.css

/public
  - (place your images, resume, and favicon here)

/.github
  /workflows
    - deploy.yml
