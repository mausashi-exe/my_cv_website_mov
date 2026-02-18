/*
Hydraulic Lore Engine (The Creator's Archive)
Intent:
- Cinematic "Gate" entry for immersion
- 3-Column Layout with Hydraulic "Push" on the Right Panel
- Typography: Unifraktur (Titles) / Cormorant (Body) / Cinzel (UI)
- Strict Mechanical Borders (#d4af37 for Gold/Brass)
*/
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LORE_CHAPTERS } from "../data/loreData";
import mapImage from "../assets/images/map_with_factions_01.webp";
import coinBtn from "../assets/images/map_landing_button_01.webp";

// --- SUB-COMPONENTS ---

const HydraulicPanel = ({ isOpen, children }) => {
  return (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: isOpen ? 400 : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30, // Heavy "Brass" resistance
        mass: 1.2,
      }}
      className="h-full bg-[#080808] border-l border-[#d4af37]/30 overflow-hidden flex-shrink-0 relative z-30 hidden md:block"
    >
      <div className="w-[400px] h-full overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </motion.aside>
  );
};

const LoreBookView = ({ setMode }) => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(LORE_CHAPTERS[0]);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Default closed to focus on reading
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState(false);

  // Group chapters for the Index
  const groupedChapters = LORE_CHAPTERS.reduce((acc, chapter) => {
    if (!acc[chapter.category]) acc[chapter.category] = [];
    acc[chapter.category].push(chapter);
    return acc;
  }, {});

  // Reset scroll on chapter change
  useEffect(() => {
    const centerPanel = document.getElementById("lore-center-panel");
    if (centerPanel) centerPanel.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeChapter]);

  return (
    <div className="w-full h-full bg-[#050505] text-[#e0e0e0] font-sans relative overflow-hidden">
      {/* GLOBAL NOISE & GRAIN */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <AnimatePresence mode="wait">
        {!isArchiveOpen ? (
          /* =========================================
             STATE A: THE GATE (Cinematic Landing)
             ========================================= */
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#050505]"
          >
            {/* Background Map Animation */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src={mapImage}
                alt="World Map"
                className="w-full h-full object-cover grayscale contrast-125 brightness-50 animate-spin-slow scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-center"
              >
                <span className="font-mono text-[10px] text-[#d4af37] tracking-[0.6em] uppercase block mb-4 animate-pulse">
                  /// ARCHIVAL_ACCESS_REQ
                </span>
                <h1 className="font-cook text-6xl md:text-9xl text-[#e0e0e0] leading-none drop-shadow-2xl">
                  Chronicles <br />{" "}
                  <span className="text-[#d4af37]">of Nomos</span>
                </h1>
              </motion.div>

              {/* Artifact Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsArchiveOpen(true)}
                className="group relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
              >
                <img
                  src={coinBtn}
                  alt="Enter"
                  className="absolute inset-0 w-full h-full object-contain brightness-75 group-hover:brightness-100 transition-all duration-500 drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                />
                <span className="relative z-10 font-cinzel text-xl text-[#d4af37] font-bold tracking-widest group-hover:text-[#fffebb] transition-colors">
                  ENTER
                </span>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* =========================================
             STATE B: THE ARCHIVE (Hydraulic Layout)
             ========================================= */
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex w-full h-full relative z-10"
          >
            {/* 1. LEFT COLUMN: INDEX (Static Bone) */}
            <nav className="hidden md:flex flex-col w-72 border-r border-[#d4af37]/20 bg-[#080808] z-20 shrink-0">
              <div className="p-8 border-b border-[#d4af37]/10 flex justify-between items-center">
                <h3 className="font-cinzel text-xl text-[#d4af37] font-bold tracking-widest">
                  INDEX
                </h3>
                <button
                  onClick={() => setIsArchiveOpen(false)}
                  className="text-[#666] hover:text-[#d4af37] text-xs font-mono"
                >
                  [EXIT]
                </button>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide py-6 px-6 space-y-8">
                {Object.entries(groupedChapters).map(([category, chapters]) => (
                  <div key={category}>
                    <h4 className="font-mono text-[9px] text-[#555] uppercase tracking-[0.2em] mb-4 border-b border-[#222] pb-1">
                      {category}
                    </h4>
                    <div className="space-y-1">
                      {chapters.map((chap) => (
                        <button
                          key={chap.id}
                          onClick={() => setActiveChapter(chap)}
                          className={`w-full text-left py-2 px-3 border-l-2 transition-all font-cinzel text-xs uppercase tracking-wide
                               ${
                                 activeChapter.id === chap.id
                                   ? "border-[#d4af37] text-white bg-[#d4af37]/5"
                                   : "border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700"
                               }`}
                        >
                          {chap.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </nav>

            {/* MOBILE HEADER (Index Toggle) */}
            <div className="md:hidden absolute top-0 left-0 w-full h-14 bg-[#080808] border-b border-[#d4af37]/20 z-50 flex justify-between items-center px-4">
              <span className="font-cinzel text-xs text-[#d4af37] font-bold truncate pr-4">
                {activeChapter.title}
              </span>
              <button
                onClick={() => setIsMobileIndexOpen(!isMobileIndexOpen)}
                className="text-[#d4af37] border border-[#d4af37]/30 px-3 py-1 font-mono text-[10px]"
              >
                {isMobileIndexOpen ? "CLOSE" : "INDEX"}
              </button>
            </div>

            {/* MOBILE INDEX OVERLAY */}
            <AnimatePresence>
              {isMobileIndexOpen && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  className="fixed inset-0 z-[60] bg-[#0a0a0a] pt-20 px-6 pb-6 overflow-y-auto"
                >
                  {Object.entries(groupedChapters).map(
                    ([category, chapters]) => (
                      <div key={category} className="mb-8">
                        <h4 className="font-mono text-[10px] text-[#d4af37] uppercase tracking-widest mb-4">
                          {category}
                        </h4>
                        {chapters.map((chap) => (
                          <button
                            key={chap.id}
                            onClick={() => {
                              setActiveChapter(chap);
                              setIsMobileIndexOpen(false);
                            }}
                            className="block w-full text-left py-3 border-b border-[#222] text-gray-300 font-cinzel text-sm"
                          >
                            {chap.title}
                          </button>
                        ))}
                      </div>
                    ),
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2. CENTER COLUMN: CODEX (Fluid Chamber) */}
            <main
              id="lore-center-panel"
              className="flex-1 overflow-y-auto scrollbar-hide bg-[#050505] relative pt-20 md:pt-0"
            >
              {/* Spinner Decor */}
              <div className="fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-[#d4af37]/5 rounded-full opacity-10 animate-spin-slow pointer-events-none"></div>

              <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 relative z-10 min-w-[300px]">
                {/* Header */}
                <header className="mb-12 border-b border-[#d4af37]/20 pb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[9px] text-[#d4af37] uppercase tracking-[0.3em] mb-3 block">
                        Ref: {activeChapter.id} // {activeChapter.category}
                      </span>
                      <h2 className="font-maguntia text-5xl md:text-7xl text-[#e0e0e0] leading-[0.85] mb-4">
                        {activeChapter.title}
                      </h2>
                      <p className="font-cinzel text-lg text-[#888] tracking-widest">
                        "{activeChapter.subtitle}"
                      </p>
                    </div>

                    {/* DESKTOP TOGGLE */}
                    <button
                      onClick={() => setIsPanelOpen(!isPanelOpen)}
                      className="hidden md:flex items-center gap-2 border border-[#d4af37]/30 px-3 py-1.5 hover:bg-[#d4af37]/10 transition-all group"
                    >
                      <span className="font-mono text-[9px] text-[#d4af37] uppercase font-bold">
                        {isPanelOpen ? "Close_Meta" : "Open_Meta"}
                      </span>
                      <div
                        className={`w-1.5 h-1.5 bg-[#d4af37] transition-opacity ${isPanelOpen ? "opacity-100" : "opacity-30"}`}
                      ></div>
                    </button>
                  </div>
                </header>
                {/* Reading Content */}
                <article className="font-cormorant text-xl md:text-2xl text-[#bbb] leading-relaxed text-justify selection:bg-[#d4af37] selection:text-black">
                  {activeChapter.fullContent}
                </article>
                {/* Mobile "View Meta" Button (Since Hydraulic Panel is hidden on mobile) */}
                <div className="md:hidden mt-16 pt-8 border-t border-[#222]">
                  {activeChapter.visualData.image && (
                    <div className="mb-8 border border-[#d4af37]/20 p-1">
                      <img
                        src={activeChapter.visualData.image}
                        alt="Ref"
                        className="w-full opacity-80"
                      />
                    </div>
                  )}
                  <div className="bg-[#111] p-6 border-l-2 border-[#d4af37]">
                    <h4 className="font-cinzel text-[#d4af37] mb-2">
                      System Analysis
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {activeChapter.visualData.stats.map((stat, i) => (
                        <div key={i}>
                          <span className="block font-mono text-[9px] text-[#555] uppercase">
                            {stat.label}
                          </span>
                          <span className="block font-cormorant text-lg text-[#ccc]">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-32"></div> {/* Spacer */}
              </div>
            </main>

            {/* 3. RIGHT COLUMN: META (Hydraulic Piston) */}
            <HydraulicPanel isOpen={isPanelOpen}>
              <div className="p-8 space-y-8 min-w-[350px]">
                {/* Image Frame */}
                <div className="w-full aspect-square bg-[#030303] border border-[#d4af37]/20 relative group overflow-hidden">
                  {activeChapter.visualData.image ? (
                    <>
                      <img
                        src={activeChapter.visualData.image}
                        alt="Visual Ref"
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="font-mono text-[9px] text-[#444] uppercase">
                        No_Visual_Feed
                      </span>
                    </div>
                  )}

                  {/* Corner Marks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#d4af37]"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#d4af37]"></div>
                </div>

                {/* Stats Grid */}
                <div>
                  <h4 className="font-cinzel text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-4 border-b border-[#d4af37]/20 pb-2">
                    Metadata_Log
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {activeChapter.visualData.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center bg-[#0a0a0a] px-3 py-2 border border-[#222]"
                      >
                        <span className="font-mono text-[9px] text-[#666] uppercase">
                          {stat.label}
                        </span>
                        <span className="font-cormorant text-lg text-[#e0e0e0] italic">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {activeChapter.visualData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-[#d4af37] border border-[#d4af37]/20 px-2 py-1 bg-[#d4af37]/5 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <div className="pt-6 border-t border-[#222]">
                  <p className="font-cormorant text-lg text-[#888] italic leading-relaxed">
                    "{activeChapter.visualData.summary}"
                  </p>
                </div>
              </div>
            </HydraulicPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoreBookView;
