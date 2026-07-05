import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sesame text-coconut mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-mustard mb-3">
              Spicy Pickles
            </h3>
            <p className="text-coconut/70 text-sm leading-relaxed">
              Sun-dried. Hand-crushed. Three generations of authentic Malabar
              recipes, delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-mustard mb-3 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-coconut/70 hover:text-mustard transition-colors text-sm"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-coconut/70 hover:text-mustard transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-coconut/70 hover:text-mustard transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-mustard mb-3 text-sm uppercase tracking-wide">
              Reach Us
            </h4>
            <ul className="space-y-2 text-sm text-coconut/70">
              <li>Kerala, India</li>
              <li>info@spicypickles.com</li>
              <li>+91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coconut/10 mt-8 pt-6 text-center text-xs text-coconut/50">
          &copy; 2026 Spicy Pickles. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
