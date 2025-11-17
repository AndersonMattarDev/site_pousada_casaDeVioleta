import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-violeta-900 text-white py-6 mt-8">
      <div className="container text-left md:text-center">
        
        {/* Ícones de redes sociais */}
        <div className="flex justify-center gap-6 mb-3">
          <a
            href="https://www.instagram.com/casadevioletapousada"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violeta-300 transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a
            href="https://www.facebook.com/share/172osDzVrh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violeta-300 transition"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>

        
        {/* Direitos autorais */}
        <div className="text-[10px] leading-none mb-1 opacity-90">
          © 2025 Casa de Violeta Pousada. Todos os direitos reservados.
        </div>

        {/* Crédito do desenvolvedor */}
        <div className="text-[9px] leading-none opacity-70 hover:opacity-100 transition">
          Desenvolvido por{" "}
          <a
            href="https://wa.me/5532984240038"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-violeta-200"
          >
            Anderson Moreno Mattar – Web Developer
          </a>
        </div>
      </div>
    </footer>
  );
}