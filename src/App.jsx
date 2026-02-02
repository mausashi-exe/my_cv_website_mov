import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CornerLayout from "./layouts/CornerLayout";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [mode, setMode] = useState("terminal"); // terminal, engineer, creator, meta
  const [loading, setLoading] = useState(true);

  // Efecto para cambiar atributos del body para estilos globales si es necesario
  useEffect(() => {
    document.body.setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <CornerLayout currentMode={mode} setMode={setMode}>
          <Home currentMode={mode} setMode={setMode} />
        </CornerLayout>
      )}
    </>
  );
}
