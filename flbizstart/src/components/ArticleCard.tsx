import Link from 'next/link';
import type { ArticleMeta } from '@/lib/articles';

interface Props {
  article: ArticleMeta;
  number?: number;
}

export default function ArticleCard({ article, number }: Props) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block no-underline border-b border-warmgray-line/60 py-8 first:pt-0 last:border-b-0"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {number !== undefined && (
          <div className="col-span-1 font-mono text-xs text-warmgray pt-2">
            {String(number).padStart(2, '0')}
          </div>
        )}
        <div className={number !== undefined ? 'col-span-11' : 'col-span-12'}>
          <div className="eyebrow mb-2">{article.category}</div>
          <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-2 group-hover:text-terracotta transition-colors">
            {article.title}
          </h3>
          <p className="text-ink-soft text-base mb-3 max-w-2xl">
            {article.description}
          </p>
          <div className="font-mono text-xs text-warmgray uppercase tracking-wider">
            {article.readingTime} min read
          </div>
        </div>
      </div>
    </Link>
  );
}
