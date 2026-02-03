import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

// --- DATA: LOS ACTIVOS DEL VAULT ---
const VAULT_ASSETS = [
  {
    id: "A_001",
    category: "CODE",
    type: "SNIPPET",
    date: "2024.01.15",
    size: "45KB",
    title: "React Context Logic",
    desc: "Fragmento de manejo de estado global.",
  },
  {
    id: "A_002",
    category: "DESIGN",
    type: "WIREFRAME",
    date: "2023.11.30",
    size: "1.2MB",
    title: "Nomos UI Sketch",
    desc: "Boceto inicial de interfaz de usuario.",
  },
  {
    id: "A_003",
    category: "ART",
    type: "RENDER",
    date: "2024.02.01",
    size: "8.5MB",
    title: "Void Environment",
    desc: "Render 3D en Blender, estilo brutalista.",
  },
  {
    id: "A_004",
    category: "ART",
    type: "GLITCH",
    date: "2023.10.12",
    size: "3.1MB",
    title: "Data Corruption #4",
    desc: "Arte generativo basado en errores de buffer.",
  },
  {
    id: "A_005",
    category: "CODE",
    type: "SCHEMATIC",
    date: "2024.01.20",
    size: "210KB",
    title: "DB Relationship",
    desc: "Diagrama de entidad-relación SQL.",
  },
  {
    id: "A_006",
    category: "DESIGN",
    type: "SETUP",
    date: "2024.02.03",
    size: "4.2MB",
    title: "Workstation_V3",
    desc: "Fotografía del entorno de desarrollo.",
  },
  {
    id: "A_007",
    category: "CODE",
    type: "SNIPPET",
    date: "2024.01.18",
    size: "32KB",
    title: "GLSL Shader",
    desc: "Código de shader para efectos de ruido.",
  },
  {
    id: "A_008",
    category: "DESIGN",
    type: "WIREFRAME",
    date: "2023.12.05",
    size: "900KB",
    title: "Mobile Nav Flow",
    desc: "Flujo de navegación en pantallas pequeñas.",
  },
];

