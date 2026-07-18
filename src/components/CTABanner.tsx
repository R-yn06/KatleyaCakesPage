import { siteConfig } from "../data/siteConfig";

export default function CTABanner() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 md:px-10 -mt-4 md:-mt-6 pb-4">
        <div className="rounded-3xl px-8 py-12 md:py-16 text-center shadow-[0_16px_40px_rgba(20,44,78,0.16)] relative overflow-hidden" style={{ background: "linear-gradient(135deg, #142C4E 0%, #0D1F37 100%)" }}>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#F7E7BF 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <h2 className="relative font-display italic text-[#FFFDF9] text-2xl md:text-4xl font-medium max-w-xl mx-auto">
            Planning something sweet? Let's design it together.
          </h2>
          <p className="relative mt-4 text-[#FFFDF9]/80 max-w-md mx-auto">
            Share your date, theme, and headcount — we'll send you a custom
            quote within the day.
          </p>
          <div className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex justify-center items-center rounded-full bg-[#F1B7CC] px-8 py-3.5 text-[#142C4E] font-semibold hover:bg-[#F7D0DE] transition-colors"
            >
              Call {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex justify-center items-center rounded-full border border-[#FFFDF9]/40 px-8 py-3.5 text-[#FFFDF9] font-medium hover:border-[#F1B7CC] hover:text-[#F1B7CC] transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
