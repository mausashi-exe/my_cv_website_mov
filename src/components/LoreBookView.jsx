/*
LoreBookView v4.2 (Syntax Fixed)
Under the Hood:
- Fix: Corrected mismatched JSX tags (sealed motion.div properly).
- Soul: Restored your original Swipe Logic, ArtifactButton, and Landing Map.
- Architecture: URL-Driven via useParams for the 'refactor/layout-determinism' branch.
*/
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LORE_CHAPTERS } from "../data/loreData";
import mapImage from "../assets/images/map_with_factions_01.webp";
import coinBtn from "../assets/images/map_landing_button_01.webp";

// --- YOUR ORIGINAL AUXILIARY COMPONENTS ---
const NoiseOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
);

const ArtifactButton = ({ onClick, text = "Enter", scale = 1 }) => (
  <motion.button
    onClick={onClick}
    style={{ transform: `scale(${scale})` }}
    className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group rounded-full outline-none cursor-pointer z-50 origin-center"
    whileHover={{ scale: scale * 1.05 }}
    whileTap={{ scale: scale * 0.95 }}
    initial={{ opacity: 0, scale: scale * 0.8 }}
    animate={{ opacity: 1, scale: scale }}
    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
  >
    <img
      src={coinBtn}
      alt={text}
      className="w-full h-full object-contain filter brightness-[0.6] contrast-125 sepia-[0.3] group-hover:brightness-[0.8] group-hover:sepia-0 group-hover:drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-700"
    />
    <div className="absolute inset-0 flex items-center justify-center pt-2 z-10 pointer-events-none">
      <span className="font-cook text-2xl md:text-4xl text-[#ffb700] drop-shadow-[0_0_10px_rgba(255,100,0,0.8)] group-hover:text-[#fffebb] transition-all duration-500">
        {text}
      </span>
    </div>
  </motion.button>
);

const WIPModule = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="absolute bottom-12 md:bottom-24 z-50 flex flex-col items-center"
  >
    <div className="bg-[#0a0a0a]/90 border border-[#ffb700]/30 backdrop-blur-md px-6 py-3 rounded-sm flex items-center gap-4 shadow-[0_0_20px_rgba(255,183,0,0.1)]">
      <div className="w-2 h-2 bg-[#ffb700] animate-pulse rounded-full"></div>
      <div className="flex flex-col text-left">
        <span className="font-code text-[10px] text-[#ffb700] uppercase tracking-widest font-bold">
          Codex_Status: Work In Progress
        </span>
        <span className="font-code text-[9px] text-gray-500">
          Compiling Archives... V.0.9.2 [BETA]
        </span>
      </div>
    </div>
  </motion.div>
);

