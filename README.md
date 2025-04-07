# TradeWise Frontend

## Application Deployment

To run the application, ensure you have `Node.js` version >= 16 installed.

1. **Clone/fork** the current repository.
2. **Install dependencies** using `npm ci`.
3. **Create a `.env` file** with environment variables based on `.env.sample`.
4. **Start the application** with `npm run dev`.

---

## Application Directory Structure

The top-level directories of the application are organized as follows:

- `core` — application core logic.
- `pages` — application pages (routing).

### The `core` Directory

This directory contains the core application logic, as well as common and/or reusable components/modules.

- `components` — React components.
- `constants` — application constants.
- `hooks` — React hooks.
- `services` — modules handling application logic.
- `store` — global state management (Redux, Zustand, etc.).
- `styles` — shared styles (CSS/SCSS).
- `utils` — helper utilities.

---

## Feature-Based Structure

The application follows a modular architecture (also known as feature-based structure).

A typical feature directory includes:
- `components` — feature-specific components.
- `index` — main React component (entry point for the feature).
- `store` — state management logic for the feature.