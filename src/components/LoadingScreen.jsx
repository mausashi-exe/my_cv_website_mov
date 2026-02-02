// src/components/LoadingScreen.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay for UX impact
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1117] text-[#00ff9f] font-mono p-6"
    >
      {/* CRT Elements */}
      <div className="crt-scanner" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,black_150%)] opacity-50" />

      <div className="w-full max-w-lg space-y-8 relative">
        <header className="border-b border-[#00ff9f]/30 pb-4 flex justify-between items-end">
          <h1 className="font-['Akira'] text-2xl tracking-tighter">
            BOOT_SEQUENCE
          </h1>
          <span className="text-[10px] animate-pulse uppercase">
            Neural_Link: Connected
          </span>
        </header>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] uppercase tracking-[0.3em]">
            <span>System_Sync: {progress}%</span>
            <span>Ref: MAW-2026</span>
          </div>
          {/* Progress Bar */}
          <div className="h-1 w-full bg-[#00ff9f]/10 overflow-hidden border border-[#00ff9f]/20">
            <motion.div
              className="h-full bg-[#00ff9f]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-[8px] uppercase opacity-60">
          <div className="space-y-1">
            <p>{">"} INITIALIZING_L.C.L_FLOW</p>
            <p>{">"} LOADING_NOMOS_ARCHIVE_DATA</p>
            <p>{">"} CALIBRATING_ENGINEERING_LOGIC</p>
          </div>
          <div className="text-right space-y-1">
            <p>SYNC_STATUS: {progress > 80 ? "OPTIMAL" : "CALIBRATING"}</p>
            <p>CORE_TEMP: 32.4°C</p>
            <p>UI_UX_KERNEL: ACTIVE</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
