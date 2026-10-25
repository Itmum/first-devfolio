# Itmum Sadiq Rahman: Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run
    npm install
    npm run dev      # http://localhost:3000

## Update content
Everything lives in `data/portfolio.ts`. To add a project, copy one object in `projects`,
change the text and `slug`, and put the screenshot in `public/projects/` (set `image: "/projects/your-file.png"`).
A page at `/projects/<slug>` is generated automatically.

## Deploy
Push to GitHub, import the repo on vercel.com, click Deploy.
