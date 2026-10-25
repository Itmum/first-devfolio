# Itmum Sadiq Rahman: Developer Portfolio

A responsive single-page portfolio with a dedicated page for each project, built with Next.js, TypeScript and Tailwind CSS.

**Live site:** https://your-portfolio-url.vercel.app

## Features

- Single-page layout with a glass navbar that blurs on scroll
- Dynamic project pages at `/projects/[slug]`
- Dark theme by default, with a light mode toggle
- Simple animations and hover effects
- Downloadable CV
- All content in one file: `data/portfolio.ts`

## Tech stack

Next.js (App Router), React, TypeScript, Tailwind CSS, deployed on Vercel.

## Run locally

```bash
git clone https://github.com/Itmum/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open http://localhost:3000

## Add a project

Copy one object in the `projects` array in `data/portfolio.ts`, change its values, and put the screenshot in `public/projects/`. The card and its page are generated automatically.

## Contact

- Email: itmamsadiq22@gmail.com
- GitHub: https://github.com/Itmum
- LinkedIn: https://www.linkedin.com/in/itmum
