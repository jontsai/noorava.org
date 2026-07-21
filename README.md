# NoorAva

Static Next.js website for NoorAva, Kamyar Faron's nonprofit for Persian poetry and cultural memory.

## Stack

- Next.js App Router
- `@hacktoolkit/nextjs-htk` site configuration
- Static export to `docs/` for GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is exported to `docs/`, with `.nojekyll` added for GitHub Pages.

## Content/design notes

The site implements Claire Chalfen's Figma direction for the NoorAva landing and donation flows using the exported Figma artwork in `public/images/figma/`.

Known pending production inputs:

- Final ticketing URL for Boundless
- Final PayPal/Stripe donation URLs
- Any confirmed legal/tax mailing details to replace donation-page placeholders
