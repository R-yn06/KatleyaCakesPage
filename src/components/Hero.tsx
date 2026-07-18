import { siteConfig } from "../data/siteConfig";
import ScallopDivider from "./ScallopDivider";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="profile"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-0"
      style={{ background: "linear-gradient(135deg, #142C4E 0%, #0D1F37 100%)" }}
    >
      {/* ambient dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#F7D0DE 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        {/* Text column */}
        <div className="text-center md:text-left">
          <p className="uppercase tracking-[0.25em] text-[#F1B7CC] text-xs md:text-sm mb-5 font-medium">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[#FFFDF9] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] italic font-medium">
            {hero.headline}
          </h1>
          <p className="mt-6 text-[#FFFDF9]/85 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={hero.primaryCta.href}
              className="inline-flex justify-center items-center rounded-full bg-[#F1B7CC] px-8 py-3.5 text-[#142C4E] font-semibold hover:bg-[#F7D0DE] transition-colors shadow-[0_12px_24px_rgba(20,44,78,0.18)]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex justify-center items-center rounded-full border border-[#FFFDF9]/40 px-8 py-3.5 text-[#FFFDF9] font-medium hover:border-[#F1B7CC] hover:text-[#F1B7CC] transition-colors"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-8 text-[#FFFDF9]/70 text-sm">
            Trusted since {siteConfig.brand.establishedYear} · Davao-based · Made to order
          </p>
        </div>

        {/* Illustration column */}
        <div className="flex justify-center md:justify-end">
          <div className="animate-floaty drop-shadow-2xl">
            <CakeIllustration />
          </div>
        </div>
      </div>

      <div className="relative mt-14 md:mt-0">
        <ScallopDivider color="#FFFDF9" />
      </div>
    </section>
  );
}

/** Hand-built tiered cake illustration — no external image required */
function CakeIllustration() {
  return (
    <svg
      width="320"
      height="360"
      viewBox="0 0 320 360"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* cake stand */}
      <ellipse cx="160" cy="330" rx="120" ry="14" fill="#8E6526" opacity="0.35" />
      <rect x="140" y="300" width="40" height="16" rx="4" fill="#D9B569" />
      <ellipse cx="160" cy="300" rx="90" ry="12" fill="#D9B569" />

      {/* bottom tier */}
      <rect x="60" y="220" width="200" height="80" rx="14" fill="#FFFBF6" />
      <rect x="60" y="220" width="200" height="18" rx="9" fill="#F6DFE4" />
      {/* piping dots bottom tier */}
      {[80, 110, 140, 170, 200, 230].map((x) => (
        <circle key={x} cx={x} cy="270" r="5" fill="#E39FB4" />
      ))}

      {/* middle tier */}
      <rect x="90" y="150" width="140" height="72" rx="14" fill="#FCEEF0" />
      <rect x="90" y="150" width="140" height="16" rx="8" fill="#E39FB4" />
      {[110, 135, 160, 185, 210].map((x) => (
        <circle key={x} cx={x} cy="196" r="4.5" fill="#B8863B" />
      ))}

      {/* top tier */}
      <rect x="115" y="95" width="90" height="58" rx="12" fill="#FFFBF6" />
      <rect x="115" y="95" width="90" height="14" rx="7" fill="#F6DFE4" />

      {/* sugar flowers on top */}
      <g>
        <circle cx="160" cy="80" r="10" fill="#E39FB4" />
        <circle cx="148" cy="86" r="7" fill="#F6C6D6" />
        <circle cx="172" cy="86" r="7" fill="#F6C6D6" />
        <circle cx="160" cy="70" r="7" fill="#F6C6D6" />
        <circle cx="160" cy="80" r="4" fill="#B8863B" />
      </g>
      <g>
        <circle cx="200" cy="110" r="7" fill="#D9B569" />
        <circle cx="200" cy="110" r="3" fill="#5B1F3D" />
      </g>
      <g>
        <circle cx="122" cy="112" r="6" fill="#E39FB4" />
        <circle cx="122" cy="112" r="2.5" fill="#5B1F3D" />
      </g>

      {/* candle */}
      <rect x="157" y="55" width="6" height="20" rx="2" fill="#B8863B" />
      <path d="M160 45 C 156 52, 164 52, 160 45 Z" fill="#D9B569" />
    </svg>
  );
}
