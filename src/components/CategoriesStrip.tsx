import Link from "next/link";
import { categoryShowcase } from "@/lib/products";

export default function CategoriesStrip() {
  return (
    <section className="bg-[#E8A317] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#3E2723] text-center mb-8">
          Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categoryShowcase.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#f5f0e8] border-4 border-white/50 overflow-hidden flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                {/* Placeholder — replace with product photos */}
                <span className="text-4xl md:text-5xl opacity-70">🫙</span>
              </div>
              <span className="text-sm md:text-base font-medium text-[#3E2723] text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
