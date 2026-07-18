import { siteConfig } from "../data/siteConfig";
import ScallopDivider from "./ScallopDivider";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="bg-[#FFFDF9] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Decorative frame instead of a photo */}
          <div className="relative mx-auto md:mx-0 w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] border-2 border-gold/40" />
            <div className="relative rounded-[1.75rem] p-10 shadow-[0_18px_40px_rgba(20,44,78,0.14)] aspect-[4/5] flex flex-col items-center justify-center text-center gap-4" style={{ background: "linear-gradient(135deg, #142C4E 0%, #0D1F37 100%)" }}>
              <span className="text-5xl">🍰</span>
              <p className="font-display italic text-[#FFFDF9] text-2xl">
                "Made with sweet love,
                <br /> every single time."
              </p>
              <span className="h-px w-16 bg-gold/60" />
              <p className="text-[#FFFDF9]/80 text-sm uppercase tracking-[0.2em]">
                {siteConfig.brand.name}
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="uppercase tracking-[0.25em] text-[#D78FA9] text-xs md:text-sm mb-4 font-medium">
              {about.eyebrow}
            </p>
            <h2 className="font-display text-[#142C4E] text-3xl md:text-4xl italic font-medium mb-6">
              {about.title}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-ink/80 mb-4 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#142C4E]/10 pt-8">
              {about.highlights.map((h) => (
                <div key={h.label} className="text-center md:text-left">
                  <p className="font-display text-[#142C4E] text-3xl font-semibold">
                    {h.value}
                  </p>
                  <p className="text-[#142C4E]/70 text-xs md:text-sm mt-1">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScallopDivider color="#FFFBF6" className="mt-20 md:mt-28" />
    </section>
  );
}
