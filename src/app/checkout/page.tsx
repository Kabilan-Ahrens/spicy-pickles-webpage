"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CartItem {
  productId: number;
  name: string;
  price: number;
  weight: string;
  quantity: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("spicy_cart");
    if (stored) {
      const items = JSON.parse(stored);
      if (items.length === 0) router.push("/cart");
      setCart(items);
    } else {
      router.push("/cart");
    }
  }, [router]);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with real RazorPay integration
    // For now, simulate successful payment
    setTimeout(() => {
      localStorage.removeItem("spicy_cart");
      router.push("/checkout/success?order=SP" + Date.now());
    }, 1500);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-sesame mb-10">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {/* Shipping Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-coconut border border-coconut-dark rounded-sm p-6">
            <h2 className="font-display text-xl font-bold text-sesame mb-6">
              Shipping Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sesame/70 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                  required
                  className="w-full px-4 py-2.5 border border-coconut-dark rounded-sm bg-coconut focus:outline-none focus:border-bharani"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sesame/70 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleInput}
                  required
                  className="w-full px-4 py-2.5 border border-coconut-dark rounded-sm bg-coconut focus:outline-none focus:border-bharani"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-sesame/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  required
                  className="w-full px-4 py-2.5 border border-coconut-dark rounded-sm bg-coconut focus:outline-none focus:border-bharani"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-sesame/70 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleInput}
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 border border-coconut-dark rounded-sm bg-coconut focus:outline-none focus:border-bharani resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sesame/70 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleInput}
                  required
                  className="w-full px-4 py-2.5 border border-coconut-dark rounded-sm bg-coconut focus:outline-none focus:border-bharani"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sesame/70 mb-1">
                  PIN Code
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleInput}
                  required
                  pattern="[0-9]{6}"
                  className="w-full px-4 py-2.5 border border-coconut-dark rounded-sm bg-coconut focus:outline-none focus:border-bharani"
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-coconut border border-coconut-dark rounded-sm p-6">
            <h2 className="font-display text-xl font-bold text-sesame mb-4">
              Payment
            </h2>
            <p className="text-sm text-sesame/60 mb-4">
              You&apos;ll be redirected to RazorPay to complete your payment
              securely via UPI, card, or net banking.
            </p>
            <div className="flex gap-3 text-sm text-sesame/50">
              <span className="px-3 py-1 border border-coconut-dark rounded-sm">
                UPI
              </span>
              <span className="px-3 py-1 border border-coconut-dark rounded-sm">
                Cards
              </span>
              <span className="px-3 py-1 border border-coconut-dark rounded-sm">
                Net Banking
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-banana-leaf text-coconut py-3.5 rounded-sm font-semibold text-lg hover:bg-banana-leaf/90 disabled:opacity-50 transition-colors"
          >
            {loading ? "Processing..." : `Pay ₹${total}`}
          </button>
        </div>

        {/* Summary Sidebar */}
        <div className="bg-coconut-dark p-6 rounded-sm border border-coconut-dark h-fit">
          <h2 className="font-display text-xl font-bold text-sesame mb-6">
            Your Order
          </h2>

          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex justify-between text-sm"
              >
                <span className="text-sesame/70">
                  {item.name} &times; {item.quantity}
                </span>
                <span className="font-mono">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-sesame/10 mt-4 pt-4 space-y-2 text-sm">
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
          </div>

          <div className="border-t border-sesame/10 mt-4 pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="font-mono text-bharani">₹{total}</span>
          </div>
        </div>
      </form>
    </section>
  );
}
