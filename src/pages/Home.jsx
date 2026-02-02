import React from "react";
import { AnimatePresence } from "framer-motion";
import MainTerminal from "../components/MainTerminal";
import BlueprintView from "../components/BlueprintView";
import LoreBookView from "../components/LoreBookView";
import MetaView from "../components/MetaView";

const Home = ({ currentMode, setMode }) => {
  return (
    <div className="w-full h-full">
      <AnimatePresence mode="wait">
        {currentMode === "terminal" && (
          <MainTerminal key="terminal" setMode={setMode} />
        )}

        {currentMode === "engineer" && (
          <BlueprintView key="engineer" setMode={setMode} />
        )}

        {currentMode === "creator" && (
          <LoreBookView key="creator" setMode={setMode} />
        )}

        {currentMode === "meta" && <MetaView key="meta" setMode={setMode} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
