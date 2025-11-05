import React, { useState } from 'react'

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  
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
      src: '/images/gallery/hall.jpg',
      title: 'Hall de Entrada',
      description: 'Hall de entrada acolhedor'
    },
    {
      src: '/images/gallery/cafe.jpg',
      title: 'Café',
      description: 'Café quentinho todas as manhãs'
    },
    {
      src: '/images/gallery/buffet.jpg',
      title: 'Café da Manhã',
      description: 'Delicioso café da manhã servido na pousada'
    },
    {
      src: '/images/gallery/bolo.jpg',
      title: 'Bolo Caseiro',
      description: 'Deliciosos bolos caseiros no café da manhã'
    },        
    {
      src: '/images/gallery/frutas.jpg',
      title: 'Frutas Frescas',
      description: 'Variedade de frutas frescas no café da manhã'
    },    
    {
      src: '/images/gallery/mesa.jpg',
      title: 'Mesa de Café',
      description: 'Mesa posta para o café da manhã'
    },
    {
      src: '/images/gallery/pao_de_queijo.jpg',
      title: 'Pão de Queijo',
      description: 'Autêntico pão de queijo mineiro'
    },
    {
      src: '/images/gallery/sofa.jpg',
      title: 'Área de Estar',
      description: 'Espaço confortável para relaxar'
    },
    {
      src: '/images/gallery/porSol.jpg',
      title: 'Pôr do Sol',
      description: 'Linda vista do pôr do sol'
    }
    
  ]

  return (
    <section className="container py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Galeria</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images
          .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
          .map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
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

      {/* Paginação */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {/* Botão Anterior - Visível apenas em telas maiores */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`hidden md:block px-4 py-2 rounded-md transition-all ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-violeta-100 hover:bg-violeta-200 text-violeta-700'
          }`}
        >
          ← Anterior
        </button>

        {/* Números das páginas */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md transition-all ${
                currentPage === idx + 1
                  ? 'bg-violeta-600 text-white font-bold shadow-md'
                  : 'bg-gray-100 hover:bg-violeta-100 text-gray-700 hover:shadow'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Botão Próximo - Visível apenas em telas maiores */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(Math.ceil(images.length / imagesPerPage), prev + 1))}
          disabled={currentPage === Math.ceil(images.length / imagesPerPage)}
          className={`hidden md:block px-4 py-2 rounded-md transition-all ${
            currentPage === Math.ceil(images.length / imagesPerPage)
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-violeta-100 hover:bg-violeta-200 text-violeta-700'
          }`}
        >
          Próximo →
        </button>
      </div>
    </section>
  )
}