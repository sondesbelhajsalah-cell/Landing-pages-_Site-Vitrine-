import Image from "next/image";

const actors = [
  { title: "Les enseignants", text: "partagent cours, devoirs et notes en quelques clics.", icon: "cap" },
  { title: "Les parents", text: "suivent la scolarité et échangent avec l’équipe pédagogique.", icon: "school" },
  { title: "Les élèves", text: "accèdent aux ressources éducatives et aux notifications importantes.", icon: "book" },
  { title: "L’administration", text: "supervise les inscriptions, plannings et finances.", icon: "gear" },
];

const nodes = [
  { label: "DIRIGEANTS", color: "#f0a02a", angle: -90 },
  { label: "ENSEIGNANTS", color: "#f27a45", angle: -30 },
  { label: "PARENTS", color: "#ef6d86", angle: 30 },
  { label: "ELEVES", color: "#2eb0ea", angle: 90 },
  { label: "COMPTABLE", color: "#8aa0b5", angle: 150 },
  { label: "SECRETARIAT", color: "#3d4d63", angle: 210 },
];

export default function Collaborative() {
  return (
    <section className="scroll-mt-24 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink">• EduSmart connecte tous les acteurs de l’éducation •</p>
        <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">Un logiciel de gestion scolaire collaboratif</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          <strong>EduSmart est une plateforme collaborative</strong> qui connecte l’ensemble des acteurs scolaires – dirigeants, enseignants, parents, élèves, secrétariat et gestionnaires financiers – pour simplifier la gestion et améliorer la communication en temps réel.
        </p>
        <p className="mt-4 text-muted">
          Chaque utilisateur dispose d’un <strong className="text-ink">espace dédié</strong> pour échanger et accéder aux informations essentielles :
        </p>
        <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-left">
          {actors.map((actor) => (
            <li key={actor.title} className="flex gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-50 text-brand">
                <Mini icon={actor.icon} />
              </span>
              <span>
                <strong>{actor.title}</strong> {actor.text}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">
          Grâce à <strong className="text-ink">EduSmart, toutes les interactions sont centralisées</strong> pour une gestion <strong>fluide, transparente et efficace</strong>, au service de la réussite scolaire.
        </p>
      </div>
      <Ecosystem />
    </section>
  );
}

function Mini({ icon }: { icon: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {icon === "cap" && <path d="m3 10 9-5 9 5-9 5-9-5Z" />}
      {icon === "school" && <path d="M4 19V9l8-4 8 4v10H4Z" />}
      {icon === "book" && <path d="M6 5h12v14H8a2 2 0 0 0-2 2V5Z" />}
      {icon === "gear" && <circle cx="12" cy="12" r="3" />}
    </svg>
  );
}

function Ecosystem() {
  const cx = 400;
  const cy = 340;
  const orbit = 230;

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <Image src="/collaboration-sidebar.png" alt="Ecoystème EduSmart" width={800} height={700} />
    </div>
  );
}
