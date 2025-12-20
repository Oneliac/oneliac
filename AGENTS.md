# AGENTS.md

## Build & Test Commands
- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture
**Tech Stack**: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4
**Structure**: Next.js App Router (`/app` directory)
- `app/` - React components and pages (layout.tsx, page.tsx)
- `public/` - Static assets
- No database, API routes, or backend integration yet

## Code Style
- **Language**: TypeScript strict mode enabled
- **Imports**: Use `@/*` alias (maps to project root)
- **Components**: React functional components with TypeScript types
- **Styling**: Tailwind CSS utility classes
- **Formatting**: ESLint with Next.js core-web-vitals and TypeScript configs
- **JSX**: React 19 automatic JSX transform
