"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";

const modules = [
  "Inscription / admission",
  "Vie scolaire / Suivi pédagogique",
  "Communication & Emailing",
  "Gestion Bibliothèque et Matériel",
  "Ressources Humaines",
  "Gestion de finance",
  "Documents & Partages",
  "Contrats & Prestataires",
  "E-learning",
  "Cantine",
  "Garderie / Périscolaire",
  "CFA ( Alternance ) / Stage",
  "Association",
  "Fournitures Scolaires",
];

const freeOptions = ["Gestion de la Relation Client ( Prospect, Devis )", "Personnalisation du formulaire d'inscription"];

const paidAnnual = [
  "SMS",
  "Stripe / Paypal / HelloAsso",
  "Feuille de présence dématérialisée ( avec signature électronique )",
  "Questionnaire / Sondage",
  "Gestion de carrière des étudiants",
  "Gérer vos bannières publicitaires",
];

const paidMonthly = ["SMS", "Feuille de présence dématérialisée ( avec signature électronique )"];

const annual = [
  {
    name: "PACK 50",
    price: "504",
    detail: "soit 42 € ht / mois facturé annuellement",
    per: "0.84 €",
    licenses: "50 licences incluses",
    extra: "0.84 € par mois par élève inscrit supplémentaire au delà de 50 élèves inscrits.",
    tone: "emerald",
    art: "rocket",
  },
  {
    name: "PACK 250",
    price: "1 440",
    detail: "soit 120 € ht / mois facturé annuellement",
    per: "0.48 €",
    licenses: "250 licences incluses",
    extra: "0.48 € par mois par élève inscrit supplémentaire au delà de 250 inscrits.",
    tone: "sky",
    art: "charts",
  },
  {
    name: "PACK 500",
    price: "2 160",
    detail: "soit 180 € ht / mois facturé annuellement",
    per: "0.36 €",
    licenses: "500 licences incluses",
    extra: "0.36 € par mois par élève inscrit supplémentaire au-delà de 500 élèves inscrits.",
    tone: "amber",
    art: "desk",
  },
];

const monthly = [
  {
    name: "PETITE",
    price: "84",
    detail: "soit 1,68 € ht / mois / élève",
    per: "1.68 €",
    licenses: "50 élèves inclus",
    extra: "1.68 € / élève supplémentaire.",
    tone: "emerald",
    art: "rocket",
  },
  {
    name: "MOYENNE",
    price: "240",
    detail: "soit 0,96 € ht / mois / élève",
    per: "0.96 €",
    licenses: "250 élèves inclus",
    extra: "0.96 € / élève supplémentaire.",
    tone: "sky",
    art: "charts",
  },
  {
    name: "GRANDE",
    price: "360",
    detail: "soit 0,72 € ht / mois / élève",
    per: "0.72 €",
    licenses: "500 élèves inclus",
    extra: "0.72 € / élève supplémentaire.",
    tone: "amber",
    art: "desk",
  },
];

