import type { ReactNode } from "react";
import Link from "next/link";

export default function InnerPage({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand">{kicker}</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink">{title}</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">{children}</div>
      <Link
        href="/contact"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-pink px-6 font-bold text-white transition hover:brightness-95"
      >
        Réservez votre démo gratuite
      </Link>
    </main>
  );
}
