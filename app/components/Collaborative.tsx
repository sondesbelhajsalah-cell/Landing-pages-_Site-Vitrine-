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
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink">• MyScol connecte tous les acteurs de l’éducation •</p>
        <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">Un logiciel de gestion scolaire collaboratif</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          <strong>MyScol est une plateforme collaborative</strong> qui connecte l’ensemble des acteurs scolaires – dirigeants, enseignants, parents, élèves, secrétariat et gestionnaires financiers – pour simplifier la gestion et améliorer la communication en temps réel.
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
          Grâce à <strong className="text-ink">MyScol, toutes les interactions sont centralisées</strong> pour une gestion <strong>fluide, transparente et efficace</strong>, au service de la réussite scolaire.
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
      <svg viewBox="0 0 800 700" role="img" aria-label="MyScol au centre, relié aux dirigeants, enseignants, parents, élèves, comptables et secrétariat" className="h-auto w-full">
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * orbit;
          const y = cy + Math.sin(rad) * orbit;
          const lx = cx + Math.cos(rad) * (orbit + 78);
          const ly = cy + Math.sin(rad) * (orbit + 78);
          return (
            <g key={node.label}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke={node.color} strokeWidth="16" strokeLinecap="round" />
              <circle cx={x} cy={y} r="54" fill="#fff" stroke={node.color} strokeWidth="12" />
              <circle cx={x} cy={y} r="28" fill="none" stroke="#5d6d7e" strokeWidth="1.6" />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill={node.color} fontSize="18" fontWeight="800">
                {node.label}
              </text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="92" fill="#fff" stroke="#e8eef3" strokeWidth="10" />
        <text x={cx} y={cy + 6} textAnchor="middle" fontSize="28" fontWeight="800" fill="#243140">
          MyScol
        </text>
        <path d="M372 312h56" stroke="#2eb0ea" strokeWidth="4" />
      </svg>
    </div>
  );
}
