"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function OrderContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  return (
    <section className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-banana-leaf/10 flex items-center justify-center">
        <span className="text-banana-leaf text-4xl">&#10003;</span>
      </div>

      <h1 className="font-display text-3xl font-bold text-sesame mb-3">
        Order Confirmed
      </h1>

      <p className="text-sesame/60 mb-8">
        Thank you for your order. Your handmade pickles will be packed with care
        and shipped within 48 hours.
      </p>

      {orderId && (
        <div className="bg-coconut-dark border border-coconut-dark rounded-sm p-4 mb-8">
          <p className="text-xs text-sesame/50 mb-1">Order ID</p>
          <p className="font-mono font-medium text-sesame">{orderId}</p>
        </div>
      )}

      <p className="text-sm text-sesame/50 mb-8">
        A confirmation has been sent to your email. For any queries, reach us at
        info@spicypickles.com.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/products"
          className="bg-bharani text-coconut px-6 py-3 rounded-sm font-semibold hover:bg-bharani/90 transition-colors"
        >
          Continue Shopping
        </Link>
        <Link
          href="/"
          className="border border-coconut-dark text-sesame px-6 py-3 rounded-sm font-medium hover:bg-coconut-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-lg mx-auto px-4 py-24 text-center text-sesame/60">
          Loading...
        </div>
      }
    >
      <OrderContent />
    </Suspense>
  );
}
