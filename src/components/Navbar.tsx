import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur z-40 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violeta-500 flex items-center justify-center text-white font-bold">V</div>
          <h1 className="text-lg font-semibold">Casa de Violeta</h1>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-violeta-600">Home</a>
          <a href="#galeria" className="hover:text-violeta-600">Galeria</a>
          <a href="#contato" className="hover:text-violeta-600">Contato</a>
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
          <a href="#galeria" onClick={() => setOpen(false)}>Galeria</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        </div>
      </div>
    </header>
  )
}