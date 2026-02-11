import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId;

    const updateCount = () => {
      setCount((prev) => {
        if (prev >= 100) {
          setTimeout(onComplete, 600); // Pausa dramática al terminar
          return 100;
        }

        // LÓGICA DE VELOCIDAD DINÁMICA:
        // Si el progreso es bajo, carga rápido. Si es alto, simula "esfuerzo".
        const remaining = 100 - prev;
        const increment = Math.floor(Math.random() * (prev < 70 ? 15 : 5)) + 1;
        const nextValue = Math.min(prev + increment, 100);

        // El delay también varía: más lento al final
        const delay =
          prev < 80 ? Math.random() * 100 + 50 : Math.random() * 300 + 100;

        timeoutId = setTimeout(updateCount, delay);
        return nextValue;
      });
    };

    timeoutId = setTimeout(updateCount, 100);
    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex items-end justify-start p-6 md:p-12 cursor-wait"
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
      }}
    >
      <div className="w-full relative z-10">
        <div className="border-t border-[#d4af37]/30 mb-4 w-full opacity-50"></div>
        <div className="flex justify-between items-baseline overflow-hidden">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#d4af37] animate-pulse tracking-[0.3em] mb-2">
              TERMINAL_SEQUENCE_INIT...
            </span>
            <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest hidden md:block">
              Locating_Assets: /images/nomos_archive_hd.webp
            </span>
          </div>
          <h1 className="font-bebas text-[25vw] leading-[0.8] text-white font-bold tracking-tighter select-none">
            {count}%
          </h1>
        </div>
      </div>

      {/* Scanline effect sutil solo para el loader */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
    </motion.div>
  );
};

export default LoadingScreen;
