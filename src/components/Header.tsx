"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("spicy_cart") || "[]");
      const total = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
      setCartCount(total);
    };
    updateCount();
    window.addEventListener("storage", updateCount);
    const interval = setInterval(updateCount, 1000);
    return () => {
      window.removeEventListener("storage", updateCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-coconut/95 backdrop-blur-sm border-b border-coconut-dark">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-bharani">
            Spicy Pickles
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/products"
            className="text-sesame hover:text-bharani transition-colors font-medium"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sesame hover:text-bharani transition-colors font-medium"
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            className="text-sesame hover:text-bharani transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative text-sesame hover:text-bharani transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-chilli text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-sesame"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-coconut-dark px-4 py-4 space-y-3">
          <Link
            href="/products"
            className="block text-sesame hover:text-bharani font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block text-sesame hover:text-bharani font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            className="block text-sesame hover:text-bharani font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
