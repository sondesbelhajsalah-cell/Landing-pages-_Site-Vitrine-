import { notFound } from "next/navigation";
import InnerPage from "../../components/InnerPage";

const pages: Record<string, { title: string; lead: string }> = {
  direction: {
    title: "Direction & administration",
    lead: "Le portail direction rassemble inscriptions, plannings, finances et communication. L’équipe administrative suit l’établissement sans multiplier les outils.",
  },
  enseignants: {
    title: "Espace dédié enseignants",
    lead: "Les enseignants gèrent emplois du temps, absences, notes et cahiers de textes, puis partagent cours et devoirs avec les élèves.",
  },
  parents: {
    title: "Portail parents & élèves",
    lead: "Les familles suivent la scolarité, les notes et les informations importantes. Les données personnelles restent limitées à chaque espace.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function PortalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <InnerPage kicker="Portail utilisateur" title={page.title}>
      <p>{page.lead}</p>
    </InnerPage>
  );
}
