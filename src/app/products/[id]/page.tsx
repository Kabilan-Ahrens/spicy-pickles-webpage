"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-sesame">
          Product not found
        </h1>
        <Link
          href="/products"
          className="inline-block mt-4 text-bharani font-medium hover:underline"
        >
          &larr; Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("spicy_cart") || "[]");
    const existing = cart.find(
      (item: { productId: number }) => item.productId === product.id
    );
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        weight: product.weight,
        quantity,
      });
    }
    localStorage.setItem("spicy_cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-sesame/60">
        <Link href="/" className="hover:text-bharani">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-bharani">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-sesame">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="flex gap-3">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`w-16 h-16 rounded-sm border flex items-center justify-center transition-colors ${
                  activeThumb === i
                    ? "border-bharani bg-coconut-dark"
                    : "border-coconut-dark bg-coconut hover:border-bharani/50"
                }`}
              >
                <span className="text-2xl opacity-60">🫙</span>
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 aspect-square bg-coconut-dark rounded-sm flex items-center justify-center border border-coconut-dark relative">
            <span className="text-9xl">🫙</span>
            <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sesame/60 hover:text-sesame">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-sesame">
            {product.name}
          </h1>

          <p className="mt-2 font-mono text-2xl text-bharani">
            ₹{product.price}
          </p>
          <p className="mt-1 text-xs text-sesame/50">
            Tax included. Shipping calculated at checkout.
          </p>

          <p className="mt-6 text-sesame/70 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-4 text-sm text-sesame/70">
            <span className="font-medium text-sesame">Quantity:</span> {product.weight}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-coconut-dark rounded-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2.5 text-sesame hover:bg-coconut-dark transition-colors"
              >
                &minus;
              </button>
              <span className="px-4 py-2.5 font-mono text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2.5 text-sesame hover:bg-coconut-dark transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 rounded-sm font-semibold text-sm uppercase tracking-wide transition-colors ${
                added
                  ? "bg-banana-leaf text-coconut"
                  : "bg-sesame text-coconut hover:bg-sesame/90"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>
            <button className="w-10 h-10 rounded-sm border border-coconut-dark flex items-center justify-center text-sesame/60 hover:text-chilli transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* Buy It Now */}
          <button className="mt-3 w-full py-3 rounded-sm font-semibold text-sm uppercase tracking-wide bg-bharani text-coconut hover:bg-bharani/90 transition-colors">
            Buy It Now
          </button>

          {/* Ask a Question */}
          <button className="mt-4 text-sm text-sesame font-medium hover:text-bharani transition-colors text-left">
            Ask a Question
          </button>

          {/* Shipping note */}
          <p className="mt-4 text-xs text-sesame/50">
            Free shipping on orders above ₹500. Ships within 48 hours.
          </p>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-16 md:mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-sesame text-center mb-8">
          You may also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="group block">
              <div className="aspect-square bg-coconut-dark rounded-sm mb-3 flex items-center justify-center border border-coconut-dark overflow-hidden">
                <span className="text-6xl opacity-80 group-hover:scale-105 transition-transform">🫙</span>
              </div>
              <h3 className="font-display text-lg font-bold text-sesame group-hover:text-bharani transition-colors">
                {p.name}
              </h3>
              <p className="font-mono text-bharani mt-1">₹{p.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16 md:mt-24 max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-sesame mb-4">
          Description
        </h2>
        <p className="text-sesame/70 leading-relaxed">
          {product.description} Made with traditional Kerala recipes passed down through three generations.
          Each batch is prepared fresh using stone-ground spices, cold-pressed coconut oil, and seasonal
          ingredients sourced directly from local farms. No artificial preservatives, colours, or flavour
          enhancers — just pure, authentic taste from Malabar.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-sesame/70">
          <li className="flex items-center gap-2">
            <span className="text-banana-leaf">&#10003;</span>
            100% cold-pressed coconut oil
          </li>
          <li className="flex items-center gap-2">
            <span className="text-banana-leaf">&#10003;</span>
            No artificial preservatives
          </li>
          <li className="flex items-center gap-2">
            <span className="text-banana-leaf">&#10003;</span>
            Stone-ground masala
          </li>
          <li className="flex items-center gap-2">
            <span className="text-banana-leaf">&#10003;</span>
            Hand-packed in food-grade glass jar
          </li>
        </ul>
      </div>
    </section>
  );
}
