import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import EmailSignup from '@/components/EmailSignup';
import ArticleCard from '@/components/ArticleCard';

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="max-w-wide mx-auto px-6 lg:px-12 pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow mb-6">Vol. 1 · Florida</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-ink mb-8 tracking-tight">
              You filed your <span className="italic text-terracotta">Florida LLC</span>.
              <br />
              Now what?
            </h1>
            <p className="text-xl md:text-2xl text-ink-soft leading-relaxed font-body max-w-2xl mb-10">
              A 30-day operational guide for new Florida businesses, written by someone who watches the Sunbiz formation feed daily.
            </p>
            <EmailSignup />
            <p className="mt-3 text-sm text-warmgray">
              Get the free 90-day Florida Founder's Checklist. No spam. Unsubscribe anytime.
            </p>
          </div>

          <aside className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
            <div className="border-l-2 border-terracotta pl-6 lg:pl-8 py-2">
              <div className="eyebrow mb-3">From the editor</div>
              <p className="font-display text-xl md:text-2xl italic text-ink-soft leading-snug mb-4">
                "Most new Florida LLC owners spend the first 30 days googling the same five questions. The answers are out there. They're written by formation services trying to upsell $499 packages."
              </p>
              <div className="font-mono text-xs text-warmgray uppercase tracking-wider">
                — Ray, founder
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="hairline max-w-wide mx-auto" />

      {/* Featured articles */}
      <section className="max-w-wide mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="eyebrow mb-3">Cornerstone guides</div>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              The five things every new Florida LLC owner should read first.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-9">
            {featured.length > 0 ? (
              featured.map((article, i) => (
                <ArticleCard key={article.slug} article={article} number={i + 1} />
              ))
            ) : (
              <p className="text-warmgray italic">Articles coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <div className="ornament" />

      {/* What we cover — verticals */}
      <section className="max-w-wide mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <div className="eyebrow mb-3">Industries we write for</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight max-w-3xl mx-auto">
            Vertical-specific tool stacks for the most common Florida business types.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Restaurants',
              copy: 'Toast vs Square, Mercury banking, Gusto for tipped employees, Restaurant365 bookkeeping.',
              count: '~3,500/mo',
            },
            {
              title: 'Construction',
              copy: 'Jobber & ServiceTitan, NEXT Insurance, equipment financing, FRSA & FACCA membership.',
              count: '~2,800/mo',
            },
            {
              title: 'Ecommerce',
              copy: 'Shopify partner picks, Klaviyo from day one, A2X-integrated bookkeepers, 3PL options.',
              count: '~2,100/mo',
            },
            {
              title: 'Professional services',
              copy: 'Mercury for the bank, OpenPhone for the line, Bench for the books, Hiscox for the E&O.',
              count: '~4,200/mo',
            },
          ].map((v) => (
            <div
              key={v.title}
              className="border border-warmgray-line/60 p-6 hover:border-terracotta/60 transition-colors"
            >
              <div className="font-mono text-xs text-warmgray uppercase tracking-wider mb-3">
                {v.count} new FL LLCs
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{v.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{v.copy}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-warmgray text-center mt-6 font-mono">
          Volume estimates based on Florida Division of Corporations 2024–2025 filings.
        </p>
      </section>

      {/* Email signup block */}
      <section className="max-w-wide mx-auto px-6 lg:px-12 py-12">
        <EmailSignup variant="block" />
      </section>

      {/* About / trust strip */}
      <section className="max-w-wide mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 max-w-4xl mx-auto">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-3">Editorial</div>
            <h3 className="font-display text-2xl text-ink leading-tight">
              Written by an operator, not a formation service.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 text-ink-soft space-y-4 text-base leading-relaxed">
            <p>
              Founder Essentials is published by Sunwrit, a Florida-focused new-business data service. Every guide on this site is written from the perspective of someone who pulls Florida LLC formation data daily — and watches the patterns.
            </p>
            <p>
              We affiliate with services we'd recommend without the affiliate relationship. When the right answer is a non-affiliate option (the IRS for free EINs, Chase Business for cash-heavy operators, Florida regional banks for relationship banking), we say so.
            </p>
            <p>
              <Link href="/about" className="text-forest hover:text-terracotta">
                Read more about us →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
