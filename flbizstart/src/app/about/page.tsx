import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Founderessentials  is published by Sunwrit, a Florida-focused new-business data service. Plain-language guides for new Florida LLC owners, written by an operator.',
};

export default function AboutPage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-prose mx-auto">
        <div className="eyebrow mb-4">About</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-8 tracking-tight">
          Plain-language guides for new <span className="italic text-terracotta">Florida LLC</span> owners.
        </h1>

        <div className="prose-editorial">
          <p className="text-xl md:text-2xl text-ink-soft italic font-body leading-relaxed mb-10">
            I'm Ray, founder of Sunwrit and the person behind founderessentials.com.
          </p>

          <p>
            I started this site for a specific reason: every week in Florida, more than 13,000 new businesses are filed with the state. I work with the Sunbiz feed daily on the data side of my business — Sunwrit pulls every new Florida business filing and turns it into structured data for B2B sales teams, equipment finance brokers, and contractor lead-generation companies.
          </p>

          <p>
            What I noticed, watching that feed every day for months, is that most new Florida LLC owners spend the first 30 days of their business life googling the same questions. <em>How do I open a business bank account? Do I really need a registered agent? What's an EIN? When is my annual report due?</em>
          </p>

          <p>
            The answers are out there, but most of the top-ranking guides are written by formation services trying to upsell $499 packages that aren't necessary, or by content marketers who've never actually filed a Florida LLC.
          </p>

          <p>
            founderessentials is the alternative. Plain-language guides on every step of starting and operating a Florida LLC, written by someone who watches the formation feed every weekday.
          </p>

          <h2>What I cover</h2>

          <ul>
            <li>How to form a Florida LLC, in real numbers and real timing</li>
            <li>Which business bank, registered agent, and bookkeeping setup actually fit different industries</li>
            <li>Florida-specific compliance — annual reports, sales tax, local business tax receipts, industry licensing</li>
            <li>Vertical-specific tool stacks for the most common Florida business types: restaurants, construction trades, ecommerce, professional services</li>
          </ul>

          <h2>A note on affiliate links</h2>

          <p>
            I'm an affiliate of several of the services mentioned across this site — Mercury, Bluevine, Relay, Northwest Registered Agent, ZenBusiness, doola, Bench, Pilot, Gusto, and OpenPhone among others. When you sign up through one of my links, I earn a commission at no additional cost to you.
          </p>

          <p>
            That commission is how this site stays free. It also means I have a financial interest in recommending services. To handle that honestly:
          </p>

          <ul>
            <li>I only affiliate with services I'd recommend without the affiliate relationship</li>
            <li>When a non-affiliate option is the right pick (Found, Chase Business, Florida regional banks), I say so</li>
            <li>The recommendation order in every comparison reflects my actual assessment, not the affiliate payout</li>
          </ul>

          <p>
            The full affiliate disclosure is on the <Link href="/disclosure" className="text-forest">Disclosure page</Link>.
          </p>

          <h2>Get in touch</h2>

          <p>
            The fastest way to reach me is the <Link href="/contact" className="text-forest">contact form</Link>. I read every email and usually respond within 1–2 business days.
          </p>

          <p className="text-ink-soft text-base">
            <strong>Site:</strong> founderessentials.com
            <br />
            <strong>Sunwrit (B2B data product):</strong> the parent publication
            <br />
            <strong>Based:</strong> New Jersey, Florida-focused
          </p>
        </div>
      </div>
    </div>
  );
}
