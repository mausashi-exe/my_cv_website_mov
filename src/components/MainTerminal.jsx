import { motion } from "framer-motion";

export default function MainTerminal({ setMode }) {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full border border-dynamic-text/20 bg-dynamic-text/[0.02] p-8 md:p-16 backdrop-blur-sm">
        <header className="mb-12 flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-[10px] tracking-[0.4em] uppercase opacity-50">
              Identity_Protocol
            </h2>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Mauricio <br /> Olvera Valenzuela
            </h1>
          </div>
          <div className="text-right font-mono text-[9px] uppercase leading-relaxed opacity-40">
            [Native_English_Verified] <br />
            [Location: Veracruz, MX //]
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <p className="text-sm leading-relaxed max-w-sm opacity-80 font-mono">
            Bridging the gap between engineering logic and high-fidelity
            creative execution. Designing systems that function as well as they
            look.
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => setMode("engineer")}
              className="group flex justify-between items-center border border-dynamic-text/30 p-4 hover:bg-dynamic-text hover:text-black transition-all duration-500"
            >
              <span className="font-mono text-xs tracking-widest uppercase">
                Engineer_Log
              </span>
              <span className="text-xl">→</span>
            </button>
            <button
              onClick={() => setMode("creator")}
              className="group flex justify-between items-center border border-dynamic-text/30 p-4 hover:bg-dynamic-text hover:text-black transition-all duration-500"
            >
              <span className="font-mono text-xs tracking-widest uppercase">
                Creator_Vault
              </span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
