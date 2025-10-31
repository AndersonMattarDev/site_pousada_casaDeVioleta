import React from 'react'

export default function GallerySection() {
  const images = Array.from({length: 9}).map((_,i) => `https://picsum.photos/800/600?random=${i+10}`)
  return (
    <section className="container py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Galeria</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition">
            <img src={src} alt={`galeria-${idx}`} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
