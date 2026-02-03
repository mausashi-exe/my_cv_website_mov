import React from "react";
import { motion } from "framer-motion";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

// DATOS DE EJEMPLO (Tu experiencia adaptada al nuevo layout)
const WORK_ITEMS = [
  {
    id: "001",
    title: "[COMPANY]_SYSTEMS",
    docId: "NET_OPS_TIER2",
    description:
      "Diagnóstico avanzado de infraestructura de red y software en entorno nativo inglés. Resolución crítica bajo protocolos de alta presión y eficiencia técnica.",
    year: "2023",
    link: "#",
    hasIcon: true,
  },
  {
    id: "002",
    title: "PERSONAL_RENTALS",
    docId: "ASSET_MGMT_LOGIC",
    description:
      "Gestión logística de activos inmobiliarios y mantenimiento de infraestructura física. Optimización de recursos mediante aplicación de lógica de ingeniería.",
    year: "2024",
    link: "#",
    hasIcon: true,
  },
  {
    id: "003",
    title: "CINE_MEDIA_ARTS",
    docId: "VISUAL_NARRATIVE",
    description:
      "Ejecución técnica y asistencia estética en sets profesionales. Aseguramiento de integridad visual y continuidad narrativa en entornos de producción.",
    year: "2022",
    link: "#",
    hasIcon: true,
  },
];

const BlueprintView = ({ setMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // CAMBIO IMPORTANTE: Fondo blanco/concreto y texto negro para estilo "Industrial Editorial"
      className="min-h-screen w-full relative bg-concrete text-ink font-roboto overflow-y-auto selection:bg-safety-orange selection:text-white"
    >
      {/* HEADER DE LA SECCIÓN */}
      <div className="sticky top-0 z-30 w-full bg-concrete/90 backdrop-blur-md border-b border-grid-line px-6 py-4 flex justify-between items-end">
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
          [The Engineer]{" "}
          <span className="text-safety-orange text-3xl align-top">///</span>
        </h1>

        <div className="flex items-center gap-6">
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Sys.Status: <span className="text-safety-orange">Online</span>
          </span>

          {/* Botón de Salida */}
          <button
            onClick={() => setMode("terminal")}
            className="group flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <span className="font-bold text-xs uppercase tracking-widest">
              Index
            </span>
            <img
              src={arrowIcon}
              alt="Back"
              className="w-4 h-4 rotate-180 invert-0" // invert-0 para que sea negro
            />
          </button>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL: LAYOUT GRID CARGO */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-32">
        {/* TITULO SECCION: SELECTED WORK */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-grid-line items-end">
          <div className="md:col-span-11">
            <span className="font-mono text-xs text-gray-400 block mb-2">
              DIR_//WORK_HISTORY
            </span>
            <h2 className="text-lg font-bold uppercase tracking-tight">
              Selected Work & Operations
            </h2>
          </div>
          <div className="md:col-span-1 text-right">
            <div className="w-4 h-4 border border-black rounded-full inline-block"></div>
          </div>
        </div>

        {/* LOOP DE PROYECTOS */}
        <div className="flex flex-col">
          {WORK_ITEMS.map((item, index) => (
            <div key={index} className="group">
              {/* GRID 5 (Media) - 5 (Text) - 2 (Meta) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-grid-line items-start">
                {/* SLOT 0: MEDIA (Span 5) */}
                <div className="md:col-span-5 w-full">
                  <div className="aspect-[4/3] w-full bg-[#e5e5e5] relative overflow-hidden group-hover:bg-[#dcdcdc] transition-colors duration-500">
                    {/* Placeholder Visual "Wireframe" (Puntos) */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(#000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                    {/* Etiqueta de archivo */}
                    <div className="absolute bottom-3 left-3 bg-white px-2 py-1 border border-black/10 text-[10px] font-mono font-bold uppercase tracking-wider">
                      IMG_REF_{item.id}.RAW
                    </div>
                  </div>
                </div>

                {/* SLOT 1: CONTENT (Span 5) */}
                <div className="md:col-span-5 flex flex-col h-full pt-2">
                  <div className="mb-6 font-mono text-sm leading-tight">
                    <span className="font-black text-lg block mb-1">
                      {item.id}—{item.title}
                    </span>
                    <span className="text-gray-500 uppercase tracking-widest text-xs">
                      DOC_ID: {item.docId}
                    </span>
                  </div>

                  <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed max-w-md mb-8">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    className="inline-block mt-auto text-xs font-black uppercase tracking-widest border-b-2 border-transparent hover:border-safety-orange hover:text-safety-orange transition-all w-max pb-1"
                  >
                    Read Protocol_
                  </a>
                </div>

                {/* SLOT 2: ICON/META (Span 2) */}
                <div className="md:col-span-2 flex flex-col justify-between h-full items-end pt-2">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {/* Icono "Command" estilo Cargo */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="9"
                        height="9"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <rect
                        x="13"
                        y="2"
                        width="9"
                        height="9"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <rect
                        x="2"
                        y="13"
                        width="9"
                        height="9"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <rect x="13" y="13" width="9" height="9" fill="#FF4400" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-gray-400 mt-4 md:mt-0">
                    YEAR: {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER DECORATIVO */}
        <div className="pt-16 pb-8">
          <h2 className="text-[12vw] leading-none font-black text-gray-200 uppercase select-none text-right">
            ENGINEER.
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default BlueprintView;