const LoreBookView = ({ setMode }) => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  // 1. GATED ENTRY LOGIC (URL-Aware)
  const [isArchiveOpen, setIsArchiveOpen] = useState(() => {
    if (chapterId) return true;
    return sessionStorage.getItem("lore_access") === "true";
  });

  const handleEnter = () => {
    sessionStorage.setItem("lore_access", "true");
    setIsArchiveOpen(true);
  };

  // 2. DATA DERIVATION
  const chapterMap = useMemo(() => {
    return LORE_CHAPTERS.reduce((acc, chap) => {
      acc[chap.id] = chap;
      return acc;
    }, {});
  }, []);

  const activeChapter = chapterMap[chapterId] || LORE_CHAPTERS[0];

  const groupedChapters = LORE_CHAPTERS.reduce((acc, chapter) => {
    if (!acc[chapter.category]) acc[chapter.category] = [];
    acc[chapter.category].push(chapter);
    return acc;
  }, {});

  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState(false);

  // 3. YOUR ORIGINAL SWIPE LOGIC
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance < -minSwipeDistance) {
      setIsMobileIndexOpen(true);
      setIsRightPanelOpen(false);
    }
    if (distance > minSwipeDistance) {
      if (isMobileIndexOpen) setIsMobileIndexOpen(false);
      else setIsRightPanelOpen(true);
    }
  };

  useEffect(() => {
    setIsRightPanelOpen(false);
    setIsMobileIndexOpen(false);
    document.getElementById("lore-center-panel")?.scrollTo(0, 0);
  }, [chapterId]);

  return (
    <div className="w-full h-full font-sans overflow-hidden relative bg-[#050505] selection:bg-[#d4af37] selection:text-black">
      <NoiseOverlay />
      <AnimatePresence mode="wait">
        {!isArchiveOpen ? (
          <motion.div
            key="landing"
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center overflow-hidden"
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
              transition: { duration: 0.8 },
            }}
          >
            <div className="absolute inset-0 z-0">
              <motion.img
                src={mapImage}
                className="w-full h-full object-cover grayscale brightness-[0.3] contrast-[1.2]"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            </div>
            <div className="relative z-30 flex flex-col items-center justify-center p-8">
              <ArtifactButton onClick={handleEnter} text="Enter" scale={1.2} />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <span className="font-code text-[10px] text-[#d4af37] tracking-[0.6em] uppercase block animate-pulse-subtle">
                  /// ARCHIVAL_CODICES
                </span>
                <h1 className="font-cook text-6xl md:text-[7vw] text-[#e0e0e0] leading-[0.9] tracking-normal drop-shadow-2xl">
                  Chronicles of <br />{" "}
                  <span className="text-[#d4af37]">The Nomos</span>
                </h1>
              </motion.div>
            </div>
            <WIPModule />
          </motion.div>
        ) : (
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex w-full h-full relative z-10 pt-14"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* 1. LEFT COLUMN: INDEX */}
            <nav className="hidden md:flex flex-col w-64 border-r border-white/10 bg-[#080808] z-20 shrink-0">
              <div className="p-6 border-b border-white/5">
                <button
                  onClick={() => {
                    sessionStorage.setItem("lore_access", "false");
                    setIsArchiveOpen(false);
                    navigate("/lore");
                  }}
                  className="text-gray-500 hover:text-white font-code text-[10px] uppercase tracking-widest mb-4 block cursor-pointer"
                >
                  ← Exit Archive
                </button>
                <h3 className="font-cook text-2xl text-[#d4af37]">Index</h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
                {Object.entries(groupedChapters).map(([category, chapters]) => (
                  <div key={category} className="mb-6">
                    <h4 className="px-6 font-cinzel text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {category}
                    </h4>
                    {chapters.map((chap) => (
                      <button
                        key={chap.id}
                        onClick={() => navigate(`/lore/${chap.id}`)}
                        className={`w-full text-left px-6 py-2 transition-all duration-300 font-code text-xs uppercase tracking-wide cursor-pointer ${activeChapter.id === chap.id ? "text-[#d4af37] bg-white/5 border-r-2 border-[#d4af37]" : "text-gray-400 hover:text-white"}`}
                      >
                        {chap.title}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </nav>

            {/* MOBILE HEADER */}
            <div className="md:hidden absolute top-14 left-0 w-full px-6 py-3 bg-[#0a0a0a]/90 border-b border-white/10 flex justify-between items-center z-30 backdrop-blur-md">
              <span className="font-code text-xs text-gray-500">
                {activeChapter.category}
              </span>
              <button
                onClick={() => setIsMobileIndexOpen(true)}
                className="text-[#d4af37] font-bold font-cinzel text-xs border border-[#d4af37]/30 px-3 py-1 bg-[#d4af37]/5"
              >
                INDEX ≡
              </button>
            </div>

            {/* 2. CENTER COLUMN: CODEX */}
            <main
              id="lore-center-panel"
              className="flex-1 overflow-y-auto scrollbar-hide bg-[#0a0a0a] relative px-6 md:px-16 lg:px-24 py-12 md:py-16 mt-8 md:mt-0 transition-all duration-500"
            >
              <div className="fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-[#d4af37]/5 rounded-full opacity-20 animate-spin-slow pointer-events-none"></div>

              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto relative z-10 pb-32"
              >
                <header className="mb-12 border-b border-white/10 pb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-code text-[10px] text-[#d4af37] uppercase tracking-[0.25em] mb-2 block">
                        Ref: {activeChapter.id}
                      </span>
                      <h2 className="font-cook text-5xl md:text-7xl text-[#e0e0e0] leading-[0.85] mb-4">
                        {activeChapter.title}
                      </h2>
                      <p className="font-cinzel text-lg text-gray-500 font-bold tracking-widest">
                        "{activeChapter.subtitle}"
                      </p>
                    </div>
                    <button
                      onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
                      className="hidden md:flex items-center gap-2 text-[#d4af37] border border-[#d4af37]/30 px-3 py-1.5 hover:bg-[#d4af37]/10 transition-colors cursor-pointer"
                    >
                      <span className="font-code text-[10px] font-bold uppercase">
                        {isRightPanelOpen ? "Close Data" : "View Data"}
                      </span>
                      <span className="text-xs">
                        {isRightPanelOpen ? "→" : "←"}
                      </span>
                    </button>
                  </div>
                </header>
                <article className="font-cormorant text-xl text-gray-300 leading-relaxed space-y-6">
                  {activeChapter.blocks?.map((block, i) => (
                    <p key={i}>{block.text}</p>
                  ))}
                </article>
              </motion.div>
            </main>

            {/* 3. RIGHT COLUMN: META */}
            <motion.aside
              initial={false}
              animate={{
                width:
                  window.innerWidth >= 768
                    ? isRightPanelOpen
                      ? 400
                      : 0
                    : "100%",
                x:
                  window.innerWidth < 768 ? (isRightPanelOpen ? 0 : "100%") : 0,
              }}
              className={`bg-[#0c0c0c] border-l border-[#d4af37]/20 z-40 overflow-hidden flex flex-col shrink-0 ${window.innerWidth < 768 ? "fixed inset-0 top-14 pt-0" : "relative h-full"}`}
            >
              <div className="w-full md:w-[400px] h-full flex flex-col overflow-y-auto min-w-[350px]">
                <div className="p-6 bg-[#0e0e0e] border-b border-white/10 flex justify-between items-center sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                    <span className="font-code text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Visual_Data_Log
                    </span>
                  </div>
                  <button
                    onClick={() => setIsRightPanelOpen(false)}
                    className="text-white hover:text-[#d4af37] font-code text-xs cursor-pointer"
                  >
                    [ CLOSE ]
                  </button>
                </div>

                {/* Visual Data Content */}
                {activeChapter.visuals?.main_image && (
                  <div className="w-full aspect-video md:aspect-square bg-black border-b border-white/10 relative">
                    <img
                      src={activeChapter.visuals.main_image}
                      alt="Visual"
                      className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                  </div>
                )}

                <div className="p-8 space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    {activeChapter.visuals?.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-[#111] p-3 border border-white/5"
                      >
                        <span className="block font-code text-[9px] text-gray-500 uppercase mb-1">
                          {stat.label}
                        </span>
                        <span className="block font-cormorant text-lg text-gray-200 leading-none">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoreBookView;
