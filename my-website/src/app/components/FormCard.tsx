'use client';

import { useState } from 'react';

export default function FormCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace this with your backend/Formspree/Resend logic
    setSubmitted(true);
  };

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden shadow-lg p-6 space-y-4 text-sm text-white">
      <h2 className="text-xl font-bold mb-2">Get in Touch</h2>

      {submitted ? (
        <p className="text-green-400">Thanks for reaching out! I’ll get back to you soon.</p>
      ) : (
        <form 
            action="https://formspree.io/f/mgvkabgp"
            method="POST" 
            className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-md bg-black/30 border border-gray-600 text-white focus:outline-none focus:border-[var(--theme-color-4)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-md bg-black/30 border border-gray-600 text-white focus:outline-none focus:border-[var(--theme-color-4)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md bg-black/30 border border-gray-600 text-white focus:outline-none focus:border-[var(--theme-color-4)]"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
