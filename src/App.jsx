import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import CornerLayout from "./layouts/CornerLayout";
import SystemBar from "./components/SystemBar";
import LoadingScreen from "./components/LoadingScreen"; // Asegúrate de que la ruta sea correcta

import MainTerminal from "./components/MainTerminal";
import BlueprintView from "./components/BlueprintView";
import LoreBookView from "./components/LoreBookView";
import MetaView from "./components/MetaView";

function App() {
  const [mode, setMode] = useState("terminal");

  // FIX 1: Lógica de persistencia de sesión para el Boot Sequence
  const [isInitialized, setIsInitialized] = useState(() => {
    return sessionStorage.getItem("sys_init") === "true";
  });

  const handleBootComplete = () => {
    sessionStorage.setItem("sys_init", "true");
    setIsInitialized(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isInitialized && (
          <LoadingScreen key="loader" onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {isInitialized && (
        <CornerLayout currentMode={mode} setMode={setMode}>
          {/* Contenedor principal con padding inferior para la SystemBar reforzada */}
          <div className="w-full h-full pb-14 md:pb-16">
            <AnimatePresence mode="wait">
              {mode === "terminal" && (
                <MainTerminal key="terminal" setMode={setMode} />
              )}

              {mode === "engineer" && (
                <BlueprintView key="blueprint" setMode={setMode} />
              )}

              {mode === "creator" && (
                <LoreBookView key="lore" setMode={setMode} />
              )}

              {mode === "meta" && <MetaView key="meta" setMode={setMode} />}
            </AnimatePresence>
          </div>

          {/* Barra de Navegación Inferior Reforzada */}
          <SystemBar currentMode={mode} setMode={setMode} />
        </CornerLayout>
      )}
    </>
  );
}

export default App;
