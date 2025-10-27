import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth relative">
      <Menu />
      <main className="flex-1">
        <section id="home"><Home /></section>
        <section id="galeria" className="mt-20"><Gallery /></section>
        <section id="contato" className="mt-20"><Contact /></section>
      </main>
      <Footer />

      {/* Botões fixos no canto direito */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-50">
        <a href="https://seu-motor-de-reservas.com" className="bg-violeta text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition">
          Reservar Agora
        </a>
        <a href="https://wa.me/5532984240038" className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48a11.94 11.94 0 00-16.97 0 11.94 11.94 0 000 16.97l-.53 3.88 3.98-.54a11.94 11.94 0 0016.97-16.97zm-9.53 16.04c-1.92 0-3.78-.52-5.37-1.5l-.38-.22-3.11.43.44-3.04-.25-.38a10.08 10.08 0 0114.68-14.68 10.08 10.08 0 01-10.81 16.39z"/>
            <path d="M15.14 14.06l-1.01-.47c-.14-.06-.33-.1-.52-.18-.19-.07-1.13-.55-1.31-.61-.18-.06-.31-.09-.44.09-.13.18-.52.61-.64.73-.12.12-.25.13-.46.05-.21-.07-.88-.32-1.68-1.03-.62-.55-1.03-1.23-1.15-1.39-.12-.16-.01-.25.09-.33.09-.08.21-.21.32-.31.11-.1.15-.18.22-.3.06-.12.03-.22-.02-.31-.05-.09-.52-1.25-.72-1.71-.19-.45-.38-.39-.52-.4-.13-.01-.27-.01-.41-.01-.14 0-.37.05-.56.25-.19.2-.73.71-.73 1.73 0 1.02.75 2 0 2.55.75.55 2.33 3.01 5.65 4.11.79.34 1.4.54 1.88.69.79.25 1.5.21 2.07.13.63-.09 1.24-.46 1.6-.76.36-.3.76-.61.87-.68.12-.06.2-.1.29-.17.09-.07.19-.06.3-.04.12.03.74.35.89.41.15.06.24.09.28.15.05.06.05.11.04.17-.01.06-.1.22-.15.33-.05.12-.19.18-.28.25-.09.07-.19.16-.28.23-.09.07-.18.16-.25.24-.07.08-.03.15.05.24.08.09.45.74.49.83.05.09.08.18.12.27.04.09.06.15.12.25.06.1.08.13.13.18.05.05.09.08.16.14.07.06.09.08.17.13.08.06.29.19.38.25.1.06.21.11.31.15.1.04.18.06.28.09.1.03.21.04.31.06.1.02.2.02.31.03.1 0 .19 0 .29-.01.1 0 .19-.01.29-.01.1 0 .2 0 .29-.01.09 0 .18-.01.27-.02.08 0 .15 0 .23 0 .08 0 .15 0 .23 0 .07 0 .14 0 .21 0 .07 0 .14 0 .2 0 .06 0 .13 0 .19 0 .06 0 .12 0 .18 0"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
