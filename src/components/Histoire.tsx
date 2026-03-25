import Image from 'next/image'

export default function Histoire() {
  return (
    <section id="histoire" className="bg-[#F5EDE0] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Texte */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C8A050]" />
              <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Notre Histoire
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-[#2A2420] tracking-wide leading-tight mb-6 uppercase"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Une boutique,<br />
              <span className="text-[#B05030]">une âme</span>
            </h2>

            <p className="text-[#2A2420]/70 leading-relaxed mb-5 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Terre de Femmes est née d&apos;une passion pour les bijoux qui racontent une histoire.
              Au cœur de Brest, nous avons créé un espace où l&apos;artisanat et l&apos;élégance
              se rencontrent — loin des circuits industriels.
            </p>

            <p className="text-[#2A2420]/70 leading-relaxed mb-8 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Chaque marque que nous sélectionnons partage nos valeurs : savoir-faire authentique,
              matières nobles, et ce petit quelque chose qui transforme un bijou en souvenir.
              Notre équipe vous guide, que vous cherchiez un coup de cœur pour vous
              ou le cadeau parfait pour quelqu&apos;un que vous aimez.
            </p>

            {/* Valeurs clés */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#C8A050]/30">
              {[
                { icon: '✦', label: 'Artisanat', sub: 'Marques françaises' },
                { icon: '✦', label: 'Conseil', sub: 'Expertise personnelle' },
                { icon: '✦', label: 'Exclusivité', sub: 'Introuvable ailleurs' },
              ].map((v) => (
                <div key={v.label} className="text-center">
                  <span className="text-[#C8A050] text-lg block mb-1">{v.icon}</span>
                  <p className="text-[#2A2420] text-xs tracking-widest uppercase font-medium mb-0.5" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {v.label}
                  </p>
                  <p className="text-[#2A2420]/50 text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {v.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/interieur_et_vendeuse.jpg"
                alt="L'équipe de Terre de Femmes dans la boutique"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Décoration or */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#C8A050]/40" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#C8A050]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
