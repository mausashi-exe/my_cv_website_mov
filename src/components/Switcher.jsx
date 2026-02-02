import { motion } from "framer-motion";

export default function Switcher({ currentMode, setMode }) {
  const modes = [
    { id: "architect", label: "[THE ARCHITECT]" },
    { id: "engineer", label: "[THE ENGINEER]" },
    { id: "strategist", label: "[THE STRATEGIST]" },
  ];

  return (
    <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest mt-12 md:flex-row md:gap-8">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setMode(mode.id)}
          className={`group relative py-2 transition-all duration-300 ${currentMode === mode.id ? "text-dynamic-accent scale-105" : "text-concrete-dark hover:text-dynamic-text"}`}
        >
          {mode.label}
          {currentMode === mode.id && (
            <motion.div
              layoutId="underline"
              className="absolute -bottom-1 left-0 h-[2px] w-full bg-dynamic-accent"
            />
          )}
        </button>
      ))}
    </div>
  );
}
