# Daniel Clothings

A luxurious premium clothing storefront highlighting traditional Nigerian fashion,
corporate wear, and modern luxury — built with **Next.js (App Router)**, **React 19**,
**Tailwind CSS v4**, **Motion**, and **lucide-react**.

## Getting Started

**Prerequisites:** Node.js 18.18+ (Node 20 LTS recommended).

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).
3. Create a production build:
   ```bash
   npm run build
   ```
4. Serve the production build locally:
   ```bash
   npm run start
   ```

## Deploying to Vercel

This is a standard Next.js app and deploys to Vercel with zero configuration:

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — keep the default build settings and deploy.

## Project Structure

```
app/
  layout.tsx     Root layout (fonts, metadata, body styling)
  page.tsx       Home route — renders the App
  globals.css    Tailwind v4 entry + theme tokens & utilities
components/       UI sections (Hero, Collections, Reviews, ...) and App shell
data.ts          Static content (collections, stories, reviews, stats)
types.ts         Shared TypeScript types
```
