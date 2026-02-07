import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import CornerLayout from "./layouts/CornerLayout";
import SystemBar from "./components/SystemBar"; // Barra Inferior

import MainTerminal from "./components/MainTerminal";
import BlueprintView from "./components/BlueprintView";
import LoreBookView from "./components/LoreBookView";
import MetaView from "./components/MetaView";

function App() {
  const [mode, setMode] = useState("terminal");

  return (
    <CornerLayout currentMode={mode} setMode={setMode}>
      {/* Contenedor principal con padding inferior para la SystemBar */}
      <div className="w-full h-full pb-12">
        <AnimatePresence mode="wait">
          {mode === "terminal" && (
            <MainTerminal key="terminal" setMode={setMode} />
          )}

          {mode === "engineer" && (
            <BlueprintView key="blueprint" setMode={setMode} />
          )}

          {mode === "creator" && <LoreBookView key="lore" setMode={setMode} />}

          {mode === "meta" && <MetaView key="meta" setMode={setMode} />}
        </AnimatePresence>
      </div>

      {/* Barra de Navegación Inferior */}
      <SystemBar currentMode={mode} setMode={setMode} />
    </CornerLayout>
  );
}

export default App;
