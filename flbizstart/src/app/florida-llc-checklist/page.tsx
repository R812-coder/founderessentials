import type { Metadata } from 'next';
import EmailSignup from '@/components/EmailSignup';

export const metadata: Metadata = {
  title: 'The 90-Day Florida Founder\'s Checklist',
  description:
    'A free 90-day operational checklist for new Florida LLC owners. Banking, registered agent, EIN, sales tax, annual report, and the industry-specific tools that fit.',
};

export default function ChecklistPage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow mb-4">Free PDF</div>
        <h1 className="font-display text-5xl md:text-7xl text-ink leading-[0.95] mb-8 tracking-tight">
          The 90-Day <span className="italic text-terracotta">Florida Founder's</span> Checklist.
        </h1>

        <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-12 font-body italic">
          Every step from filing to first revenue, in the order it actually matters. Used by hundreds of new Florida LLC owners.
        </p>

        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="bg-paper border border-warmgray-line/60 p-8">
              <div className="eyebrow mb-3">Send it to me</div>
              <h2 className="font-display text-2xl text-ink mb-5">
                Free, by email. No spam.
              </h2>
              <EmailSignup />
              <p className="text-xs text-warmgray mt-4 leading-relaxed">
                You'll also get our weekly Florida LLC newsletter. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-5">
            <div className="border-l-2 border-terracotta pl-6 py-2">
              <div className="eyebrow mb-3">What's inside</div>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1">01</span>
                  <span>Pre-formation: name search, registered agent, NAICS code selection</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1">02</span>
                  <span>Day 1–7: Articles of Organization, EIN, operating agreement</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1">03</span>
                  <span>Day 8–30: business bank, payroll setup, bookkeeping system</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1">04</span>
                  <span>Day 31–60: Florida sales tax registration, local business tax receipt, industry licensing</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1">05</span>
                  <span>Day 61–90: insurance, contracts, first hire / contractor setup</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1">06</span>
                  <span>Calendar: annual report deadlines, quarterly tax dates, sales tax filings</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="ornament" />

        <div className="bg-paper border border-warmgray-line/60 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-mono text-xs text-warmgray uppercase tracking-wider mb-2">Pages</div>
              <div className="font-display text-3xl text-ink">12</div>
            </div>
            <div>
              <div className="font-mono text-xs text-warmgray uppercase tracking-wider mb-2">Format</div>
              <div className="font-display text-3xl text-ink">PDF</div>
            </div>
            <div>
              <div className="font-mono text-xs text-warmgray uppercase tracking-wider mb-2">Cost</div>
              <div className="font-display text-3xl text-terracotta italic">Free</div>
            </div>
          </div>
        </div>

        <div className="prose-editorial">
          <h2>Why we built it</h2>
          <p>
            Most "free LLC checklist" PDFs online are written by formation services to upsell their $499 packages. We built this one because we work with Florida new-business filing data daily — Sunwrit pulls every Sunbiz filing — and we watch the same gaps trip up the same owners every month.
          </p>
          <p>
            This checklist is what we'd hand a friend who told us they just filed their first Florida LLC. It's specific, it's Florida, and it doesn't try to sell you anything you don't need.
          </p>
        </div>
      </div>
    </div>
  );
}
