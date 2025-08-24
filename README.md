
# Nagendra-Portfolio

A personal portfolio website built with Vite, React and TypeScript. It showcases a modern responsive UI, custom Three.js scenes, and a collection of reusable Radix-based UI components styled with Tailwind CSS.

## What I used

- Vite (build tool)
- React + TypeScript
- Tailwind CSS (+ tailwind-animate)
- Radix UI primitives (accessible UI building blocks)
- Three.js, @react-three/fiber and @react-three/drei for 3D scenes
- GSAP for timeline animations
- React Router, React Hook Form and Zod for forms and validation
- ESLint + TypeScript for static checks

## Download & run (PowerShell)

1. Clone the repository:

```powershell
git clone https://github.com/nagendra376/Nagendra-Portfolio.git
cd Nagendra-Portfolio
```

2. Install dependencies (npm):

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

Open http://localhost:5173 in your browser.

Build for production and preview:

```powershell
npm run build
npm run preview
```

Notes:

- You can use `pnpm` or `yarn` instead of `npm` if preferred; replace the commands accordingly.
- If the default port is busy, start Vite on another port: `npm run dev -- --port 5174`.

## Project layout (high level)

- `src/` — application source (components, pages, hooks, utils)
- `src/components/ui/` — shared UI primitives (buttons, dialogs, inputs)
- `public/` — static assets
- `index.html`, `vite.config.ts`, `tailwind.config.ts` — build and styling config

## Troubleshooting

- If you run into type errors, check your Node.js version and reinstall dependencies.
- Run `npm run lint` to surface lint/type issues.


