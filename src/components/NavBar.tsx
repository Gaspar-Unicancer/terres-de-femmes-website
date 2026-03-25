'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Les Marques', href: '#marques' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'Cadeaux', href: '#cadeaux' },
  { label: 'Nous Trouver', href: '#trouver' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1C1410]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-[#C8A050] tracking-[0.3em] uppercase text-xs font-light"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            TERRE DE
          </span>
          <span
            className="text-white tracking-[0.25em] uppercase text-lg font-light"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            FEMMES
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#C8A050] transition-colors duration-200 text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-[#C8A050] text-[#C8A050] px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#C8A050] hover:text-[#1C1410] transition-all duration-200"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Nous contacter
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#1C1410] overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 gap-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#C8A050] transition-colors text-sm tracking-widest uppercase py-2 border-b border-white/10"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center border border-[#C8A050] text-[#C8A050] px-5 py-3 text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Nous contacter
          </a>
        </nav>
      </div>
    </header>
  )
}
