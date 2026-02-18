/*
Blueprint View (Restored Payload)
Intent:
- Architecture: Option C (Hydraulic State Machine)
- Left: Profile, Bio, Skills (Restored)
- Center: Projects with Action Buttons (Restored)
- Right: CommLink (Restored)
*/
import React, { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENGINEER_DATA, SKILLS } from "../data/EngineerData";
import HydraulicGrid from "./HydraulicGrid";
import { useLayout } from "../context/LayoutContext";
import CommLink from "./CommLink"; // Restoring Chat
import profilePic from "../assets/images/main_icon.webp"; // Restoring Profile Pic

// --- 1. LEFT PANEL: IDENTITY & SKILLS ---
const EngineerProfile = memo(() => (
  <div className="h-full flex flex-col bg-[#080808]">
    {/* PROFILE HEADER */}
    <div className="p-6 border-b border-[#222]">
      <div className="w-24 h-24 mb-6 relative group overflow-hidden border border-[#222]">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
        {/* Scanline Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
      </div>

      <h1 className="font-bebas text-4xl text-white leading-none tracking-wide mb-1">
        MAURICIO
        <br />
        <span className="text-[#ff4425]">OLVERA</span>
      </h1>
      <div className="flex justify-between items-center mt-2">
        <span className="font-mono text-[9px] text-[#666] uppercase tracking-widest">
          Full_Stack_Eng
        </span>
        <span className="font-mono text-[9px] text-[#ff4425] border border-[#ff4425]/30 px-1">
          [MX-01]
        </span>
      </div>
    </div>

    {/* BIO SECTION */}
    <div className="p-6 border-b border-[#222] bg-[#ff4425]/5">
      <p className="font-mono text-[10px] text-[#888] leading-relaxed">
        <strong className="text-[#ff4425] block mb-2 uppercase tracking-widest">
          /// SYSTEM_BIO_LOADED
        </strong>
        Creative Technologist specializing in scalable architecture and
        immersive UI. Building the bridge between heavy metal and soft code.
      </p>
    </div>

    {/* SKILLS SECTION */}
    <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
      <h3 className="font-bebas text-xl text-white mb-6 flex items-center gap-2">
        <span>Core_Stack</span>
        <div className="h-px flex-1 bg-[#222]"></div>
      </h3>
      <div className="space-y-5">
        {SKILLS.map((skill, i) => (
          <div key={i} className="group">
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
  return (
    <div className="border-b border-[#222] bg-[#050505] group">
      {/* TRIGGER ROW */}
      <div
        onClick={() => onToggle(item.id)}
        className="grid grid-cols-1 md:grid-cols-12 cursor-pointer min-h-[100px] relative transition-colors duration-300 hover:bg-[#0a0a0a]"
      >
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 bg-[#ff4425] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        ></div>

        <div className="hidden md:flex col-span-2 border-r border-[#222] items-center justify-center font-mono text-[10px] text-[#666]">
          {isOpen ? (
            <span className="text-[#ff4425] font-bold">▼ OPEN</span>
          ) : (
            item.id
          )}
        </div>

        <div className="col-span-1 md:col-span-10 p-6 flex flex-col justify-center relative overflow-hidden">
          {isOpen && (
            <motion.div
              layoutId="piston-highlight"
              className="absolute inset-0 bg-[#ff4425]/5 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
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
            <div className="grid grid-cols-1 xl:grid-cols-12">
              {/* CODE PREVIEW (Left) */}
              <div className="col-span-1 xl:col-span-8 p-6 md:p-8 border-b xl:border-b-0 xl:border-r border-[#222]">
                <div className="flex justify-between items-center mb-4 border-b border-[#222] pb-2">
                  <span className="font-mono text-[9px] text-[#ff4425] uppercase tracking-widest">
                    /// SOURCE_PREVIEW.js
                  </span>
                </div>
                <pre className="font-mono text-[10px] text-[#888] leading-loose overflow-x-auto select-text bg-[#080808] p-4 border border-[#222]">
                  <code>{item.codeSnippet}</code>
                </pre>
              </div>

              {/* ACTION PANEL (Right) */}
              <div className="col-span-1 xl:col-span-4 p-6 md:p-8 bg-[#080808] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#555] uppercase tracking-widest block mb-4 border-b border-[#222] pb-2">
                    Deployed_Technologies:
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

                {/* ACTION BUTTONS */}
                <div className="flex flex-col gap-3">
                  {item.liveLink !== "#" ? (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full py-4 bg-[#ff4425] hover:bg-white text-black font-bebas text-xl text-center tracking-widest transition-all shadow-[0_0_15px_rgba(255,68,37,0.3)] flex items-center justify-center gap-2"
                    >
                      <span>RUN_LIVE_DEMO</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-4 bg-[#222] text-[#555] font-bebas text-xl tracking-widest cursor-not-allowed opacity-50"
                    >
                      SERVER_OFFLINE
                    </button>
                  )}

                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 border border-[#333] hover:border-[#ff4425] text-[#666] hover:text-[#ff4425] font-mono text-xs text-center uppercase tracking-widest transition-all"
                  >
                    VIEW_SOURCE_REPO
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
  <div className="h-full flex flex-col bg-[#0a0a0a]">
    <div className="p-4 border-b border-[#222]">
      <span className="font-mono text-[9px] text-[#ff4425] uppercase tracking-widest">
        /// SECURE_COMM_LINK
      </span>
    </div>
    <div className="flex-1 p-4 overflow-hidden flex flex-col">
      {/* Embed existing CommLink component here */}
      <CommLink />
    </div>
    <div className="p-4 border-t border-[#222] text-center">
      <span className="font-mono text-[9px] text-[#444]">
        ENCRYPTION: AES-256
      </span>
    </div>
  </div>
));

// --- MAIN COMPONENT ---
const BlueprintView = () => {
  const { setLayoutMode } = useLayout();
  const [expandedId, setExpandedId] = useState(null);

  // Set Layout Mode to Blueprint on mount
  useEffect(() => {
    setLayoutMode("blueprint");
  }, [setLayoutMode]);

  const handleToggle = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <HydraulicGrid
      // 1. LEFT: PROFILE & SKILLS
      leftSlot={<EngineerProfile />}
      // 2. CENTER: PROJECTS
      centerSlot={
        <div className="pb-32">
          {/* Sticky Header */}
          <header className="p-8 border-b border-[#222] bg-[#0a0a0a] sticky top-0 z-20 shadow-xl">
            <h1 className="font-bebas text-6xl text-white leading-none">
              THE_FOUNDRY
            </h1>
            <span className="font-mono text-[10px] text-[#ff4425] uppercase tracking-[0.4em]">
              Engineering_Logs // V.2.0.4
            </span>
          </header>

          {/* Project List */}
          <div>
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
      // 3. RIGHT: COMM LINK
      rightSlot={<RightConsole />}
    />
  );
};

export default BlueprintView;
