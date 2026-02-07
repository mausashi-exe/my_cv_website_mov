import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapBg from "../assets/images/map_with_factions_01.webp";
// YA NO IMPORTAMOS background_04.webp

// --- FONDOS DINÁMICOS (Solo aparecen en Hover) ---

const EngineerBg = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 z-10 overflow-hidden bg-[#050505]/95"
  >
    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,68,37,0.3)_25%,rgba(255,68,37,0.3)_26%,transparent_27%,transparent_74%,rgba(255,68,37,0.3)_75%,rgba(255,68,37,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,68,37,0.3)_25%,rgba(255,68,37,0.3)_26%,transparent_27%,transparent_74%,rgba(255,68,37,0.3)_75%,rgba(255,68,37,0.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px] animate-[matrix-rain_4s_linear_infinite] opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff4425]/10 to-transparent h-[20%] w-full animate-[matrix-rain_2s_linear_infinite]"></div>
  </motion.div>
);

const CreatorBg = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 overflow-hidden bg-[#0a0a0a]/95"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ scale: [1, 1.1], x: [0, -20] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <img
          src={mapBg}
          alt="Map Background"
          className="w-full h-full object-cover object-center opacity-40 grayscale-[0.5] sepia-[0.3]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay"></div>
    </motion.div>
  );
};

const MetaBg = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 z-10 overflow-hidden bg-[#020202]/95"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen"></div>
  </motion.div>
);

// --- COMPONENTE PRINCIPAL ---
const MainTerminal = ({ setMode }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "engineer",
      label: "THE ENGINEER",
      sub: "SYSTEMS / LOGIC",
      desc: "Full Stack Development & DevOps.",
      accent: "text-[#ff4425]",
      bgAccent: "bg-[#ff4425]",
      border: "group-hover:border-[#ff4425]",
      bgComponent: <EngineerBg />,
      fontTitle: "font-bebas tracking-widest",
      fontSub: "font-archivo tracking-tight",
      fontDesc: "font-code",
    },
    {
      id: "creator",
      label: "The Creator",
      sub: "NARRATIVE / LORE",
      desc: "Worldbuilding & Design.",
      accent: "text-[#d4af37]",
      bgAccent: "bg-[#d4af37]",
      border: "group-hover:border-[#d4af37]",
      bgComponent: <CreatorBg />,
      fontTitle: "font-maguntia tracking-normal",
      fontSub: "font-cinzel font-bold tracking-widest",
      fontDesc: "font-cormorant italic text-lg",
    },
    {
      id: "meta",
      label: "META-CREATOR",
      sub: "THE ARCHITECT",
      desc: "The complete profile.",
      accent: "text-[#a855f7]",
      bgAccent: "bg-[#a855f7]",
      border: "group-hover:border-[#a855f7]",
      bgComponent: <MetaBg />,
      fontTitle: "font-bebas tracking-widest",
      fontSub: "font-mono font-bold",
      fontDesc: "font-mono text-xs",
    },
  ];

  return (
    <motion.div
      className="h-full w-full flex flex-col md:flex-row bg-[#050505] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* === NUEVO FONDO: EL VACÍO DIGITAL (CSS PURO) === */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* 1. Gradiente Radial: Simula luz de fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000] opacity-60"></div>

        {/* 2. Ruido/Grano: Para textura industrial */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* 3. Scanlines: Mantienen el look terminal */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>

        {/* 4. Partículas sutiles (Opcional - solo si quieres movimiento en el 'vacío') */}
        <div className="absolute inset-0 animate-pulse opacity-10 bg-[radial-gradient(circle_800px_at_50%_50%,#222,transparent)]"></div>
      </div>
      {/* ================================================= */}

      {sections.map((section, index) => {
        const isHovered = hoveredSection === section.id;
        const isDimmed = hoveredSection && !isHovered;

        return (
          <motion.div
            key={section.id}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => setMode(section.id)}
            className={`
              relative z-20 h-full border-r border-white/5 cursor-pointer overflow-hidden group 
              transition-all duration-700 ease-out flex flex-col justify-end
            `}
            animate={{
              flex: isHovered ? 3 : 1,
              // Como el fondo ahora es oscuro y limpio, el dimming puede ser más sutil
              filter: isDimmed ? "brightness(0.3)" : "brightness(1)",
            }}
          >
            <AnimatePresence>
              {isHovered && section.bgComponent}
            </AnimatePresence>

            <div className="relative z-30 w-full flex flex-col justify-end h-full pb-6 md:pb-8 px-6 md:px-10 transition-all duration-500">
              <div className="mb-2 overflow-hidden h-6">
                <motion.span
                  className={`block font-code text-[10px] font-bold text-gray-400 ${isHovered ? section.accent : ""}`}
                  animate={{
                    y: isHovered ? 0 : 20,
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  0{index + 1} // ACCESS
                </motion.span>
              </div>

              <div className="w-full">
                <motion.h2
                  layout
                  className={`
                    text-6xl md:text-8xl leading-none mb-2 origin-bottom-left transition-colors duration-300 whitespace-nowrap flex items-baseline gap-3
                    ${section.fontTitle} 
                    ${isHovered ? section.accent : "text-gray-500"} 
                  `}
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }} // Sombra más fuerte para resaltar sobre el fondo limpio
                  animate={{
                    scale: isHovered ? 1 : 0.9,
                    x: isHovered ? 0 : 0,
                    opacity: isHovered ? 1 : 0.6,
                  }}
                >
                  {section.id === "meta" ? (
                    <>
                      <span className="text-white">META</span>
                      <span
                        className={`font-maguntia text-5xl md:text-7xl ml-3 ${isHovered ? section.accent : "text-gray-600"}`}
                      >
                        Creator
                      </span>
                    </>
                  ) : (
                    section.label
                  )}
                </motion.h2>

                <motion.div
                  className={`h-1 mb-6 bg-white/10 transition-colors duration-300 ${isHovered ? section.bgAccent : ""}`}
                  animate={{ width: isHovered ? 80 : 0 }}
                ></motion.div>

                <motion.div
                  className="space-y-3 overflow-hidden"
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  <div className="min-w-[300px] pb-4">
                    <p
                      className={`${section.fontSub} text-sm md:text-base uppercase transition-colors text-white`}
                    >
                      {section.sub}
                    </p>

                    <p
                      className={`${section.fontDesc} mt-2 text-gray-400 max-w-md`}
                    >
                      {section.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div
              className={`absolute top-0 left-0 w-full h-full border-2 border-transparent ${section.border} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-40`}
            ></div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default MainTerminal;
