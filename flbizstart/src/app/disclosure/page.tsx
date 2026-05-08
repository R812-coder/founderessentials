import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'founderessentials participates in affiliate marketing programs. Full disclosure of how we earn commissions and how that affects our recommendations.',
};

export default function DisclosurePage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-prose mx-auto">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-8 tracking-tight">
          Affiliate <span className="italic text-terracotta">disclosure</span>.
        </h1>

        <div className="prose-editorial">
          <p>
            founderessentials.com participates in affiliate marketing programs. When you click on a link to a third-party product or service and complete a qualifying action — usually signing up for an account or making a purchase — we may earn a commission, at no additional cost to you.
          </p>

          <h2>Programs we currently affiliate with</h2>

          <ul>
            <li><strong>Banking:</strong> Mercury, Bluevine, Relay</li>
            <li><strong>Registered agent / formation:</strong> Northwest Registered Agent, ZenBusiness, doola, Bizee</li>
            <li><strong>Payroll &amp; HR:</strong> Gusto</li>
            <li><strong>Bookkeeping &amp; accounting:</strong> Bench, Pilot, 1-800Accountant</li>
            <li><strong>Business phone:</strong> OpenPhone</li>
            <li><strong>Software &amp; ecommerce:</strong> Shopify, Klaviyo, Semrush</li>
            <li><strong>Insurance:</strong> Hiscox, NEXT Insurance (where applicable)</li>
          </ul>

          <p>
            This list updates as we add new programs. Where a recommended service does <em>not</em> have an affiliate program — Found, Chase Business, Bank of America Business, the Florida regional banks, the IRS — we receive no compensation for the recommendation.
          </p>

          <h2>How affiliate compensation affects content</h2>

          <p>To keep this disclosure honest:</p>

          <ul>
            <li><strong>Recommendations are based on our actual assessment.</strong> When a non-affiliate service is the right pick (Found for solo freelancers, Chase Business for cash-heavy LLCs, going directly to the IRS for an EIN), we recommend the non-affiliate option and earn no commission for that traffic.</li>
            <li><strong>Comparisons are written with real tradeoffs.</strong> If a service has a weakness — Mercury doesn't take cash, Bizee upsells aggressively, LegalZoom is overpriced for what it is — we write about the weakness.</li>
            <li><strong>Content updates when programs change.</strong> If an affiliate program ends, the recommendation persists or changes based on the underlying merit of the product, not the commission.</li>
          </ul>

          <h2>Federal Trade Commission compliance</h2>

          <p>
            This disclosure is provided in accordance with the Federal Trade Commission's 16 CFR § 255 — Guides Concerning the Use of Endorsements and Testimonials in Advertising. Any link on this site that earns commission is also flagged in-context as an affiliate link wherever practical.
          </p>

          <h2>Questions</h2>

          <p>
            If you have questions about our relationship with any of the services recommended on this site, <Link href="/contact" className="text-forest">contact us</Link>. We're happy to answer directly.
          </p>

          <p className="text-sm text-warmgray italic">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
