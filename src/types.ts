/**
 * Shared type definitions.
 * Editing content? You almost never need to touch this file —
 * go to /src/data instead. This file just describes the *shape*
 * of that content so TypeScript can catch typos for you.
 */

export interface Product {
  /** Unique key, lowercase-kebab-case, e.g. "custom-cakes" */
  id: string;
  /** Category name shown as the card title, e.g. "Custom Cakes" */
  name: string;
  /** 1-2 sentence description shown under the title */
  description: string;
  /** Emoji or short icon glyph shown on the card (easy to swap, no image needed) */
  icon: string;
  /** Optional real photo path, e.g. "/assets/cakes.jpg". Leave empty to use the icon look. */
  image?: string;
  /** Optional starting price label, e.g. "From ₱850" */
  priceFrom?: string;
  /** Set true to show a "Popular" ribbon on the card */
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "messenger" | "tiktok";
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    establishedYear: number;
    logoInitials: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    address?: string;
    facebookUrl: string;
    surveyFormUrl: string;
    hours: { day: string; time: string }[];
  };
  socials: SocialLink[];
  navLinks: NavLink[];
}
