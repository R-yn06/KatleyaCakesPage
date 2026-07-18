import type { ReactNode } from "react";
import { Mail, Phone, Facebook, Clock, MapPin, ClipboardList } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="bg-[#FFFDF9] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-[#D78FA9] text-xs md:text-sm mb-4 font-medium">
            Get in touch
          </p>
            <h2 className="font-display text-[#142C4E] text-3xl md:text-4xl italic font-medium">
            Let's Talk About Your Celebration
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact details card */}
          <div className="md:col-span-3 rounded-3xl p-8 md:p-10 shadow-[0_16px_40px_rgba(20,44,78,0.16)] text-[#FFFDF9]" style={{ background: "linear-gradient(135deg, #142C4E 0%, #0D1F37 100%)" }}>
            <div className="grid sm:grid-cols-2 gap-8">
              <ContactItem icon={<Mail size={20} />} label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#F1B7CC] break-all"
                >
                  {contact.email}
                </a>
              </ContactItem>

              <ContactItem icon={<Phone size={20} />} label="Phone">
                <a href={contact.phoneHref} className="hover:text-[#F1B7CC]">
                  {contact.phone}
                </a>
              </ContactItem>

              <ContactItem icon={<Facebook size={20} />} label="Facebook">
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F1B7CC]"
                >
                  Katleya Cakes Page
                </a>
              </ContactItem>

              {contact.address && (
                <ContactItem icon={<MapPin size={20} />} label="Location">
                  <span>{contact.address}</span>
                </ContactItem>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-[#FFFDF9]/15">
              <div className="flex items-center gap-2 mb-3 text-[#F1B7CC]">
                <Clock size={18} />
                <p className="text-sm uppercase tracking-wide">Hours</p>
              </div>
              <ul className="space-y-1 text-[#FFFDF9]/85 text-sm">
                {contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between max-w-xs">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Survey / order CTA card */}
          <div className="md:col-span-2 rounded-3xl border border-[#F1B7CC]/50 bg-[#F7EAF2] p-8 md:p-10 flex flex-col justify-between shadow-[0_12px_24px_rgba(20,44,78,0.10)]">
            <div>
              <ClipboardList className="text-[#142C4E] mb-4" size={28} />
              <h3 className="font-display text-[#142C4E] text-2xl italic font-medium">
                Ready to Order?
              </h3>
              <p className="mt-3 text-[#142C4E]/75 text-sm leading-relaxed">
                Fill out our quick order form and tell us about your event —
                we'll follow up with pricing and available dates.
              </p>
            </div>
            <a
              href={contact.surveyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex justify-center items-center rounded-full bg-[#142C4E] px-6 py-3.5 text-[#FFFDF9] font-semibold hover:bg-[#0D1F37] transition-colors"
            >
              Open Order Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#F1B7CC]">{icon}</span>
      <div>
        <p className="text-[#FFFDF9]/70 text-xs uppercase tracking-wide">
          {label}
        </p>
        <p className="mt-1 font-medium">{children}</p>
      </div>
    </div>
  );
}
