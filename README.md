# StyleBank

# StyleBank

A product-focused fashion style curation UI demonstrating scalable component architecture, 
design system thinking, and real-world UI patterns using React + shadcn/ui.

StyleBank is a portfolio project that showcases how fashion data, user intent,
and UI systems can be translated into reusable, production-ready components.


## Live Demo
- https://ina0203.github.io/StyleBank/

## Highlights
- **Reusable shadcn/ui component system** (Button, Card, etc.)
- **Clean page architecture** (pages/Home → App → main entry)
- **Tailwind design tokens** ready for scalable UI expansion
- Built for rapid iteration and portfolio presentation

## Tech Stack
- React, TypeScript, Vite
- Tailwind CSS
- shadcn/ui
- GitHub Pages (Actions)

## Project Structure
All shadcn/ui components have been downloaded under `@/components/ui`.

## File Structure

- `index.html` - HTML entry point
- `vite.config.ts` - Vite configuration file
- `tailwind.config.js` - Tailwind CSS configuration file
- `package.json` - NPM dependencies and scripts
- `src/app.tsx` - Root component of the project
- `src/main.tsx` - Project entry point
- `src/index.css` - Existing CSS configuration
- `src/pages/Index.tsx` - Home page logic

## Components

- All shadcn/ui components are pre-downloaded and available at `@/components/ui`

## Styling

- Add global styles to `src/index.css` or create new CSS files as needed
- Use Tailwind classes for styling components

## Development

- Import components from `@/components/ui` in your React components
- Customize the UI by modifying the Tailwind configuration

## Note

- The `@/` path alias points to the `src/` directory
- In your typescript code, don't re-export types that you're already importing

# Commands

**Install Dependencies**

```shell
pnpm i
```

**Add Dependencies**

```shell
pnpm add some_new_dependency

**Start Preview**

```shell
pnpm run dev
```

**To build**

```shell
pnpm run build
```
