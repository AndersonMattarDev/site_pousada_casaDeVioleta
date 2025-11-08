import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-violeta text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Casa de Violeta</h1>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      <nav className={`${open ? "block" : "hidden"} md:block mt-2`}>
        <ul className="flex flex-col md:flex-row gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
          <li><Link to="/flats">Flats</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
