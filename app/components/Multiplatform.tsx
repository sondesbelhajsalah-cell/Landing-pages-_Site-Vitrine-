const actions = [
  ["Effectuez l’appel en salle", "check"],
  ["Saisissez les notes et évaluations", "pen"],
  ["Ajoutez et partagez des cours et devoirs", "book"],
];

export default function Multiplatform() {
  return (
    <section id="multiplateforme" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-[#f7f4ef] p-6">
          <div className="absolute -left-6 bottom-0 h-40 w-16 rounded-full bg-emerald-200/70" />
          <div className="relative mx-auto max-w-md">
            <div className="rounded-t-2xl bg-white p-3 shadow-xl">
              <div className="grid h-40 grid-cols-4 gap-2 rounded-lg bg-slate-50 p-3">
                <div className="col-span-1 rounded-md bg-emerald-400" />
                <div className="col-span-1 rounded-md bg-sky-400" />
                <div className="col-span-1 rounded-md bg-amber-300" />
                <div className="col-span-1 rounded-md bg-rose-300" />
                <div className="col-span-4 mt-2 h-2 rounded bg-slate-200" />
                <div className="col-span-3 h-2 rounded bg-slate-200" />
                <div className="col-span-2 h-2 rounded bg-slate-200" />
              </div>
            </div>
            <div className="mx-auto h-3 w-24 bg-slate-300" />
            <div className="mx-auto h-2 w-40 rounded-full bg-slate-400" />
            <div className="mt-6 ml-auto w-40 -translate-y-16 rounded-xl bg-white p-2 shadow-lg">
              <div className="h-16 rounded-md bg-gradient-to-br from-sky-200 to-emerald-100" />
              <div className="mt-2 h-1.5 w-24 rounded bg-slate-200" />
            </div>
            <div className="absolute bottom-2 left-8 h-24 w-12 rounded-xl border-4 border-slate-700 bg-white shadow">
              <div className="m-1 h-14 rounded bg-sky-100" />
            </div>
          </div>
          <p className="sr-only">Ordinateurs, ordinateurs portables et téléphones affichant MyScol.</p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em]">• Vous pouvez y accéder depuis n’importe quel appareil •</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand sm:text-4xl">Logiciel de gestion scolaire multiplateforme</h2>
          <p className="mt-4 leading-relaxed text-muted">
            <strong className="text-ink">MyScol est une solution de gestion scolaire multiplateforme</strong> compatible avec ordinateurs, tablettes et smartphones. Grâce à son application mobile disponible sur iOS et Android, accédez à votre établissement où que vous soyez.
          </p>
          <p className="mt-4 text-muted">
            Depuis votre téléphone, <strong className="text-ink">gérez facilement</strong> votre établissement en quelques clics :
          </p>
          <ul className="mt-4 space-y-2">
            {actions.map(([label]) => (
              <li key={label} className="flex items-center gap-2 font-bold">
                <span className="text-brand" aria-hidden="true">
                  ▸
                </span>
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Avec MyScol, la gestion scolaire devient accessible partout, à tout moment.</p>
        </div>
      </div>
    </section>
  );
}
