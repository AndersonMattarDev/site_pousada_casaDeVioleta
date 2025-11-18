import React from "react";

export default function MapFrame() {
  return (
    <iframe
      title="mapa"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.077055014325!2d-44.1755077256086!3d-21.108826080551487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1b8acd0e49e53%3A0x98ff50994ae5be6c!2sPra%C3%A7a%20das%20Merc%C3%AAs%2C%20100%20-%20Centro%2C%20Tiradentes%20-%20MG%2C%2036325-000!5e0!3m2!1spt-BR!2sbr!4v1731954470000!5m2!1spt-BR!2sbr"
      className="w-full h-64 border-0 rounded-lg shadow-lg"
      loading="lazy"
      allowFullScreen
    ></iframe>
  );
}