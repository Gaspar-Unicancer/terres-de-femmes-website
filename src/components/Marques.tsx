import Image from 'next/image'

const marques = [
  {
    nom: 'Aurélie Joliff',
    description: 'Bijoux romantiques et artisanaux, or et pierres semi-précieuses. Créatrice française.',
    photo: '/images/collection_aurelie_joliff_1.jpg',
    alt: 'Collier or et grenat Aurélie Joliff',
    style: 'Romantique · Artisanal',
  },
  {
    nom: 'Louise Damas',
    description: 'Orfèvrerie parisienne minimaliste et contemporaine. Pièces épurées en or 14 carats.',
    photo: '/images/Bijoux_Louise_Damas.jpg',
    alt: 'Boucles d\'oreilles or Louise Damas',
    style: 'Minimaliste · Contemporain',
  },
  {
    nom: 'HARPO',
    description: 'Bijoux ethniques en argent massif et pierres naturelles. Esprit amérindien et bohème.',
    photo: '/images/bijoux_HARPO.jpg',
    alt: 'Collier perles vertes et argent HARPO',
    style: 'Ethnique · Naturel',
  },
  {
    nom: 'Argelouse',
    description: 'Bracelets colorés et joyeux, inspirés du Sud-Ouest. Pour les esprits libres.',
    photo: '/images/marque_Argelouse.jpg',
    alt: 'Bracelets colorés Argelouse portés',
    style: 'Coloré · Bohème',
  },
  {
    nom: 'SIGAL',
    description: 'Bijouterie mode et luxe accessible. Pièces fortes pour les femmes affirmées.',
    photo: '/images/marque_sigal.png',
    alt: 'Visuel de marque SIGAL',
    style: 'Luxe · Mode',
  },
  {
    nom: 'Satellite Paris',
    description: 'Maison parisienne de bijoux fantaisie haut de gamme. Or, couleurs, modernité.',
    photo: '/images/marque_satellite.png',
    alt: 'Visuel de marque Satellite Paris',
    style: 'Parisien · Contemporain',
  },
]

export default function Marques() {
  return (
    <section id="marques" className="bg-[#1C1410] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C8A050]/40" />
            <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Notre Sélection
            </span>
            <div className="h-px w-12 bg-[#C8A050]/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Les Marques
          </h2>
          <p className="text-white/50 max-w-md mx-auto font-light leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Des créateurs soigneusement sélectionnés pour leur authenticité,
            leur savoir-faire et leur singularité.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marques.map((m) => (
            <div
              key={m.nom}
              className="group relative overflow-hidden bg-[#2A2420] cursor-default"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1C1410]/30 group-hover:bg-[#1C1410]/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="text-white text-lg tracking-wide uppercase font-light"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {m.nom}
                  </h3>
                  <span className="text-[#C8A050] text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    ✦
                  </span>
                </div>
                <p className="text-[#C8A050]/70 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {m.style}
                </p>
                <p className="text-white/50 text-sm font-light leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
