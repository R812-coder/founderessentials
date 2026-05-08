import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-warmgray-line/60">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="flex items-baseline justify-between py-6">
          <Link href="/" className="group no-underline">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl tracking-tight text-ink">
                flbizstart
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warmgray hidden sm:inline">
                a Sunwrit publication
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-6 sm:gap-8 text-sm">
            <Link
              href="/blog"
              className="no-underline text-ink-soft hover:text-terracotta transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/resources"
              className="no-underline text-ink-soft hover:text-terracotta transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="no-underline text-ink-soft hover:text-terracotta transition-colors hidden sm:inline"
            >
              About
            </Link>
            <Link
              href="/florida-llc-checklist"
              className="no-underline bg-forest text-cream px-4 py-2 rounded-sm hover:bg-terracotta transition-colors text-sm"
            >
              Free checklist
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
