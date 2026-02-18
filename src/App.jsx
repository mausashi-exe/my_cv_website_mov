import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// --- 1. NEW ARCHITECTURE IMPORT ---
import { LayoutProvider } from "./context/LayoutContext";

import CornerLayout from "./layouts/CornerLayout";
import SystemBar from "./components/SystemBar";
import LoadingScreen from "./components/LoadingScreen";

import MainTerminal from "./components/MainTerminal";
import BlueprintView from "./components/BlueprintView";
import LoreBookView from "./components/LoreBookView";
import MetaView from "./components/MetaView";

function App() {
  const [mode, setMode] = useState("terminal");

  // --- BOOT SEQUENCE LOGIC ---
  // Checks if the user has already seen the boot screen in this session
  const [isInitialized, setIsInitialized] = useState(() => {
    return sessionStorage.getItem("sys_init") === "true";
  });

  const handleBootComplete = () => {
    sessionStorage.setItem("sys_init", "true");
    setIsInitialized(true);
  };

  return (
    /* LAYOUT PROVIDER (THE BRAIN)
       Wraps the entire app so the Hydraulic Grid can read state 
       from anywhere (Terminal, Engineer, Creator, Meta).
    */
    <LayoutProvider>
      {/* 1. BOOT LOADER (Overlays everything) */}
      <AnimatePresence mode="wait">
        {!isInitialized && (
          <LoadingScreen key="loader" onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {/* 2. MAIN APPLICATION SHELL */}
      {isInitialized && (
        <CornerLayout currentMode={mode} setMode={setMode}>
          {/* CONTENT AREA (With padding for SystemBar) */}
          <div className="w-full h-full pb-14 md:pb-16">
            <AnimatePresence mode="wait">
              {mode === "terminal" && (
                <MainTerminal key="terminal" setMode={setMode} />
              )}

              {/* NOTE: We map 'engineer' mode to the 'BlueprintView' component.
                 Inside BlueprintView, it will auto-trigger the 'blueprint' layout width.
              */}
              {mode === "engineer" && (
                <BlueprintView key="blueprint" setMode={setMode} />
              )}

              {mode === "creator" && (
                <LoreBookView key="lore" setMode={setMode} />
              )}

              {mode === "meta" && <MetaView key="meta" setMode={setMode} />}
            </AnimatePresence>
          </div>

          {/* NAVIGATION BAR (Fixed Bottom) */}
          <SystemBar currentMode={mode} setMode={setMode} />
        </CornerLayout>
      )}
    </LayoutProvider>
  );
}

export default App;
