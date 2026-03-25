import Image from 'next/image'

export default function Experience() {
  return (
    <section className="bg-[#1C1410] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/exposition.jpg"
                alt="Exposition de bijoux dans la boutique Terre de Femmes"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#C8A050]/30" />
          </div>

          {/* Texte */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C8A050]" />
              <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                L&apos;Expérience Boutique
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-white tracking-wide uppercase leading-tight mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Vous cherchez<br />
              <span className="text-[#C8A050]">le cadeau parfait ?</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-5 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Notre équipe est là pour vous guider. Qu&apos;il s&apos;agisse de trouver
              la pièce qui correspond à votre morphologie, de choisir un bijou pour
              une occasion spéciale ou simplement de vous faire plaisir — nous prenons
              le temps.
            </p>

            <p className="text-white/60 leading-relaxed mb-10 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Chaque bijou est présenté avec son histoire, son créateur, ses matières.
              Parce qu&apos;un bijou qui a une âme se choisit différemment.
            </p>

            {/* Points forts */}
            <div className="flex flex-col gap-4">
              {[
                'Conseil personnalisé selon votre profil et votre budget',
                'Emballage cadeau soigné inclus',
                'Sélection exclusive introuvable ailleurs à Brest',
                'Collections renouvelées régulièrement',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-[#C8A050] mt-0.5 flex-shrink-0">✦</span>
                  <p className="text-white/60 text-sm font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
