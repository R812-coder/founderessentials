import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  readingTime: number;
  excerpt: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 230;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function replaceEnvVars(content: string): string {
  // Replace {{AFF_*}} placeholders with environment variable values
  return content.replace(/\{\{AFF_([A-Z0-9_]+)\}\}/g, (_, key) => {
    const envKey = `NEXT_PUBLIC_AFF_${key}`;
    return process.env[envKey] || '#';
  });
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = replaceEnvVars(content);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    publishedAt: data.publishedAt || new Date().toISOString(),
    updatedAt: data.updatedAt,
    category: data.category || 'guide',
    readingTime: calculateReadingTime(content),
    excerpt: data.excerpt || '',
    content: processedContent,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => a !== null)
    .map((a) => {
      // Strip body content from listing data
      const { content, ...meta } = a;
      void content;
      return meta;
    })
    .sort((a, b) => (b.publishedAt > a.publishedAt ? 1 : -1));

  return articles;
}
