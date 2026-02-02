import React from "react";

const CornerLayout = ({ children, currentMode, setMode }) => {
  const isTerminal = currentMode === "terminal";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-void">
      {/* --- FRAME HUD --- */}
      {/* Padding ajustado para alinear texto con el borde interior del marco */}
      <div className="bone-frame flex flex-col justify-between p-2 md:p-4">
        {/* Top Bar */}
        <div className="flex justify-between items-start pointer-events-auto">
          {/* Top Left: Identity (Texto más grande: text-sm) */}
          <div className="bg-void px-2 pt-1 -mt-2 md:-mt-4 ml-2">
            {" "}
            {/* Truco visual para 'cortar' el marco */}
            <h1 className="font-display text-xs md:text-sm font-bold tracking-widest uppercase text-bone">
              MAURICIO OLVERA
            </h1>
          </div>

          {/* Top Right: Status */}
          <div className="bg-void px-2 pt-1 -mt-2 md:-mt-4 mr-2 text-right flex gap-4 items-center">
            <span className="font-mono text-xs text-bone/60 hidden md:inline tracking-wider">
              SYS: {currentMode.toUpperCase()}
            </span>

            {!isTerminal && (
              <button
                onClick={() => setMode("terminal")}
                className="font-mono text-xs font-bold text-lava hover:text-white transition-colors uppercase border border-lava/50 px-3 py-1"
              >
                [ X ] ABORT
              </button>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pointer-events-auto">
          {/* Bottom Left: Location */}
          <div className="bg-void px-2 pb-1 -mb-2 md:-mb-4 ml-2">
            <p className="font-mono text-xs md:text-sm text-bone uppercase tracking-widest">
              SALTILLO, MX // RMT
            </p>
          </div>

          {/* Bottom Right: Decorative Indicator */}
          <div className="bg-void px-2 pb-1 -mb-2 md:-mb-4 mr-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-lava animate-pulse">
                LIVE
              </span>
              <div className="w-3 h-3 bg-lava rounded-full shadow-[0_0_10px_#D92B2B]"></div>
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
