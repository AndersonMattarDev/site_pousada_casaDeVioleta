import type { ReactNode } from 'react';

interface DiferencialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function DiferencialCard({ icon, title, description }: DiferencialCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="mb-6 text-violeta-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}