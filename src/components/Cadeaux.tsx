import Image from 'next/image'

export default function Cadeaux() {
  return (
    <section id="cadeaux" className="bg-[#F5EDE0] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Texte */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C8A050]" />
              <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Offrir un Bijou
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-[#2A2420] tracking-wide uppercase leading-tight mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Boîtes cadeaux<br />
              <span className="text-[#B05030]">&amp; emballage</span>
            </h2>

            <p className="text-[#2A2420]/70 leading-relaxed mb-5 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Offrir un bijou Terre de Femmes, c&apos;est offrir bien plus qu&apos;un accessoire.
              Chaque achat peut être préparé comme un vrai cadeau :
              boîte sélectionnée avec soin, emballage élégant, message personnalisé.
            </p>

            <p className="text-[#2A2420]/70 leading-relaxed mb-8 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Nos boîtes à bijoux sont disponibles en boutique dans différents styles —
              du classique au fantaisie. Un cadeau clé en main, prêt à offrir.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Boîte cadeau', sub: 'Offerte à l\'achat' },
                { label: 'Emballage', sub: 'Soigné et élégant' },
                { label: 'Message', sub: 'Personnalisé' },
                { label: 'Conseil', sub: 'Pour chaque budget' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-[#C8A050] mt-0.5">✦</span>
                  <div>
                    <p className="text-[#2A2420] text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      {item.label}
                    </p>
                    <p className="text-[#2A2420]/50 text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#2A2420] text-[#C8A050] px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-[#B05030] hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Préparer un cadeau
            </a>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/boite_a_bijoux.png"
                alt="Boîtes à bijoux Terre de Femmes — coffrets cadeaux"
                fill
                className="object-contain object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
