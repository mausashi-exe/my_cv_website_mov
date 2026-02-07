import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMPORTS ---
import mapImage from "../assets/images/map_with_factions_01.webp";
import coinBtn from "../assets/images/map_landing_button_01.webp";
import arrowIcon from "../assets/ui/arrow_pointing_down_right.svg";
import { LORE_CHAPTERS } from "../data/loreData";

// --- SUB-COMPONENTES VISUALES ---
const NoiseOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
);

const BiomechDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent my-8 relative opacity-60">
    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 border border-[#d4af37] bg-[#050505]"></div>
  </div>
);

// --- BOTÓN ACTUALIZADO: EFECTO RUNA MÁGICA ---
const ArtifactButton = ({ onClick, text = "Enter", scale = 1 }) => {
  return (
    <motion.button
      onClick={onClick}
      style={{ transform: `scale(${scale})` }}
      className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group rounded-full outline-none cursor-pointer z-50 origin-center"
      whileHover={{ scale: scale * 1.05 }}
      whileTap={{ scale: scale * 0.95 }}
      initial={{ opacity: 0, scale: scale * 0.8 }}
      animate={{ opacity: 1, scale: scale }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
    >
      {/* Imagen de la moneda (La oscurecemos un poco más para que el texto brillante resalte) */}
      <img
        src={coinBtn}
        alt={text}
        className="w-full h-full object-contain drop-shadow-2xl transition-all duration-700 
                   filter brightness-[0.6] contrast-125 sepia-[0.3] 
                   group-hover:brightness-[0.8] group-hover:sepia-0 group-hover:drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
      />

      {/* Texto centrado - EFECTO RUNA BRILLANTE */}
      <div className="absolute inset-0 flex items-center justify-center pt-2 z-10 pointer-events-none">
        <span
          className="font-maguntia text-3xl md:text-5xl tracking-normal 
                         text-[#ffb700]  /* Color base: Ámbar Dorado */
                         drop-shadow-[0_0_10px_rgba(255,100,0,0.8)] /* Glow Naranja Intenso */
                         
                         group-hover:text-[#fffebb] /* Hover: Blanco Dorado (Caliente) */
                         group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,1)] /* Hover: Glow Dorado Puro y fuerte */
                         
                         transition-all duration-500 opacity-100"
        >
          {text}
        </span>
      </div>
    </motion.button>
  );
};

// --- COMPONENTE PRINCIPAL ---
const LoreBookView = ({ setMode }) => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(LORE_CHAPTERS[0]);
  const [isMetaOpen, setIsMetaOpen] = useState(false);

  useEffect(() => {
    setIsMetaOpen(false);
  }, [activeChapter]);

  return (
    <div className="w-full h-full font-sans overflow-hidden relative bg-[#050505] selection:bg-[#d4af37] selection:text-black">
      <NoiseOverlay />

      <AnimatePresence mode="wait">
        {!isArchiveOpen ? (
          /* ==================== ESTADO 1: PORTADA ==================== */
          <motion.div
            key="landing"
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center overflow-hidden"
            exit={{
              opacity: 0,
              scale: 1.2,
              filter: "blur(15px)",
              transition: { duration: 1 },
            }}
          >
            {/* Fondo Mapa Vivo */}
            <div className="absolute inset-0 z-0">
              <motion.img
                src={mapImage}
                className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.1]"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            </div>

            {/* Contenido Central */}
            <div className="relative z-30 flex flex-col items-center justify-center p-8 max-w-6xl w-full h-full">
              {/* 1. BOTÓN ARTEFACTO (ARRIBA) */}
              <div className="mb-10 relative z-50">
                <ArtifactButton
                  onClick={() => setIsArchiveOpen(true)}
                  text="Enter"
                  scale={1.3}
                />
              </div>

              {/* 2. TÍTULO (ABAJO) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <span className="font-code text-[10px] text-[#d4af37] tracking-[0.6em] uppercase block animate-pulse-subtle">
                  /// ARCHIVAL_PROTOCOL_INIT
                </span>

                <h1 className="font-maguntia text-6xl md:text-[8vw] text-[#e0e0e0] leading-[0.9] tracking-normal drop-shadow-2xl mix-blend-screen opacity-90">
                  Chronicles of
                  <br />
                  <span className="text-[#d4af37]/90">The Nomos</span>
                </h1>

                <div className="flex items-center justify-center gap-4 opacity-60 pt-4">
                  <div className="h-px w-12 bg-white/30"></div>
                  <span className="font-cinzel text-xs tracking-widest text-white/60">
                    EST. 2026
                  </span>
                  <div className="h-px w-12 bg-white/30"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* ==================== ESTADO 2: VISTA DE LECTURA ==================== */
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex w-full h-full relative z-10 pt-14"
          >
            {/* --- COLUMNA IZQUIERDA: ÍNDICE --- */}
            <nav className="hidden md:flex flex-col w-[260px] h-full border-r border-white/5 bg-[#080808] z-20 shadow-2xl relative">
              <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
                <button
                  onClick={() => setIsArchiveOpen(false)}
                  className="font-code text-[9px] text-gray-500 hover:text-[#d4af37] uppercase tracking-widest flex items-center gap-2 mb-4 transition-colors group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>{" "}
                  Return
                </button>
                <h3 className="font-maguntia text-3xl text-white/90 tracking-normal">
                  Index Librorum
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
                {LORE_CHAPTERS.map((chap, idx) => {
                  const isActive = activeChapter.id === chap.id;
                  return (
                    <button
                      key={chap.id}
                      onClick={() => setActiveChapter(chap)}
                      className={`w-full text-left px-6 py-4 group relative border-l-2 transition-all duration-300
                        ${isActive ? "border-[#d4af37] bg-white/[0.02]" : "border-transparent hover:border-white/10 hover:bg-white/[0.01]"}`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span
                          className={`font-code text-[9px] uppercase tracking-widest ${isActive ? "text-[#d4af37]" : "text-gray-600 group-hover:text-gray-400"}`}
                        >
                          FILE_0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1 h-1 rounded-full bg-[#d4af37] animate-pulse"></span>
                        )}
                      </div>
                      <span
                        className={`font-cinzel text-sm font-bold leading-tight block ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                      >
                        {chap.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* --- COLUMNA CENTRAL: CONTENIDO --- */}
            <section className="flex-1 h-full overflow-y-auto scrollbar-hide bg-[#0a0a0a] relative px-6 md:px-16 py-12">
              <div className="fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-[#d4af37]/5 rounded-full opacity-20 animate-spin-slow pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto relative z-10"
                >
                  {/* HEADER DEL CAPÍTULO */}
                  <header className="mb-8 text-center">
                    <span className="font-code text-[9px] text-[#d4af37] uppercase tracking-[0.25em] mb-2 block">
                      Directive: {activeChapter.visualData.tags[0]}
                    </span>
                    <h2 className="font-maguntia text-5xl md:text-8xl text-[#e0e0e0] mb-2 drop-shadow-lg leading-[0.85] tracking-normal capitalize">
                      {activeChapter.title}
                    </h2>
                    <p className="font-cinzel text-lg text-gray-500 font-bold tracking-widest mt-4">
                      "{activeChapter.subtitle}"
                    </p>
                  </header>

                  {/* IMAGEN CENTRAL CON BOTÓN OPEN (REUTILIZADO) */}
                  <div className="mb-12 relative w-full aspect-[21/9] md:aspect-[2/1] bg-[#050505] border border-white/10 overflow-hidden group">
                    {activeChapter.visualData.mainImage ? (
                      <img
                        src={activeChapter.visualData.mainImage}
                        alt="Ref"
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 grayscale"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20">
                        <span className="font-code text-[9px] text-gray-600">
                          NO VISUAL FEED
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                    {/* BOTÓN INTERNO PARA ABRIR DATA - Texto "Open" */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArtifactButton
                        onClick={() => setIsMetaOpen(true)}
                        text="Open"
                        scale={0.6}
                      />
                    </div>

                    <div className="absolute bottom-4 right-4 pointer-events-none">
                      <span className="font-code text-[8px] text-white/50 border border-white/20 px-2 py-1 bg-black/50 backdrop-blur">
                        FIG_0{activeChapter.id.length}
                      </span>
                    </div>
                  </div>

                  <BiomechDivider />

                  {/* CUERPO DEL TEXTO */}
                  <article className="font-cormorant text-2xl text-gray-300 leading-loose text-justify space-y-10 px-2 md:px-8 font-medium">
                    {activeChapter.fullContent}
                  </article>

                  {/* FOOTER */}
                  <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-end opacity-30 hover:opacity-100 transition-opacity">
                    <span className="font-code text-[9px] text-gray-600">
                      Auth:{" "}
                      {activeChapter.visualData.stats[0]?.value || "UNKNOWN"}
                    </span>
                    <span className="font-code text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
                      End_Of_File
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="h-24"></div>
            </section>

            {/* --- PANEL DESLIZANTE --- */}
            <AnimatePresence>
              {isMetaOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMetaOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                  />

                  <motion.aside
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0c0c0c] border-l border-[#d4af37]/30 z-40 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] overflow-y-auto"
                  >
                    <div className="sticky top-0 bg-[#0c0c0c]/90 backdrop-blur border-b border-white/10 p-6 flex justify-between items-center z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#d4af37] animate-pulse"></div>
                        <h3 className="font-code text-xs font-bold text-[#d4af37] uppercase tracking-widest">
                          System_Analysis
                        </h3>
                      </div>
                      <button
                        onClick={() => setIsMetaOpen(false)}
                        className="text-gray-500 hover:text-white font-code text-xs uppercase"
                      >
                        [Close X]
                      </button>
                    </div>

                    <div className="p-8 space-y-10">
                      {/* 1. Threat Matrix */}
                      <div>
                        <span className="block font-code text-[9px] text-gray-600 uppercase mb-2">
                          Threat Assessment
                        </span>
                        <div className="bg-[#111] p-4 border border-white/5">
                          <div className="flex justify-between items-end mb-2">
                            <span
                              className={`font-bebas text-3xl tracking-widest ${
                                activeChapter.visualData.threatLevel ===
                                  "Severe" ||
                                activeChapter.visualData.threatLevel ===
                                  "Critical"
                                  ? "text-red-500"
                                  : activeChapter.visualData.threatLevel ===
                                      "High"
                                    ? "text-orange-500"
                                    : "text-blue-400"
                              }`}
                            >
                              {activeChapter.visualData.threatLevel}
                            </span>
                            <span className="font-code text-[9px] text-gray-500">
                              LEVEL
                            </span>
                          </div>
                          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  activeChapter.visualData.threatLevel ===
                                  "Severe"
                                    ? "90%"
                                    : "60%",
                              }}
                              className={`h-full ${activeChapter.visualData.threatLevel === "Severe" ? "bg-red-500" : "bg-blue-500"}`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* 2. Stats Grid */}
                      <div>
                        <span className="block font-code text-[9px] text-gray-600 uppercase mb-2">
                          Entity Data
                        </span>
                        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                          {activeChapter.visualData.stats.map((stat, i) => (
                            <div
                              key={i}
                              className="bg-[#0c0c0c] p-3 flex justify-between items-center"
                            >
                              <span className="font-code text-[9px] text-gray-500 uppercase">
                                {stat.label}
                              </span>
                              <span className="font-sans text-sm text-gray-200">
                                {stat.value}
                              </span>
                            </div>
                          ))}
                          <div className="bg-[#0c0c0c] p-3 flex justify-between items-center">
                            <span className="font-code text-[9px] text-gray-500 uppercase">
                              Tags
                            </span>
                            <div className="flex gap-1 flex-wrap">
                              {activeChapter.visualData.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[8px] bg-white/5 px-1 text-gray-400 border border-white/5 font-code"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. Creator Log */}
                      <div className="relative pt-4 border-t border-dashed border-white/10">
                        <h4 className="font-code text-[9px] font-bold text-[#d4af37] uppercase tracking-widest mb-3">
                          /// Creator_Log.txt
                        </h4>
                        <p className="font-code text-[10px] text-gray-400 leading-relaxed italic border-l-2 border-[#d4af37]/20 pl-4">
                          {activeChapter.visualData.processLog}
                        </p>
                      </div>

                      {/* 4. Inspiration */}
                      <div className="bg-[#111] p-4 border border-white/5">
                        <h4 className="font-code text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2 border-b border-white/5 pb-2">
                          Semantic Origins
                        </h4>
                        <p className="font-cormorant italic text-gray-400 text-lg leading-relaxed">
                          {activeChapter.visualData.inspiration}
                        </p>
                      </div>
                    </div>
                  </motion.aside>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoreBookView;
