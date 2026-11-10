import Image from "next/image";

const actions = [
  ["Effectuez l’appel en salle", "check"],
  ["Saisissez les notes et évaluations", "pen"],
  ["Ajoutez et partagez des cours et devoirs", "book"],
];

export default function Multiplatform() {
  return (
    <section id="multiplateforme" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
       <Image src={"/MyScol.webp"} alt="MyScol" width={1024} height={600} />

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em]">• Vous pouvez y accéder depuis n’importe quel appareil •</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand sm:text-4xl">Logiciel de gestion scolaire multiplateforme</h2>
          <p className="mt-4 leading-relaxed text-muted">
            <strong className="text-ink">EduSmart est une solution de gestion scolaire multiplateforme</strong> compatible avec ordinateurs, tablettes et smartphones. Grâce à son application mobile disponible sur iOS et Android, accédez à votre établissement où que vous soyez.
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
          <p className="mt-4 font-bold">Avec EduSmart, la gestion scolaire devient accessible partout, à tout moment.</p>
        </div>
      </div>
    </section>
  );
}
