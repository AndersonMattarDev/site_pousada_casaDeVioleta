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
      nome: "Mostra de Cinema de Tiradentes",
      imagem: "/images/eventosPontos/cinema.jpg",
      descricao:
        "Evento gratuito e referência no cinema nacional, com exibições ao ar livre, debates e presença de grandes nomes do audiovisual.",
      data: "Janeiro",
      creditos: "Créditos da imagem: Agenda BH",
    },
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
    {
      nome: "Igreja Matriz de Santo Antônio",
      imagem: "/images/eventosPontos/matriz.jpg",
      descricao:
        "Uma das mais belas igrejas barrocas do Brasil.",
      creditos: "Créditos da imagem: Iphan",
    },
    {
      nome: "Chafariz de São José",
      imagem: "/images/eventosPontos/Chafariz_de_São_José.jpg",
      descricao:
        "Construído em 1749, cartão-postal clássico da cidade.",
      creditos: "Créditos da imagem: Wikimedia Commons",
    },
    {
      nome: "Museu de Sant’Ana",
      imagem: "/images/eventosPontos/museu.jpeg",
      descricao:
        "Instalado em um antigo presídio, com mais de 300 imagens sacras.",
      creditos: "Créditos da imagem: Museu de Sant’Ana",
    },
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
    <p className="font-semibold mb-1">📄 Arquivos com todos os eventos de Tiradentes:</p>
    <a
      href="/public/data/PrimeiroSemestre.pdf"
      target="_blank"
      className="underline block hover:text-violeta-700"
    >
      • Lista completa – Eventos 1° Semestre
    </a>
    <a
      href="https://www.tiradentes.mg.gov.br/pagina/10626/Calend%C3%A1rio%20de%20Eventos"
      target="_blank"
      className="underline block hover:text-violeta-700"
    >
      • Lista completa – Eventos 2° Semestre
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
                <p className="text-violeta-700 font-medium text-sm">📅 {item.data}</p>
              )}

              <p className="text-gray-400 text-xs mt-2">{item.creditos}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

