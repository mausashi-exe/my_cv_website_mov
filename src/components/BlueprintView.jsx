/*
Blueprint View v4.0 (Deterministic Refactor)
Changes:
- Removed 'setLayoutMode' (Mode is now derived from URL, satisfying Option B).
- Removed the useEffect side-effect on mount.
- Preserved: Fabrication Logs, Hydraulic Grid implementation, and UI Soul.
*/
import React, { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENGINEER_DATA, SKILLS } from "../data/EngineerData";
import HydraulicGrid from "./HydraulicGrid";
import CommLink from "./CommLink";
import profilePic from "../assets/images/main_icon.webp";

// --- SUB-COMPONENT: JSON LOG VIEWER ---
const FabricationLog = ({ data }) => (
  <div className="font-mono text-[10px] leading-relaxed text-[#888]">
    <div className="mb-4 flex gap-4 text-[#ff4425]">
      <span>MODEL: {data.model}</span>
      <span>TOKENS: {data.tokens}</span>
      <span>WINDOW: {data.context_window}</span>
    </div>

    <div className="mb-2 text-[#555] uppercase tracking-widest border-b border-[#222] pb-1">
      /// GENERATION_PIPELINE
    </div>
    <div className="space-y-1 mb-6">
      {data.pipeline.map((step, i) => (
        <div
          key={i}
          className="flex justify-between border-l border-[#222] pl-3"
        >
          <span className="text-[#ccc]">
            STEP_0{step.step}: {step.action}
          </span>
          <span className="text-[#ff4425]">
            {step.status} [{step.latency}]
          </span>
        </div>
      ))}
    </div>

    <div className="mb-2 text-[#555] uppercase tracking-widest border-b border-[#222] pb-1">
      /// HYPERPARAMETERS
    </div>
    <div className="bg-[#111] p-3 border border-[#222] text-[#d4af37]">
      {JSON.stringify(data.params, null, 2)}
    </div>
  </div>
);

