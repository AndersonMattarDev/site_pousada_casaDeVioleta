import { useState } from 'react';
import type { ReactNode } from 'react';

interface DiferencialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  text?: string;
  highlight?: boolean;
  images?: string[];
  badge?: string;
  link?: string;
  linkImage?: string;
  linkImageAlt?: string;
}

export default function DiferencialCard({
  icon,
  title,
  description,
  text,
  highlight = false,
  images,
  badge,
  link,
  linkImage,
  linkImageAlt = 'Logo'
}: DiferencialCardProps) {
  const [zoomImage, setZoomImage] = useState<string | null>(null);


  function setSelectedImage(img: string): void {
    // set the image to be zoomed in the modal
    setZoomImage(img);
  }

  return (
    <div
      className={`
        relative
        rounded-3xl
        overflow-hidden
        transition-all duration-300
        ${highlight
          ? 'bg-white border border-violeta-200 shadow-xl hover:shadow-2xl'
          : 'bg-white shadow-sm hover:shadow-xl'
        }
      `}
    >
  {/* BADGE */}
  {badge && (
    <div className="flex justify-center mt-4">
      <span
        className="bg-violeta-600 text-white text-xs px-6 py-4 shadow font-semibold animate-pulse"
        style={{
          clipPath:
            "polygon(50% 0%, 60% 15%, 80% 10%, 70% 30%, 100% 50%, 70% 70%, 80% 90%, 60% 85%, 50% 100%, 40% 85%, 20% 90%, 30% 70%, 0% 50%, 30% 30%, 20% 10%, 40% 15%)"
        }}
      >
        {badge}
      </span>
    </div>
  )}

      {/* IMAGENS */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-gray-50">
          {images.map((img: string, index: number) => (
            <button
              key={index}
<<<<<<< HEAD
              className="h-56 w-full rounded-xl overflow-hidden cursor-pointer bg-white border border-gray-100 hover:border-violeta-300 shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
=======
              type="button"
              onClick={() => setZoomImage(img)}
              className="h-52 overflow-hidden rounded-2xl border border-transparent transition duration-200 hover:border-violeta-200"
            >
              <img
                src={img}
                alt={`${title} miniatura ${index + 1}`}
                className="w-full h-full object-cover"
>>>>>>> c0c8672c62578a5c741450c8b0e593300abbde80
              />
            </button>
          ))}
        </div>
      )}

      {/* CONTEÚDO (ÚNICO) */}
      <div className="flex flex-col items-center text-center px-6 py-8">
        <div className="mb-4 text-violeta-600">
          {icon}
        </div>

        <h3 className={`mb-3 ${highlight ? 'text-xl font-semibold text-gray-900' : 'text-lg font-semibold text-gray-800'}`}>
          {title}
        </h3>

        <p className={`${highlight ? 'text-gray-600' : 'text-gray-500 text-sm'} leading-relaxed`}>
          {description}
        </p>
        {text && (
          <span className="mt-2 text-gray-600 text-md">
            {text}
          </span>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-violeta-100 text-white py-2 px-4 transition-transform duration-300 hover:scale-[1.02] hover:bg-violeta-200"
          >
            {linkImage && (
              <img
                src={linkImage}
                alt={linkImageAlt}
                className="h-12 w-auto rounded-full"
              />
            )}
            <span className="font-semibold text-sm md:text-base text-black">
              Clique aqui para baixar o app e conferir os valores
            </span>
          </a>
        )}

      </div>

      {/* MODAL */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}