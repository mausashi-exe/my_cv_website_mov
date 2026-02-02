import MainTerminal from "../components/MainTerminal";
import BlueprintView from "../components/BlueprintView";
import LoreBookView from "../components/LoreBookView";

export default function Home({ currentMode, setMode }) {
  return (
    <div className="px-4">
      {currentMode !== "terminal" && (
        <button
          onClick={() => setMode("terminal")}
          className="mb-8 font-mono text-xs uppercase underline opacity-50 hover:opacity-100"
        >
          // Back_to_Terminal
        </button>
      )}

      {currentMode === "terminal" && <MainTerminal setMode={setMode} />}
      {currentMode === "engineer" && <BlueprintView />}
      {currentMode === "creator" && <LoreBookView />}
    </div>
  );
}
