# Cinematic Architecture Canvas

A minimalist Next.js experience that renders a cinematic, futuristic high-rise using nothing but modern CSS and React. The scene layers atmospheric lighting, volumetric fog, and architectural silhouette studies to evoke concept-art energy that feels ready for a film still.

## Getting Started

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000` to explore the composition.

## Available Scripts

- `npm run dev` – start a local dev server with fast-refresh.
- `npm run lint` – run ESLint with the Next.js config.
- `npm run build` – create an optimized production build.
- `npm start` – serve the production build locally.

## Deployment

The app is prepped for Vercel. After building locally, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-1ee0cb06
```

## Tech Stack

- Next.js App Router
- React 18
- TypeScript
- Pure CSS illustration (no external assets)

## Scene Notes

The hero panel is driven entirely by layered gradients, clip paths, and subtle motion:

- Aurora-style lighting passes give the sky a cinematic glow.
- A reflective vertical core models the tower, wrapped by a light ribbon.
- Foreground skyline silhouettes and fog add parallax and depth cues.
- Responsive typography keeps the cinematic caption readable on any device.

Feel free to remix the gradients or geometry to explore new silhouettes.
