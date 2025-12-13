import React from 'react'

interface Review {
  author_name: string
  city: string
  rating: number
  text: string
  relative_time_description: string
  reviewUrl: string
}

const reviews: Review[] = [
  {
    author_name: "Érica Toledo.",
    city: "Ribeirão Preto, SP",
    rating: 5,
    text: "Pousada simples, mas acolhedora, em local muito agradável e pertinho do centro histórico.Atendimento cordial na recepção e na cozinha, bom espaço para guardar o carro em local fechado (algumas outras pousadas mais sofisticadas da cidade não oferecem estacionamento), quartos ficam em um jardim bucólico com bela vista para a natureza. A internet funciona bem.",
    relative_time_description: "3 meses atrás",
    reviewUrl: "https://maps.app.goo.gl/MfxTwxj7LBA8gztR9"
  },
  {
    author_name: "Maria Santos",
    city: "Ribeirão Preto, SP",
    rating: 5,
    text: "Ambiente acolhedor e limpo. Café da manhã delicioso. Voltarei com certeza!",
    relative_time_description: "1 mês atrás",
    reviewUrl: "https://www.tripadvisor.com.br/ShowUserReviews-g737098-d3870878-r987654321-Casa_de_Violeta_Pousada-Tiradentes_State_of_Minas_Gerais.html"
  },
  {
    author_name: "Pedro Oliveira",
    city: "Ribeirão Preto, SP",
    rating: 4,
    text: "Muito bom, mas o Wi-Fi poderia ser melhor. No geral, experiência positiva.",
    relative_time_description: "3 semanas atrás",
    reviewUrl: "https://www.tripadvisor.com.br/ShowUserReviews-g737098-d3870878-r112233445-Casa_de_Violeta_Pousada-Tiradentes_State_of_Minas_Gerais.html"
  }
]

export default function TripAdvisorReviews() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Avaliações Recentes no TripAdvisor
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open(review.reviewUrl, '_blank')}>
            <div className="flex items-center mb-2">
              <span className="font-semibold">{review.author_name}</span>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.city}</p>
            <p className="text-gray-600 mb-2">{review.relative_time_description}</p>
            <p className="text-gray-800">{review.text}</p>
            <p className="text-blue-500 mt-2 text-sm">Clique para ver no TripAdvisor</p>
          </div>
        ))}
      </div>
    </div>
  )
}