import { useState } from 'react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FlatsSection() {
  const [selectedFlat, setSelectedFlat] = useState<1 | 2>(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const flat01Images = [
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0026.jpg',
      title: 'Flat 01 - Estacionamento',
      description: 'Estacionamento privativo para seu conforto e segurança!'
    },
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0028.jpg',
      title: 'Flat 01 - Localização',
      description: 'Localização privilegiada perto de tudo!'
    },
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0027.jpg',
      title: 'Flat 01 - Banheiro',
      description: 'Banheiro completo'
    },    
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0029.jpg',
      title: 'Flat 01 - Banheiro',
      description: 'Banheiro completo'
    },
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0030.jpg',
      title: 'Flat 01 - Área de Serviço',
      description: 'Área de serviço'
    },    
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0032.jpg',
      title: 'Flat 01 - Detalhe',
      description: 'Detalhes do apartamento'
    },
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0033.jpg',
      title: 'Flat 01 - Vista',
      description: 'Vista do apartamento'
    },
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0034.jpg',
      title: 'Flat 01 - Ambiente',
      description: 'Ambiente integrado'
    },
    {
      src: '/images/Flats/flat 01/IMG-20240601-WA0035.jpg',
      title: 'Flat 01 - Espaço',
      description: 'Espaço amplo e iluminado'
    }
  ];

  const flat02Images = [
    {
      src: '/images/Flats/flat 02/IMG-20240601-WA0036.jpg',
      title: 'Flat 02 - Sala',
      description: 'Sala de estar confortável'
    },
    {
      src: '/images/Flats/flat 02/IMG-20240601-WA0037.jpg',
      title: 'Flat 02 - Espaço Externo',
      description: 'Espaço para relaxar'
    },
    {
      src: '/images/Flats/flat 02/IMG-20240601-WA0038.jpg',
      title: 'Flat 02 - Charme',
      description: 'Charme e Aconchego'
    },    
    {
      src: '/images/Flats/flat 02/IMG-20240601-WA0040.jpg',
      title: 'Flat 02 - Cozinha',
      description: 'Área perfeita para preparar aquela comidinha gostosa'
    },
    {
      src: '/images/Flats/flat 02/IMG-20240601-WA0042.jpg',
      title: 'Flat 02 - Banheiro',
      description: 'Banheiro perfeito para um banho relaxante'
    },
    {
      src: '/images/Flats/flat 02/camaInteira.jpg',
      title: 'Flat 02 - Quarto',
      description: 'Ambiente perfeito para descançar'
    },
    {
      src: '/images/Flats/flat 02/IMG-20240601-WA0044.jpg',
      title: 'Flat 02 - Quarto',
      description: 'Depois de um dia com muito passeio, um quarto confortavel te espera'
    }
  ];

  const currentImages = selectedFlat === 1 ? flat01Images : flat02Images;

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Conheça Nossos Flats</h2>
      <p className="text-1xl text-red-600 font-bold text-center mb-8">Reservas para os flats somente clicando no botão WhatsApp abaixo:</p>
      
      {/* Seletor de Flats */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedFlat(1);
              setCurrentPage(1);
              setSelectedImage(null);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedFlat === 1
                ? 'bg-violeta-600 text-white shadow-lg'
                : 'bg-gray-100 hover:bg-violeta-100 text-gray-700'
            }`}
          >
            Flat 01
          </button>
          <a
            href="https://wa.me/5532984409797?text=Olá! Gostaria de fazer uma reserva para um dos flats."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-lg shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
            title="Reservar Flat 01 via WhatsApp"
          >
            <WhatsAppIcon width={20} height={20} color="white" /> 
            Faça sua reserva!
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedFlat(2);
              setCurrentPage(1);
              setSelectedImage(null);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedFlat === 2
                ? 'bg-violeta-600 text-white shadow-lg'
                : 'bg-gray-100 hover:bg-violeta-100 text-gray-700'
            }`}
          >
            Flat 02
          </button>
         
        </div>
      </div>

      {/* Grid de Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages
          .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
          .map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div 
              className="relative group"
              onClick={() => setSelectedImage((currentPage - 1) * imagesPerPage + idx)}
            >
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
      {currentImages.length > imagesPerPage && (
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
            {Array.from({ length: Math.ceil(currentImages.length / imagesPerPage) }).map((_, idx) => (
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
            onClick={() => setCurrentPage(prev => Math.min(Math.ceil(currentImages.length / imagesPerPage), prev + 1))}
            disabled={currentPage === Math.ceil(currentImages.length / imagesPerPage)}
            className={`hidden md:block px-4 py-2 rounded-md transition-all ${
              currentPage === Math.ceil(currentImages.length / imagesPerPage)
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-violeta-100 hover:bg-violeta-200 text-violeta-700'
            }`}
          >
            Próximo →
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botão Fechar */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Fechar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Botão Anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => prev! > 0 ? prev! - 1 : currentImages.length - 1);
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Imagem anterior"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagem */}
          <div 
            className="max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[selectedImage].src}
              alt={currentImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{currentImages[selectedImage].title}</h3>
              <p className="text-gray-300">{currentImages[selectedImage].description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {currentImages.length}
              </p>
            </div>
          </div>

          {/* Botão Próximo */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => prev! < currentImages.length - 1 ? prev! + 1 : 0);
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Próxima imagem"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}