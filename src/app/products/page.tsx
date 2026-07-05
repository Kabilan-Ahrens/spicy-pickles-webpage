"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { products, categories, type Product } from "@/lib/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-sesame">
          Kerala Homemade Pickles
        </h1>
        <p className="text-sesame/60 mt-2">
          Each jar is hand-packed and made to order. Free shipping above ₹500.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-banana-leaf text-coconut"
                  : "bg-coconut-dark text-sesame/70 hover:bg-coconut-dark/80 hover:text-sesame"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <select className="border border-coconut-dark rounded-sm px-3 py-2 text-sm text-sesame bg-white">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-sesame/60 py-12">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