// --- 1. LEFT PANEL: IDENTITY ---
const EngineerProfile = memo(() => (
  <div className="h-full flex flex-col bg-[#080808] w-full">
    <div className="p-6 border-b border-[#222]">
      <div className="w-20 h-20 lg:w-24 lg:h-24 mb-6 relative group overflow-hidden border border-[#222]">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
      </div>
      <h1 className="font-bebas text-3xl lg:text-4xl text-white leading-none tracking-wide mb-1">
        MAURICIO
        <br />
        <span className="text-[#ff4425]">OLVERA</span>
      </h1>
      <div className="flex justify-between items-center mt-2">
        <span className="font-mono text-[9px] text-[#666] uppercase tracking-widest">
          AI_Design_Eng
        </span>
        <span className="font-mono text-[9px] text-[#ff4425] border border-[#ff4425]/30 px-1">
          [MX-01]
        </span>
      </div>
    </div>
    <div className="p-6 border-b border-[#222] bg-[#ff4425]/5">
      <p className="font-mono text-[10px] text-[#888] leading-relaxed">
        <strong className="text-[#ff4425] block mb-2 uppercase tracking-widest">
          /// SYSTEM_BIO_LOADED
        </strong>
        Orchestrating Large Language Models to build scalable, biomechanical
        interfaces.
      </p>
    </div>
    <div className="flex-1 overflow-y-auto scrollbar-hide p-6 w-full">
      <h3 className="font-bebas text-xl text-white mb-6 border-b border-[#222] pb-2">
        Core_Competencies
      </h3>
      <div className="space-y-5">
        {SKILLS.map((skill, i) => (
          <div key={i} className="group w-full">
            <div className="flex justify-between text-[9px] font-mono text-[#666] mb-1 uppercase tracking-widest">
              <span className="group-hover:text-white transition-colors">
                {skill.label}
              </span>
              <span className="text-[#ff4425]">{skill.level}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#111] border border-[#222] relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-[#ff4425]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

// --- 2. CENTER PANEL: PROJECT PISTON ---
const ProjectPiston = memo(({ item, isOpen, onToggle }) => {
  const [viewMode, setViewMode] = useState("code"); // 'code' | 'ai'

  return (
    <div className="border-b border-[#222] bg-[#050505] group w-full">
      {/* TRIGGER ROW */}
      <div
        onClick={() => onToggle(item.id)}
        className="grid grid-cols-12 cursor-pointer min-h-[100px] relative transition-colors duration-300 hover:bg-[#0a0a0a]"
      >
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 bg-[#ff4425] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div className="hidden lg:flex col-span-2 border-r border-[#222] items-center justify-center font-mono text-[10px] text-[#666]">
          {isOpen ? (
            <span className="text-[#ff4425] font-bold">▼ OPEN</span>
          ) : (
            item.id
          )}
        </div>
        <div className="col-span-12 lg:col-span-10 p-6 flex flex-col justify-center relative overflow-hidden">
          {isOpen && (
            <motion.div
              layoutId="piston-highlight"
              className="absolute inset-0 bg-[#ff4425]/5 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-baseline gap-2 xl:gap-4">
            <h2
              className={`font-bebas text-4xl transition-colors ${isOpen ? "text-[#ff4425]" : "text-[#e0e0e0]"}`}
            >
              {item.title}
            </h2>
            <span className="font-mono text-[9px] text-[#555] border border-[#222] px-2 py-0.5 uppercase w-fit">
              {item.client}
            </span>
          </div>
        </div>
      </div>

      {/* EXPANDABLE CHAMBER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.2 },
              },
            }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#020202] border-t border-[#ff4425]/20"
          >
            <div className="grid grid-cols-1 xl:grid-cols-12 w-full">
              {/* DATA VIEWER (Left) */}
              <div className="col-span-1 xl:col-span-8 p-6 md:p-8 border-b xl:border-b-0 xl:border-r border-[#222]">
                {/* TABS */}
                <div className="flex gap-4 mb-6 border-b border-[#222]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode("code");
                    }}
                    className={`font-mono text-[10px] uppercase tracking-widest pb-2 transition-colors ${viewMode === "code" ? "text-[#ff4425] border-b border-[#ff4425]" : "text-[#555] hover:text-white"}`}
                  >
                    /// SOURCE_CODE.js
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode("ai");
                    }}
                    className={`font-mono text-[10px] uppercase tracking-widest pb-2 transition-colors ${viewMode === "ai" ? "text-[#ff4425] border-b border-[#ff4425]" : "text-[#555] hover:text-white"}`}
                  >
                    /// FABRICATION_LOG.json [AI]
                  </button>
                </div>

                {/* CONTENT SWITCHER */}
                <div className="bg-[#080808] p-4 border border-[#222] custom-scrollbar overflow-x-auto min-h-[200px]">
                  {viewMode === "code" ? (
                    <pre className="font-mono text-[10px] text-[#888] leading-loose">
                      <code>{item.codeSnippet}</code>
                    </pre>
                  ) : (
                    <FabricationLog
                      data={
                        item.aiManifest || { model: "UNKNOWN", pipeline: [] }
                      }
                    />
                  )}
                </div>
              </div>

              {/* CONTROL PANEL (Right) */}
              <div className="col-span-1 xl:col-span-4 p-6 md:p-8 bg-[#080808] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#555] uppercase tracking-widest block mb-4 border-b border-[#222] pb-2">
                    Deployed_Stack:
                  </span>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] text-[#ff4425] bg-[#ff4425]/5 border border-[#ff4425]/20 px-2 py-1 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {item.liveLink !== "#" ? (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full py-4 bg-[#ff4425] hover:bg-white text-black font-bebas text-xl text-center tracking-widest transition-all shadow-[0_0_15px_rgba(255,68,37,0.3)] flex items-center justify-center gap-2"
                    >
                      <span>RUN_DEMO</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-4 bg-[#222] text-[#555] font-bebas text-xl tracking-widest cursor-not-allowed opacity-50"
                    >
                      OFFLINE
                    </button>
                  )}
                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 border border-[#333] hover:border-[#ff4425] text-[#666] hover:text-[#ff4425] font-mono text-xs text-center uppercase tracking-widest transition-all"
                  >
                    SOURCE_REPO
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// --- 3. RIGHT PANEL: COMM LINK ---
const RightConsole = memo(() => (
  <div className="h-full flex flex-col bg-[#0a0a0a] w-full">
    <div className="p-4 border-b border-[#222]">
      <span className="font-mono text-[9px] text-[#ff4425] uppercase tracking-widest">
        /// SECURE_COMM_LINK
      </span>
    </div>
    <div className="flex-1 p-4 overflow-hidden flex flex-col">
      <CommLink />
    </div>
    <div className="p-4 border-t border-[#222] text-center">
      <span className="font-mono text-[9px] text-[#444]">
        ENCRYPTION: AES-256
      </span>
    </div>
  </div>
));

// --- MAIN VIEW ---
const BlueprintView = () => {
  const [expandedId, setExpandedId] = useState(null);

  // FIX: Removed useEffect and setLayoutMode.
  // The system now automatically detects 'blueprint' based on the URL.

  const handleToggle = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <HydraulicGrid
      leftSlot={<EngineerProfile />}
      centerSlot={
        <div className="pb-32 w-full">
          <header className="p-8 border-b border-[#222] bg-[#0a0a0a] sticky top-0 z-20 shadow-xl flex justify-between items-end">
            <div>
              <h1 className="font-bebas text-5xl md:text-6xl text-white leading-none">
                THE_FOUNDRY
              </h1>
              <span className="font-mono text-[10px] text-[#ff4425] uppercase tracking-[0.4em]">
                Fabrication_Logs // V.3.1
              </span>
            </div>
            <div className="hidden md:block font-mono text-[9px] text-[#444] text-right">
              STATUS: ONLINE
              <br />
              AI_CORE: ACTIVE
            </div>
          </header>
          <div className="w-full">
            {ENGINEER_DATA.map((item) => (
              <ProjectPiston
                key={item.id}
                item={item}
                isOpen={expandedId === item.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
          <div className="h-32 flex items-center justify-center border-t border-[#222] opacity-30 mt-12">
            <span className="font-bebas text-4xl text-[#333]">END_OF_LOG</span>
          </div>
        </div>
      }
      rightSlot={<RightConsole />}
    />
  );
};

export default BlueprintView;
