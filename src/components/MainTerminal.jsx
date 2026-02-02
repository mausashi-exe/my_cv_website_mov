import { motion } from "framer-motion";

export default function MainTerminal({ setMode }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-safety-orange">
          System_Architecture_Portfolio
        </h2>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-concrete-100">
          UX_UI <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-concrete-100 to-concrete-800">
            Architect.
          </span>
        </h1>

        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
          <MenuButton
            label="Engineering_Log"
            onClick={() => setMode("engineer")}
          />
          <MenuButton
            label="Creator_Vault"
            onClick={() => setMode("creator")}
          />
        </div>
      </motion.div>
    </div>
  );
}

function MenuButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative border border-concrete-800 px-8 py-4 overflow-hidden"
    >
      <div className="absolute inset-0 w-0 bg-safety-orange transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
      <span className="relative font-mono text-xs uppercase tracking-widest text-concrete-100 group-hover:text-safety-orange transition-colors">
        [{label}]
      </span>
    </button>
  );
}
