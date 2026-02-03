import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapImage from "../assets/images/known_world_map.jpg";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

// IMPORTAMOS LA DATA DEL ARCHIVO EXTERNO
import { LORE_CHAPTERS, VISUAL_DATABASE } from "../data/loreData";

const LoreBookView = ({ setMode }) => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(LORE_CHAPTERS[0]);

  return (
    // Quitamos bg-[#050505] fijo del wrapper principal para permitir
    // que la landing sea clara y el archivo sea oscuro.
    <div className="w-full h-full font-sans overflow-hidden relative">
      <AnimatePresence mode="wait">
        {/* --- ESTADO 1: LANDING PAGE (DISEÑO PERGAMINO / CREATOR) --- */}
        {!isArchiveOpen ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
            transition={{ duration: 1.2 }}
            // FONDO COLOR PERGAMINO
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#fcf5e5]"
          >
            {/* 1. Mapa de fondo (A COLOR, SIN GRAYSCALE) */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ scale: [1, 1.05] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              {/* Opacity bajada a 0.35 para que se vea el color pero no moleste al texto */}
              <img
                src={mapImage}
                className="w-full h-full object-cover opacity-35"
                alt="World Map"
              />
            </motion.div>

            {/* 2. Capa de mezcla para textura (opcional) */}
            <div className="absolute inset-0 z-0 bg-[#fcf5e5]/20 mix-blend-multiply pointer-events-none"></div>

            {/* 3. Contenedor Central (Estilo Tarjeta Elegante) */}
            <div className="z-30 relative max-w-3xl mx-4 p-8 md:p-16 text-center bg-[#fcf5e5]/90 border border-[#d4af37]/60 shadow-2xl rounded-sm">
              {/* TÍTULO: UnifrakturCook + No Mayúsculas + Color Tinta (#2b2b2b) */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-['UnifrakturCook'] text-5xl md:text-8xl text-[#2b2b2b] normal-case mb-4 leading-tight tracking-wide"
              >
                The Nomos Chronicles
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="font-['Cormorant_Garamond'] text-[#d4af37] text-2xl font-bold italic mb-8"
              >
                "The Onomastikon, The Book of Names"
              </motion.p>

              {/* Separador Dorado */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-24 h-px bg-[#d4af37] mb-10 mx-auto opacity-50"
              />

              {/* Texto de introducción (Estilo lectura cómoda) */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="font-['Cormorant_Garamond'] text-[#2b2b2b] text-xl leading-relaxed max-w-lg mx-auto mb-10 font-medium"
              >
                Welcome to my world-building project
              </motion.p>

              {/* BOTÓN (Estilo Clásico/Elegante) */}
              <motion.button
                onClick={() => setIsArchiveOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{
                  backgroundColor: "#d4af37",
                  color: "#fcf5e5",
                  borderColor: "#d4af37",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-3 border border-[#d4af37] text-[#2b2b2b] font-['Cormorant_Garamond'] font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300"
              >
                Open Archives
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* --- ESTADO 2: 3-COLUMN LAYOUT (MANTENEMOS TU DISEÑO OSCURO ORIGINAL) --- */
          /* Nota: Agregamos bg-[#050505] aquí para asegurar el fondo oscuro al entrar */
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row w-full h-full bg-[#050505] text-[#e0e0e0]"
          >
            {/* COLUMNA 1: ÍNDICE */}
            <nav className="w-full md:w-1/5 h-full border-r border-white/10 flex flex-col overflow-y-auto scrollbar-hide pt-24 pb-8 relative z-10">
              <div className="px-6 mb-8">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-2">
                  /// Index
                </span>
                <h2 className="font-['UnifrakturCook'] text-3xl text-white tracking-wide">
                  Chronicles
                </h2>
              </div>

              <ul className="flex flex-col">
                {LORE_CHAPTERS.map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => setActiveChapter(chapter)}
                      className={`w-full text-left px-6 py-3 border-b border-white/5 font-sans text-xs font-bold uppercase tracking-widest transition-all ${
                        activeChapter.id === chapter.id
                          ? "bg-white text-black border-l-4 border-l-gold pl-5"
                          : "text-gray-500 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {chapter.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-auto px-6 pt-8">
                <button
                  onClick={() => setMode("terminal")}
                  className="text-gray-500 hover:text-white flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest transition-colors"
                >
                  <img
                    src={arrowIcon}
                    className="w-3 h-3 invert rotate-180"
                    alt="<"
                  />{" "}
                  Exit System
                </button>
              </div>
            </nav>

            {/* COLUMNA 2: LECTOR CENTRAL */}
            <main className="w-full md:w-2/5 h-full overflow-y-auto p-8 md:p-12 pt-24 pb-32 border-r border-white/10 scrollbar-hide bg-[#080808]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-12 border-b border-white/10 pb-6">
                    <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] block mb-2">
                      /// Classified_Record
                    </span>
                    <h1 className="font-['UnifrakturCook'] text-5xl md:text-6xl text-white mb-4 leading-none tracking-wide">
                      {activeChapter.title}
                    </h1>
                    <h2 className="font-serif italic text-2xl text-gray-400">
                      "{activeChapter.subtitle}"
                    </h2>
                  </div>

                  <div className="prose prose-invert prose-lg max-w-none font-serif">
                    {activeChapter.fullContent}
                  </div>

                  <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center opacity-50">
                    <span className="font-mono text-xs uppercase text-gray-500">
                      End of Record
                    </span>
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>

            {/* COLUMNA 3: ARTEFACTOS VISUALES */}
            <aside className="hidden md:block w-2/5 h-full overflow-y-auto p-8 pt-24 pb-32 bg-[#050505] scrollbar-hide">
              <div className="mb-8 border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  Visual Context // Artifacts
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {VISUAL_DATABASE.map((item, i) => (
                  <div
                    key={i}
                    className="group border border-white/5 bg-white/[0.02] hover:border-white/20 transition-colors p-4"
                  >
                    <div className="aspect-video bg-black mb-4 relative overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale"
                          alt=""
                        />
                      ) : (
                        <div className="text-center opacity-30">
                          <span className="font-mono text-xs border border-white/30 px-2 py-1">
                            [ NO_DATA ]
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-sans font-bold text-white text-sm uppercase tracking-tight mb-1">
                          {item.title}
                        </h3>
                        <p className="font-serif text-xs text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                      <span className="font-mono text-[9px] text-gold border border-gold/30 px-1 uppercase">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono text-gray-600 bg-white/5 px-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoreBookView;
