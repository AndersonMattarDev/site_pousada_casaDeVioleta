import React, { useEffect, useState, useRef } from 'react'

const IMAGES = [
  'https://picsum.photos/id/1018/1600/900',
  'https://picsum.photos/id/1025/1600/900',
  'https://picsum.photos/id/1015/1600/900',
  'https://picsum.photos/id/1016/1600/900',
  'https://picsum.photos/id/1024/1600/900'
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
          <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">Pousada Casa de Violeta</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl mx-auto">Conforto, charme e tranquilidade em Tiradentes — venha relaxar rodeado de natureza.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#" className="bg-violeta-600 px-6 py-3 rounded-full text-white font-medium shadow-lg">Reservar Agora</a>
            <a href="#" className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white font-medium border border-white/30">Saiba Mais</a>
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
