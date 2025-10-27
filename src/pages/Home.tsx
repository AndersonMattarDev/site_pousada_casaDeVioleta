
export default function Home() {
  return (
    <section className="text-center">
      <div className="relative h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://picsum.photos/id/29/1200/600')" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Bem-vindo à Casa de Violeta 💜
        </h2>
        <a href="#" className="absolute bottom-4 bg-violeta text-white px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition">
          Reservar Agora
        </a>
      </div>
    </section>
  );
}
