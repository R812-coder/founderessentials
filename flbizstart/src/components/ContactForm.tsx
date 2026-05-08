'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      if (accessKey && accessKey !== 'your-web3forms-access-key-here') {
        // Use Web3Forms if access key is configured
        formData.append('access_key', accessKey);
        formData.append('subject', `[founder essentials] ${formData.get('subject') || 'New message'}`);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (!result.success) throw new Error(result.message);
      } else {
        // Fallback: log to local API
        const data = Object.fromEntries(formData);
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-soft mb-2">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-cream border border-warmgray-soft text-ink focus:outline-none focus:border-forest font-body text-base rounded-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-cream border border-warmgray-soft text-ink focus:outline-none focus:border-forest font-body text-base rounded-sm"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink-soft mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full px-4 py-3 bg-cream border border-warmgray-soft text-ink focus:outline-none focus:border-forest font-body text-base rounded-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-soft mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 bg-cream border border-warmgray-soft text-ink focus:outline-none focus:border-forest font-body text-base rounded-sm resize-y"
        />
      </div>

      {/* Honeypot for bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-forest text-cream px-8 py-3 hover:bg-terracotta transition-colors font-medium text-sm rounded-sm disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-forest">
          ✓ Thanks. I'll respond within 1–2 business days.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-terracotta">
          Something went wrong. Try again, or email directly.
        </p>
      )}
    </form>
  );
}
