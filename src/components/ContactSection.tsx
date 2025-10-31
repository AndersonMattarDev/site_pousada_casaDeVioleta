import React from 'react'

export default function ContactSection() {
  return (
    <section className="container py-16">
      <h3 className="text-3xl font-bold text-center mb-6">Contato</h3>
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p><strong>Endereço:</strong> Praça das Mercês, 100 – Centro – Tiradentes – MG</p>
        <p><strong>WhatsApp:</strong> (aguardando número)</p>
        <p><strong>Email:</strong> contato@casadevioleta.com (placeholder)</p>
        <div className="mt-4">
          <iframe title="mapa" src="https://www.google.com/maps?q=Tiradentes&output=embed" className="w-full h-64 border-0 rounded-lg" />
        </div>
      </div>
    </section>
  )
}
