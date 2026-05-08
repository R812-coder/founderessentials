import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: 'All Guides',
  description:
    'Every guide on flbizstart, organized by topic. Banking, formation, registered agents, EINs, annual reports, and more for Florida LLCs.',
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-3xl mb-16">
        <div className="eyebrow mb-4">All guides</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight mb-6">
          The complete <span className="italic text-terracotta">flbizstart</span> archive.
        </h1>
        <p className="text-xl text-ink-soft leading-relaxed">
          Every guide we've published, sorted newest first. New articles weekly.
        </p>
      </div>

      <div className="hairline mb-12" />

      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-9">
          {articles.length > 0 ? (
            articles.map((article, i) => (
              <ArticleCard key={article.slug} article={article} number={i + 1} />
            ))
          ) : (
            <p className="text-warmgray italic">Articles coming soon.</p>
          )}
        </div>
        <aside className="col-span-12 lg:col-span-3 lg:border-l lg:border-warmgray-line/60 lg:pl-8">
          <div className="sticky top-8">
            <div className="eyebrow mb-3">Categories</div>
            <ul className="space-y-2 text-sm">
              <li className="text-ink-soft">Formation</li>
              <li className="text-ink-soft">Banking</li>
              <li className="text-ink-soft">Compliance</li>
              <li className="text-ink-soft">Tools & software</li>
              <li className="text-ink-soft">Industry-specific</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
