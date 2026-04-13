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
}

export default function DiferencialCard({
  icon,
  title,
  description,
  text,
  highlight = false,
  images,
  badge
}: DiferencialCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50">
          {images.map((img: string, index: number) => (
            <div
              key={index}
              className="h-40 w-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
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
          <span className="mt-2 text-black text-md">
            {text}
          </span>
        )}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}