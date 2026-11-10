"use client";

import { useState } from "react";

const quotes = [
  {
    name: "Anne",
    role: "Cheffe d'établissement",
    text: "Nous ne pourrions plus nous en passer, le logiciel est simple, intuitif et logique",
  },
  {
    name: "Gasanne",
    role: "Établissement privé hors contrat",
    text: "Toute la vie d'un établissement peut y être gérée : des bulletins et des absences jusqu'à la partie comptable. Sans informaticien, nous pouvons tout gérer. Je recommande fortement.",
  },
  {
    name: "Ceylan",
    role: "Utilisateur depuis 3 ans",
    text: "On est très satisfait, surtout dans le rapport qualité prix. L'application nous a énormément facilité la vie.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  function go(delta: number) {
    setIndex((current) => (current + delta + quotes.length) % quotes.length);
  }

  return (
    <section id="temoignages" className="scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6">
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none absolute -left-24 top-0 h-56 w-40 rounded-[50%] bg-gradient-to-b from-lime-200 via-teal-200 to-sky-200" />
        <p className="relative text-center text-xs font-extrabold uppercase tracking-[0.14em]">• Nos clients sont satisfaits, et ils nous font savoir ! •</p>
        <h2 className="relative mt-3 text-center text-4xl font-extrabold text-brand">Témoignages clients</h2>

        <div className="relative mt-8 flex items-center gap-3">
          <button type="button" aria-label="Témoignage précédent" onClick={() => go(-1)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow ring-1 ring-slate-100">
            ←
          </button>
          <figure className="flex-1 rounded-2xl bg-white px-6 py-10 text-center shadow-lg ring-1 ring-slate-100">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#5b4b8a] text-2xl text-white" aria-hidden="true">
              {quote.name.slice(0, 1)}
            </div>
            <blockquote className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed">“{quote.text}”</blockquote>
            <figcaption className="mt-4">
              <p className="font-bold">{quote.name}</p>
              <p className="text-sm text-muted">{quote.role}</p>
            </figcaption>
          </figure>
          <button type="button" aria-label="Témoignage suivant" onClick={() => go(1)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow ring-1 ring-slate-100">
            →
          </button>
        </div>

        <ul className="mt-10 grid items-center gap-6 sm:grid-cols-3">
          {[
            ["French Tech", "Je choisis la French Tech"],
            ["AFINEF", "Réseau de la formation"],
            ["France Num", "Activateur France Num"],
          ].map(([name, caption]) => (
            <li key={name} className="text-center">
              <p className="text-lg font-extrabold tracking-wide text-ink">{name}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted">{caption}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-8 h-10 w-px bg-brand" />
      </div>
    </section>
  );
}
