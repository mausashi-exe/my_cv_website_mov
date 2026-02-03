import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMPORTS DE TEXTURAS DE FONDO ---
// Asegúrate de tener estas imágenes o cambiar las rutas
import scanTexture from "../assets/images/scan_texture_05.jpg"; // Fondo por defecto
import bgEngineer from "../assets/images/red_vector.jpg"; // Fondo para Engineer (Ejemplo)
import bgCreator from "../assets/images/drawing_nomos_03.jpg"; // Fondo para Creator (Ejemplo)
// import bgMeta from "../assets/images/glitch_texture.jpg"; // Fondo para Meta (Si no tienes, usa scanTexture)

const sections = [
  {
    id: "engineer",
    title: "THE ENGINEER",
    subtitle: "SYSTEMS / LOGIC / STRUCTURE",
    desc: "Full Stack Architecture.",
    hoverColor: "group-hover:text-[#2563EB]", // Azul Técnico
    bgImage: bgEngineer, // Asignamos la imagen importada
  },
  {
    id: "creator",
    title: "THE CREATOR",
    subtitle: "NARRATIVE / VISUALS / LORE",
    desc: "Worldbuilding & Design.",
    hoverColor: "group-hover:text-[#d4af37]", // Dorado
    bgImage: bgCreator,
  },
  {
    id: "meta",
    title: "META-CREATOR",
    subtitle: "THE MERGE / SKILLS / CONTACT",
    desc: "The complete profile.",
    hoverColor: "group-hover:text-[#FF4400]", // Naranja lava
    bgImage: scanTexture, // Usamos scanTexture o una específica para meta
  },
];

const MainTerminal = ({ setMode }) => {
  // Estado para saber qué sección está siendo hovered
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="h-full w-full flex flex-col md:flex-row items-stretch justify-center relative bg-void overflow-hidden">
      {/* =================================================================
          LAYER 1: FONDO BASE (Siempre visible, baja opacidad)
      ================================================================= */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none z-0"
        style={{ backgroundImage: `url(${scanTexture})` }}
      />

      {/* =================================================================
          LAYER 2: FONDO DINÁMICO (Cambia según el Hover)
      ================================================================= */}
      <AnimatePresence>
        {hoveredSection && (
          <motion.div
            key={hoveredSection} // La clave hace que Framer detecte el cambio
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.25, scale: 1 }} // Opacidad sutil (0.25) para no tapar el texto
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none mix-blend-screen"
            style={{
              // Buscamos la imagen correspondiente al ID hovereado
              backgroundImage: `url(${sections.find((s) => s.id === hoveredSection)?.bgImage})`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Gradient Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent z-0 pointer-events-none"></div>

      {/* =================================================================
          COLUMNAS INTERACTIVAS
      ================================================================= */}
      {sections.map((section, index) => {
        const isCreator = section.id === "creator";

        return (
          <motion.div
            key={section.id}
            // Eventos para detectar el Hover y cambiar el fondo
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => setMode(section.id)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group flex-1 border-b md:border-b-0 md:border-r border-bone/10 p-8 md:p-12 flex flex-col justify-end cursor-pointer z-10 hover:bg-white/[0.02] transition-colors duration-500"
          >
            {/* Index Vertical */}
            <div className="absolute top-6 left-6 md:right-6 md:left-auto">
              <span className="font-mono text-[10px] text-bone/30 group-hover:text-bone/80 transition-colors">
                DIR_0{index + 1} //
              </span>
            </div>

            {/* Contenido */}
            <div className="translate-y-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
              {/* TÍTULO */}
              <h2
                className={`
                  font-black uppercase leading-[0.85] mb-6 transition-colors duration-300 ${section.hoverColor}
                  ${
                    isCreator
                      ? "font-['UnifrakturCook'] text-5xl md:text-7xl tracking-normal normal-case"
                      : "font-display text-4xl md:text-6xl tracking-tighter"
                  }
                `}
              >
                {isCreator
                  ? section.title
                  : section.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
              </h2>

              {/* LÍNEA SEPARADORA */}
              <div className="h-px w-8 group-hover:w-24 bg-bone/50 mb-4 transition-all duration-500"></div>

              {/* SUBTÍTULOS */}
              <div className="font-mono text-[10px] md:text-xs text-bone/60 group-hover:text-bone transition-colors space-y-1">
                <p className="font-bold tracking-widest">{section.subtitle}</p>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 italic text-bone/40">
                  {section.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MainTerminal;
