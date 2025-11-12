import { useState } from 'react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FlatsVitoria() { 
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const flatVilaVitoriaImages = [
    {
      src: '/images/FlatsVilaVitoria/CopaCozinha2.jpg',
      title: 'Cozinha sala de estar conjugadas',
      description: 'Charme e praticidade para cozinhar e relaxar!'
    },
    {
      src: '/images/FlatsVilaVitoria/CopaCozinha3.jpg',
      title: 'Sala de estar',
      description: 'Espaço pensado para relaxar com praticidade!'
    },
    {
      src: '/images/FlatsVilaVitoria/externaFlat1.jpg',
      title: 'Area externa do Flat',
      description: 'Otimo espaço para lazer e convivência!'
    },    
    {
      src: '/images/FlatsVilaVitoria/BanheiroFlat2.jpg',
      title: 'Banheiro',
      description: 'Banheiro completo e aconchegante!'
    },
    {
      src: '/images/FlatsVilaVitoria/flat4.jpg',
      title: 'decoração',
      description: 'Bom gosto e conforto em cada detalhe!'
    },
    {
      src: '/images/FlatsVilaVitoria/flat4Decor.jpg',
      title: 'decoração',
      description: 'Charme e aconchego para você se sentir em casa!'
    },
    {
      src: '/images/FlatsVilaVitoria/Quarto2Flat1.jpeg',
      title: 'Quarto de solteiro',
      description: 'Conforto e praticidade para uma boa noite de sono!'
    },
    {
    src: '/images/FlatsVilaVitoria/QuartoFlat4.jpg',
      title: 'Quarto casal',
      description: 'Um refúgio de tranquilidade para relaxar!'
    },
    {
      src: '/images/FlatsVilaVitoria/Quarto2Flat2.jpg',
      title: 'Outro ângulo do quarto de casal',
      description: 'Detalhes que fazem a diferença no seu descanso!',
    },    
  ];

  

  const currentImages = flatVilaVitoriaImages;

return (
  <section id="vilavitoria" className="container py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Conheça o Flat Vila Vitória | Endereço: Rua Vereador Antônio Coimbra Ferreira, 58, Bairro Cascalho.
</h2>

<h3 className="text-1xl text-red-600 font-bold text-center mb-8">ATENÇÃO RESERVA NO VILA VITÓRIA É APENAS SEM CAFÉ!!!</h3>  
<br />

<p className="text-violeta text-md text-justify mb-8 mx-auto max-w-4xl">
Os 4 novos flats ficam em outro local fora da pousada e a 800 metros da praça principal e 600 metros da rodoviária.
Temos estacionamento e cada flat tem uma sala conjugada com cozinha, um banheiro e um quarto com área externa com gramado,
(no quarto tem tv, ar condicionado quente e frio, cozinha com fogão, microondas, geladeira, 
( utensílios prato, xicara, talheres, panela, frigideira, copo, leiteira, garafa termica de café)  e wi-fi em toda aréa). <br />
</p>

<p className="text-violeta text-md text-justify mb-8 mx-auto max-w-4xl">
Está incluso roupa de banho e cama, amenitis( shampoo, condicionador,sabonete e touca descartável). 
O carro pode deixar na pousada quando for no centro
Não está incluso nas diárias café da manhã, chá da tarde (indicamos alguns parceiro, serviço pago a parte) e limpeza.
Obs: check-in é feita na pousada casa de violeta, o endereço é Praça das Mercês 100 centro de Tiradentes-MG.
</p>
<br />
<h4 className="text-1xl text-red-600 font-bold text-center mb-8">Reservas para os flats somente clicando no botão WhatsApp abaixo:</h4>
<br />

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