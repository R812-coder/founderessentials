import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { getArticle, getArticleSlugs, getAllArticles } from '@/lib/articles';
import EmailSignup from '@/components/EmailSignup';
import ArticleCard from '@/components/ArticleCard';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.description,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const publishDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article>
      {/* Article hero */}
      <header className="max-w-wide mx-auto px-6 lg:px-12 pt-12 pb-12 lg:pt-20">
        <div className="max-w-prose mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="font-mono text-xs text-warmgray uppercase tracking-wider no-underline hover:text-terracotta">
              ← All guides
            </Link>
          </div>

          <div className="eyebrow mb-4">{article.category}</div>

          <h1 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] mb-6 tracking-tight">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-8 font-body italic">
            {article.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-warmgray font-mono uppercase tracking-wider pb-8 border-b border-warmgray-line/60">
            <span>{publishDate}</span>
            <span>{article.readingTime} min read</span>
            {article.updatedAt && (
              <span>Updated {new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            )}
          </div>
        </div>
      </header>

      {/* Article body */}
      <div className="max-w-wide mx-auto px-6 lg:px-12 pb-20">
        <div className="max-w-prose mx-auto">
          <div className="prose-editorial article-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSlug]}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          <div className="ornament" />

          {/* Affiliate disclosure inline at end of article */}
          <div className="mt-12 pt-6 border-t border-warmgray-line/60 text-xs text-warmgray italic leading-relaxed">
            Some links in this article are affiliate links. If you sign up for a service through one of them, we may earn a commission, at no cost to you. See our <Link href="/disclosure" className="text-warmgray underline">full affiliate disclosure</Link>. Nothing in this article is legal, tax, or financial advice — consult a licensed professional for your specific situation.
          </div>
        </div>
      </div>

      {/* Email signup */}
      <div className="max-w-wide mx-auto px-6 lg:px-12 max-w-3xl">
        <EmailSignup variant="block" />
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-wide mx-auto px-6 lg:px-12 py-20">
          <div className="eyebrow mb-3 text-center">Read next</div>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-center mb-12">
            More guides for new Florida LLC owners.
          </h2>
          <div className="max-w-3xl mx-auto">
            {related.map((article, i) => (
              <ArticleCard key={article.slug} article={article} number={i + 1} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
