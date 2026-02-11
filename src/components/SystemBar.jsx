import React from "react";

const SystemBar = ({ currentMode, setMode }) => {
  const THEME_CONFIG = {
    terminal: {
      border: "border-white/20",
      accent: "text-white",
      bgTint: "bg-white/5",
      pulse: "bg-emerald-500",
      status: "text-emerald-500",
    },
    engineer: {
      border: "border-[#ff4425]/60",
      accent: "text-[#ff4425]",
      bgTint: "bg-[#ff4425]/10",
      pulse: "bg-[#ff4425]",
      status: "text-[#ff4425]",
    },
    creator: {
      border: "border-[#d4af37]/60",
      accent: "text-[#d4af37]",
      bgTint: "bg-[#d4af37]/10",
      pulse: "bg-[#d4af37]",
      status: "text-[#d4af37]",
    },
    meta: {
      border: "border-[#a855f7]/60",
      accent: "text-[#a855f7]",
      bgTint: "bg-[#a855f7]/10",
      pulse: "bg-[#a855f7]",
      status: "text-[#a855f7]",
    },
  };

  const activeTheme = THEME_CONFIG[currentMode] || THEME_CONFIG.terminal;

  const navItems = [
    { id: "engineer", label: "ENG" },
    { id: "creator", label: "LORE" },
    { id: "meta", label: "META" },
  ];

  return (
    <div
      className={`
        fixed bottom-0 left-0 w-full z-[70]
        h-14 md:h-16 
        pb-[env(safe-area-inset-bottom)] 
        bg-[#050505]/95 backdrop-blur-2xl
        border-t-2 ${activeTheme.border}
        shadow-[0_-10px_30px_rgba(0,0,0,0.8)]
        transition-all duration-700 ease-out
        flex items-center justify-between 
        px-4 md:px-10 
        font-mono text-[10px] uppercase tracking-widest text-gray-500 selection:bg-white selection:text-black
      `}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <button
          onClick={() => setMode("terminal")}
          className={`
            flex items-center gap-3 p-2 -ml-2 transition-colors duration-300 group
            ${currentMode === "terminal" ? "text-white" : "hover:text-white"}
          `}
        >
          <div
            className={`grid grid-cols-2 gap-1 transition-opacity opacity-70 group-hover:opacity-100 ${currentMode === "terminal" ? "text-white" : "text-gray-500 group-hover:text-white"}`}
          >
            <div className="w-1 h-1 bg-current"></div>
            <div className="w-1 h-1 bg-current"></div>
            <div className="w-1 h-1 bg-current"></div>
            <div className="w-1 h-1 bg-current"></div>
          </div>
          <span
            className={currentMode === "terminal" ? "font-bold text-white" : ""}
          >
            INDEX
          </span>
        </button>

        <div
          className={`h-4 w-px bg-white/20 hidden md:block transition-colors duration-700 ${activeTheme.border}`}
        ></div>

        <span className="hidden lg:inline text-white/30 transition-colors duration-700">
          SYS_ROOT:{" "}
          <span className={`${activeTheme.accent} font-bold`}>
            /{currentMode.toUpperCase()}
          </span>
        </span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-6">
        {navItems.map((item) => {
          const isActive = currentMode === item.id;
          const label =
            window.innerWidth > 768 && item.id === "engineer"
              ? "ENGINEER"
              : window.innerWidth > 768 && item.id === "creator"
                ? "CREATOR"
                : item.label;

          const activeClasses = isActive
            ? `${activeTheme.bgTint} border ${activeTheme.accent} font-bold shadow-[0_0_15px_rgba(0,0,0,0.5)]`
            : `text-gray-500 hover:bg-white/5 border border-transparent hover:text-white`;

          return (
            <button
              key={item.id}
              onClick={() => setMode(item.id)}
              className={`px-4 py-1.5 rounded-sm transition-all duration-300 ${activeClasses}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4 md:gap-8 text-right font-bold">
        <span className="hidden md:inline opacity-30 text-[9px]">
          VERACRUZ, MX
        </span>
        <div className="flex items-center gap-2 bg-black/40 px-3 py-1 border border-white/5 rounded-full">
          <div
            className={`w-2 h-2 rounded-full animate-pulse ${activeTheme.pulse}`}
          ></div>
          <span className={`text-[9px] ${activeTheme.status}`}>
            {currentMode === "terminal" ? "ONLINE" : "READING"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemBar;
