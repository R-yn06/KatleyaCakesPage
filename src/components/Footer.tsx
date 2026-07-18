import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  messenger: MessageCircle,
  tiktok: MessageCircle,
};

export default function Footer() {
  return (
    <footer className="bg-[#0D1F37] text-[#FFFDF9]/70">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display italic text-[#FFFDF9] text-xl">
              {siteConfig.brand.name}
            </p>
            <p className="text-sm mt-1">{siteConfig.brand.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {siteConfig.socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFFDF9]/20 hover:border-[#F1B7CC] hover:text-[#F1B7CC] transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#FFFDF9]/10 text-xs text-center md:text-left">
          © {new Date().getFullYear()} {siteConfig.brand.name}. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
