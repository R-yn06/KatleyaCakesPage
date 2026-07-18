import type { Product } from "../types";

/**
 * PRODUCTS & SERVICES
 * ───────────────────
 * To add a product: copy any object below, paste it, give it a unique `id`,
 * and edit the fields. To remove one: delete its object. Order here is the
 * order it appears on the page.
 *
 * `image` is optional — leave it out (or empty string) and a soft brand-colored
 * card with the `icon` glyph will show instead. To use a real photo, drop the
 * file in /public/assets and set image to e.g. "/assets/your-photo.jpg".
 */
export const products: Product[] = [
  {
    id: "custom-cakes",
    name: "Custom Cakes",
    description:
      "Rich in flavor and designed around your theme — from minimalist tiers to full showstoppers, each one made with sweet love.",
    icon: "🎂",
    image: "",
    popular: true,
  },
  {
    id: "kakanin",
    name: "Kakanin",
    description:
      "Native Filipino kakanin made the traditional way — a taste of heritage passed down through generations.",
    icon: "🍚",
    image: "",
  },
  {
    id: "pastries",
    name: "Pastries",
    description:
      "A diverse spread of pastries perfect for special occasions or everyday cravings, baked fresh in small batches.",
    icon: "🥐",
    image: "",
  },
  {
    id: "sugar-flowers",
    name: "Sugar Flowers",
    description:
      "Delicate, hand-shaped edible flowers for cake toppings and decor — botanically accurate, entirely edible.",
    icon: "🌸",
    image: "",
  },
  {
    id: "cake-toppers",
    name: "Cake Toppers",
    description:
      "The finishing touch for any cake — custom toppers crafted with love and close attention to every detail.",
    icon: "🎀",
    image: "",
  },
  {
    id: "stickers",
    name: "Custom Stickers",
    description:
      "Professionally printed stickers for favors, packaging, and branding — designed to match your event or business.",
    icon: "✨",
    image: "",
  },
  {
    id: "accessories",
    name: "Customized Accessories",
    description:
      "Personalized keepsakes and accessories that make gifts and giveaways feel one-of-a-kind.",
    icon: "🎁",
    image: "",
  },
  {
    id: "baking-classes",
    name: "Baking Classes",
    description:
      "Learn the art of baking and cake decorating with our expert-led classes, welcoming all skill levels.",
    icon: "👩‍🍳",
    image: "",
  },
];
