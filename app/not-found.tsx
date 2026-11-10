import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold">Page introuvable</h1>
      <p className="mt-3 text-muted">Cette page ne fait pas partie de la vitrine.</p>
      <Link href="/" className="mt-6 inline-flex h-11 items-center rounded-full bg-brand px-5 font-bold text-white">
        Retour à l’accueil
      </Link>
    </main>
  );
}
