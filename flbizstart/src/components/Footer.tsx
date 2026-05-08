import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-warmgray-line/60 bg-paper/40">
      <div className="max-w-wide mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl text-ink mb-2">flbizstart</div>
            <p className="text-sm text-warmgray leading-relaxed">
              Plain-language guides for new Florida LLC owners.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-3">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/how-to-start-llc-florida" className="no-underline text-ink-soft hover:text-terracotta">
                  Start an LLC
                </Link>
              </li>
              <li>
                <Link href="/blog/best-business-bank-florida-llc" className="no-underline text-ink-soft hover:text-terracotta">
                  Business banks
                </Link>
              </li>
              <li>
                <Link href="/blog/best-registered-agent-florida" className="no-underline text-ink-soft hover:text-terracotta">
                  Registered agents
                </Link>
              </li>
              <li>
                <Link href="/blog/florida-llc-annual-report" className="no-underline text-ink-soft hover:text-terracotta">
                  Annual report
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-3">Site</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="no-underline text-ink-soft hover:text-terracotta">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="no-underline text-ink-soft hover:text-terracotta">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="no-underline text-ink-soft hover:text-terracotta">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/florida-llc-checklist" className="no-underline text-ink-soft hover:text-terracotta">
                  Free checklist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclosure" className="no-underline text-ink-soft hover:text-terracotta">
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="no-underline text-ink-soft hover:text-terracotta">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="no-underline text-ink-soft hover:text-terracotta">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mb-6" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-warmgray">
          <div>
            © {year} flbizstart, a Sunwrit publication. All rights reserved.
          </div>
          <div className="max-w-md md:text-right leading-relaxed">
            flbizstart contains affiliate links. We earn a commission when you sign up for some recommended services, at no cost to you. See our <Link href="/disclosure" className="text-warmgray underline decoration-warmgray-soft hover:decoration-terracotta">full disclosure</Link>. Nothing on this site is legal, tax, or financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
