import Link from "next/link";
import Logo from "./Logo";

const columns = [
	{
		title: "Modules inclus",
		links: [
			["Gestion d'inscription", "/#fonctionnalites"],
			["Vie Scolaire", "/#fonctionnalites"],
			["Ressources Humaines", "/#fonctionnalites"],
			["Bibliothèque et Matériel", "/#fonctionnalites"],
			["Gestion de finance", "/#fonctionnalites"],
			["Communication", "/#fonctionnalites"],
			["Contrats & Prestataires", "/#fonctionnalites"],
			["Cours à distance", "/#fonctionnalites"],
			["Fournitures scolaires", "/#fonctionnalites"],
			["Partage des ressources", "/#fonctionnalites"],
		],
	},
	{
		title: "Portail utilisateur",
		links: [
			["Direction", "/portail/direction"],
			["Enseignants", "/portail/enseignants"],
			["Parents", "/portail/parents"],
			["Élèves", "/portail/parents"],
			["Administration", "/portail/direction"],
			["Secrétariat", "/portail/direction"],
			["Comptable", "/portail/direction"],
		],
	},
	{
		title: "Logiciel de gestion",
		links: [
			["École maternelle", "/solutions/scolaire"],
			["École élémentaire", "/solutions/scolaire"],
			["Collège", "/solutions/scolaire"],
			["Lycée", "/solutions/scolaire"],
			["Enseignement supérieur", "/solutions/superieur"],
			["Centre de formation", "/solutions/formation"],
			["Montessori", "/solutions/scolaire"],
			["Association", "/solutions/scolaire"],
		],
	},
	{
		title: "Liens utiles",
		links: [
			["Nos Solutions", "/#fonctionnalites"],
			["Tarifs", "/#tarifs"],
			["Avis Clients", "/#temoignages"],
			["Contact", "/contact"],
			["Mentions légales", "/mentions"],
			["Politique de confidentialité", "/confidentialite"],
			["CGV", "/cgv"],
		],
	},
];

export default function Footer() {
	return (
		<footer className="bg-navy text-white">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
				<div className="flex justify-center">
					<Logo light />
				</div>
				<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
					<div>
						<h2 className="font-extrabold">Nous contacter</h2>
						<p className="mt-3 text-sm leading-relaxed text-slate-200">
							Tiqtec
							<br />
							1 Centre Commercial la Tour
							<br />
							93120 La Courneuve
							<br />
							France
						</p>
						<ul className="mt-4 space-y-2 text-sm">
							<li>
								<Link href="/contact" className="hover:underline">
									Devis gratuit
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Démo EduSmart
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Plaquette / Brochure
								</Link>
							</li>
							<li>
								<a href="tel:+33184214814" className="hover:underline">
									01 84 214 814
								</a>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Support / Centre d&apos;aide
								</Link>
							</li>
						</ul>
						<div className="mt-4 flex gap-2">
							{["f", "in", "▶", "x"].map((mark) => (
								<a
									key={mark}
									href="https://EduSmart.com/"
									className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs font-bold"
									aria-label={`Réseau ${mark}`}
								>
									{mark}
								</a>
							))}
						</div>
						<div className="mt-4 space-y-2">
							<a
								href="https://EduSmart.com/"
								className="block w-36 transition hover:opacity-90"
								aria-label="Télécharger dans l'App Store"
							>
								<img
									src="/appstore.png"
									alt="Télécharger dans l'App Store"
									className="h-auto w-full rounded-lg"
								/>
							</a>
							<a
								href="https://EduSmart.com/"
								className="block w-36 transition hover:opacity-90"
								aria-label="Disponible sur Google Play"
							>
								<img
									src="/google-play.png"
									alt="Disponible sur Google Play"
									className="h-auto w-full rounded-lg"
								/>
							</a>
						</div>
					</div>
					{columns.map((column) => (
						<div key={column.title}>
							<h2 className="font-extrabold">{column.title}</h2>
							<ul className="mt-3 space-y-2 text-sm text-slate-200">
								{column.links.map(([label, href]) => (
									<li key={label}>
										<Link href={href} className="hover:underline">
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}
