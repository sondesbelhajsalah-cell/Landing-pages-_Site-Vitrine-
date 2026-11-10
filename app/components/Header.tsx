"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const solutions = [
  { href: "/solutions/scolaire", label: "Établissement scolaire (primaire / secondaire)" },
  { href: "/solutions/superieur", label: "Enseignement supérieur / université" },
  { href: "/solutions/formation", label: "Organisme / centre de formation" },
];

const features = [
  { href: "/#fonctionnalites", label: "Gestion d'inscription" },
  { href: "/#fonctionnalites", label: "Vie scolaire" },
  { href: "/#fonctionnalites", label: "Communication & e-mailing" },
  { href: "/#fonctionnalites", label: "Gestion de finance" },
  { href: "/#fonctionnalites", label: "Ressources humaines" },
  { href: "/#fonctionnalites", label: "E-learning" },
];

const pages = [
  { href: "/#temoignages", label: "Témoignages" },
  { href: "/portail/direction", label: "Direction & administration" },
  { href: "/portail/enseignants", label: "Portail enseignants" },
  { href: "/portail/parents", label: "Portail parents & élèves" },
  { href: "/#faq", label: "FAQ" },
];

const searchItems = [
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#temoignages", label: "Témoignages" },
  { href: "/#faq", label: "Questions fréquentes" },
  { href: "/contact", label: "Contact et démo" },
  { href: "/solutions/formation", label: "Organisme de formation / CFA" },
  { href: "/solutions/superieur", label: "Enseignement supérieur" },
];

function Menu({
  label,
  items,
  open,
  onToggle,
}: {
  label: string;
  items: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-[15px] font-bold text-ink hover:text-brand"
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={open ? "rotate-180" : ""}>
          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-40 mt-2 w-72 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-sky-50 hover:text-brand"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);

  const results = searchItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  function toggle(name: string) {
    setOpenMenu((current) => (current === name ? null : name));
    setAccountOpen(false);
    setCartOpen(false);
    setAppsOpen(false);
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" aria-label="MyScol, accueil" onClick={() => setMobile(false)}>
          <Logo />
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Principale">
          <Link href="/" className="rounded-full p-2 text-ink hover:text-brand" aria-label="Accueil">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
            </svg>
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-ink hover:text-brand"
            aria-label="Mon compte"
            aria-expanded={accountOpen}
            onClick={() => {
              setAccountOpen((v) => !v);
              setOpenMenu(null);
              setCartOpen(false);
              setAppsOpen(false);
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4" />
            </svg>
          </button>
          <Menu label="Solutions" items={solutions} open={openMenu === "solutions"} onToggle={() => toggle("solutions")} />
          <Menu label="Fonctionnalités" items={features} open={openMenu === "features"} onToggle={() => toggle("features")} />
          <Link href="/#tarifs" className="rounded-full px-2 py-2 text-[15px] font-bold hover:text-brand">
            Tarifs
          </Link>
          <Menu label="Pages" items={pages} open={openMenu === "pages"} onToggle={() => toggle("pages")} />
          <Link href="/contact" className="rounded-full px-2 py-2 text-[15px] font-bold hover:text-brand">
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            className="relative rounded-full p-2 hover:text-brand"
            aria-label="Panier, 0 article"
            aria-expanded={cartOpen}
            onClick={() => {
              setCartOpen((v) => !v);
              setSearchOpen(false);
              setAppsOpen(false);
              setAccountOpen(false);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 7h15l-1.6 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.5L5 4H3" />
              <circle cx="9" cy="20" r="1.2" fill="currentColor" />
              <circle cx="18" cy="20" r="1.2" fill="currentColor" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-brand px-1 text-[10px] font-extrabold text-white">
              0
            </span>
          </button>
          <button
            type="button"
            className="rounded-full p-2 hover:text-brand"
            aria-label="Rechercher"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((v) => !v);
              setCartOpen(false);
              setAppsOpen(false);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </button>
          <button
            type="button"
            className="hidden rounded-full p-2 text-brand hover:bg-sky-50 sm:inline-flex"
            aria-label="Accès aux modules"
            aria-expanded={appsOpen}
            onClick={() => {
              setAppsOpen((v) => !v);
              setSearchOpen(false);
              setCartOpen(false);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              {Array.from({ length: 9 }).map((_, i) => (
                <circle key={i} cx={5 + (i % 3) * 7} cy={5 + Math.floor(i / 3) * 7} r="1.5" />
              ))}
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex rounded-full p-2 lg:hidden"
            aria-label={mobile ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobile ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {accountOpen && (
        <div className="absolute right-4 top-[78px] z-40 w-72 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-24">
          <p className="font-extrabold">Mon compte</p>
          <p className="mt-1 text-sm text-muted">
            Les identifiants sont envoyés après souscription. Cette vitrine présente le logiciel.
          </p>
          <Link href="/contact" className="mt-3 inline-flex font-bold text-brand" onClick={() => setAccountOpen(false)}>
            Demander un accès démo
          </Link>
        </div>
      )}

      {cartOpen && (
        <div className="absolute right-4 top-[78px] z-40 w-72 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
          <p className="font-extrabold">Votre panier</p>
          <p className="mt-1 text-sm text-muted">Aucun article. Choisissez une offre pour être recontacté.</p>
          <Link href="/#tarifs" className="mt-3 inline-flex font-bold text-brand" onClick={() => setCartOpen(false)}>
            Voir les tarifs
          </Link>
        </div>
      )}

      {appsOpen && (
        <div className="absolute right-4 top-[78px] z-40 hidden w-64 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:block">
          <p className="px-2 pb-2 text-xs font-extrabold uppercase tracking-wide text-muted">Modules</p>
          <div className="grid grid-cols-2 gap-1">
            {features.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-xl px-2 py-2 text-sm font-bold hover:bg-sky-50" onClick={() => setAppsOpen(false)}>
                {item.label.split(" ")[0]}
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="border-t border-slate-100 bg-white">
          <form className="mx-auto max-w-7xl px-4 py-3 sm:px-6" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="site-search">
              Rechercher
            </label>
            <input
              id="site-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une page, un module, un tarif…"
              className="h-12 w-full rounded-full border border-slate-200 px-5 outline-none focus:border-brand"
            />
            <ul className="mt-2">
              {results.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block rounded-xl px-3 py-2 font-semibold hover:bg-sky-50" onClick={() => setSearchOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {results.length === 0 && <li className="px-3 py-2 text-sm text-muted">Aucun résultat.</li>}
            </ul>
          </form>
        </div>
      )}

      {mobile && (
        <nav className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {[
              ["/ ", "Accueil"],
              ["/#fonctionnalites", "Fonctionnalités"],
              ["/#tarifs", "Tarifs"],
              ["/#temoignages", "Témoignages"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={label} href={href.trim()} className="rounded-xl px-3 py-3 font-bold hover:bg-sky-50" onClick={() => setMobile(false)}>
                {label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-extrabold uppercase tracking-wide text-muted">Solutions</p>
            {solutions.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-sky-50" onClick={() => setMobile(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
