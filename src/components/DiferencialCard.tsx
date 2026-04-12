import type { ReactNode } from 'react';

interface DiferencialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
  images?: string[];
  badge?: string;
}

export default function DiferencialCard({
  icon,
  title,
  description,
  highlight = false,
  images,
  badge
}: DiferencialCardProps) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        overflow-hidden
        transition-all duration-300
        ${highlight
          ? 'bg-white border border-violeta-200 shadow-xl hover:shadow-2xl'
          : 'bg-white shadow-sm hover:shadow-md'
        }
      `}
    >
      {/* BADGE */}
      {badge && (
        <span className="absolute top-3 left-3 bg-violeta-600 text-white text-xs px-3 py-1 rounded-full shadow z-10">
          {badge}
        </span>
      )}

     
      {/* CONTEÚDO */}
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
      </div>

       {/* IMAGEM */}
     {images && images.length > 0 && (
  <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50">
    {images.map((img, index) => (
      <div key={index} className="h-40 flex items-center justify-center bg-white rounded-lg overflow-hidden">
        <img
          src={img}
          alt={`${title} ${index + 1}`}
          className="max-w-full max-h-full object-contain transition rounded-lg duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
)}
    </div>
  );
}