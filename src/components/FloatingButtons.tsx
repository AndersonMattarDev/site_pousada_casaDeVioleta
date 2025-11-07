import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FloatingButtons() {
  return (
    <div className="fixed right-2 md:right-4 bottom-4 md:bottom-6 flex flex-col gap-2 md:gap-3 z-50">
      <a
        href="https://book.securebookings.net/roomrate?id=6289e57c-9863-1727801077-44cb-9577-45a1334be549&lang=br"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-violeta-600 text-white px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg flex items-center gap-1.5 md:gap-2 hover:opacity-90 transition text-sm md:text-base"
      >
        Reservar Agora
      </a>
      <a
        href="https://wa.me/5532984409797"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg flex items-center gap-1.5 md:gap-2 hover:opacity-90 transition text-sm md:text-base"
      >
        <WhatsAppIcon width={18} height={18} className="md:w-5 md:h-5" />
        WhatsApp
      </a>
    </div>
  )
}
