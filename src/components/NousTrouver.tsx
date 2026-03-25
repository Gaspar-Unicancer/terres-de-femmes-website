export default function NousTrouver() {
  return (
    <section id="trouver" className="bg-[#F5EDE0] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C8A050]" />
            <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Venez nous rendre visite
            </span>
            <div className="h-px w-12 bg-[#C8A050]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2A2420] tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Nous Trouver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Carte Google Maps — placeholder */}
          {/* TODO: Remplacer l'URL src par l'embed Google Maps de l'adresse réelle */}
          <div className="w-full aspect-[4/3] overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42694.97!2d-4.4855!3d48.3904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816651e5b6f4ded%3A0x5d746c2db8fbc8e0!2sBrest!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Terre de Femmes — Brest"
            />
          </div>

          {/* Informations */}
          <div className="flex flex-col gap-8">
            {/* Adresse */}
            <div>
              <h3
                className="text-[#2A2420] text-xl tracking-widest uppercase mb-3"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Adresse
              </h3>
              <p className="text-[#2A2420]/70 font-light leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {/* TODO: Remplacer par l'adresse réelle */}
                Brest, Finistère (29)<br />
                <a
                  href="https://maps.google.com/?q=Brest+29200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8A050] hover:text-[#B05030] transition-colors text-xs tracking-widest uppercase mt-2 inline-block"
                >
                  Ouvrir dans Google Maps ↗
                </a>
              </p>
            </div>

            {/* Horaires */}
            <div>
              <h3
                className="text-[#2A2420] text-xl tracking-widest uppercase mb-3"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Horaires
              </h3>
              {/* TODO: Mettre à jour les horaires réels */}
              <table className="text-sm font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <tbody>
                  {[
                    { jour: 'Lundi', h: 'Fermé' },
                    { jour: 'Mardi – Vendredi', h: '10h – 19h' },
                    { jour: 'Samedi', h: '10h – 19h30' },
                    { jour: 'Dimanche', h: 'Fermé' },
                  ].map((row) => (
                    <tr key={row.jour} className="border-b border-[#C8A050]/15">
                      <td className="pr-8 py-2 text-[#2A2420]/60">{row.jour}</td>
                      <td className={`py-2 font-medium ${row.h === 'Fermé' ? 'text-[#2A2420]/30' : 'text-[#2A2420]'}`}>
                        {row.h}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact rapide */}
            <div>
              <h3
                className="text-[#2A2420] text-xl tracking-widest uppercase mb-3"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Contact
              </h3>
              <div className="flex flex-col gap-2 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {/* TODO: Remplacer par le vrai numéro */}
                <a href="tel:+33298000000" className="text-[#2A2420]/70 hover:text-[#C8A050] transition-colors text-sm">
                  📞 +33 (0)2 98 00 00 00
                </a>
                {/* TODO: Remplacer par le vrai email */}
                <a href="mailto:contact@terre-de-femmes.fr" className="text-[#2A2420]/70 hover:text-[#C8A050] transition-colors text-sm">
                  ✉ contact@terre-de-femmes.fr
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A2420]/70 hover:text-[#C8A050] transition-colors text-sm"
                >
                  📸 Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
