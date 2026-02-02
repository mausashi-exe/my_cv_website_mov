import { motion } from "framer-motion";
import artScan from "../assets/images/drawing_nomos_01.png"; // Tu arte principal

export default function LoreBookView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] border border-concrete-800 bg-nomos-void shadow-2xl">
      {/* Columna Editorial */}
      <div className="flex flex-col justify-between p-12 md:p-20 border-b md:border-b-0 md:border-r border-concrete-800">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-safety-orange">
            Vol. 01
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl italic text-concrete-100 leading-none">
            The Nomos <br /> Archive.
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          <p className="font-serif text-lg text-concrete-400 leading-relaxed">
            "Un documento de 28 páginas de puro worldbuilding. Lenguajes, lógica
            y mitología fusionados en una novela ilustrada."
          </p>
          <div className="w-12 h-0.5 bg-safety-orange" />
        </div>
      </div>

      {/* Columna Visual */}
      <div className="relative overflow-hidden bg-concrete-900 flex items-center justify-center p-8 group">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <img
          src={artScan}
          className="relative z-10 w-full h-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          alt="Nomos Concept Art"
        />
      </div>
    </div>
  );
}
