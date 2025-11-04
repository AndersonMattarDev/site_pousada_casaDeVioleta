import React from 'react'

export default function GallerySection() {
  const images = [
    {
      src: '/images/gallery/fachada.jpg',
      title: 'Fachada',
      description: 'Vista da fachada da pousada'
    },
    {
      src: '/images/gallery/fachada1.jpg',
      title: 'Fachada Alternativa',
      description: 'Vista da fachada da pousada em outro ângulo'
    },
    {
      src: '/images/gallery/interna1.jpg',
      title: 'Interna',
      description: 'Área interna aconchegante'
    },
    {
      src: '/images/gallery/patio.jpg',
      title: 'Pátio',
      description: 'Pátio interno com jardim'
    },
    {
      src: '/images/gallery/varanda.jpg',
      title: 'Varanda',
      description: 'Varanda com vista para o jardim'
    },
    {
      src: '/public/images/gallery/buffet.jpg',
      title: 'Café da Manhã',
      description: 'Delicioso café da manhã servido na pousada'
    }
  ]
  return (
    <section className="container py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Galeria</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
