import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative rounded-2xl bg-[#FFFDF9] border border-[#F1B7CC]/60 shadow-[0_14px_30px_rgba(20,44,78,0.10)] hover:shadow-[0_18px_40px_rgba(20,44,78,0.16)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {product.popular && (
        <span className="absolute top-4 right-4 z-10 rounded-full bg-[#F1B7CC] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#142C4E]">
          Popular
        </span>
      )}

        <div className="aspect-[4/3] w-full flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #142C4E 0%, #0D1F37 100%)" }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
            {product.icon}
          </span>
        )}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(#F7E7BF 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="font-display text-[#142C4E] text-xl font-medium">
          {product.name}
        </h3>
        <p className="mt-2 text-[#142C4E]/75 text-sm leading-relaxed">
          {product.description}
        </p>

      </div>
    </div>
  );
}
