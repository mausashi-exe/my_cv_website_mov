import React from "react";
import { motion } from "framer-motion";

// Importamos la textura específica
import scanTexture from "../assets/images/scan_texture_05.jpg";

const sections = [
  {
    id: "engineer",
    title: "THE ENGINEER",
    subtitle: "SYSTEMS / LOGIC / STRUCTURE",
    desc: "Full Stack Architecture.",
    hoverColor: "group-hover:text-blue-300",
  },
  {
    id: "creator",
    title: "THE CREATOR",
    subtitle: "NARRATIVE / VISUALS / LORE",
    desc: "Worldbuilding & Design.",
    hoverColor: "group-hover:text-gold",
  },
  {
    id: "meta",
    title: "META-CREATOR",
    subtitle: "THE MERGE / SKILLS / CONTACT",
    desc: "The complete profile.",
    hoverColor: "group-hover:text-lava",
  },
];

const MainTerminal = ({ setMode }) => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row items-stretch justify-center relative">
      {/* FONDO DE TEXTURA SCAN */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: `url(${scanTexture})` }}
      />
      {/* Overlay para oscurecer un poco y que el texto bone resalte */}
      <div className="absolute inset-0 bg-void/60 z-0 pointer-events-none"></div>

      {/* COLUMNAS */}
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className="relative group flex-1 border-b md:border-b-0 md:border-r border-bone/20 p-8 flex flex-col justify-end cursor-pointer overflow-hidden z-10 hover:bg-white/5 transition-colors duration-500"
          onClick={() => setMode(section.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {/* Vertical Index */}
          <div className="absolute top-8 right-8 md:left-8 md:right-auto">
            <p className="font-mono text-xs rotate-0 md:rotate-90 origin-top-left tracking-widest text-bone/50 group-hover:text-bone transition-colors">
              SECT_0{index + 1}
            </p>
          </div>

          {/* Contenido */}
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h2
              className={`font-display text-4xl md:text-6xl font-black uppercase leading-[0.85] mb-4 transition-colors duration-300 ${section.hoverColor}`}
            >
              {section.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h2>

            <div className="h-px w-12 group-hover:w-full bg-bone mb-4 transition-all duration-500"></div>

            <h3 className="font-mono text-xs font-bold mb-1 tracking-wider text-bone/80">
              {section.subtitle}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MainTerminal;
