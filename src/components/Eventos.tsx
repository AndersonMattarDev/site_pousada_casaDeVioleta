import React, { useState } from "react";

type Evento = {
  nome: string;
  imagem: string;
  descricao: string;
  data: string;
  creditos: string;
};

type Atrativo = {
  nome: string;
  imagem: string;
  descricao: string;
  creditos: string;
};

export default function EventosTiradentes() {
  const [modo, setModo] = useState<"eventos" | "atrativos">("eventos");

  const eventos: Evento[] = [
    
    {
      nome: "Desafio Real MTB",
      imagem: "/images/eventosPontos/desafio_real.jpg",
      descricao:
        "O Desafio Real MTB é um evento esportivo de bike com uma pegada de ecoturismo.",
      data: "Abril",
      creditos: "Créditos da imagem: Desafio Real MTB",
    },
    {
      nome: "Trem Bier Festival de Cerveja",
      imagem: "/images/eventosPontos/trem_bier.png",
      descricao:
        "Evento imperdível para quem aprecia cervejas artesanais e música ao vivo.",
      data: "Maio",
      creditos: "Créditos da imagem: Corridao.com",
    },
    {
      nome: "Bike Fest Tiradentes",
      imagem: "/images/eventosPontos/bike_fest.jpg",
      descricao:
        "Um dos maiores encontros de motociclistas do Brasil.",
      data: "Junho",
      creditos: "Créditos da imagem: Tribus/Divulgação",
    },
    {
      nome: "Vinho e Jazz Festival",
      imagem: "/images/eventosPontos/festival_vinho.jpg",
      descricao:
        "Este festival reúne excelentes vinhos e jazz em um ambiente encantador.",
      data: "Junho",
      creditos: "Créditos da imagem: Divulgação/Wine Locals",
    },
    {
      nome: "Festival de Cultura e Gastronomia",
      imagem: "/images/eventosPontos/gastronomia.jpg",
      descricao:
        "O mais famoso da cidade! Reúne chefs renomados, música e uma experiência única.",
      data: "Agosto",
      creditos: "Créditos da imagem: Nereu Jr. (2022)",
    },
  ];

  const atrativos: Atrativo[] = [
    { nome: "Igreja Matriz de Santo Antônio",
     imagem: "/images/eventosPontos/matriz.jpg", 
     descricao: "Uma das mais belas igrejas barrocas do Brasil, com fachada coberta de ouro e vista panorâmica da cidade.",
     creditos: "Créditos da imagem: Iphan", },

    { nome: "Chafariz de São José",
      imagem: "/images/eventosPontos/Chafariz_de_São_José.jpg", 
      descricao: "Construído em 1749, é um dos cartões-postais de Tiradentes e ainda hoje jorra água cristalina.", 
      creditos: "Créditos da imagem: Wikimedia Commons", },

    { nome: "Museu de Sant’Ana", 
      imagem: "/images/eventosPontos/museu.jpeg", 
      descricao: "Instalado em um antigo presídio, abriga mais de 300 imagens de Sant’Ana, símbolo da fé e cultura mineira.", 
      creditos: "Créditos da imagem: Museu de Sant’Ana", },

    { nome: "Largo das Forras", 
      imagem: "/images/eventosPontos/Largo-das-Forras.jpg", 
      descricao: "Coração da cidade, repleto de bares, restaurantes e lojinhas de artesanato. Ideal pra curtir o clima local.", 
      creditos: "Créditos da imagem: Re descobrindo Minas", },

    { nome: "Passeio de Maria Fumaça", 
      imagem: "/images/eventosPontos/maria_fumaca.jpg", 
      descricao: "Viagem nostálgica entre Tiradentes e São João del-Rei em uma locomotiva a vapor — imperdível!", 
      creditos: "Créditos da imagem: Wikimedia Commons", },

    { nome: "Museu Casa Padre Toledo", 
      imagem: "/images/eventosPontos/museu_casa_padre_toledo.jpg", 
      descricao: "Um dos pontos mais marcantes de Tiradentes, o Museu Padre Toledo encanta pela arquitetura colonial e pela história da Inconfidência Mineira!",
      creditos: "Créditos da imagem: A casa senhorial", }, 

    { nome: "Cachoeira do Mangue", 
      imagem: "/images/eventosPontos/mangue.jpg", 
      descricao: "Escondida na Serra de São José, a Cachoeira do Mangue é aquele refúgio perfeito de Tiradentes onde a natureza fala mais alto!", 
      creditos: "Créditos da imagem: TripAdvisor.com ", }, 

    { nome: "Vilarejo do Bichinho", 
      imagem: "/images/eventosPontos/bichinho.webp", 
      descricao: "Pertinho de Tiradentes, o Vilarejo do Bichinho (Vitoriano Veloso) pulsa com arte, histórias da Inconfidência e o aconchego de um interior mineiro que encanta.", 
      creditos: "Créditos da imagem: Elizabeth Werneck ", },

    { nome: "Museu do Automóvel", 
      imagem: "/images/eventosPontos/automovel.jpg", 
      descricao: "No caminho para o vilarejo do Bichinho, o Museu do Automóvel exibe uma coleção fascinante de carros antigos que encantam os visitantes.", 
      creditos: "Créditos da imagem: tripadvisor.com ", }
  ];

  const dados = modo === "eventos" ? eventos : atrativos;

  return (
    <section id="eventos-tiradentes" className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-violeta">
        {modo === "eventos" ? "Eventos em Tiradentes" : "Pontos Turísticos de Tiradentes"}
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setModo("eventos")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            modo === "eventos"
              ? "bg-violeta-500 text-white shadow-md"
              : "bg-violeta-300 text-violeta hover:bg-violeta hover:text-white"
          }`}
        >
          Eventos
        </button>
        <button
          onClick={() => setModo("atrativos")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            modo === "atrativos"
              ? "bg-violeta-500 text-white shadow-md"
              : "bg-violeta-300 text-violeta hover:bg-violeta hover:text-white"
          }`}
        >
          Pontos Turísticos
        </button>
      </div>

      <p className="text-violeta text-md text-justify mb-8 mx-auto max-w-4xl whitespace-pre-line">
        {modo === "eventos"
          ? "Tiradentes recebe eventos culturais e gastronômicos ao longo do ano. As datas podem variar, confira nos canais oficiais!"
          : "Conheça os principais pontos turísticos da cidade, repletos de história, arte e natureza."}
      </p>

{modo === "eventos" && (
  <div className="bg-violeta-200 text-violeta-900 p-3 rounded-lg mb-10 max-w-2xl mx-auto text-sm">
    <p className="font-semibold mb-1">📄 Para conferir a lista completa de eventos em Tiradentes:</p>    
    <a
      href="/data/calendarioEventos.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="underline block hover:text-violeta-700"
    >
      • Clique e confira o calendario anual oficial de eventos.
    </a>
  </div>
)}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dados.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-violeta-800 mb-2">{item.nome}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.descricao}</p>

              {"data" in item && (
                <p className="text-violeta-700 font-medium text-sm">📅 {(item as Evento).data}</p>
              )}

              <p className="text-gray-400 text-xs mt-2">{item.creditos}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

