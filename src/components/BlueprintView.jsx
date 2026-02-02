import React from "react";
import { motion } from "framer-motion";

// Assets
import bgTexture from "../assets/images/black_background_04.png";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";
import profilePic from "../assets/ui/main_icon.jpg"; // Importamos tu foto de perfil

// Componente Panel
const EvaPanel = ({ title, children, className = "" }) => (
  <div
    className={`border border-snow-border bg-black/40 backdrop-blur-sm p-6 relative group hover:bg-white/5 transition-colors duration-500 ${className}`}
  >
    {/* Esquinas Blancas */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-snow opacity-50 group-hover:w-4 group-hover:h-4 transition-all"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-snow opacity-50 group-hover:w-4 group-hover:h-4 transition-all"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-snow opacity-50 group-hover:w-4 group-hover:h-4 transition-all"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-snow opacity-50 group-hover:w-4 group-hover:h-4 transition-all"></div>

    <div className="absolute -top-3 left-4 bg-black px-2 border border-snow-border text-[10px] font-mono font-bold text-snow tracking-widest uppercase">
      {title}
    </div>

    {children}
  </div>
);

const BlueprintView = ({ setMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full relative bg-black font-mono overflow-y-auto text-snow-glow selection:bg-snow selection:text-black"
    >
      {/* Fondo Texturizado */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-50 pointer-events-none grayscale contrast-125"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />
      {/* Scanlines Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 w-full border-b border-snow-border bg-black/80 backdrop-blur-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-snow rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
          <h1 className="font-display text-lg md:text-xl font-bold tracking-widest text-snow">
            Engineer_Profile<span className="opacity-50"></span>
          </h1>
        </div>

        <div className="flex gap-6 items-center text-[10px] font-bold tracking-widest opacity-80">
          <span className="hidden md:inline uppercase">LOC: 25.43° N</span>
          {/* Botón de cierre en header local también actualizado por consistencia */}
          <button
            onClick={() => setMode("terminal")}
            className="hover:opacity-100 opacity-70 transition-opacity"
          >
            <img
              src={arrowIcon}
              className="w-4 h-4 invert rotate-180"
              alt="X"
            />
          </button>
        </div>
      </header>

      {/* GRID LAYOUT */}
      <div className="relative z-10 p-4 md:p-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 pb-24">
        {/* 1. IDENTITY PANEL (Con Foto de Perfil) */}
        <EvaPanel
          title="IDENTITY_PROTOCOL"
          className="md:col-span-12 flex flex-col md:flex-row gap-8 items-center md:items-end pb-8"
        >
          {/* FOTO DE PERFIL INTEGRADA */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-0.5 bg-snow opacity-30 blur group-hover:opacity-70 transition-opacity duration-500"></div>
            <img
              src={profilePic}
              alt="Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 object-cover border border-snow grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 right-0 bg-black text-snow text-[10px] px-2 border-t border-l border-snow">
              IMG_ID_01
            </div>
          </div>

          <div className="w-full text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-snow opacity-90 mb-4 tracking-tighter">
              UX_UI_ARCHITECT
            </h2>
            <div className="text-sm md:text-base opacity-80 space-y-1 font-medium flex flex-col md:block">
              <span className="mr-4">
                {">>"} STATUS:{" "}
                <span className="text-white font-bold border-b border-white">
                  Open_for_Opportunities
                </span>
              </span>
              <span className="mr-4">{">>"} ROLE: Junior_UX_UI_Developer</span>
              <span>{">>"} LANG: English (Native) | Spanish (Native)</span>
            </div>
          </div>

          <div className="hidden md:block text-right opacity-20 font-display text-6xl text-snow">
            V.2.0
          </div>
        </EvaPanel>

        {/* SKILLS */}
        <EvaPanel title="CORE_LOGIC" className="md:col-span-4">
          <div className="space-y-8 text-sm">
            <div>
              <h3 className="font-bold text-white border-b border-snow-border pb-1 mb-2 block text-xs tracking-widest">
                [ FRONTEND ]
              </h3>
              <ul className="space-y-2 opacity-80 pl-4 border-l border-snow-border">
                <li>React.js / Vite</li>
                <li>Tailwind_CSS_v4</li>
                <li>Framer_Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white border-b border-snow-border pb-1 mb-2 block text-xs tracking-widest">
                [ DESIGN ]
              </h3>
              <ul className="space-y-2 opacity-80 pl-4 border-l border-snow-border">
                <li>Industrial_Brutalism</li>
                <li>Photoshop_Expert</li>
                <li>Illustrator_Prolific</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white border-b border-snow-border pb-1 mb-2 block text-xs tracking-widest">
                [ ENG_LOGIC ]
              </h3>
              <ul className="space-y-2 opacity-80 pl-4 border-l border-snow-border">
                <li>System_Efficiency</li>
                <li>Logical_Problem_Solving</li>
              </ul>
            </div>
          </div>
        </EvaPanel>

        {/* EXPERIENCE */}
        <EvaPanel title="SYSTEM_EXPERIENCE" className="md:col-span-8">
          <div className="space-y-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-snow-border opacity-30"></div>
            {[
              {
                title: "Call-Center [Verizon]",
                role: "Tech Support, Tier 2",
                desc: "Diagnóstico avanzado de hardware/software (100% Inglés). Resolución crítica.",
              },
              {
                title: "Rentals",
                role: "Infra Mgmt",
                desc: "Gestión logística de activos y optimización de recursos físicos.",
              },
              {
                title: "Cine & Media",
                role: "Art Dept",
                desc: "Ejecución visual y asistencia estética en sets profesionales.",
              },
            ].map((job, i) => (
              <div key={i} className="pl-8 relative group/item">
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 bg-snow rounded-full group-hover/item:bg-white transition-colors shadow-[0_0_5px_white]"></div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {job.title}{" "}
                  <span className="text-xs font-normal opacity-60">
                    // {job.role}
                  </span>
                </h3>
                <p className="text-sm opacity-70 leading-relaxed max-w-2xl mt-2">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </EvaPanel>

        {/* FOOTER PANELS */}
        <EvaPanel
          title="PROJECTS_VAULT"
          className="md:col-span-12 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div>
            <h3 className="text-xl font-bold mb-1">GITHUB</h3>
            <p className="text-xs opacity-70">
              Highly Adaptive and creative design with a profile basis on
              Engineering and Logic.
            </p>
          </div>
          <a
            href="https://github.com/mausashi-exe/"
            target="_blank"
            rel="noreferrer"
            className="bg-snow text-black font-bold px-6 py-2 text-xs uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Contact @GitHub
          </a>
        </EvaPanel>
      </div>
    </motion.div>
  );
};

export default BlueprintView;
