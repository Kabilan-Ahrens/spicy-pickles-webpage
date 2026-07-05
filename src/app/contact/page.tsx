"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-sesame text-center">
        Contact Us
      </h1>
      <p className="mt-4 text-center text-sesame/60 max-w-xl mx-auto">
        Questions about an order, bulk enquiries, or just want to say hello? We&apos;d love to hear from you.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-lg font-bold text-sesame">Location</h3>
            <p className="mt-1 text-sesame/70">Kerala, India</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-sesame">Email</h3>
            <p className="mt-1 text-sesame/70">info@spicypickles.com</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-sesame">Phone</h3>
            <p className="mt-1 text-sesame/70">+91 XXXXX XXXXX</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-sesame">Hours</h3>
            <p className="mt-1 text-sesame/70">Mon – Sat: 9:00 AM – 6:00 PM</p>
            <p className="text-sesame/70">Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="bg-banana-leaf/10 border border-banana-leaf/30 rounded-sm p-8 text-center">
              <p className="font-display text-xl font-bold text-banana-leaf">Thank you!</p>
              <p className="mt-2 text-sesame/70">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sesame mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full border border-coconut-dark rounded-sm px-4 py-2.5 text-sm text-sesame focus:outline-none focus:border-bharani"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sesame mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border border-coconut-dark rounded-sm px-4 py-2.5 text-sm text-sesame focus:outline-none focus:border-bharani"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sesame mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full border border-coconut-dark rounded-sm px-4 py-2.5 text-sm text-sesame bg-white focus:outline-none focus:border-bharani"
                >
                  <option>Order enquiry</option>
                  <option>Bulk / wholesale</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sesame mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full border border-coconut-dark rounded-sm px-4 py-2.5 text-sm text-sesame focus:outline-none focus:border-bharani resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sesame text-coconut py-3 rounded-sm font-semibold text-sm uppercase tracking-wide hover:bg-sesame/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
