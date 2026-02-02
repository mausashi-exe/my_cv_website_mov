// src/App.jsx
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CornerLayout from "./layouts/CornerLayout";
import Home from "./pages/Home";

export default function App() {
  const [mode, setMode] = useState("terminal");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content only renders fully after loading */}
      {!isLoading && (
        <div className="noise-overlay">
          <CornerLayout currentMode={mode} setMode={setMode}>
            <Home currentMode={mode} setMode={setMode} />
          </CornerLayout>
        </div>
      )}
    </>
  );
}
