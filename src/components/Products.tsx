import { products } from "../data/products";
import ProductCard from "./ProductCard";
import ScallopDivider from "./ScallopDivider";

export default function Products() {
  return (
    <section id="products" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-gold-dark text-xs md:text-sm mb-4 font-medium">
            Discover our range
          </p>
          <h2 className="font-display text-wine text-3xl md:text-4xl italic font-medium">
            More Than Just Cakes
          </h2>
          <p className="mt-4 text-ink/70">
            From the cake itself to every finishing touch — toppers, sugar
            flowers, stickers, and keepsakes — we handle the details so your
            celebration feels complete.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <ScallopDivider color="#FCEEF0" className="mt-20 md:mt-28" />
    </section>
  );
}
