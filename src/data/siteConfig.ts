import type { SiteConfig } from "../types";

/**
 * SITE CONFIG
 * ───────────
 * Edit anything here — headline text, phone number, socials, hours —
 * and the whole site updates. No need to touch any component files.
 */
export const siteConfig: SiteConfig = {
  brand: {
    name: "Katleya Cakes",
    tagline: "Cakes & Pastries",
    establishedYear: 2014,
    logoInitials: "KC",
  },

  hero: {
    eyebrow: "Handmade in Davao since 2014",
    headline: "Every Celebration Deserves a Little Sweetness",
    subheadline:
      "Custom cakes, native kakanin, pastries, sugar flowers, toppers, and personalized keepsakes — crafted by hand, made to remember.",
    primaryCta: { label: "Get a Quote", href: "#contact" },
    secondaryCta: { label: "View Our Menu", href: "#products" },
  },

  about: {
    eyebrow: "Get to know us",
    title: "A Decade of Sweet Craftsmanship",
    paragraphs: [
      "Since 2014, Katleya Cakes has been turning life's sweetest moments into edible art — custom cakes, elegant pastries, and handmade sugar flowers that bring every celebration to life.",
      "What started as a small home kitchen has grown into a full creative studio: today we also craft cake toppers, personalized stickers, and customized accessories, so every detail of your event feels intentional — not just the cake.",
    ],
    highlights: [
      { label: "Years of Craft", value: "10+" },
      { label: "Cakes & Treats Made", value: "1,000+" },
      { label: "Happy Celebrations", value: "500+" },
    ],
  },

  contact: {
    email: "katleyacakesandpastries@gmail.com",
    phone: "+63 927 975 2701",
    phoneHref: "tel:+639279752701",
    address: "Davao City, Philippines",
    facebookUrl: "https://www.facebook.com/share/1DfZM4eCci/?mibextid=wwXIfr",
    surveyFormUrl: "https://forms.gle/xZq2j5sTqH3wujEH6",
    hours: [
      { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
      { day: "Sunday", time: "By appointment" },
    ],
  },

  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1AmcJzMVnw/?mibextid=wwXIfr",
      icon: "facebook",
    },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
};
