import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog — Vistaley",
  description:
    "Insights on fund management, emerging market venture capital, LP reporting, and portfolio intelligence from the Vistaley team.",
  alternates: { canonical: "https://vistaley.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="relative pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-white/40">
            Insights on fund management, venture capital, and building for
            emerging markets.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
