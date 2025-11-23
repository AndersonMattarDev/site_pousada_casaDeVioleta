import { useEffect, useState } from 'react'

export default function GallerySection() {
  const [suiteTipo, setSuiteTipo] =
    useState<"internas" | "externas" | "pousada">("internas");

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageVisible, setImageVisible] = useState(true);
  const imagesPerPage = 6;

  // =============================
  // 🔥 Areas comuns
  // =============================
const pousadaImages = [
    {
      src: '/images/gallery/fachada.jpg',
      title: 'Nossa Fachada',
      description: 'Elegância e charme em Tiradentes'
    },
    {
      src: '/images/gallery/sofa.jpg',
      title: 'Recepção',
      description: 'Ambiente acolhedor e receptivo'
    },
    {
      src: '/images/gallery/varanda.jpg',
      title: 'Varanda',
      description: 'Vista tranquila e charmosa'
    },
    {
      src: '/images/gallery/patio.jpg',
      title: 'Jardim',
      description: 'Jardim interno cheio de vida'
    },
    {
      src: '/images/gallery/sofa2.jpg',
      title: 'Sala de Estar',
      description: 'Aconchego e bem estar'
    },
    {
      src: '/images/gallery/porSol.jpg',
      title: 'Encanto',
      description: 'Prepare-se para se encantar'
    },
    {
      src: '/images/gallery/cafe.jpg',
      title: 'Café da Manhã',
      description: 'Delicioso café da manhã para começar bem o dia'
    },
    {
      src: '/images/gallery/mesa.jpg',
      title: 'Delicias',
      description: 'Mesa de café farta e variada'
    },
    {
      src: '/images/gallery/frutas.jpg',
      title: 'Saúde',
      description: 'Frutas frescas e deliciosas'
    },
    {
      src: '/images/gallery/pao_de_queijo.jpg',
      title: 'Mineirisse',
      description: 'Pão de queijo quentinho e saboroso'
    },
    {
      src: '/images/gallery/buffet.jpg',
      title: 'Buffet',
      description: 'Variedade e sabor para seu café da manhã'
    },
    {
      src: '/images/gallery/interna1.jpg',
      title: 'Relax',
      description: 'Nada como um ambiente tranquilo para relaxar após um café da manhã delicioso'
    },
  ];

   // =============================
  // 🔥 SUÍTES INTERNAS
  // =============================

  const suitesInternasImages = [
    {
      src: '/images/suites_internas/recepção.jpg',
      title: 'Acesso pela Recepção',
      description: 'Nossas suítes internas são acessadas pela recepção'
    },
    {
      src: '/images/suites_internas/suite_1_cama.jpg',
      title: 'Suíte 1',
      description: 'Conforto e aconchego em cada detalhe'
    },
    {
      src: '/images/suites_internas/suite_1_janela.jpg',
      title: 'Suíte 1',
      description: 'Ambiente iluminado e arejado'
    },
    {
      src: '/images/suites_internas/suite_1_vista.jpg',
      title: 'Suíte 1',
      description: 'Vista para nosso lindo jardim interno'
    },
    {
      src: '/images/suites_internas/suite_1_banheiro.jpg',
      title: 'Suíte 1',
      description: 'Banheiro moderno e funcional'
    },
    {
      src: '/images/suites_internas/suite_2_cama.jpg',
      title: 'Suíte 2',
      description: 'Suítes confortáveis para sua estadia'
    },
    {
      src: '/images/suites_internas/suite_2_janela.jpg',
      title: 'Suíte 2',
      description: 'Conforto e bom gosto'
    },
    {
      src: '/images/suites_internas/suite_2_banheiro.jpg',
      title: 'Suíte 2',
      description: 'Banheiro elegante e prático'
    },
    {
      src: '/images/suites_internas/suite_2_secador.jpg',
      title: 'Suíte 2',
      description: 'Secador de cabelo disponível para sua comodidade'
    },
    {
      src: '/images/suites_internas/suite_3_cama.jpg',
      title: 'Suíte 3',
      description: 'Todas as suítes oferecem conforto e estilo'
    },
    {
      src: 'images/suites_internas/suite_3_tv.jpg',
      title: 'Suíte 3',
      description: 'Suítes equipadas com TV e frigobar'
    },
    {
      src: '/images/suites_internas/suite_3_banheiro.jpg',
      title: 'Suíte 3',
      description: 'conforto para seu banho e relaxamento'
    },
        
  ];

  // =============================
  // 🔥 SUÍTES EXTERNAS
  // =============================
  const suitesExternasImages = [
    {
      src: '/images/suites_externas/suite_externa5.jpg',
      title: 'Suítes externas',
      description: 'Acesso pelo nosso lindo jardim interno'
    },
    {
      src: '/images/suites_externas/suite_externa7.jpg',
      title: 'Suítes externas',
      description: 'Elegância e conforto para sua estadia'
    },
    {
      src: '/images/suites_externas/suite_externa2.jpg',
      title: 'Acesso',
      description: 'Acesso privativo para cada suíte externa'
    },
    {
      src: '/images/suites_externas/suite_externa6.jpg',
      title: 'Acomodações',
      description: 'Suítes espaçosas e confortáveis'
    },
    {
      src: '/images/suites_externas/suite_externa.jpg',
      title: 'Decoração',
      description: 'Bom gosto em cada detalhe'
    },
    {
      src: '/images/suites_externas/suite_externa1.jpg',
      title: 'Conforto, comodidade e segurança',
      description: 'Suítes equipadas com TV, Frigobar, Armário e cofre'
    },
    {
      src: '/images/suites_externas/suite_externa3.jpg',
      title: 'Versatilidade',
      description: 'Sempre uma espaço adequado à sua necessidade'
    },
    {
      src: '/images/suites_externas/suite_externa4.jpg',
      title: 'Vista',
      description: 'Nosso jardim emoldurado pela janela'
    },
    {
      src: '/images/suites_externas/suite_externa8.jpg',
      title: 'Banheiro',
      description: 'Um banho quentinho e relaante em todas as suítes te espera'
    },
        
  ];

  // 🔧 Seletor geral
  const activeImages =
    suiteTipo === "internas"
      ? suitesInternasImages
      : suiteTipo === "externas"
      ? suitesExternasImages
      : pousadaImages;

  // Keyboard navigation for lightbox: Esc to close, ArrowLeft/ArrowRight to navigate
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (selectedImage === null) return
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((selectedImage - 1 + activeImages.length) % activeImages.length)
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((selectedImage + 1) % activeImages.length)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // we intentionally include selectedImage and activeImages.length
  }, [selectedImage, activeImages.length])

  // manage fade animation when selectedImage changes
  useEffect(() => {
    if (selectedImage === null) return
    setImageVisible(false)
    const t = window.setTimeout(() => setImageVisible(true), 30)
    return () => clearTimeout(t)
  }, [selectedImage])

  return (
    <section className="container py-16">
      <h3 className="text-3xl font-bold text-center mb-8">
        Conheça mais da pousada!
      </h3>

      <span className="text-1xl font-bold text-center">
        Para reserva e maiores informações clique no botão: "Reservar Agora"!
      </span>

      <br /><br />

      {/* ========================
          BOTÕES
         ======================== */}
      <div className="flex justify-center gap-4 mb-8">
        {/* 🆕 Pousada */}
        <button
          onClick={() => {
            setSuiteTipo("pousada");
            setCurrentPage(1);
            setSelectedImage(null);
          }}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            suiteTipo === "pousada"
              ? "bg-violeta-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-violeta-100 text-gray-700"
          }`}
        >
          Areas Comuns
        </button>

        {/* Internas */}
        <button
          onClick={() => {
            setSuiteTipo("internas");
            setCurrentPage(1);
            setSelectedImage(null);
          }}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            suiteTipo === "internas"
              ? "bg-violeta-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-violeta-100 text-gray-700"
          }`}
        >
          Suítes Internas
        </button>

        {/* Externas */}
        <button
          onClick={() => {
            setSuiteTipo("externas");
            setCurrentPage(1);
            setSelectedImage(null);
          }}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            suiteTipo === "externas"
              ? "bg-violeta-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-violeta-100 text-gray-700"
          }`}
        >
          Suítes Externas
        </button>

      </div>

      {/* ========================
          GALERIA
         ======================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activeImages
          .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
          .map((image, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div
                className="relative group"
                onClick={() =>
                  setSelectedImage((currentPage - 1) * imagesPerPage + idx)
                }
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

      {/* ========================
          PAGINAÇÃO
         ======================== */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`hidden md:block px-4 py-2 rounded-md transition-all ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-violeta-100 hover:bg-violeta-200 text-violeta-700"
          }`}
        >
          ← Anterior
        </button>

        <div className="flex gap-2">
          {Array.from({
            length: Math.ceil(activeImages.length / imagesPerPage),
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md transition-all ${
                currentPage === idx + 1
                  ? "bg-violeta-600 text-white font-bold shadow-md"
                  : "bg-gray-100 hover:bg-violeta-100 text-gray-700 hover:shadow"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage(prev =>
              Math.min(
                Math.ceil(activeImages.length / imagesPerPage),
                prev + 1
              )
            )
          }
          disabled={
            currentPage === Math.ceil(activeImages.length / imagesPerPage)
          }
          className={`hidden md:block px-4 py-2 rounded-md transition-all ${
            currentPage === Math.ceil(activeImages.length / imagesPerPage)
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-violeta-100 hover:bg-violeta-200 text-violeta-700"
          }`}
        >
          Próximo →
        </button>
      </div>

      {/* ========================
          LIGHTBOX
         ======================== */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20"
            aria-label="Fechar"
          >
            ✕
          </button>

          {/* Prev button: bottom on small screens, side on md+; larger hit area and touch feedback */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage - 1 + activeImages.length) % activeImages.length); }}
            className="absolute left-4 sm:left-4 top-auto sm:top-1/2 bottom-28 sm:bottom-auto translate-y-0 sm:-translate-y-1/2 z-30 text-white bg-white/10 hover:bg-white/20 p-4 md:p-3 rounded-full w-14 h-14 md:w-12 md:h-12 flex items-center justify-center shadow-lg active:scale-95 active:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Imagem anterior"
            role="button"
          >
            ‹
          </button>

          <div
            className="max-w-5xl max-h-[90vh] flex flex-col items-center z-10"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={activeImages[selectedImage].src}
              alt={activeImages[selectedImage].title}
              className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {activeImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {activeImages[selectedImage].description}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {activeImages.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          {/* Next button: bottom on small screens, side on md+; larger hit area and touch feedback */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % activeImages.length); }}
            className="absolute right-4 sm:right-4 top-auto sm:top-1/2 bottom-28 sm:bottom-auto translate-y-0 sm:-translate-y-1/2 z-30 text-white bg-white/10 hover:bg-white/20 p-4 md:p-3 rounded-full w-14 h-14 md:w-12 md:h-12 flex items-center justify-center shadow-lg active:scale-95 active:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Próxima imagem"
            role="button"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

// Keyboard support for lightbox navigation
// (Placed after component so hooks are inside; we add an effect inside the component instead.)