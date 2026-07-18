import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#142C4E]/95 backdrop-blur shadow-[0_12px_30px_rgba(20,44,78,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-10 h-16 md:h-20">
        <a
          href="#profile"
          className="flex items-center gap-3 font-display text-[#FFFDF9]"
        >
          <span className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#F1B7CC] text-[#142C4E] font-semibold text-sm md:text-base">
            {siteConfig.brand.logoInitials}
          </span>
          <span className="text-lg md:text-xl tracking-wide">
            {siteConfig.brand.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 font-body text-sm tracking-wide">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#FFFDF9]/90 hover:text-[#F1B7CC] transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-[#F1B7CC]/80 px-5 py-2 text-sm text-[#F1B7CC] hover:bg-[#F1B7CC] hover:text-[#142C4E] transition-colors font-medium"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#FFFDF9]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-[#0D1F37] ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[#FFFDF9]/90 hover:text-[#F1B7CC] uppercase text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center rounded-full bg-[#F1B7CC] px-5 py-2 text-sm text-[#142C4E] font-medium"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
