import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Photo de fond */}
      <Image
        src="/images/interieur_caisse.jpg"
        alt="Comptoir de la boutique Terre de Femmes à Brest avec le logo"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay gradient sombre — fort au centre/bas où est le texte, léger en haut */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1410]/30 via-[#1C1410]/65 to-[#1C1410]/85" />

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
          className="text-5xl md:text-7xl font-light text-white tracking-widest uppercase leading-tight"
          style={{ fontFamily: 'var(--font-cormorant)', textShadow: '0 2px 20px rgba(28,20,16,0.8), 0 0 40px rgba(28,20,16,0.5)' }}
        >
          Terre de Femmes
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-[#C8A050]/50" />
        <div className="w-1 h-1 rounded-full bg-[#C8A050]" />
      </div>
    </section>
  )
}
