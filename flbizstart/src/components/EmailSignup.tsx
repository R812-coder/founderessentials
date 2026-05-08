'use client';

import { useState } from 'react';

export default function EmailSignup({
  variant = 'inline',
}: {
  variant?: 'inline' | 'block';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const newsletterAction = process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');

    try {
      if (newsletterAction) {
        // Post to Beehiiv/ConvertKit if configured
        const response = await fetch(newsletterAction, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email }).toString(),
        });
        if (!response.ok) throw new Error('Signup failed');
      } else {
        // Fallback: post to local API stub (logs only)
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'newsletter' }),
        });
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (variant === 'block') {
    return (
      <div className="bg-paper border border-warmgray-line/60 p-8 my-12">
        <div className="eyebrow mb-3">The Florida Founder's Checklist</div>
        <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 leading-tight">
          A 90-day operational checklist for new Florida LLC owners.
        </h3>
        <p className="text-ink-soft mb-5 max-w-xl">
          Banking, registered agent, EIN, sales tax, annual report, and the industry-specific tools that fit your business. Free PDF, sent by email.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 bg-cream border border-warmgray-soft text-ink focus:outline-none focus:border-forest font-body text-base rounded-sm"
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-forest text-cream px-6 py-3 hover:bg-terracotta transition-colors font-medium text-sm rounded-sm disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Send me the checklist'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-3 text-sm text-forest">
            ✓ Check your inbox in a few minutes.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-terracotta">
            Something went wrong. Try again or email directly.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 bg-cream border border-warmgray-soft text-ink focus:outline-none focus:border-forest font-body text-base rounded-sm"
        disabled={status === 'submitting'}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-forest text-cream px-6 py-3 hover:bg-terracotta transition-colors font-medium text-sm rounded-sm disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'submitting' ? 'Sending…' : 'Subscribe'}
      </button>
    </form>
  );
}
