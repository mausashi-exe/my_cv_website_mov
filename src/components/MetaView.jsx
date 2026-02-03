import React from "react";
import { motion } from "framer-motion";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

const TEMPLATE_PROJECTS = [
  {
    id: "01",
    title: "NEURAL GARDENS",
    tags: ["AI", "PYTHON", "WEBGL"],
    desc: "Un sistema de jardinería digital que utiliza redes neuronales para generar flora inexistente.",
    img: null,
  },
  {
    id: "02",
    title: "VOID TERMINAL",
    tags: ["THREE.JS", "REACT"],
    desc: "Interfaz espacial para navegar archivos del sistema operativo mediante metáforas arquitectónicas.",
    img: null,
  },
];

const MetaView = ({ setMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row w-full h-full bg-void text-concrete font-sans selection:bg-lavender selection:text-black"
    >
      {/* IZQUIERDA: FEED (66%) */}
      <div className="w-full md:w-2/3 h-full overflow-y-auto scrollbar-hide pt-24 pb-32 border-r border-white/10 relative">
        <div className="flex flex-col">
          {TEMPLATE_PROJECTS.map((item, index) => (
            <div
              key={index}
              className="group w-full border-b border-white/10 p-8 md:p-12 hover:bg-white/[0.02] transition-colors"
            >
              {/* Imagen Wireframe */}
              <div className="w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] border border-white/10 mb-8 flex items-center justify-center relative group-hover:border-lavender/30 transition-colors">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <span className="font-mono text-xs text-gray-600 border border-gray-700 px-2 py-1">
                  [ IMG_PLACEHOLDER ]
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <h2 className="font-gothic text-4xl md:text-5xl text-white group-hover:text-lavender transition-colors">
                  {item.title}
                </h2>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  ID_{item.id}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 flex flex-wrap content-start gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono border border-white/10 px-2 py-1 text-gray-400 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="md:col-span-8">
                  <p className="font-sans text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                  <button className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-transparent hover:border-lavender hover:text-lavender transition-all pb-1">
                    [ Execute Case ]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DERECHA: BIO FIXED (33%) */}
      <div className="hidden md:flex w-1/3 h-full flex-col justify-between p-10 pt-32 bg-void relative z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]">
        <div className="space-y-10">
          <div className="border-b border-white/10 pb-6">
            <h1 className="font-gothic text-5xl text-white mb-2 tracking-wide">
              Mauricio Olvera
            </h1>
            <div className="flex justify-between font-mono text-[10px] text-lavender uppercase tracking-widest">
              <span>Full Stack Creative</span>
              <span className="animate-pulse">● Available</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-gray-600 uppercase mb-3 block">
              /// Profile_Synthesis
            </span>
            <p className="font-sans text-sm leading-relaxed text-gray-400">
              [ BIO_PLACEHOLDER ]: A hybrid profile where the Engineer's logic
              meets the Creator's narrative. Building systems to house dreams.
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] text-gray-600 uppercase mb-3 block">
              /// Core_Stack
            </span>
            <div className="grid grid-cols-2 gap-y-2 font-mono text-xs text-gray-400">
              <span>React / Next</span>
              <span>Node / SQL</span>
              <span>Three.js</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setMode("terminal")}
          className="w-full py-4 border-t border-white/10 flex justify-between items-center group hover:bg-white/5 transition-all"
        >
          <span className="uppercase text-xs tracking-[0.2em] font-mono text-gray-500 group-hover:text-white font-bold">
            System_Exit
          </span>
          <img
            src={arrowIcon}
            className="w-3 h-3 invert rotate-180 opacity-40 group-hover:opacity-100"
            alt="<"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default MetaView;
