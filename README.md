# Katleya Cakes & Pastries — Website

A React + TypeScript landing page for Katleya Cakes & Pastries, built to be
easy to edit without touching component code, and to look great as the page
behind a QR code on a business card.

## Quick start

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local address it prints (usually `http://localhost:5173`).

To build the production version (what you'll actually deploy):

```bash
npm run build
```

This creates a `dist/` folder — upload its contents to any static host
(Netlify, Vercel, GitHub Pages, your own hosting, etc.).

## Editing content — you rarely need to touch component code

Everything you're likely to change lives in **`src/data/`**:

| File | What it controls |
|---|---|
| `src/data/siteConfig.ts` | Brand name, hero headline/subheadline, about text, contact info, business hours, social links, nav menu |
| `src/data/products.ts` | Every product/service card (Cakes, Kakanin, Pastries, Sugar Flowers, Toppers, Stickers, Accessories, Classes) |
| `src/data/testimonials.ts` | Customer review cards |

### Adding, editing, or removing a product

Open `src/data/products.ts`. Each product is one object:

```ts
{
  id: "custom-cakes",
  name: "Custom Cakes",
  description: "Rich in flavor and designed around your theme...",
  icon: "🎂",
  image: "",              // optional, see below
  priceFrom: "From ₱850", // optional
  popular: true,          // optional, shows a "Popular" ribbon
}
```

- **To add one**: copy an object, paste it in the array, give it a unique `id`, edit the text.
- **To remove one**: delete its object.
- **To reorder**: reorder the objects — cards render top to bottom, left to right.

### Using real photos instead of icons

Right now each product card shows a large emoji (`icon`) on a brand-colored
background — this looks clean with zero setup. To use a real photo instead:

1. Drop your image file into `public/assets/` (e.g. `public/assets/chocolate-cake.jpg`).
2. Set that product's `image` field to `/assets/chocolate-cake.jpg`.

The photo will automatically replace the icon on that card.

### Editing the hero, about text, or contact details

Open `src/data/siteConfig.ts` — it's grouped into clearly labeled sections
(`hero`, `about`, `contact`, `socials`, `navLinks`) with comments explaining
each field.

## Design notes

- **Palette**: deep wine (`#5B1F3D`), antique gold (`#B8863B`), soft blush
  (`#FCEEF0`) and warm cream (`#FFFBF6`) — chosen to feel premium and
  celebratory without tipping into "generic bakery pastel."
- **Type**: Fraunces (display/headline serif with warmth) paired with Inter
  (clean, highly legible body text).
- **Signature element**: the scalloped divider between sections
  (`src/components/ScallopDivider.tsx`), echoing a piped buttercream border —
  a small detail tying the visual language back to actual cake decorating.
- Fully responsive (mobile hamburger menu included) and keyboard-accessible
  (visible focus states, respects reduced-motion preferences).

## Using this for your business card QR code

1. Deploy the site (see `npm run build` above) to a free host like Netlify or
   Vercel — you'll get a permanent URL.
2. Generate a QR code pointing at that URL (any free QR generator works).
3. Print it on your business card. The hero section is designed to load fast
   and make a strong first impression on a phone screen, with clear "Get a
   Quote" and "View Our Menu" buttons right away.

## Project structure

```
src/
  data/            ← edit content here
    siteConfig.ts
    products.ts
    testimonials.ts
  components/      ← page sections (rarely need edits)
    Navbar.tsx
    Hero.tsx
    About.tsx
    Products.tsx
    ProductCard.tsx
    Testimonials.tsx
    CTABanner.tsx
    Contact.tsx
    Footer.tsx
    ScallopDivider.tsx
  types.ts         ← shape of the data above (TypeScript safety net)
  App.tsx
  main.tsx
  index.css
public/
  assets/          ← put real product photos here
```
