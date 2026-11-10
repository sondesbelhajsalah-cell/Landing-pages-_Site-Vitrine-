"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const params = useSearchParams();
  const offre = params.get("offre");
  const [sent, setSent] = useState(false);

  return (
    <main id="contenu" className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Parlons de votre établissement</h1>
        <p className="mt-4 leading-relaxed text-muted">
          Vous souhaitez une démonstration, un devis ou une brochure ? Indiquez vos coordonnées, l’équipe vous rappelle.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          <li>Tiqtec — 1 Centre Commercial la Tour, 93120 La Courneuve</li>
          <li>
            <a className="font-bold text-brand" href="tel:+33184214814">
              01 84 214 814
            </a>
          </li>
        </ul>
      </div>

      {sent ? (
        <p className="rounded-3xl bg-sky-50 p-8 text-lg font-bold text-brand-dark" role="status">
          Merci. Votre demande{offre ? ` pour ${offre}` : ""} est enregistrée. Nous vous recontactons rapidement.
        </p>
      ) : (
        <form
          className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          {offre && <p className="mb-4 rounded-xl bg-sky-50 px-3 py-2 text-sm font-bold text-brand">Offre sélectionnée : {offre}</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="nom" label="Nom" />
            <Field id="etablissement" label="Établissement" />
            <Field id="email" label="E-mail" type="email" />
            <Field id="telephone" label="Téléphone" type="tel" />
          </div>
          <label className="mt-4 block text-sm font-bold" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" required rows={5} defaultValue={offre ? `Je souhaite en savoir plus sur ${offre}.` : ""} className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2" />
          <button type="submit" className="mt-5 h-12 rounded-full bg-pink px-6 font-extrabold text-white">
            Envoyer la demande
          </button>
        </form>
      )}
    </main>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <input id={id} name={id} type={type} required className="mt-1 h-11 w-full rounded-xl border border-slate-200 px-3" />
    </div>
  );
}
