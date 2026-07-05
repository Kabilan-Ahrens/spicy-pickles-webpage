import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
import CategoriesStrip from "@/components/CategoriesStrip";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Categories Strip */}
      <CategoriesStrip />

      {/* Trust Strip */}
      <section className="bg-coconut-dark border-y border-coconut-dark">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-sesame/70">
          <div className="flex items-center gap-2">
            <span className="text-banana-leaf text-lg">&#10003;</span>
            Hand-ground spices
          </div>
          <div className="flex items-center gap-2">
            <span className="text-banana-leaf text-lg">&#10003;</span>
            No preservatives
          </div>
          <div className="flex items-center gap-2">
            <span className="text-banana-leaf text-lg">&#10003;</span>
            Ships in 48 hours
          </div>
          <div className="flex items-center gap-2">
            <span className="text-banana-leaf text-lg">&#10003;</span>
            100% coconut oil
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-sesame">
              Our Specialties
            </h2>
            <p className="text-sesame/60 mt-2">
              Small-batch, seasonal, made to order.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-block text-bharani font-medium hover:underline"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products"
            className="text-bharani font-medium hover:underline"
          >
            View all products &rarr;
          </Link>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/kerala-backwater.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sesame/85" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl font-bold text-white">
              Three Generations of Flavour
            </h2>
            <p className="mt-4 text-coconut/90 leading-relaxed max-w-md mx-auto md:mx-0">
              What started in a small Malabar kitchen in 1954 now reaches homes
              across India. Every jar carries the same hand-crushed masala,
              the same sun-drying ritual, and the same uncompromising taste.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-mustard font-medium hover:underline"
            >
              Read our story &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
