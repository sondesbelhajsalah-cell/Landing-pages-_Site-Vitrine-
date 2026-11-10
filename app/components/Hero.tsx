"use client";

import Link from "next/link";
import { useState } from "react";

const chips = [
	{
		id: "cfa",
		title: "Organisme de formation / CFA ?",
		text: "Consultez la page pour activité de formation",
		href: "/solutions/formation",
		icon: "music",
	},
	{
		id: "sup",
		title: "Enseignement supérieur ?",
		text: "Consultez la page enseignement supérieur",
		href: "/solutions/superieur",
		icon: "bank",
	},
];

export default function Hero() {
	const [hidden, setHidden] = useState<string[]>([]);
	const [video, setVideo] = useState(false);

	return (
		<section className="relative overflow-hidden">
			<div
				className="pointer-events-none absolute inset-0 overflow-hidden"
				aria-hidden="true"
				style={{
					backgroundImage: 'url("/home9-bg-banner.png.webp")',
					backgroundPosition: "center left",
					backgroundRepeat: "no-repeat",
					position: "absolute",
					inset: 0,
					transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
				}}
			/>
			<div className="pointer-events-none absolute -right-10 top-0 h-40 w-64 text-sky-100" aria-hidden="true">
				<svg viewBox="0 0 240 140" className="h-full w-full">
					<path d="M20 20c80 10 140 40 200 110" fill="none" stroke="currentColor" strokeWidth="18" />
				</svg>
			</div>

			<div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-12 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:pt-16">
				<div>
					<p className="text-[4.2rem] font-extrabold leading-none tracking-tight text-transparent sm:text-[6.2rem]" style={{ WebkitTextStroke: "2px #b7e6f8" }}>
						EduSmart
					</p>
					<h1 className="-mt-3 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
						Logiciel de gestion scolaire
					</h1>
					<p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
						Plateforme tout en un pour piloter la gestion quotidienne de votre établissement scolaire.
						Meilleure solution pour école maternelle, primaire, collège, lycée,{" "}
						<Link href="/solutions/superieur" className="font-bold text-brand">
							enseignement supérieur
						</Link>{" "}
						ou{" "}
						<Link href="/solutions/formation" className="font-bold text-brand">
							centre de formation
						</Link>{" "}
						privée ou publique.
					</p>
					<Link
						href="/contact"
						className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-pink px-6 font-extrabold text-white shadow-lg shadow-rose-200 transition hover:brightness-95"
					>
						Réservez votre démo gratuite
						<span className="grid h-7 w-7 place-items-center rounded-full bg-white/25">→</span>
					</Link>
				</div>

				<div className="relative">
					<div className="mb-4 space-y-3">
						{chips
							.filter((chip) => !hidden.includes(chip.id))
							.map((chip) => (
								<div key={chip.id} className="ml-auto flex max-100% items-start gap-3 rounded-2xl bg-[#4b5563] px-4 py-3 text-white shadow-lg">
									<span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full ${chip.icon === "music" ? "bg-emerald-500" : "bg-amber-400"}`}>
										{chip.icon === "music" ? "♫" : "⌂"}
									</span>
									<Link href={chip.href} className="min-w-0 flex-1">
										<span className="block font-extrabold leading-tight">{chip.title}</span>
										<span className={`text-sm ${chip.icon === "music" ? "text-emerald-300" : "text-amber-300"}`}>{chip.text}</span>
									</Link>
									<button type="button" className="text-lg leading-none text-white/80" aria-label={`Fermer : ${chip.title}`} onClick={() => setHidden((list) => [...list, chip.id])}>
										×
									</button>
								</div>
							))}
					</div>

					<div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">
						<HeroArt />
						<button
							type="button"
							onClick={() => setVideo(true)}
							className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg"
							aria-label="Lire la vidéo de présentation"
						>
							<span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-brand" />
						</button>
					</div>
					<div className="mt-6 flex justify-center">
						<Link href="/#fonctionnalites" className="inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 font-extrabold text-white shadow-lg shadow-sky-200">
							Découvrez nos fonctionnalités
							<span className="grid h-7 w-7 place-items-center rounded-full bg-white/25">→</span>
						</Link>
					</div>
				</div>
			</div>

			<div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
				{[
					["20+", "Pays"],
					["250+", "Fonctionnalités"],
					["300+", "Etablissements"],
				].map(([value, label], index) => (
					<div key={label} className="relative text-center">
						{index === 1 && <span className="absolute -top-8 left-1/2 hidden h-6 w-px bg-brand sm:block" />}
						<p className="text-4xl font-extrabold text-brand sm:text-5xl">{value}</p>
						<p className="mt-1 font-semibold text-brand/80">{label}</p>
						{index === 1 && <span className="absolute -bottom-8 left-1/2 hidden h-6 w-px bg-brand sm:block" />}
					</div>
				))}
			</div>

			{video && (
				<div className="fixed inset-0 z-[70] grid place-items-center bg-slate-900/60 p-4" role="dialog" aria-modal="true" aria-labelledby="video-title">
					<div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
						<h2 id="video-title" className="text-2xl font-extrabold">
							Présentation EduSmart
						</h2>
						<p className="mt-3 text-muted">
							Une interface unique pour les inscriptions, la vie scolaire, les notes, les finances et la communication avec les familles.
						</p>
						<div className="mt-5 grid h-44 place-items-center rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-50 font-extrabold text-brand">
							Aperçu de la plateforme
						</div>
						<div className="mt-5 flex justify-end gap-3">
							<button type="button" className="h-11 rounded-full px-4 font-bold" onClick={() => setVideo(false)}>
								Fermer
							</button>
							<Link href="/contact" className="inline-flex h-11 items-center rounded-full bg-brand px-5 font-bold text-white">
								Demander une démo
							</Link>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

function HeroArt() {
	return (
		<svg viewBox="0 0 640 380" className="h-auto w-full bg-[#f4fbff]" role="img" aria-label="Illustration d'une équipe autour d'une enveloppe et d'un bouton lecture">
			<ellipse cx="470" cy="250" rx="180" ry="28" fill="#d7eef8" />
			<path d="M250 150h280l-40 130H210L250 150Z" fill="#f6c445" />
			<path d="M250 150 390 250 530 150" fill="none" stroke="#e2ad2c" strokeWidth="8" />
			<circle cx="150" cy="90" r="46" fill="#7ec8ef" />
			<circle cx="560" cy="70" r="28" fill="#b7e38d" />
			<circle cx="90" cy="210" r="18" fill="#f7b6cf" />
			<g transform="translate(300 175)">
				<circle cx="40" cy="28" r="22" fill="#f3c7a6" />
				<path d="M18 78c4-22 16-32 22-32s18 10 22 32" fill="#2eb0ea" />
				<rect x="24" y="70" width="32" height="40" rx="6" fill="#243140" />
			</g>
			<g transform="translate(430 150)">
				<circle cx="48" cy="24" r="22" fill="#e7b899" />
				<path d="M20 70c6-24 18-34 28-34s22 10 28 34" fill="#2eb0ea" />
				<path d="M78 40c18 8 24 28 16 48" stroke="#243140" strokeWidth="6" fill="none" />
			</g>
			<path d="M70 250c30-40 70-40 90 0" fill="#8fd0f0" />
			<path d="M520 120c40 10 70 40 70 80" fill="none" stroke="#8fd0f0" strokeWidth="16" />
		</svg>
	);
}
