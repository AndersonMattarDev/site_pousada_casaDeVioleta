import React from 'react'

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-6 flex flex-col gap-3 z-50">
      <a href="https://book.securebookings.net/roomrate?id=6289e57c-9863-1727801077-44cb-9577-45a1334be549&lang=br" className="bg-violeta-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition">
        Reservar Agora
      </a>
      <a href="https://wa.me/5511999999999" className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48a11.94 11.94 0 00-16.97 0 11.94 11.94 0 000 16.97l-.53 3.88 3.98-.54a11.94 11.94 0 0016.97-16.97zm-9.53 16.04c-1.92 0-3.78-.52-5.37-1.5l-.38-.22-3.11.43.44-3.04-.25-.38a10.08 10.08 0 0114.68-14.68 10.08 10.08 0 01-10.81 16.39z"/>
          <path d="M15.14 14.06l-1.01-.47c-.14-.06-.33-.1-.52-.18-.19-.07-1.13-.55-1.31-.61-.18-.06-.31-.09-.44.09-.13.18-.52.61-.64.73-.12.12-.25.13-.46.05-.21-.07-.88-.32-1.68-1.03-.62-.55-1.03-1.23-1.15-1.39-.12-.16-.01-.25.09-.33.09-.08.21-.21.32-.31.11-.1.15-.18.22-.3.06-.12.03-.22-.02-.31-.05-.09-.52-1.25-.72-1.71-.19-.45-.38-.39-.52-.4-.13-.01-.27-.01-.41-.01-.14 0-.37.05-.56.25-.19.2-.73.71-.73 1.73 0 1.02.75 2 0 2.55.75.55 2.33 3.01 5.65 4.11.79.34 1.4.54 1.88.69.79.25 1.5.21 2.07.13.63-.09 1.2-.37 1.7-.78.5-.41 1.06-1.04 1.4-1.62.34-.58.5-1.01.5-1.03 0-.02-.03-.06-.08-.1z"/>
        </svg>
        WhatsApp
      </a>
    </div>
  )
}
