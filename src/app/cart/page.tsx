"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CartItem {
  productId: number;
  name: string;
  price: number;
  weight: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("spicy_cart");
    if (stored) setCart(JSON.parse(stored));
    setMounted(true);
  }, []);

  const updateCart = (updated: CartItem[]) => {
    setCart(updated);
    localStorage.setItem("spicy_cart", JSON.stringify(updated));
  };

  const updateQuantity = (productId: number, newQty: number) => {
    if (newQty < 1) return;
    const updated = cart.map((item) =>
      item.productId === productId ? { ...item, quantity: newQty } : item
    );
    updateCart(updated);
  };

  const removeItem = (productId: number) => {
    const updated = cart.filter((item) => item.productId !== productId);
    updateCart(updated);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (!mounted) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center text-sesame/60">
        Loading cart...
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-sesame mb-10">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sesame/60 text-lg mb-4">Your cart is empty.</p>
          <Link
            href="/products"
            className="text-bharani font-medium hover:underline"
          >
            Browse pickles &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex items-center gap-4 p-4 bg-coconut border border-coconut-dark rounded-sm"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-coconut-dark rounded-sm flex items-center justify-center text-3xl shrink-0">
                  🫙
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sesame truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-sesame/50">{item.weight}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center border border-coconut-dark rounded-sm">
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity - 1)
                    }
                    className="px-2 py-1 text-sm hover:bg-coconut-dark transition-colors"
                  >
                    &minus;
                  </button>
                  <span className="px-3 py-1 font-mono text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity + 1)
                    }
                    className="px-2 py-1 text-sm hover:bg-coconut-dark transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-right shrink-0 w-20">
                  <span className="font-mono font-medium text-bharani">
                    ₹{item.price * item.quantity}
                  </span>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-chilli/60 hover:text-chilli text-sm shrink-0"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-coconut-dark p-6 rounded-sm border border-coconut-dark h-fit">
            <h2 className="font-display text-xl font-bold text-sesame mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-sesame/70">Subtotal</span>
                <span className="font-mono">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sesame/70">Shipping</span>
                <span className="font-mono">
                  {shipping === 0 ? (
                    <span className="text-banana-leaf">Free</span>
                  ) : (
                    `₹${shipping}`
                  )}
                </span>
              </div>
              {subtotal > 0 && subtotal < 500 && (
                <p className="text-xs text-sesame/50">
                  Add ₹{500 - subtotal} more for free shipping.
                </p>
              )}
            </div>

            <div className="border-t border-sesame/10 mt-4 pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span className="font-mono text-lg text-bharani">₹{total}</span>
            </div>

            <Link
              href="/checkout"
              className="mt-6 block w-full text-center bg-banana-leaf text-coconut py-3 rounded-sm font-semibold hover:bg-banana-leaf/90 transition-colors"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="mt-3 block text-center text-sm text-sesame/60 hover:text-bharani"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
