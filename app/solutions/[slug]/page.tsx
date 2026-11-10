import { notFound } from "next/navigation";
import InnerPage from "../../components/InnerPage";

const pages: Record<string, { title: string; lead: string; points: string[] }> = {
  scolaire: {
    title: "Solution pour établissement scolaire",
    lead: "De la maternelle au lycée, EduSmart centralise inscriptions, vie scolaire, communication et finances.",
    points: ["Dossiers d’inscription et réinscription", "Notes, absences et cahier de textes", "Portails parents, élèves et enseignants"],
  },
  superieur: {
    title: "Enseignement supérieur et université",
    lead: "Pilotez promotions, intervenants, scolarité et relation étudiants dans une même plateforme.",
    points: ["Suivi des inscrits et des prospects", "Emplois du temps et évaluations", "Communication avec les étudiants"],
  },
  formation: {
    title: "Organisme de formation et CFA",
    lead: "Gérez apprentis, entreprises d’accueil, tuteurs, stages et la vie administrative du centre.",
    points: ["Alternance et conventions de stage", "Suivi des présences", "Facturation et relation entreprises"],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <InnerPage kicker="Solutions" title={page.title}>
      <p>{page.lead}</p>
      <ul className="list-disc space-y-2 pl-5">
        {page.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </InnerPage>
  );
}
