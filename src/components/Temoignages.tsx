const temoignages = [
  {
    texte: 'J\'ai trouvé le bijou parfait pour l\'anniversaire de ma mère. L\'équipe m\'a guidée avec beaucoup de goût — elle a adoré ! L\'emballage était magnifique.',
    prenom: 'Sophie M.',
    note: 5,
  },
  {
    texte: 'Une boutique comme on n\'en fait plus. La sélection est pointue, les conseils sont vrais. J\'y reviens chaque saison pour me faire plaisir.',
    prenom: 'Isabelle R.',
    note: 5,
  },
  {
    texte: 'Les bijoux HARPO sont introuvables ailleurs à Brest. Je suis venue spécialement pour ça, et je suis repartie avec deux pièces. Merci pour l\'accueil chaleureux !',
    prenom: 'Anne-Claire B.',
    note: 5,
  },
]

export default function Temoignages() {
  return (
    <section className="bg-[#1C1410] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C8A050]/40" />
            <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Elles nous font confiance
            </span>
            <div className="h-px w-12 bg-[#C8A050]/40" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-light text-white tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Témoignages
          </h2>
        </div>

        {/* Cards */}
        {/* [Témoignages à remplacer par les vrais avis Google] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {temoignages.map((t) => (
            <div key={t.prenom} className="bg-[#2A2420] p-7 relative">
              {/* Guillemet décoratif */}
              <span
                className="absolute top-4 right-5 text-5xl text-[#C8A050]/20 leading-none"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                "
              </span>

              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.note }).map((_, i) => (
                  <span key={i} className="text-[#C8A050] text-sm">★</span>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed font-light mb-5 italic" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                &ldquo;{t.texte}&rdquo;
              </p>

              <div className="flex items-center gap-2 border-t border-[#C8A050]/20 pt-4">
                <div className="w-6 h-px bg-[#C8A050]" />
                <p className="text-[#C8A050] text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {t.prenom}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
