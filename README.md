# Bongani Xolani Macu — Portfolio

A premium, production-ready personal portfolio website designed specifically for recruiters and employers.

## Features

- **Premium Design** — Clean, modern, corporate aesthetic with green accent branding
- **Dark & Light Mode** — Persistent theme toggle with localStorage
- **Live Weather** — Location-based weather using browser geolocation + OpenWeatherMap
- **GitHub Integration** — Auto-fetches featured repositories
- **Responsive** — Optimised for 320px to 1440px+ screens
- **Accessible** — WCAG 2.1 AA compliant with keyboard navigation and ARIA labels
- **SEO Ready** — Open Graph, Twitter Cards, semantic HTML, meta tags
- **Fast** — Vite + lightweight dependencies targeting excellent Lighthouse scores

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Recharts

## Installation

```bash
git clone https://github.com/bonganimacu/bongani-portfolio.git
cd bongani-portfolio
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_GITHUB_USERNAME=bonganimacu
```

Get a free OpenWeatherMap API key at [openweathermap.org/api](https://openweathermap.org/api).

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

1. Update `base` in `vite.config.ts` to match your repo name:
   ```ts
   base: '/REPO_NAME/',
   ```

2. Build and deploy:
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

Or use GitHub Actions for automatic deployment.

## Project Structure

```
src/
  components/    # Reusable UI components
  sections/      # Page sections
  data/          # Static data & config
  hooks/         # Custom React hooks
  lib/           # Utility functions
  types/         # TypeScript types
```

## License

MIT — Bongani Xolani Macu
