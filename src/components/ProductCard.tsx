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

export default function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    setTimeout(() => {
      setAdded(false);
      setQuantity(1);
    }, 1500);
  };

  return (
    <div className="group relative">
      {/* Add to cart toast */}
      {added && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-banana-leaf text-coconut text-xs font-semibold px-3 py-1.5 rounded shadow-lg animate-pulse">
          Added to cart ✓
        </div>
      )}
      <Link href={`/products/${product.id}`} className="block">
        {/* Image Area */}
        <div className="relative aspect-square bg-gradient-to-br from-coconut-dark to-coconut rounded-sm mb-3 flex items-center justify-center border border-coconut-dark overflow-hidden">
          <span className="text-6xl opacity-80 group-hover:scale-105 transition-transform duration-200">
            🫙
          </span>

          {/* Hover overlay with actions */}
          <div className="absolute inset-0 bg-sesame/0 group-hover:bg-sesame/5 transition-colors duration-200" />

          {/* Quick View button */}
          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-sesame px-4 py-2 rounded-sm text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md hover:bg-white"
            >
              Quick view
            </button>
          )}

          {/* Wishlist heart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-sesame/60 hover:text-chilli"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <span className="text-[0.7rem] font-medium uppercase tracking-widest text-banana-leaf">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-bold text-sesame mt-1 group-hover:text-bharani transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-sesame/60 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-mono text-lg font-medium text-bharani">
            ₹{product.price}
          </span>
          <span className="text-xs text-sesame/50">{product.weight}</span>
        </div>
      </Link>

      {/* Quantity + Add to Cart (shown on hover) */}
      <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex items-center border border-coconut-dark rounded-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              setQuantity(Math.max(1, quantity - 1));
            }}
            className="px-2 py-1 text-sm text-sesame hover:bg-coconut-dark transition-colors"
          >
            &minus;
          </button>
          <span className="px-2 py-1 text-sm font-mono">{quantity}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
            className="px-2 py-1 text-sm text-sesame hover:bg-coconut-dark transition-colors"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className={`flex-1 py-1.5 rounded-sm text-sm font-medium transition-colors ${
            added
              ? "bg-banana-leaf text-coconut"
              : "bg-sesame text-coconut hover:bg-sesame/90"
          }`}
        >
          {added ? "Added ✓" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
