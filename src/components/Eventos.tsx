import React, { useState } from "react";

type Evento = {
  nome: string;
  imagem: string;
  descricao: string;
  data: string;
};

type Atrativo = {
  nome: string;
  imagem: string;
  descricao: string;
};

export default function EventosTiradentes() {
  const [modo, setModo] = useState<"eventos" | "atrativos">("eventos");

  const eventos = [
    {
      nome: "Bike Fest Tiradentes",
      imagem: "/images/eventos/bikefest.jpg",
      descricao:
        "Um dos maiores encontros de motociclistas do Brasil. Motos, música e gastronomia tomam conta da cidade durante o evento.",
      data: "Junho",
    },
    {
      nome: "Festival de Cultura e Gastronomia",
      imagem: "/images/eventosPontos/gastronomia.jpg",
      descricao:
        "O mais famoso da cidade! Reúne chefs renomados, música ao vivo e uma experiência gastronômica incrível nas ruas históricas de Tiradentes. (creditos da imagem: Nereu Jr. 2022)",
      data: "Agosto de cada ano",
    },
    {
      nome: "À definir",
      imagem: "/images/eventos/mostra-cinema.jpg",
      descricao:
        "Evento gratuito e referência no cinema nacional, com exibições ao ar livre, debates e presença de grandes nomes do audiovisual.",
      data: "Janeiro",
    },    
    {
      nome: "Semana Santa",
      imagem: "/images/eventos/semana-santa.jpg",
      descricao:
        "Celebração tradicional com procissões, música sacra e encenações que encantam visitantes e moradores.",
      data: "Março ou Abril",
    },
    {
      nome: "Encontro de Autos Antigos",
      imagem: "/images/eventos/autos-antigos.jpg",
      descricao:
        "Evento imperdível para os apaixonados por carros antigos, com exposição e desfiles nas ruas de pedra da cidade.",
      data: "Janeiro",
    },
  ];

  const atrativos = [
    {
      nome: "Igreja Matriz de Santo Antônio",
      imagem: "/images/eventosPontos/matriz.jpg",
      descricao:
        "Uma das mais belas igrejas barrocas do Brasil, com fachada coberta de ouro e vista panorâmica da cidade. (creditos da imagem: Iphan)",
    },
    {
      nome: "Chafariz de São José",
      imagem: "/images/eventosPontos/Chafariz_de_São_José.jpg",
      descricao:
        "Construído em 1749, é um dos cartões-postais de Tiradentes e ainda hoje jorra água cristalina.",
      creditos: "creditos da imagem: Wikimedia Commons",  
    },
    {
      nome: "Museu de Sant’Ana",
      imagem: "/images/atrativos/museu-santana.jpg",
      descricao:
        "Instalado em um antigo presídio, abriga mais de 300 imagens de Sant’Ana, símbolo da fé e cultura mineira.",
    },
    {
      nome: "Largo das Forras",
      imagem: "/images/atrativos/largo-das-forras.jpg",
      descricao:
        "Coração da cidade, repleto de bares, restaurantes e lojinhas de artesanato. Ideal pra curtir o clima local.",
    },
    {
      nome: "Passeio de Maria Fumaça",
      imagem: "/images/atrativos/maria-fumaca.jpg",
      descricao:
        "Viagem nostálgica entre Tiradentes e São João del-Rei em uma locomotiva a vapor — imperdível!",
    },
  ];

  const dados: (Evento | Atrativo)[] = modo === "eventos" ? eventos : atrativos;

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

      <p className="text-violeta text-md text-justify mb-12 mx-auto max-w-4xl">
        {modo === "eventos"
          ? "Tiradentes é palco de diversos eventos culturais e gastronômicos que encantam visitantes durante todo o ano."
          : "Conheça os principais pontos turísticos da charmosa cidade de Tiradentes, repletos de história, arte e beleza natural."}
      </p>

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
                <p className="text-violeta-700 font-medium text-sm">📅 {(item as Evento).data} </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