const tones: Record<string, { border: string; text: string; button: string }> = {
  emerald: { border: "border-emerald-400", text: "text-emerald-500", button: "bg-emerald-500" },
  sky: { border: "border-sky-400", text: "text-sky-500", button: "bg-sky-500" },
  amber: { border: "border-amber-400", text: "text-amber-500", button: "bg-amber-400" },
};

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const packs = annualBilling ? annual : monthly;
  const paid = annualBilling ? paidAnnual : paidMonthly;

  return (
    <section id="tarifs" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.16em]">• Tarifs simples et sans surprises •</p>
        <h2 className="mt-3 text-center text-4xl font-extrabold text-brand">Nos offres</h2>

        <div className="mx-auto mt-8 max-w-4xl rounded-md border border-emerald-200 bg-[#eef8e8] px-4 py-3 text-center text-sm">
          <p className="font-extrabold text-emerald-700">Offre spéciale Association & Micro-entrepreneur</p>
          <p className="text-emerald-800">
            Vous êtes une association ? Micro-entrepreneur ? Vous pouvez faire une demande de mensualisation en choisissant le paiement annuel.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 font-bold">
          <span className={annualBilling ? "text-brand" : "text-muted"}>Paiement Annuel</span>
          <button
            type="button"
            role="switch"
            aria-checked={annualBilling}
            aria-label="Choisir le paiement annuel ou mensuel"
            onClick={() => setAnnualBilling((v) => !v)}
            className={`relative h-7 w-14 rounded-full ${annualBilling ? "bg-brand" : "bg-slate-300"}`}
          >
            <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${annualBilling ? "left-8" : "left-1"}`} />
          </button>
          <span className={!annualBilling ? "text-brand" : "text-muted"}>Paiement Mensuel</span>
        </div>

        {!annualBilling && (
          <p className="mx-auto mt-4 max-w-xl rounded-full bg-amber-50 px-4 py-2 text-center text-sm font-bold text-amber-700">
            Bon plan : obtenez 50 % de remise immédiate en passant au paiement annuel.
          </p>
        )}

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {packs.map((pack) => {
            const tone = tones[pack.tone];
            return (
              <article key={pack.name} className={`rounded-2xl border-2 bg-white p-6 shadow-sm ${tone.border}`}>
                <p className={`text-sm font-extrabold ${tone.text}`}>{pack.name}</p>
                <PackArt name={pack.art} />
                <p className="text-center text-4xl font-extrabold">
                  € {pack.price} <span className="align-super text-sm font-bold text-muted">HT</span>
                </p>
                <p className="mt-1 text-center text-sm text-muted">{pack.detail}</p>
                <p className="mt-3 text-center font-extrabold text-pink">Seulement {pack.per} par élève par mois</p>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
                  <li>
                    <strong>{pack.licenses}</strong>
                    <span className="mt-1 block text-xs text-muted">
                      1 licence = 1 élève, étudiant ou apprenant inscrit. Les prospects ne consomment pas de licence et bénéficient d’un accès gratuit.
                    </span>
                  </li>
                  <Check>{pack.extra}</Check>
                  <Check>Compte enseignant / intervenant illimité</Check>
                  <Check>Compte parent / tuteur illimité</Check>
                  <Check>Compte administration illimité</Check>
                  <li className="pt-2 font-extrabold">Modules inclus dans l&apos;offre</li>
                  {modules.map((item) => (
                    <Check key={item}>{item}</Check>
                  ))}
                  <li className="flex items-center gap-2 pt-2 font-extrabold">
                    En option <span className="rounded bg-rose-600 px-1.5 py-0.5 text-[10px] text-white">Gratuite</span>
                  </li>
                  {(annualBilling ? freeOptions : freeOptions.slice(0, 1)).map((item) => (
                    <Check key={item}>{item}</Check>
                  ))}
                  <li className="flex items-center gap-2 pt-2 font-extrabold">
                    En option <span className="rounded bg-orange-500 px-1.5 py-0.5 text-[10px] text-white">Payante</span>
                  </li>
                  {paid.map((item) => (
                    <Check key={item}>{item}</Check>
                  ))}
                </ul>
                <Link
                  href={`/contact?offre=${encodeURIComponent(pack.name)}`}
                  className={`mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-extrabold text-white ${tone.button}`}
                >
                  En savoir plus / Souscrire <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-brand">
      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
        <path d="M4 10.5 8 14l8-8" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="text-ink">{children}</span>
    </li>
  );
}

function PackArt({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 280 120" className="my-2 h-28 w-full" aria-hidden="true">
      {name === "rocket" && (
        <>
          <path d="M150 20c30 10 40 40 30 70l-20-8-18 16 6-22C130 50 132 28 150 20Z" fill="#ff8aa8" />
          <circle cx="158" cy="48" r="6" fill="#fff" />
          <path d="M40 90c30-20 70-20 100 0" fill="none" stroke="#7ec8ef" strokeWidth="6" />
        </>
      )}
      {name === "charts" && (
        <>
          <rect x="40" y="40" width="90" height="60" rx="6" fill="#e8f6fd" />
          <path d="M52 84V62m16 22V50m16 34V70" stroke="#2eb0ea" strokeWidth="6" />
          <circle cx="190" cy="62" r="22" fill="#ff8aa8" />
          <circle cx="214" cy="78" r="16" fill="#243140" />
        </>
      )}
      {name === "desk" && (
        <>
          <rect x="50" y="70" width="180" height="12" rx="3" fill="#d7dee6" />
          <rect x="80" y="30" width="70" height="42" rx="4" fill="#7ec8ef" />
          <rect x="160" y="42" width="46" height="30" rx="4" fill="#f6c445" />
          <circle cx="70" cy="78" r="12" fill="#f2c2a0" />
          <circle cx="220" cy="76" r="12" fill="#e7b899" />
        </>
      )}
    </svg>
  );
}
