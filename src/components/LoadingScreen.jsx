import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Pequeña pausa al 100%
          return 100;
        }
        // Incrementos aleatorios para que se sienta "procesando"
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-void flex items-end justify-start p-4 md:p-12 cursor-wait"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="w-full">
        <div className="border-t border-paper mb-2 w-full"></div>
        <div className="flex justify-between items-baseline">
          <span className="font-mono text-xs md:text-sm text-accent animate-pulse">
            SYSTEM_BOOT_SEQUENCE_INIT...
          </span>
          <h1 className="font-display text-[20vw] leading-none text-paper font-bold tracking-tighter">
            {Math.min(count, 100)}%
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
