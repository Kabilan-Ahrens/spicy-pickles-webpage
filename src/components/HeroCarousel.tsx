"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-kitchen-tasting.png",
    alt: "Ammachi tasting from a clay pot in her traditional Kerala kitchen surrounded by spices and jars",
    heading: (
      <>
        Ammachi&apos;s
        <br />
        <span className="hero-accent-red">Secret</span> Recipe,
        <br />
        <span className="hero-accent-green">Your Table.</span>
      </>
    ),
    body: "Every spoonful holds 70 years of Malabar wisdom. Raw mango ripened under the Kerala sun, ground fresh in stone, aged in bharani jars.",
    features: null,
    cta: "Taste the Tradition",
  },
  {
    image: "/images/hero-kitchen-cooking.png",
    alt: "Ammachi hand-mixing spices in a clay pot in her wood-fire Kerala kitchen",
    heading: (
      <>
        Why settle for
        <br />
        <span className="hero-accent-muted">factory-made</span>
        <br />
        when <span className="hero-accent-red">Amma&apos;s hands</span>
        <br />
        still remember?
      </>
    ),
    body: null,
    features: [
      { text: "Stone-ground masala, not machine-blended powder" },
      { text: "Aged 21 days in clay bharani for depth of flavour" },
      { text: "Single-origin coconut oil from our own grove" },
      { text: "Made to order — your jar never sits on a shelf" },
    ],
    cta: "Order Your Jar",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Image */}
      <div className="hero-bg-image" key={current}>
        <img
          src={slide.image}
          alt={slide.alt}
          className="hero-bg-img"
        />
        <div className={`hero-bg-overlay ${current === 0 ? "hero-overlay-right" : "hero-overlay-left"}`} />
      </div>

      {/* Carousel Arrows */}
      <button onClick={prev} className="hero-arrow hero-arrow-left" aria-label="Previous slide">
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button onClick={next} className="hero-arrow hero-arrow-right" aria-label="Next slide">
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Text Overlay */}
      <div className={`hero-overlay-content ${current === 0 ? "hero-text-right" : "hero-text-left"}`}>
        <div className="hero-text-overlay">
          <h1 className="hero-heading">{slide.heading}</h1>
          {slide.body && <p className="hero-body-text">{slide.body}</p>}
          {slide.features && (
            <ul className="hero-features-list">
              {slide.features.map((f, i) => (
                <li key={i}>
                  <span className="hero-check">&#10003;</span>
                  {f.text}
                </li>
              ))}
            </ul>
          )}
          <div className="hero-cta-wrapper">
            <Link href="/products" className="hero-cta-btn">
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-dot-indicator ${i === current ? "active" : ""}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
