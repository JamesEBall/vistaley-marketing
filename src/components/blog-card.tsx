import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-white/30">
        <Calendar className="h-3 w-3" />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="text-white/10">|</span>
        <span>{post.author}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white/90 transition-colors group-hover:text-white">
        {post.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/40">
        {post.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium text-white/40"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors group-hover:text-emerald-300">
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
