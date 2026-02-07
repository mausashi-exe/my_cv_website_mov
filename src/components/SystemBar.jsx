import React from "react";

const SystemBar = ({ currentMode, setMode }) => {
  // 1. CONFIGURACIÓN DE COLORES POR MODO
  const THEME_CONFIG = {
    terminal: {
      border: "border-white/10",
      accent: "text-white",
      bgTint: "bg-white/5",
      pulse: "bg-emerald-500", // Color del punto de estado
      status: "text-emerald-500",
    },
    engineer: {
      border: "border-[#ff4425]/60", // Rojo
      accent: "text-[#ff4425]",
      bgTint: "bg-[#ff4425]/10",
      pulse: "bg-[#ff4425]",
      status: "text-[#ff4425]",
    },
    creator: {
      border: "border-[#d4af37]/60", // Dorado
      accent: "text-[#d4af37]",
      bgTint: "bg-[#d4af37]/10",
      pulse: "bg-[#d4af37]",
      status: "text-[#d4af37]",
    },
    meta: {
      border: "border-[#a855f7]/60", // Morado
      accent: "text-[#a855f7]",
      bgTint: "bg-[#a855f7]/10",
      pulse: "bg-[#a855f7]",
      status: "text-[#a855f7]",
    },
  };

  const activeTheme = THEME_CONFIG[currentMode] || THEME_CONFIG.terminal;

  const navItems = [
    { id: "engineer", label: "ENGINEER" },
    { id: "creator", label: "CREATOR" },
    { id: "meta", label: "META" },
  ];

  return (
    // 2. CONTENEDOR PRINCIPAL
    <div
      className={`
        fixed bottom-0 left-0 w-full h-12 z-[70]
        bg-[#050505]/80 backdrop-blur-xl
        border-t ${activeTheme.border}
        transition-colors duration-700 ease-out
        flex items-center justify-between px-4 md:px-6 
        font-mono text-[10px] uppercase tracking-widest text-gray-500 selection:bg-white selection:text-black
      `}
    >
      {/* SECCIÓN IZQUIERDA: HOME + MODO */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setMode("terminal")}
          className={`
            flex items-center gap-2 transition-colors duration-300 group
            ${currentMode === "terminal" ? "text-white" : "hover:text-white"}
          `}
        >
          {/* Icono Grid */}
          <div
            className={`grid grid-cols-2 gap-0.5 transition-opacity opacity-70 group-hover:opacity-100 ${currentMode === "terminal" ? "text-white" : "text-gray-500 group-hover:text-white"}`}
          >
            <div className="w-0.5 h-0.5 bg-current"></div>
            <div className="w-0.5 h-0.5 bg-current"></div>
            <div className="w-0.5 h-0.5 bg-current"></div>
            <div className="w-0.5 h-0.5 bg-current"></div>
          </div>
          <span className={currentMode === "terminal" ? "font-bold" : ""}>
            INDEX
          </span>
        </button>

        {/* Separador */}
        <div
          className={`h-3 w-px bg-white/10 transition-colors duration-700 ${activeTheme.border}`}
        ></div>

        {/* Status Path */}
        <span className="hidden md:inline text-white/40 transition-colors duration-700">
          ACTIVE_DIR:{" "}
          <span
            className={`${activeTheme.accent} font-bold transition-colors duration-700`}
          >
            /{currentMode.toUpperCase()}
          </span>
        </span>
      </div>

      {/* SECCIÓN CENTRAL: NAVEGACIÓN */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 md:gap-2">
        {navItems.map((item) => {
          const isActive = currentMode === item.id;

          // Estilos activos vs inactivos
          const activeClasses = isActive
            ? `${activeTheme.bgTint} ${activeTheme.border.replace("/60", "/30")} border ${activeTheme.accent} font-bold shadow-[0_0_10px_rgba(0,0,0,0.5)]`
            : `text-gray-500 hover:bg-white/5 border border-transparent hover:text-white`;

          return (
            <button
              key={item.id}
              onClick={() => setMode(item.id)}
              className={`
                px-3 py-1 rounded-sm transition-all duration-300
                ${activeClasses}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* SECCIÓN DERECHA: STATUS TÉCNICO */}
      <div className="flex items-center gap-6 text-right">
        <span className="hidden md:inline opacity-50">VERACRUZ, MX</span>

        <div
          className={`h-3 w-px bg-white/10 hidden md:block transition-colors duration-700 ${activeTheme.border}`}
        ></div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <div
            className={`w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-700 ${activeTheme.pulse}`}
          ></div>
          <span
            className={`transition-colors duration-700 ${activeTheme.status}`}
          >
            {currentMode === "terminal" ? "ONLINE" : "READING"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemBar;
