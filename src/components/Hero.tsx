import React, { useEffect, useState, useRef } from 'react'

const IMAGES = [
  '/images/gallery/fachada.jpg',
  '/images/gallery/varanda.jpg',
  '/images/gallery/patio.jpg',
  '/images/gallery/sofa2.jpg',
  '/images/gallery/sofa.jpg',
  '/images/gallery/hall.jpg'
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    startAuto()
    return () => { stopAuto() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function startAuto() {
    stopAuto()
    timeoutRef.current = window.setTimeout(() => {
      let next = Math.floor(Math.random() * IMAGES.length)
      if (next === index) next = (index + 1) % IMAGES.length
      setIndex(next)
    }, 5000)
  }

  function stopAuto() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  function prev() {
    stopAuto()
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)
  }
  function next() {
    stopAuto()
    setIndex((i) => (i + 1) % IMAGES.length)
  }

  return (
    <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`hero-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          style={{filter: 'brightness(0.6) saturate(1.05)'}}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white px-4 pointer-events-auto">
          <h2 className="font-cursive text-4xl md:text-6xl drop-shadow-lg mb-2">Bem-Vindo(a) à</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-light drop-shadow-lg mb-4">Casa de Violeta Pousada</h3>
          <p className="mt-3 text-sm md:text-base max-w-xl mx-auto font-serif">Conforto, charme e tranquilidade em Tiradentes. A Casa de Violeta Pousada está localizada no centro histórico de Tiradentes, ao lado da Igreja das Mercês e a poucos metros da praça principal — venha relaxar rodeado de natureza.</p>
          <div className="mt-6 flex justify-center gap-3">            
          </div>
        </div>
      </div>

      {/* arrows */}
      <button onClick={prev} aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full shadow-lg hover:bg-white/40">
        ‹
      </button>
      <button onClick={next} aria-label="Próximo" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full shadow-lg hover:bg-white/40">
        ›
      </button>
    </div>
  )
}
