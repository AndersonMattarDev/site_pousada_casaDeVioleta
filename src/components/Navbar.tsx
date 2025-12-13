import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-violeta-200/40 backdrop-blur z-40 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          {/* Logo: clicking it navigates to home (SPA) and scrolls to top */}
          <Link
            to="/"
            aria-label="Ir para Home"
            onClick={() => {
              // close mobile menu if open and scroll to top smoothly
              setOpen(false)
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            {/* use public path: /images/logo.svg */}
            <img src="/images/logo/logo_pousada.jpg" alt="Casa de Violeta" className="w-20 h-20 object-cover rounded-md" />
          </Link>
          
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-violeta-600 text-[20px] font-[700]">Home</a>
          <a href="#galeria" className="hover:text-violeta-600 text-[20px] font-[700]">Conheça Mais</a>
          <a href="#flats" className="hover:text-violeta-600 text-[20px] font-[700]">Flats</a>
          <a href="#vilavitoria" className="hover:text-violeta-600 text-[20px] font-[700]">Vila Vitória</a>
          <a href="#eventos-tiradentes" className="hover:text-violeta-600 text-[20px] font-[700]">Eventos/Pontos Turísticos</a>
          <a href="#contato" className="hover:text-violeta-600 text-[20px] font-[700]">Contato</a>
          <a href="#avaliacoes" className="hover:text-violeta-600 text-[20px] font-[700]">Avaliações</a>
          
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Abrir Menu" className="p-2 rounded-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-white/95 border-t`}>
        <div className="flex flex-col p-4 gap-3">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#galeria" onClick={() => setOpen(false)}>Conheça Mais</a>
          <a href="#flats" onClick={() => setOpen(false)}>Flats</a>
          <a href="#vilavitoria" onClick={() => setOpen(false)}>Vila Vitória</a>
          <a href="#eventos-tiradentes" onClick={() => setOpen(false)}>Eventos/Pontos Turísticos</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
          <a href="#avaliacoes" onClick={() => setOpen(false)}>Avaliações</a>
        </div>
      </div>
    </header>
  )
}