// Componente Marquee (Texto en movimiento)
const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-red-600 py-1 border-t border-red-700">
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-[10px] font-mono font-bold text-white uppercase tracking-widest mx-4"
          >
            /// SYSTEM STATUS: OPTIMAL /// MEMORY: 45% /// LAST LOGIN: NOW ///
            CONNECTION: SECURE ///
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MetaView = ({ setMode }) => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Lógica de Filtrado
  const filteredAssets =
    activeFilter === "ALL"
      ? VAULT_ASSETS
      : VAULT_ASSETS.filter((asset) => asset.category === activeFilter);

  // Clases utilitarias (Clean Look)
  const borderClass = "border-black/10";
  const accentColor = "text-red-600";
  const bgAccent = "bg-red-600";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex w-full h-full bg-white text-black overflow-hidden relative"
    >
      {/* =====================================================================
          IZQUIERDA: LA RETÍCULA (GALLERY GRID) - 2/3 ANCHO - SCROLL
      ===================================================================== */}
      <div
        className={`w-full md:w-2/3 h-full overflow-y-auto hide-scroll border-r ${borderClass} pt-32 relative z-10 flex flex-col`}
      >
        {/* Header */}
        <div className="px-6 mb-4 flex justify-between items-end opacity-60 font-mono text-[10px] uppercase tracking-widest font-bold">
          <span>/ Root / Asset_Library</span>
          <span className={accentColor}>↓ Scroll for data</span>
        </div>
        {/* GRID PRINCIPAL */}
        {/* 'cursor-crosshair' para la micro-interacción */}
        <div
          className={`grid grid-cols-2 gap-px bg-black/10 border-t border-b ${borderClass} flex-grow cursor-crosshair`}
        >
          {filteredAssets.map((asset, index) => (
            <div
              key={asset.id}
              onClick={() => setSelectedAsset(asset)}
              className="group relative aspect-square bg-white overflow-hidden"
            >
              {/* Visual Placeholder */}
              <div
                className={`w-full h-full flex items-center justify-center p-8 bg-gradient-to-br ${index % 2 === 0 ? "from-white to-gray-50" : "from-gray-50 to-white"}`}
              >
                <div className="text-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <span
                    className={`font-gothic font-black text-4xl md:text-6xl block mb-2 ${accentColor}`}
                  >
                    {asset.type.substring(0, 1)}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold text-black">
                    {asset.type}
                  </span>
                </div>
              </div>

              {/* Overlay Hover */}
              <div
                className={`absolute inset-0 bg-white/95 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border-2 border-transparent group-hover:border-red-600`}
              >
                <div
                  className={`font-mono text-[9px] ${accentColor} flex justify-between font-bold uppercase`}
                >
                  <span>ID: {asset.id}</span>
                  <span>[{asset.size}]</span>
                </div>
                <div>
                  <h3 className="font-sans font-black text-lg uppercase mb-1 line-clamp-1 text-black">
                    {asset.title}
                  </h3>
                  <p className="font-mono text-[10px] opacity-80 line-clamp-2 leading-tight text-black font-medium">
                    {asset.desc}
                  </p>
                </div>
                <div
                  className={`font-mono text-[10px] text-right uppercase tracking-widest font-bold ${accentColor}`}
                >
                  View Asset →
                </div>
              </div>
            </div>
          ))}

          {/* Mensaje vacío si no hay resultados */}
          {filteredAssets.length === 0 && (
            <div className="col-span-2 h-64 flex items-center justify-center bg-white font-mono text-xs text-red-600 uppercase tracking-widest font-bold">
              [ No Data Found in Sector ]
            </div>
          )}
        </div>
        {/* Ticker Animado (Fixed al final del grid) */}
        <Marquee />
        <div className="h-32 bg-white"></div> {/* Espacio extra scroll */}
      </div>

      {/* =====================================================================
          DERECHA: PANEL DE CONTROL (SIDEBAR FIJO) - 1/3 ANCHO
      ===================================================================== */}
      <div
        className={`hidden md:flex w-1/3 h-full flex-col justify-between p-6 pt-32 bg-white relative z-20 border-l ${borderClass}`}
      >
        {/* TOP: Info & Filtros */}
        <div className="space-y-8">
          <div>
            <h1 className="font-gothic font-black text-5xl text-black leading-none mb-2">
              THE VAULT
            </h1>
            <div className={`h-1.5 w-12 ${bgAccent} mb-3`}></div>
            <p
              className={`font-mono text-xs ${accentColor} tracking-widest uppercase font-bold`}
            >
              Visual Asset Database
            </p>
          </div>

          {/* Stats Dinámicas */}
          <div
            className={`font-mono text-xs space-y-3 py-6 border-t border-b ${borderClass} font-medium`}
          >
            <div className="flex justify-between">
              <span className="opacity-60 uppercase">Visible Items:</span>
              <span className={`font-bold ${accentColor}`}>
                {filteredAssets.length} Units
              </span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60 uppercase">Status:</span>
              <span
                className={`flex items-center gap-2 ${accentColor} font-bold uppercase`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${bgAccent} animate-pulse`}
                ></span>
                Monitoring
              </span>
            </div>
          </div>

          {/* Filtros Funcionales */}
          <div>
            <p className="font-mono text-[10px] uppercase opacity-50 mb-4 font-bold tracking-widest">
              [ System Filter ]
            </p>
            <ul className="space-y-3 font-mono text-xs relative font-bold uppercase cursor-pointer">
              {/* Línea indicadora animada */}
              <div
                className={`absolute left-0 w-1 h-4 ${bgAccent} transition-all duration-300 ease-out`}
                style={{
                  top:
                    activeFilter === "ALL"
                      ? "2px"
                      : activeFilter === "CODE"
                        ? "30px"
                        : activeFilter === "DESIGN"
                          ? "58px"
                          : "86px",
                }}
              ></div>

              <li
                onClick={() => setActiveFilter("ALL")}
                className={`pl-4 hover:text-red-600 transition-colors ${activeFilter === "ALL" ? "text-red-600" : "opacity-40"}`}
              >
                /// ALL SECTORS
              </li>
              <li
                onClick={() => setActiveFilter("CODE")}
                className={`pl-4 hover:text-red-600 transition-colors ${activeFilter === "CODE" ? "text-red-600" : "opacity-40"}`}
              >
                /// LOGIC & CODE
              </li>
              <li
                onClick={() => setActiveFilter("DESIGN")}
                className={`pl-4 hover:text-red-600 transition-colors ${activeFilter === "DESIGN" ? "text-red-600" : "opacity-40"}`}
              >
                /// VISUAL DESIGN
              </li>
              <li
                onClick={() => setActiveFilter("ART")}
                className={`pl-4 hover:text-red-600 transition-colors ${activeFilter === "ART" ? "text-red-600" : "opacity-40"}`}
              >
                /// EXPERIMENTAL ART
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM: Salida */}
        <div className="space-y-6 font-mono text-xs">
          <div
            className={`p-4 bg-red-50 border border-red-100 text-justify opacity-80 leading-tight font-medium`}
          >
            <span className={`font-bold ${accentColor}`}>NOTICE:</span> Access
            log recorded. Handle data with protocol 45-B.
          </div>

          <button
            onClick={() => setMode("terminal")}
            className={`w-full py-4 border ${borderClass} hover:bg-red-600 hover:text-white hover:border-red-600 flex justify-between items-center group transition-all duration-300`}
          >
            <span className="uppercase tracking-widest font-bold pl-4">
              Close Vault
            </span>
            <div className="w-12 h-full flex items-center justify-center border-l border-black/10 group-hover:border-red-500 transition-all">
              <img
                src={arrowIcon}
                className="w-3 h-3 rotate-180 group-hover:invert transition-all"
                alt="<"
              />
            </div>
          </button>
        </div>
      </div>

      {/* =====================================================================
          MODAL DE VISTA RÁPIDA
      ===================================================================== */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center p-8 backdrop-blur-sm"
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="border-2 border-red-600 p-1 max-w-3xl w-full bg-white relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAsset(null)}
                className={`absolute top-3 right-3 font-mono text-xs font-bold ${accentColor} hover:text-black transition-colors z-50`}
              >
                [CLOSE X]
              </button>

              <div className="w-full aspect-video bg-gray-50 flex items-center justify-center border-b border-red-100">
                <div className="text-center">
                  <span
                    className={`font-gothic font-black text-6xl ${accentColor} opacity-20`}
                  >
                    {selectedAsset.category}
                  </span>
                </div>
              </div>

              <div className="p-8 font-mono text-black grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div
                    className={`flex justify-between text-xs ${accentColor} mb-4 uppercase tracking-widest font-bold`}
                  >
                    <span>ID: {selectedAsset.id}</span>
                    <span>DATE: {selectedAsset.date}</span>
                  </div>
                  <h2 className="font-gothic font-black text-4xl mb-4 leading-none">
                    {selectedAsset.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-sm font-medium leading-relaxed opacity-80 border-l-2 border-red-600 pl-4 mb-4">
                    {selectedAsset.desc}
                  </p>
                  <button className="bg-red-600 text-white py-2 px-4 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                    Download Source
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MetaView;
