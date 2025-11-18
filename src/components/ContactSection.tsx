import React from "react";
import { motion } from "framer-motion";

import ContactItem from "./ContactItem";
import DistanceItem from "./DistanceItem";
import SectionTitle from "./SectionTitle";
import MapFrame from "./MapFrame";

import { faLocationDot, faEnvelope, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <section className="container py-20 px-4">

      {/* TÍTULO */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-1">
        Contato
      </h1>

      <div className="max-w-4xl mx-auto space-y-16">

        {/* ---- CARD DE CONTATOS ---- */}
        <motion.div
          className="bg-violeta-100 rounded-2xl shadow-lg p-6 md:p-10 space-y-6 text-lg md:text-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-center mb-4">Informações</h4>

          <div className="space-y-6">
            <ContactItem icon={faLocationDot} size="lg">
              <strong>Endereço:</strong> <br />Praça das Mercês, 100 – Centro – Tiradentes – MG
            </ContactItem>

            <div className="border-t border-gray-300 pt-6">
              <ContactItem icon={faWhatsapp} size="lg">
                <strong>WhatsApp:</strong> <br /> (32) 984409797 -  <a href="https://wa.me/5532984409797" target="_blank" rel="noopener noreferrer"> (Enviar mensagem)</a>
              </ContactItem>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <ContactItem icon={faEnvelope} size="lg">
                <strong>Email:</strong> <br />casadevioletapousada@hotmail.com
              </ContactItem>
            </div>
          </div>
        </motion.div>

        {/* ---- CARD DE DISTÂNCIAS ---- */}
        <motion.div
          className="bg-violeta-100 rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <SectionTitle icon={faMapLocationDot}>
            Distâncias até Tiradentes
          </SectionTitle>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg md:text-xl">
            <DistanceItem city="Belo Horizonte (MG)" distance="~190 km" />
            <DistanceItem city="Juiz de Fora (MG)" distance="~148 km" />
            <DistanceItem city="São Paulo (SP)" distance="~485 km" />
            <DistanceItem city="Rio de Janeiro (RJ)" distance="~330 km" />
            <DistanceItem city="Goiânia (GO)" distance="~890 km" />
            <DistanceItem city="Vitória (ES)" distance="~525 km" />
            <DistanceItem city="Brasília (DF)" distance="~720 km" />
          </div>
        </motion.div>

        {/* ---- MAPA ---- */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapFrame />
        </motion.div>

      </div>
    </section>
  );
}