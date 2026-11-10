"use client";

import { useState } from "react";

const items = [
  {
    q: "Quel est le meilleur logiciel de gestion scolaire ?",
    a: "MyScol fait partie des meilleurs logiciels de gestion scolaire grâce à sa solution tout-en-un. Il centralise la gestion des inscriptions, des notes, de la vie scolaire, de la communication et des finances, avec une interface intuitive adaptée à tous les types d’établissements.",
  },
  {
    q: "Existe-t-il un logiciel pour remplacer Pronote ou Ecole directe ?",
    a: "Oui, MyScol est une alternative moderne à Pronote ou Ecole directe. Il regroupe en une seule interface la vie scolaire, la gestion administrative, les emplois du temps et la communication.",
  },
  {
    q: "Quel logiciel pour gérer un établissement scolaire ?",
    a: "Pour gérer efficacement un établissement scolaire, MyScol propose une plateforme complète avec des modules dédiés aux directeurs, enseignants, parents et élèves. Il s’adapte aux écoles, collèges, lycées, CFA et universités.",
  },
  {
    q: "Quel logiciel scolaire choisir pour un établissement privé ?",
    a: "MyScol est particulièrement adapté aux établissements privés, qu’ils soient sous contrat ou hors contrat. La solution est personnalisable et modulable selon le type d’établissement.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number[]>([0, 2]);

  function toggle(index: number) {
    setOpen((current) => (current.includes(index) ? current.filter((i) => i !== index) : [...current, index]));
  }

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-2 md:grid-cols-2">
        {items.map((item, index) => {
          const isOpen = open.includes(index);
          return (
            <div key={item.q} className="border-b border-slate-100 py-4">
              <h3>
                <button type="button" className="flex w-full items-start gap-3 text-left" aria-expanded={isOpen} onClick={() => toggle(index)}>
                  <span className="mt-0.5 text-brand" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                  <span className="font-extrabold text-brand">{item.q}</span>
                </button>
              </h3>
              {isOpen && <p className="pl-7 pt-3 leading-relaxed text-muted">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
