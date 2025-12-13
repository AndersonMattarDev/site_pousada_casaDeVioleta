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
    author_name: "Ricardo R.",
    city: "Ribeirão Preto, SP",
    rating: 4,
    text: "Atendimento cordial na recepção e na cozinha, bom espaço para guardar o carro em local fechado (algumas outras pousadas mais sofisticadas da cidade não oferecem estacionamento), quartos ficam em um jardim bucólico com bela vista para a natureza. A internet funciona bem.",
    relative_time_description: "10 meses atrás",
    reviewUrl: "https://www.tripadvisor.com.br/ShowUserReviews-g737098-d3870878-r995464035-Casa_de_Violeta_Pousada-Tiradentes_State_of_Minas_Gerais.html"
  },
  {
    author_name: "Alicia Lanna",
    city: "Ubá, MG",
    rating: 5,
    text: "Pousada aconchegante. Fomos super bem recepcionados. Quarto espaçoso, cheiroso, limpinho, com roupas de cama ótimas e mimos extras. Funcionários super atenciosos. Ambiente familiar. A localização é perfeita! Deixamos o carro no estacionamento da pousada e fizemos tudo à pé. Recomendo e pretendo voltar várias vezes! Atendeu e superou minhas expectativas. Para uma pousada no centrinho de Tiradentes, tem o melhor custo X benefício das q já me hospedei!",
    relative_time_description: "1 ano e 9 meses atrás",
    reviewUrl: "https://www.tripadvisor.com.br/ShowUserReviews-g737098-d3870878-r950611030-Casa_de_Violeta_Pousada-Tiradentes_State_of_Minas_Gerais.html"
  },
  {
    author_name: "Gisele G.",
    city: "Divinópolis, MG",
    rating: 5,
    text: "Local simples, limpo, aconchegante, café da manhã bom e localização EXCELENTE, bem perto da praça e, ao mesmo tempo, em um lugar tranquilo e sem barulho. Fica ao lado do Café Marcas Mineiras Loja e Café. Em frente tem uma espécie de praça, um bom espaço entre a pousada e a rua. Tranquilo e interessante pra quem estiver com crianças.",
    relative_time_description: "2 anos e 7 meses atrás",
    reviewUrl: "https://www.tripadvisor.com.br/ShowUserReviews-g737098-d3870878-r894300390-Casa_de_Violeta_Pousada-Tiradentes_State_of_Minas_Gerais.html"
  }
]

export default function TripAdvisorReviews() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-violeta-900">
        Avaliações Recentes no TripAdvisor
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-violeta-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open(review.reviewUrl, '_blank')}>
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
            <p className="text-blue-500 mt-2 text-sm">Clique para ver a avaliação completa no TripAdvisor</p>
          </div>
        ))}
      </div>
    </div>
  )
}