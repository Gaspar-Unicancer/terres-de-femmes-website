'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#1C1410] py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C8A050]/40" />
            <span className="text-[#C8A050] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Écrivez-nous
            </span>
            <div className="h-px w-12 bg-[#C8A050]/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Contact
          </h2>
          <p className="text-white/50 font-light max-w-md mx-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Une question sur une pièce, un projet cadeau, un renseignement ?
            Nous vous répondons rapidement.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-12 border border-[#C8A050]/30">
            <span className="text-[#C8A050] text-3xl block mb-4">✦</span>
            <p className="text-white text-lg font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Message envoyé !
            </p>
            <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Nous vous répondrons très bientôt.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-[#C8A050] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-[#C8A050] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-[#C8A050] focus:outline-none transition-colors resize-none"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
                placeholder="Votre message..."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Ou appelez-nous :{' '}
                {/* TODO: Remplacer par le vrai numéro */}
                <a href="tel:+33298000000" className="text-[#C8A050] hover:underline">
                  +33 (0)2 98 00 00 00
                </a>
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#C8A050] text-[#1C1410] px-10 py-3 text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#B05030] hover:text-white transition-all duration-300 disabled:opacity-50"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {status === 'sending' ? 'Envoi...' : 'Envoyer'}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Une erreur s&apos;est produite. Veuillez réessayer ou nous appeler directement.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
