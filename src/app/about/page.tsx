import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-sesame text-center">
        Our Story
      </h1>
      <p className="mt-4 text-center text-sesame/60 max-w-xl mx-auto">
        Three generations. One kitchen. Unchanged recipes.
      </p>

      <div className="mt-12 space-y-8 text-sesame/80 leading-relaxed">
        <p>
          It started in 1954, in a small kitchen in Malabar. Our grandmother — Ammachi — would
          wake before dawn to grind spices on a flat stone, mix them with raw mangoes picked
          from the backyard, and pack them into clay bharani jars sealed with coconut oil.
        </p>
        <p>
          Neighbours would knock on the door asking for a jar. Then their relatives. Then
          friends from other districts. What began as a family tradition slowly became something
          the whole community relied on — pickles that tasted like home, no matter where home was.
        </p>
        <p>
          Today, we still follow Ammachi&apos;s methods. Every batch is hand-ground, sun-dried where
          the weather allows, and aged in bharani for at least 21 days. We use cold-pressed
          coconut oil from our own grove, source seasonal produce directly from local farmers,
          and refuse to add preservatives, artificial colours, or flavour enhancers.
        </p>
        <p>
          We don&apos;t mass-produce. Each jar is made to order, packed fresh, and shipped within
          48 hours. It takes longer, but we believe real food can&apos;t be rushed.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <p className="font-display text-4xl font-bold text-bharani">70+</p>
          <p className="mt-2 text-sm text-sesame/60">Years of tradition</p>
        </div>
        <div className="text-center">
          <p className="font-display text-4xl font-bold text-bharani">100%</p>
          <p className="mt-2 text-sm text-sesame/60">Cold-pressed coconut oil</p>
        </div>
        <div className="text-center">
          <p className="font-display text-4xl font-bold text-bharani">0</p>
          <p className="mt-2 text-sm text-sesame/60">Artificial preservatives</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/products"
          className="inline-block bg-sesame text-coconut px-8 py-3 rounded-sm font-semibold text-sm uppercase tracking-wide hover:bg-sesame/90 transition-colors"
        >
          Shop Our Pickles
        </Link>
      </div>
    </section>
  );
}
