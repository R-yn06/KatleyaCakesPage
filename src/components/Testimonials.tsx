import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import ScallopDivider from "./ScallopDivider";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-blush py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-gold-dark text-xs md:text-sm mb-4 font-medium">
            What customers say
          </p>
          <h2 className="font-display text-wine text-3xl md:text-4xl italic font-medium">
            Loved, One Celebration at a Time
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="rounded-2xl bg-cream border border-wine/10 shadow-card p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <blockquote className="text-ink/80 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-wine/10">
                <p className="font-display text-wine font-medium">
                  {t.name}
                </p>
                <p className="text-ink/50 text-xs">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <ScallopDivider color="#FFFBF6" className="mt-20 md:mt-28" />
    </section>
  );
}
