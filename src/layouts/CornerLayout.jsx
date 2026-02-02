import React from "react";
// Importamos el vector de flecha
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

const CornerLayout = ({ children, currentMode, setMode }) => {
  const isTerminal = currentMode === "terminal";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-void">
      {/* --- FRAME HUD --- */}
      <div className="bone-frame flex flex-col justify-between p-2 md:p-4 pointer-events-none">
        {/* Top Bar */}
        <div className="flex justify-between items-start pointer-events-auto">
          {/* Top Left: Identity */}
          <div className="bg-void px-2 pt-1 -mt-2 md:-mt-4 ml-2">
            <h1 className="font-display text-xs md:text-sm font-bold tracking-widest uppercase text-bone">
              WELCOME!
            </h1>
          </div>

          {/* Top Right: Status & Close */}
          <div className="bg-void px-2 pt-1 -mt-2 md:-mt-4 mr-2 text-right flex gap-4 items-center">
            <span className="font-mono text-xs text-bone/60 hidden md:inline tracking-wider">
              SYS: {currentMode.toUpperCase()}
            </span>

            {/* BOTÓN DE CIERRE: Icono Flecha */}
            {!isTerminal && (
              <button
                onClick={() => setMode("terminal")}
                className="group relative w-8 h-8 flex items-center justify-center border border-transparent hover:border-bone/20 transition-all"
              >
                {/* Rotamos la flecha para que apunte hacia "atrás/arriba" simbólicamente o la dejamos raw */}
                <img
                  src={arrowIcon}
                  alt="Abort"
                  className="w-4 h-4 invert opacity-70 group-hover:opacity-100 transition-opacity rotate-180"
                />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pointer-events-auto">
          {/* Bottom Left: Location */}
          <div className="bg-void px-2 pb-1 -mb-2 md:-mb-4 ml-2">
            <p className="font-mono text-xs md:text-sm text-bone uppercase tracking-widest">
              SALTILLO, MX // RMT // FREELANCE
            </p>
          </div>

          {/* Bottom Right: Indicator */}
          <div className="bg-void px-2 pb-1 -mb-2 md:-mb-4 mr-2">
            <div className="flex items-center gap-2">
              {/* STATUS: Verde Online */}
              <span className="font-mono text-[10px] text-emerald-500 animate-pulse font-bold">
                Open for work
              </span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10B981]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="w-full h-full p-6 md:p-12 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {children}
      </main>
    </div>
  );
};

export default CornerLayout;
