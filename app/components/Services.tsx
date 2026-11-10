const modules = [
  ["Admission & Inscription", "Simple et sans stress pour l'école et les parents", "user"],
  ["Vie scolaire", "Suivi des élèves pour enseignants, parents & école", "cap"],
  ["Ressources humaines", "Gérez plus facilement vos employés et leurs temps", "users"],
  ["Finance & Comptabilité", "Maîtrisez le budget, factures, revenus & dépenses, échéancier", "euro"],
  ["Communication & E-mailing", "Maîtrisez et centralisez les communications, outils de newsletter", "chat"],
  ["Bibliothèque & Matériel", "Gestion des stocks et réservation en ligne pour vos utilisateurs", "book"],
  ["Gestion des fournitures scolaires", "Gérez la liste des fournitures et redirigez vers le panier de votre fournisseur", "bag"],
  ["Garderie", "Gestion de la garderie, entrée et sortie des enfants, facturation par prestation", "home"],
  ["Association", "Gérez les adhérents, les activités extra-scolaires", "group"],
  ["E-learning", "Gérez vos cours en ligne, visio intégrée, créez et partagez des formations", "screen"],
  ["Apprentissage ( CFA ) & Stage", "Gestion des apprentis, des entreprises, des tuteurs et des stages", "link"],
  ["Contrats & Prestataires", "Centralisez tous les contrats de vos fournisseurs", "building"],
  ["Documents & Partages", "Créez et partagez des documents et ressources : vidéos, formulaires", "share"],
  ["Cantine / Périscolaire", "Gestion de la cantine et du périscolaire. Demi-pension, panier repas", "meal"],
  ["Liens externe", "Ajoutez des liens vers vos sites préférés", "external"],
  ["Manuels scolaires numériques", "Intégration avec la plateforme des manuels scolaires", "books"],
];

function Glyph({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 text-brand" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {name === "user" && (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 19c1.2-3 3.2-4.5 6-4.5S16.8 16 18 19" />
          <path d="M17 6.5h4M19 4.5v4" />
        </>
      )}
      {name === "cap" && <path d="m3 10 9-5 9 5-9 5-9-5Zm4 3.2V16c1.6 1.4 3.4 2 5 2s3.4-.6 5-2v-2.8" />}
      {name === "users" && (
        <>
          <circle cx="9" cy="9" r="2.4" />
          <circle cx="16" cy="9" r="2.4" />
          <path d="M4.5 18c.8-2.4 2.4-3.5 4.5-3.5s3.7 1.1 4.5 3.5M14 14.6c1.6-.2 3 .7 3.8 3" />
        </>
      )}
      {name === "euro" && <path d="M16 7.5A5 5 0 1 0 16 16.5M7 10h7M7 14h7" />}
      {name === "chat" && <path d="M6 16.5 4.5 19 8.2 17.6A7 7 0 1 0 6 16.5Z" />}
      {name === "book" && <path d="M6 5.5h11v13H8a2 2 0 0 0-2 2V5.5Zm0 13h11" />}
      {name === "bag" && <path d="M7 8h10l-1 11H8L7 8Zm2 0V7a3 3 0 0 1 6 0v1" />}
      {name === "home" && <path d="M4 11 12 4l8 7v8H4v-8Z" />}
      {name === "group" && (
        <>
          <circle cx="8" cy="9" r="2" />
          <circle cx="12" cy="8" r="2" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4.5 18c.6-2 2-3 3.5-3M9 15c1 .2 2 .2 3 0 1.2 0 2.4.8 3 3M14.5 15c1.4 0 2.6 1 3.2 3" />
        </>
      )}
      {name === "screen" && <path d="M4 6h16v9H4V6Zm4 13h8" />}
      {name === "link" && <path d="M10 13a4 4 0 0 0 6 0l2-2a4 4 0 0 0-6-6l-1 1M14 11a4 4 0 0 0-6 0l-2 2a4 4 0 0 0 6 6l1-1" />}
      {name === "building" && <path d="M5 20V6l7-3 7 3v14H5Zm4-3h2m4 0h2M9 13h2m4 0h2" />}
      {name === "share" && (
        <>
          <circle cx="7" cy="12" r="2" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="16" cy="17" r="2" />
          <path d="m9 11 5-3M9 13l5 3" />
        </>
      )}
      {name === "meal" && <path d="M7 4v7a2 2 0 0 0 2 2V4M9 13v7M14 4c2 2 2 4 2 6v10M18 4v16" />}
      {name === "external" && <path d="M8 8h8v8M16 8 6 18" />}
      {name === "books" && <path d="M5 6h5v13H6a1 1 0 0 1-1-1V6Zm7 0h6v12a1 1 0 0 1-1 1h-5V6Z" />}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="fonctionnalites" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Un logiciel de gestion scolaire adapté aux écoles, CFA et universités
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
          De l’école maternelle au <span className="font-bold text-brand">centre de formation d’apprentis</span>, en passant par{" "}
          <span className="font-bold text-brand">l’enseignement supérieur</span>
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-muted">
          Application bilingue utilisée dans plus de 20 pays, notre solution tout-en-un facilite la gestion scolaire à l’international
        </p>
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(([title, text, icon]) => (
            <article key={title} className="px-2">
              <Glyph name={icon} />
              <h3 className="mt-3 font-extrabold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
