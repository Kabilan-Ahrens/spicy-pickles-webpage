"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  category: string;
  description: string;
}

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-coconut-dark flex items-center justify-center text-sesame hover:bg-coconut-dark/80"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image side */}
        <div className="aspect-square md:aspect-auto bg-coconut-dark flex items-center justify-center p-8">
          <span className="text-9xl">🫙</span>
        </div>

        {/* Info side */}
        <div className="p-6 md:p-8 flex flex-col">
          <h2 className="font-display text-2xl font-bold text-sesame">
            {product.name}
          </h2>
          <p className="mt-1 font-mono text-xl text-bharani">
            ₹{product.price}
          </p>
          <p className="mt-1 text-xs text-sesame/50">
            Tax included. Shipping calculated at checkout.
          </p>

          <p className="mt-4 text-sm text-sesame/70 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-4 text-sm text-sesame/60">
            <span className="font-medium text-sesame">Quantity:</span> {product.weight}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-coconut-dark rounded-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-sesame hover:bg-coconut-dark transition-colors"
              >
                &minus;
              </button>
              <span className="px-4 py-2 font-mono text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-sesame hover:bg-coconut-dark transition-colors"
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

          {/* View full details link */}
          <Link
            href={`/products/${product.id}`}
            className="mt-4 text-sm text-bharani font-medium hover:underline"
            onClick={onClose}
          >
            View full details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
