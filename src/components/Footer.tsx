export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1C1410] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <div className="mb-4">
              <span className="block text-[#C8A050] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                TERRE DE
              </span>
              <span className="block text-white tracking-[0.25em] uppercase text-2xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
                FEMMES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Bijouterie de créateurs à Brest.<br />
              Une sélection pointue, rien que pour vous.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#C8A050] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {['Les Marques', 'Notre Histoire', 'Cadeaux', 'Nous Trouver', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-white/60 hover:text-[#C8A050] transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-[#C8A050] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Nous Trouver
            </h3>
            <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              <p className="text-white/60">
                Brest, Finistère<br />
                29200
              </p>
              <a href="tel:+33298000000" className="text-white/60 hover:text-[#C8A050] transition-colors">
                +33 (0)2 98 00 00 00
              </a>
              <a href="mailto:contact@terre-de-femmes.fr" className="text-white/60 hover:text-[#C8A050] transition-colors">
                contact@terre-de-femmes.fr
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#C8A050] transition-colors text-xs tracking-widest uppercase"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#C8A050] transition-colors text-xs tracking-widest uppercase"
                >
                  Facebook ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur or */}
        <div className="border-t border-[#C8A050]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/30" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            © {year} Terre de Femmes — Tous droits réservés
          </p>
          <p className="text-xs text-white/20" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Bijouterie de créateurs · Brest · Finistère
          </p>
        </div>
      </div>
    </footer>
  )
}
