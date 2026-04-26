# Netta's Portfolio

A polished, interactive personal portfolio built with React and Tailwind CSS, featuring a "Cyber-Femme Pixel-Terminal" aesthetic.

## Features
- **Retro Terminal Boot Sequence**: Immersive animated loading screen simulating a system breach.
- **Pixel Art Aesthetic**: Custom SVG pixel art assets (hearts, folders, files, and a sleeping kitty).
- **Glassmorphism Windows**: Draggable-feel windows for viewing projects, certificates, and identity data.
- **Interactive File System**: Navigate folders like a retro OS.
- **Mobile Responsive**: Fully adaptive layout for desktop and mobile devices.

## Tech Stack
- **React & Vite**: Fast development and building.
- **Tailwind CSS 4**: Modern utility-first styling with theme customization.
- **Framer Motion**: Smooth transitions and character-by-character terminal animations.
- **Lucide React**: Clean functional icons.

## Project Structure
- `src/components/`:
  - `Desktop.tsx`: The main "OS" interface containing icons and logical routing to windows.
  - `Terminal.tsx`: Handles the booting animation sequence.
  - `Window.tsx`: Reusable glassmorphism modal component with pixelated borders.
  - `PixelAssets.tsx`: Hand-crafted SVG pixel art components.
- `src/App.tsx`: Main application state management (Landing -> Boot -> Desktop).
- `src/index.css`: Theme definitions, custom fonts (Press Start 2P, JetBrains Mono), and special effects (scanlines, pixel borders).

## Getting Started
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
