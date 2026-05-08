import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources for Florida LLC Owners',
  description:
    'Every tool we recommend for new Florida LLC owners. Banking, registered agents, payroll, bookkeeping, phone, software, and insurance.',
};

interface Resource {
  name: string;
  blurb: string;
  bestFor: string;
  affKey: string;
  notes?: string;
}

interface ResourceCategory {
  title: string;
  intro: string;
  resources: Resource[];
}

const categories: ResourceCategory[] = [
  {
    title: 'Business banking',
    intro: 'For most new Florida LLCs, an online-first bank is the right starting point. Pick one based on whether you take cash and how much idle cash you want earning interest.',
    resources: [
      {
        name: 'Mercury',
        blurb: 'No-fee business checking with the cleanest software experience in the category. The default pick for tech, services, and ecommerce LLCs that don\'t deposit cash.',
        bestFor: 'Most new Florida LLCs',
        affKey: 'MERCURY',
      },
      {
        name: 'Bluevine',
        blurb: 'Up to 3.7% APY on idle cash with qualifying activity. Highest interest of any major US business checking account.',
        bestFor: 'LLCs with idle balances',
        affKey: 'BLUEVINE',
      },
      {
        name: 'Relay',
        blurb: 'Up to 20 sub-checking accounts on the standard tier. Built for Profit First and multi-entity owners.',
        bestFor: 'Profit First / multi-entity',
        affKey: 'RELAY',
      },
    ],
  },
  {
    title: 'Registered agent & formation',
    intro: 'Every Florida LLC needs a registered agent. Most owners use a commercial service to keep their home address off public record and ensure compliance.',
    resources: [
      {
        name: 'Northwest Registered Agent',
        blurb: '$125/year, free mail scanning, real phone-answered support, "Privacy by Default" data policy. The default pick for most Florida LLCs.',
        bestFor: 'Most owners',
        affKey: 'NORTHWEST',
      },
      {
        name: 'ZenBusiness',
        blurb: '$199/year as a standalone RA service, or bundled free into their formation packages. Strong customer service and a clean dashboard.',
        bestFor: 'Owners forming through ZenBusiness',
        affKey: 'ZENBUSINESS',
      },
      {
        name: 'doola',
        blurb: 'Specialized in formation and EINs for non-US-resident founders. The right pick if the standard online IRS application won\'t work for you.',
        bestFor: 'Non-US residents',
        affKey: 'DOOLA',
      },
      {
        name: 'Bizee (formerly Incfile)',
        blurb: '$0 + state fees for the basic formation package, with one year of registered agent service free. Year-two RA renewal is $119.',
        bestFor: 'Lowest first-year cost',
        affKey: 'BIZEE',
      },
    ],
  },
  {
    title: 'Payroll',
    intro: 'Once you hire your first employee — or elect S-Corp tax treatment for yourself — you need a payroll provider that handles Florida state filings automatically.',
    resources: [
      {
        name: 'Gusto',
        blurb: 'Handles W-2/1099 filings, Florida unemployment, workers\' comp integration, and tipped-employee payroll for restaurants. The cleanest small-business payroll on the market.',
        bestFor: 'New employers, S-Corp owners',
        affKey: 'GUSTO',
      },
    ],
  },
  {
    title: 'Bookkeeping & accounting',
    intro: 'The cheapest moment to start clean books is day one. The next-cheapest is now.',
    resources: [
      {
        name: 'Bench',
        blurb: 'Full-service monthly bookkeeping with a real human team. $249–$499/month depending on volume. The most common pick for under-$1M Florida LLCs.',
        bestFor: 'Most service & ecommerce LLCs',
        affKey: 'BENCH',
      },
      {
        name: 'Pilot',
        blurb: 'Bookkeeping plus tax and CFO services for venture-backed and high-growth software companies. More expensive than Bench, more sophisticated.',
        bestFor: 'Venture-backed startups',
        affKey: 'PILOT',
      },
      {
        name: '1-800Accountant',
        blurb: 'Bookkeeping plus tax filing and registered agent services bundled. Strong for small operators who want everything in one relationship.',
        bestFor: 'All-in-one compliance',
        affKey: '1800ACCOUNTANT',
      },
    ],
  },
  {
    title: 'Business phone',
    intro: 'Your personal cell number on every customer interaction is a privacy and professionalism risk. A dedicated business line costs less than $15/month.',
    resources: [
      {
        name: 'OpenPhone',
        blurb: 'Modern business phone with a real mobile app, voicemail transcription, shared team inboxes, and CRM integrations. The default pick for new Florida LLCs.',
        bestFor: 'Most owners',
        affKey: 'OPENPHONE',
      },
    ],
  },
  {
    title: 'Industry-specific software',
    intro: 'Recommendations vary heavily by what your LLC actually does. Here are the picks we cover most.',
    resources: [
      {
        name: 'Shopify',
        blurb: 'The default ecommerce platform for new DTC brands. Strong app ecosystem, fast time-to-launch, fair pricing on the basic plan.',
        bestFor: 'Ecommerce / DTC',
        affKey: 'SHOPIFY',
      },
    ],
  },
  {
    title: 'Insurance',
    intro: 'Florida LLCs need (at minimum) general liability. Construction, healthcare, and professional services typically need additional coverage.',
    resources: [
      {
        name: 'Hiscox',
        blurb: 'Small-business GL, professional liability, and BOP policies with a fast online quote-and-bind. Best for service-based LLCs.',
        bestFor: 'Service-based LLCs',
        affKey: 'HISCOX',
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-prose mx-auto mb-20">
        <div className="eyebrow mb-4">Resources</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-8 tracking-tight">
          The flbizstart <span className="italic text-terracotta">stack</span>.
        </h1>
        <p className="text-xl text-ink-soft leading-relaxed mb-6">
          Every tool we recommend for new Florida LLC owners, organized by category. We affiliate with most — but not all — of these. Where we don't have an affiliate relationship, we still recommend the tool when it's the right pick.
        </p>
        <p className="text-base text-warmgray italic">
          See our <Link href="/disclosure" className="text-warmgray underline">full affiliate disclosure</Link> for context.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-20">
        {categories.map((category) => (
          <section key={category.title}>
            <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
                  {category.title}
                </h2>
                <p className="text-base text-ink-soft leading-relaxed">{category.intro}</p>
              </div>

              <div className="col-span-12 lg:col-span-8 space-y-6">
                {category.resources.map((resource) => {
                  const url = process.env[`NEXT_PUBLIC_AFF_${resource.affKey}`] || '#';
                  return (
                    <div
                      key={resource.name}
                      className="border border-warmgray-line/60 p-6 hover:border-terracotta/60 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-display text-2xl text-ink mb-1">
                            {resource.name}
                          </h3>
                          <div className="font-mono text-xs text-terracotta uppercase tracking-wider">
                            Best for: {resource.bestFor}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-soft leading-relaxed mb-4">
                        {resource.blurb}
                      </p>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="aff-btn"
                      >
                        Learn more →
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hairline" />
          </section>
        ))}
      </div>

      <div className="ornament" />

      <div className="max-w-prose mx-auto text-center">
        <p className="text-base text-warmgray italic leading-relaxed">
          Some links on this page are affiliate links. We may earn a commission when you sign up through them, at no cost to you. Recommendations reflect our actual assessment, not the affiliate payout. <Link href="/disclosure" className="text-warmgray underline">Full disclosure →</Link>
        </p>
      </div>
    </div>
  );
}
