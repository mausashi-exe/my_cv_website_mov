import React from "react";
// Imports de iconos
import logoIcon from "../assets/ui/square_star_icon.svg";
import backIcon from "../assets/ui/arrow_pointing_left_up.svg";

const CornerLayout = ({ children, currentMode, setMode }) => {
  const isTerminal = currentMode === "terminal";

  // CONFIGURACIÓN DE TEMA (Solo colores necesarios para este layout)
  const themeStyles = {
    terminal: {
      border: "border-white/10",
      text: "text-white/40",
      hoverBorder: "hover:border-white/40",
    },
    engineer: {
      border: "border-[#ff4425]/50",
      text: "text-[#ff4425]",
      hoverBorder: "hover:border-[#ff4425]",
    },
    creator: {
      border: "border-[#d4af37]/50",
      text: "text-[#d4af37]",
      hoverBorder: "hover:border-[#d4af37]",
    },
    meta: {
      border: "border-[#a855f7]/50",
      text: "text-[#a855f7]",
      hoverBorder: "hover:border-[#a855f7]",
    },
  };

  const activeStyle = themeStyles[currentMode] || themeStyles.terminal;

  return (
    // CAMBIO: h-[100dvh] evita que la barra del navegador tape contenido en móvil
    <div className="relative w-full h-[100dvh] overflow-hidden bg-void font-sans selection:bg-bone selection:text-void">
      {/* 1. RUIDO GLOBAL */}
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-overlay bg-noise"></div>

      {/* 2. TOP BAR (HEADER FIJO) */}
      <header
        className={`fixed top-0 left-0 w-full h-14 z-[80] flex items-center justify-between px-4 md:px-6 bg-[#050505]/90 backdrop-blur-md border-b transition-colors duration-500 ${activeStyle.border}`}
      >
        {/* IZQUIERDA: IDENTIDAD */}
        <div className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt=""
            className="w-4 h-4 md:w-3 md:h-3 invert opacity-80"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs tracking-widest text-bone leading-none">
              M.OLVERA
            </span>
          </div>
        </div>

        {/* CENTRO: MODO ACTUAL (Solo desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <span
            className={`font-mono text-[9px] uppercase tracking-[0.3em] transition-colors duration-500 ${activeStyle.text}`}
          >
            SYSTEM: {currentMode}
          </span>
        </div>

        {/* DERECHA: VERSIÓN Y BOTÓN BACK */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-[9px] text-bone/30 uppercase tracking-widest hidden md:block">
            [CV v.2.0.4]
          </span>

          {/* BOTÓN BACK MEJORADO PARA TOUCH */}
          {!isTerminal && (
            <button
              onClick={() => setMode("terminal")}
              className={`group flex items-center gap-2 px-4 py-2 md:px-3 md:py-1.5 border border-white/10 bg-white/5 hover:bg-white/10 rounded-sm transition-all duration-300 ${activeStyle.hoverBorder}`}
              title="Return to Index"
            >
              <span
                className={`font-mono text-[10px] md:text-[9px] text-bone/60 group-hover:text-bone uppercase tracking-widest`}
              >
                EXIT
              </span>
              <img
                src={backIcon}
                alt="Back"
                className="w-3 h-3 invert opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </button>
          )}
        </div>
      </header>

      {/* 3. CONTENIDO PRINCIPAL */}
      <main className="relative z-0 w-full h-full pt-14 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {children}
      </main>
    </div>
  );
};

export default CornerLayout;
