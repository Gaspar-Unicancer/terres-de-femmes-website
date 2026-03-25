import Image from 'next/image'

const pieces = [
  {
    photo: '/images/collection_aurelie_joliff_2.jpg',
    alt: 'Boucles d\'oreilles or roses Aurélie Joliff',
    nom: 'Boucles Soleil Rouge',
    marque: 'Aurélie Joliff',
    prix: 'à partir de 85 €',
  },
  {
    photo: '/images/collection_aurelie_joliff_3.jpg',
    alt: 'Bracelet et bague or malachite Aurélie Joliff',
    nom: 'Set Malachite Gold',
    marque: 'Aurélie Joliff',
    prix: 'à partir de 120 €',
  },
  {
    photo: '/images/Bijoux_Louise_Damas_2.jpg',
    alt: 'Pendentif médaille or Louise Damas',
    nom: 'Médaille Dorée',
    marque: 'Louise Damas',
    prix: 'à partir de 95 €',
  },
  {
    photo: '/images/bijoux_HARPO_2.jpg',
    alt: 'Boucles d\'oreilles argent ethniques HARPO',
    nom: 'Créoles Concho',
    marque: 'HARPO',
    prix: 'à partir de 110 €',
  },
]

export default function CoupsDeCoeur() {
  return (
    <section className="bg-[#F5EDE0] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C8A050]" />
              <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                En ce moment
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2A2420] tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Coups de Cœur
            </h2>
          </div>
          <p className="text-[#2A2420]/50 text-sm max-w-xs mt-4 md:mt-0 font-light leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Les collections tournent régulièrement.
            Venez découvrir les nouvelles pièces en boutique.
          </p>
        </div>

        {/* Grille 4 produits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pieces.map((p) => (
            <div key={p.nom} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src={p.photo}
                  alt={p.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge "Nouveau" */}
                <div className="absolute top-3 left-3 bg-[#C8A050] text-[#1C1410] text-xs tracking-widest uppercase px-2 py-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Nouveau
                </div>
              </div>
              <div>
                <p className="text-[#C8A050] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {p.marque}
                </p>
                <h3
                  className="text-[#2A2420] text-base tracking-wide uppercase font-light mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {p.nom}
                </h3>
                <p className="text-[#2A2420]/60 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {p.prix}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#2A2420] text-xs tracking-[0.3em] uppercase border-b border-[#C8A050] pb-1 hover:text-[#C8A050] transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Nous contacter pour en savoir plus
            <span className="text-[#C8A050]">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
