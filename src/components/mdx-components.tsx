import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold tracking-tight text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-white/90"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="mt-6 mb-2 text-lg font-semibold text-white/80" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 text-base leading-relaxed text-white/60" {...props} />
  ),
  a: ({ href, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul className="mb-4 ml-6 list-disc space-y-1 text-white/60" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-1 text-white/60"
      {...props}
    />
  ),
  li: (props) => <li className="text-base leading-relaxed" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-white/80" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-emerald-500/40 pl-4 italic text-white/50"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-white/[0.06] px-1.5 py-0.5 text-sm font-mono text-emerald-300"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-sm"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full text-left text-sm border-collapse"
        {...props}
      />
    </div>
  ),
  thead: (props) => (
    <thead className="border-b border-white/[0.1]" {...props} />
  ),
  th: (props) => (
    <th
      className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/60"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-white/[0.06] px-3 py-2 text-white/50"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-white/[0.06]" />,
};
