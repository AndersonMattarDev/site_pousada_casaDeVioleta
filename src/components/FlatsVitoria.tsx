import { useState } from 'react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FlatsVitoria() {
  const [selectedFlat, setSelectedFlat] = useState<1 | 2>(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const flatVilaVitoriaImages = [
    {
      src: '/public/images/FlatsVilaVitoria/CopaCozinha2.jpg',
      title: 'Cozinha sala de estar conjugadas',
      description: 'Charme e praticidade para cozinhar e relaxar!'
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
      src: '/images/Flats/flat 01/IMG-20240601-WA0031.jpg',
      title: 'Flat 01 - Varanda',
      description: 'Varanda com vista'
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

  

  const currentImages = flatVilaVitoriaImages;

return (
  <section className="container py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Conheça o Flat Vila Vitória</h2>
    <p className="text-violeta text-sm text-center mb-8">
      Reservas para o Flat Vila Vitória somente clicando no botão WhatsApp abaixo:
    </p>

    {/* Botão de Reserva */}
    <div className="flex justify-center mb-8">
      <a
        href="https://wa.me/5532984409797?text=Olá! Gostaria de fazer uma reserva para o Flat Vila Vitória."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
        title="Reservar via WhatsApp"
      >
        <WhatsAppIcon width={20} height={20} color="white" />
        Faça sua reserva!
      </a>
    </div>

    {/* Grid de Imagens */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {currentImages
        .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
        .map((image, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage((currentPage - 1) * imagesPerPage + idx)}
          >
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
    {currentImages.length > imagesPerPage && (
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

        <button
          onClick={() =>
            setCurrentPage(prev => Math.min(Math.ceil(currentImages.length / imagesPerPage), prev + 1))
          }
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
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Fechar"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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

        <div className="max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
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
);
}