import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapImage from "../assets/images/known_world_map.jpg";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

// IMPORTAMOS LA DATA DEL ARCHIVO EXTERNO
import { LORE_CHAPTERS, VISUAL_DATABASE } from "../data/loreData";

const LoreBookView = ({ setMode }) => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  // Inicializamos con el primer capítulo
  const [activeChapter, setActiveChapter] = useState(LORE_CHAPTERS[0]);

  return (
    <div className="w-full h-full bg-[#050505] text-[#e0e0e0] font-sans overflow-hidden relative selection:bg-gold selection:text-black">
      <AnimatePresence mode="wait">
        {/* --- ESTADO 1: LANDING PAGE (Mapa y Título) --- */}
        {!isArchiveOpen ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black"
          >
            {/* Mapa de fondo con animación lenta (Ken Burns) */}
            <motion.div
              className="absolute inset-0 opacity-40"
              animate={{ scale: [1, 1.15] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              <img
                src={mapImage}
                className="w-full h-full object-cover grayscale contrast-125"
                alt="World Map"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black"></div>
            </motion.div>

            {/* Contenido Central */}
            <div className="z-30 text-center px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-gothic text-6xl md:text-9xl text-white mb-2 tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                The Onomastikon
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="font-serif text-gold text-xl italic mb-8"
              >
                "The Book of Names"
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-32 h-px bg-gold mb-12 mx-auto"
              />

              <motion.button
                onClick={() => setIsArchiveOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#c5a059",
                  color: "#c5a059",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-black/60 backdrop-blur-md border border-white/20 text-white font-sans font-bold text-sm tracking-[0.2em] uppercase transition-all"
              >
                [ Open Archives ]
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* --- ESTADO 2: 3-COLUMN LAYOUT (INDEX | READER | VISUALS) --- */
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row w-full h-full"
          >
            {/* COLUMNA 1: ÍNDICE DE CAPÍTULOS (20%) - Fija */}
            <nav className="w-full md:w-1/5 h-full bg-[#050505] border-r border-white/10 flex flex-col overflow-y-auto scrollbar-hide pt-24 pb-8 relative z-10">
              <div className="px-6 mb-8">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-2">
                  /// Index
                </span>
                <h2 className="font-gothic text-2xl text-white">Chronicles</h2>
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

            {/* COLUMNA 2: LECTOR CENTRAL (45%) - Scrollable */}
            <main className="w-full md:w-2/5 h-full overflow-y-auto p-8 md:p-12 pt-24 pb-32 border-r border-white/10 scrollbar-hide bg-[#080808]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Cabecera del Capítulo */}
                  <div className="mb-12 border-b border-white/10 pb-6">
                    <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] block mb-2">
                      /// Classified_Record
                    </span>
                    <h1 className="font-gothic text-4xl md:text-5xl text-white mb-4 leading-none">
                      {activeChapter.title}
                    </h1>
                    <h2 className="font-serif italic text-2xl text-gray-400">
                      "{activeChapter.subtitle}"
                    </h2>
                  </div>

                  {/* Contenido del Capítulo */}
                  <div className="prose prose-invert prose-lg max-w-none">
                    {activeChapter.fullContent}
                  </div>

                  {/* Footer del Capítulo */}
                  <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center opacity-50">
                    <span className="font-mono text-xs uppercase text-gray-500">
                      End of Record
                    </span>
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>

            {/* COLUMNA 3: ARTEFACTOS VISUALES (35%) - Scrollable */}
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
                    {/* Contenedor de Imagen */}
                    <div className="aspect-video bg-black mb-4 relative overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale"
                          alt=""
                        />
                      ) : (
                        // Placeholder si no hay imagen
                        <div className="text-center opacity-30">
                          <span className="font-mono text-xs border border-white/30 px-2 py-1">
                            [ NO_DATA ]
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info del Artefacto */}
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

                    {/* Tags */}
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
