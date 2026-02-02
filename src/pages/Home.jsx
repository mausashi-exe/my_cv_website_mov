import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainTerminal from "../components/MainTerminal";
import BlueprintView from "../components/BlueprintView";
import LoreBookView from "../components/LoreBookView";

export default function Home({ currentMode, setMode }) {
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {currentMode === "terminal" && <MainTerminal setMode={setMode} />}
          {currentMode === "engineer" && <BlueprintView />}
          {currentMode === "creator" && <LoreBookView />}
        </motion.div>
      </AnimatePresence>

      {/* Botón de Retorno Seguro */}
      {currentMode !== "terminal" && (
        <button
          onClick={() => setMode("terminal")}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 border border-safety-orange bg-nomos-void/90 px-6 py-2 font-mono text-[10px] uppercase tracking-widest text-safety-orange hover:bg-safety-orange hover:text-white transition-colors backdrop-blur-md"
        >
          [ Return_Main_Frame ]
        </button>
      )}
    </div>
  );
}
