import Link from "next/link";

const portals = [
  {
    title: "Direction & Administration",
    text: "MyScol permet la gestion de votre école en tenant compte de ses critères spécifiques. Ce système de gestion de vie scolaire réduit le travail administratif des écoles et des enseignants.",
    href: "/portail/direction",
    art: "desk",
    flip: false,
  },
  {
    title: "Espace dédié Enseignants",
    text: "MyScol permet de gérer les enseignants, leurs emplois du temps, leurs absences ainsi que les notes des élèves et leurs cahiers de texte.",
    href: "/portail/enseignants",
    art: "diploma",
    flip: true,
  },
  {
    title: "Portail Parents & Élèves",
    text: "Très appréciée des parents, MyScol permet de gérer les inscriptions des élèves, suivre leur vie scolaire, tout en garantissant la confidentialité de leurs données personnelles.",
    href: "/portail/parents",
    art: "home",
    flip: false,
  },
];

export default function Portals() {
  return (
    <section id="portails" className="scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        {portals.map((portal) => (
          <article key={portal.title} className={`grid items-center gap-8 lg:grid-cols-2 ${portal.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Art name={portal.art} />
            <div className={portal.flip ? "lg:pr-10" : "lg:pl-10"}>
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#163044] text-white">
                  <ArtIcon name={portal.art} />
                </span>
                <div>
                  <h2 className="text-2xl font-extrabold">{portal.title}</h2>
                  <p className="mt-2 max-w-md leading-relaxed text-muted">{portal.text}</p>
                </div>
              </div>
              <Link href={portal.href} className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 font-extrabold text-white">
                En savoir plus <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArtIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {name === "desk" && <path d="M5 7h14v8H5V7Zm3 8v3m8-3v3M4 18h16" />}
      {name === "diploma" && <path d="M7 5h10v12H7V5Zm3 14 2-2 2 2" />}
      {name === "home" && <path d="M5 17.5 4 16l8-6 8 6-1 1.5" />}
    </svg>
  );
}

function Art({ name }: { name: string }) {
  const label =
    name === "desk" ? "Illustration de la direction" : name === "diploma" ? "Illustration des enseignants" : "Illustration des familles";
  return (
    <svg viewBox="0 0 560 300" role="img" aria-label={label} className="h-auto w-full">
      <ellipse cx="280" cy="230" rx="180" ry="46" fill={name === "home" ? "#f8c3d4" : name === "diploma" ? "#d7c4fb" : "#f3b48a"} opacity="0.55" />
      {name === "desk" && (
        <>
          <rect x="150" y="120" width="220" height="18" rx="4" fill="#f0a35a" />
          <rect x="190" y="70" width="90" height="55" rx="6" fill="#67b7e8" />
          <circle cx="250" cy="150" r="16" fill="#f2c2a0" />
          <rect x="300" y="138" width="70" height="46" rx="8" fill="#243140" />
        </>
      )}
      {name === "diploma" && (
        <>
          <rect x="150" y="70" width="250" height="150" rx="12" fill="#f6d48a" />
          <path d="M250 40 310 70 250 100 190 70Z" fill="#3d4c5c" />
          <circle cx="360" cy="170" r="28" fill="#ef6d86" />
        </>
      )}
      {name === "home" && (
        <>
          <path d="M170 180 280 90l110 90v70H170v-70Z" fill="#f2b84b" />
          <rect x="250" y="170" width="60" height="80" fill="#67b7e8" />
          <circle cx="210" cy="200" r="16" fill="#f2c2a0" />
          <circle cx="360" cy="190" r="16" fill="#e7b899" />
        </>
      )}
    </svg>
  );
}
