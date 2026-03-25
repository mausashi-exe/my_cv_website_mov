/*
App.jsx - Main Router and Layout Manager
Routes URL changes to component state via setMode navigation.
*/
import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { LayoutProvider } from "./context/LayoutContext";
import CornerLayout from "./layouts/CornerLayout";
import SystemBar from "./components/SystemBar";
import LoadingScreen from "./components/LoadingScreen";

import MainTerminal from "./components/MainTerminal";
import BlueprintView from "./components/BlueprintView";
import LoreBookView from "./components/LoreBookView";
import MetaView from "./components/MetaView";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const modeFromPath = () => {
    const path = location.pathname;
    if (path.startsWith("/blueprint")) return "engineer";
    if (path.startsWith("/lore")) return "creator";
    if (path.startsWith("/meta")) return "meta";
    return "terminal";
  };

  const currentMode = modeFromPath();

  const setMode = (nextMode) => {
    const pathMap = {
      terminal: "/",
      engineer: "/blueprint",
      creator: "/lore",
      meta: "/meta",
    };
    navigate(pathMap[nextMode]);
  };

  const [isInitialized, setIsInitialized] = useState(() => {
    return sessionStorage.getItem("sys_init") === "true";
  });

  const handleBootComplete = () => {
    sessionStorage.setItem("sys_init", "true");
    setIsInitialized(true);
  };

  return (
    <LayoutProvider>
      <AnimatePresence mode="wait">
        {!isInitialized && (
          <LoadingScreen key="loader" onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {isInitialized && (
        <CornerLayout currentMode={currentMode} setMode={setMode}>
          <div className="w-full h-full pb-14 md:pb-16">
            <AnimatePresence mode="wait">
              {/* The Router handles the "Switching" now */}
              <Routes location={location} key={currentMode}>
                <Route path="/" element={<MainTerminal setMode={setMode} />} />
                <Route
                  path="/blueprint"
                  element={<BlueprintView setMode={setMode} />}
                />
                <Route
                  path="/lore"
                  element={<LoreBookView setMode={setMode} />}
                />
                <Route
                  path="/lore/:chapterId"
                  element={<LoreBookView setMode={setMode} />}
                />
                <Route path="/meta" element={<MetaView setMode={setMode} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
          </div>

          {/* Your original SystemBar receives the same props as before */}
          <SystemBar currentMode={currentMode} setMode={setMode} />
        </CornerLayout>
      )}
    </LayoutProvider>
  );
}

export default App;
