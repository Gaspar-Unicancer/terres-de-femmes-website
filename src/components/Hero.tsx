import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Photo de fond */}
      <Image
        src="/images/exposition.jpg"
        alt="Intérieur lumineux de la boutique Terre de Femmes à Brest"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay gradient sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1410]/70 via-[#1C1410]/40 to-[#1C1410]/80" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Trait or */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#C8A050]" />
          <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Brest · Bijouterie de Créateurs
          </span>
          <div className="h-px w-12 bg-[#C8A050]" />
        </div>

        <h1
          className="text-5xl md:text-7xl font-light text-white tracking-widest uppercase leading-tight mb-6"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Terre de<br />
          <span className="text-[#C8A050]">Femmes</span>
        </h1>

        <p
          className="text-white/70 text-base md:text-lg tracking-wide max-w-lg mx-auto mb-10 font-light leading-relaxed"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Une sélection pointue de créateurs,<br className="hidden md:block" />
          rien que pour vous.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#marques"
            className="bg-[#C8A050] text-[#1C1410] px-8 py-3 text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#B05030] hover:text-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Découvrir les marques
          </a>
          <a
            href="#contact"
            className="border border-white/50 text-white px-8 py-3 text-xs tracking-[0.25em] uppercase font-light hover:border-[#C8A050] hover:text-[#C8A050] transition-all duration-300"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-[#C8A050]/50" />
        <div className="w-1 h-1 rounded-full bg-[#C8A050]" />
      </div>
    </section>
  )
}
