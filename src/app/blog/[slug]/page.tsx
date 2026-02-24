import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://vistaley.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://vistaley.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Vistaley",
      url: "https://vistaley.com",
    },
    mainEntityOfPage: `https://vistaley.com/blog/${post.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vistaley.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://vistaley.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vistaley.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article className="relative pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-1.5 text-xs text-white/30">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/50 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white/60"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to blog
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/30">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="text-white/10">|</span>
              <span className="inline-flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-white/40">{post.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/40"
                >
                  <Tag className="h-2.5 w-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <hr className="my-8 border-white/[0.06]" />

          <div className="prose-vistaley">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <hr className="my-12 border-white/[0.06]" />

          {/* CTA */}
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
            <h3 className="text-xl font-bold text-white">
              Ready to modernize your fund operations?
            </h3>
            <p className="mt-2 text-sm text-white/40">
              Start with VentureLens for free. No credit card required.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://app.vistaley.com/login?signup=true"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                Start with VentureLens
              </Link>
              <Link
                href="https://harbour.vistaley.com/login?signup=true"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                Try Harbour free
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-semibold text-white/80">Related posts</h3>
              <div className="mt-4 space-y-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-white/[0.1] hover:bg-white/[0.04]"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium text-white/70 group-hover:text-white transition-colors truncate">
                        {related.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-white/30">
                        {new Date(related.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-white/20 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
