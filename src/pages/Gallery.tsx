
export default function Gallery() {
  const images = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/400/300?random=${i}`);
  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Galeria</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={img} alt={`Galeria ${idx+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
