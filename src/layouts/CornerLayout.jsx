import React from "react";

// --- IMPORTAMOS TUS ICONOS ---
// CAMBIO AQUÍ: Actualizamos el nombre del archivo importado para el icono de "atrás"
import backIcon from "../assets/ui/arrow_pointing_left_up.svg";

import tlIcon from "../assets/ui/square_star_icon.svg";
import blIcon from "../assets/ui/triangle_down.svg";
import brIcon from "../assets/ui/world_icon.svg";

const CornerLayout = ({ children, currentMode, setMode }) => {
  const isTerminal = currentMode === "terminal";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-void font-sans selection:bg-bone selection:text-void">
      {/* =================================================================
          HUD: FIXED CORNERS (Z-50)
      ================================================================= */}

      {/* 1. TOP LEFT: Identidad */}
      <div className="fixed top-0 left-0 p-4 md:p-6 z-50 pointer-events-none flex items-start gap-3">
        <div className="mt-1">
          <img src={tlIcon} alt="" className="w-3 h-3 invert opacity-80" />
        </div>
        <div className="flex flex-col bg-void/20 backdrop-blur-md px-3 py-2 rounded-sm border border-white/5">
          <span className="font-display font-bold text-xs tracking-widest text-bone leading-none">
            M.OLVERA
          </span>
          <span className="font-mono text-[9px] text-bone/60 uppercase tracking-wider mt-1">
            Portfolio_V.1
          </span>
        </div>
      </div>

      {/* 2. TOP RIGHT: Botón Salir / Modo */}
      <div className="fixed top-0 right-0 p-4 md:p-6 z-50 pointer-events-none flex items-start gap-3">
        {/* Indicador de modo */}
        <div className="hidden md:flex bg-void/20 backdrop-blur-md px-3 py-2 rounded-sm border border-white/5">
          <span className="font-mono text-[9px] text-bone/50 uppercase tracking-[0.2em]">
            SYS: {currentMode}
          </span>
        </div>

        {/* BOTÓN BACK (Interactivo) - Usará el nuevo 'backIcon' */}
        {!isTerminal && (
          <button
            onClick={() => setMode("terminal")}
            className="pointer-events-auto group relative flex items-center justify-center"
          >
            {/* Contenedor del icono */}
            <div className="w-10 h-10 flex items-center justify-center bg-void/40 backdrop-blur-md border border-bone/20 group-hover:border-bone rounded-full transition-all duration-300 shadow-lg">
              <img
                src={backIcon} // Aquí se usa el nuevo icono importado
                alt="Back"
                // Mantenemos 'invert' por si tu SVG es negro, para que se vea blanco (bone)
                className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 invert"
              />
            </div>

            {/* Tooltip */}
            <span className="absolute top-full mt-2 right-0 font-mono text-[8px] text-bone/0 group-hover:text-bone/80 transition-all uppercase tracking-widest whitespace-nowrap">
              Return to Index
            </span>
          </button>
        )}
      </div>

      {/* 3. BOTTOM LEFT: Ubicación */}
      <div className="fixed bottom-0 left-0 p-4 md:p-6 z-50 pointer-events-none flex items-end gap-2">
        <img src={blIcon} alt="" className="w-3 h-3 invert opacity-60 mb-2" />
        <div className="bg-void/20 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/5">
          <div className="font-mono text-[9px] text-bone/70 uppercase tracking-widest leading-none">
            <span className="hidden md:inline text-bone/40">Loc: </span>
            Saltillo, MX
          </div>
        </div>
      </div>

      {/* 4. BOTTOM RIGHT: Status */}
      <div className="fixed bottom-0 right-0 p-4 md:p-6 z-50 pointer-events-none flex items-end gap-2 text-right">
        <div className="flex flex-col items-end gap-1">
          <div className="bg-void/20 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
            <span className="font-mono text-[9px] text-bone/90 uppercase font-bold tracking-wider">
              Online
            </span>
          </div>
          <span className="font-mono text-[8px] text-bone/30 uppercase tracking-widest hidden md:block pr-1">
            V. 2.0.4
          </span>
        </div>
        <img src={brIcon} alt="" className="w-4 h-4 invert opacity-40 mb-2" />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        {children}
      </main>
    </div>
  );
};

export default CornerLayout;
