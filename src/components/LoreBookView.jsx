import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ALL_LORE } from "../data/lore/index";
import { parseLoreText } from "../utils/loreParser";
import { LoreInfobox } from "./LoreInfobox";
import mapImage from "../assets/images/map_with_factions_01.webp";
import coinBtn from "../assets/images/map_landing_button_01.webp";

// --- CUSTOM HOOKS ---
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
};

// --- RESTORED AUXILIARY COMPONENTS ---
const NoiseOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
);

const ArtifactButton = ({ onClick, text = "Enter", scale = 1 }) => {
  return (
    <motion.button
      onClick={onClick}
      style={{ transform: `scale(${scale})` }}
      className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group rounded-full outline-none cursor-pointer z-50 origin-center bg-transparent border-none"
      whileHover={{ scale: scale * 1.05 }}
      whileTap={{ scale: scale * 0.95 }}
      initial={{ opacity: 0, scale: scale * 0.8 }}
      animate={{ opacity: 1, scale: scale }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
    >
      <img
        src={coinBtn}
        alt={text}
        className="w-full h-full object-contain drop-shadow-2xl transition-all duration-700 
                   filter brightness-[0.6] contrast-125 sepia-[0.3] 
                   group-hover:brightness-[0.8] group-hover:sepia-0 group-hover:drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
      />
      <div className="absolute inset-0 flex items-center justify-center pt-2 z-10 pointer-events-none">
        <span
          className="font-cook text-2xl md:text-4xl tracking-normal 
                     text-[#ffb700] 
                     drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]
                     group-hover:text-[#fffebb] 
                     group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,1)]
                     transition-all duration-500 opacity-100"
        >
          {text}
        </span>
      </div>
    </motion.button>
  );
};

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

// --- CORE COMPONENT ---
const LoreBookView = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // State
  const [isArchiveOpen, setIsArchiveOpen] = useState(() => !!chapterId);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState(false);

  // Graph Resolution
  const chapterMap = useMemo(() => {
    const map = new Map();
    ALL_LORE.forEach((ch) => map.set(ch.id, ch));
    return map;
  }, []);

  const activeChapter = useMemo(() => {
    return chapterMap.get(chapterId) || ALL_LORE[0];
  }, [chapterId, chapterMap]);

  const groupedChapters = useMemo(() => {
    return ALL_LORE.reduce((acc, ch) => {
      if (!acc[ch.category]) acc[ch.category] = [];
      acc[ch.category].push(ch);
      return acc;
    }, {});
  }, []);

  const handleSelect = (id) => {
    navigate(`/lore/${id}`);
    setIsMobileIndexOpen(false);
  };

  useEffect(() => {
    const panel = document.getElementById("lore-center-panel");
    if (panel) panel.scrollTo(0, 0);
  }, [chapterId]);

  if (chapterId && !chapterMap.has(chapterId)) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#050505]">
        <div className="text-center">
          <h2 className="font-cook text-4xl text-[#d4af37] mb-4">
            Codex Not Found
          </h2>
          <button
            onClick={() => navigate("/lore")}
            className="text-gray-400 font-code text-xs uppercase hover:text-white"
          >
            Return to Index
          </button>
        </div>
      </div>
    );
  }

  // Swipe Logic for Mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance < -50) {
      setIsMobileIndexOpen(true);
      setIsRightPanelOpen(false);
    }
    if (distance > 50) {
      if (isMobileIndexOpen) setIsMobileIndexOpen(false);
      else setIsRightPanelOpen(true);
    }
  };

  return (
    <div className="w-full h-full font-sans overflow-hidden relative bg-[#050505]">
      <NoiseOverlay />

      <AnimatePresence mode="wait">
        {!isArchiveOpen ? (
          // === FULLY RESTORED LANDING PAGE ===
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
            {/* Animated Background Map */}
            <div className="absolute inset-0 z-0">
              <motion.img
                src={mapImage}
                className="w-full h-full object-cover grayscale brightness-[0.3] contrast-[1.2]"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            </div>

            {/* Core Landing Content */}
            <div className="relative z-30 flex flex-col items-center justify-center p-8">
              <div className="mb-10 relative z-50">
                <ArtifactButton
                  onClick={() => setIsArchiveOpen(true)}
                  text="Enter"
                  scale={1.2}
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <span className="font-code text-[10px] text-[#d4af37] tracking-[0.6em] uppercase block animate-pulse-subtle">
                  /// ARCHIVAL_CODICES
                </span>
                <h1 className="font-cook text-6xl md:text-[7vw] text-[#e0e0e0] leading-[0.9] tracking-normal drop-shadow-2xl opacity-90">
                  Chronicles of <br />
                  <span className="text-[#d4af37]">The Nomos</span>
                </h1>
              </motion.div>
            </div>

            {/* WIP Module */}
            <WIPModule />
          </motion.div>
        ) : (
          // === KNOWLEDGE GRAPH ARCHIVE VIEW ===
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex w-full h-full pt-14 relative z-10"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* 1. INDEX SIDEBAR */}
            <nav className="hidden md:flex flex-col w-64 border-r border-white/10 bg-[#080808] z-20 overflow-y-auto flex-shrink-0">
              <div className="p-6 border-b border-white/5 sticky top-0 bg-[#080808]">
                <button
                  onClick={() => setIsArchiveOpen(false)}
                  className="text-gray-500 hover:text-white font-code text-[10px] uppercase mb-4 block cursor-pointer bg-transparent border-none"
                >
                  ← Exit Archive
                </button>
                <h3 className="font-cook text-2xl text-[#d4af37]">Index</h3>
              </div>
              <div className="p-4">
                {Object.entries(groupedChapters).map(([cat, chapters]) => (
                  <div key={cat} className="mb-6">
                    <h4 className="px-2 text-[10px] font-bold text-gray-600 uppercase mb-2">
                      {cat}
                    </h4>
                    {chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => handleSelect(ch.id)}
                        className={`w-full text-left p-2 text-[11px] uppercase font-code cursor-pointer transition-all ${activeChapter.id === ch.id ? "text-[#d4af37] bg-white/5 border-r-2 border-[#d4af37]" : "text-gray-400 hover:text-white bg-transparent border-none"}`}
                      >
                        {ch.title}
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

            {/* MOBILE INDEX OVERLAY */}
            <AnimatePresence>
              {isMobileIndexOpen && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  className="fixed inset-0 z-[60] bg-[#080808] flex flex-col pt-16"
                >
                  <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-cook text-2xl text-[#d4af37]">Index</h3>
                    <button
                      onClick={() => setIsMobileIndexOpen(false)}
                      className="text-white text-2xl bg-transparent border-none"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    {Object.entries(groupedChapters).map(
                      ([category, chapters]) => (
                        <div key={category} className="mb-8">
                          <h4 className="font-cinzel text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">
                            {category}
                          </h4>
                          <div className="space-y-3">
                            {chapters.map((chap) => (
                              <button
                                key={chap.id}
                                onClick={() => handleSelect(chap.id)}
                                className={`w-full text-left block font-code text-sm uppercase tracking-wide py-1 bg-transparent border-none ${activeChapter.id === chap.id ? "text-[#d4af37]" : "text-gray-300"}`}
                              >
                                {chap.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2. MAIN CODEX CONTENT */}
            <main
              id="lore-center-panel"
              className="flex-1 overflow-y-auto bg-[#0a0a0a] px-6 md:px-12 py-16 scrollbar-hide relative"
            >
              <div className="fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-[#d4af37]/5 rounded-full opacity-20 animate-spin-slow pointer-events-none"></div>

              <div className="max-w-3xl mx-auto relative z-10 pb-32">
                <header className="mb-12 border-b border-white/10 pb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-code text-[10px] text-[#d4af37] tracking-widest uppercase">
                        REF: {activeChapter.id}
                      </span>
                      <h2 className="font-cook text-5xl md:text-7xl text-white mt-2 leading-none uppercase">
                        {activeChapter.title}
                      </h2>
                      <p className="font-cinzel text-lg text-gray-500 italic mt-4">
                        "{activeChapter.summary}"
                      </p>
                    </div>
                    <button
                      onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
                      className="hidden md:flex items-center gap-2 text-[#d4af37] border border-[#d4af37]/30 px-3 py-1.5 hover:bg-[#d4af37]/10 transition-colors bg-transparent cursor-pointer"
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

                <article className="space-y-6">
                  {activeChapter.blocks?.map((b, i) => {
                    const parsedContent = parseLoreText(
                      b.text,
                      activeChapter.id,
                    );
                    if (b.type === "quote")
                      return (
                        <blockquote
                          key={i}
                          className="border-l-2 border-[#d4af37] pl-6 italic text-[#d4af37] font-cormorant text-2xl py-4 bg-[#d4af37]/5"
                        >
                          {parsedContent}
                        </blockquote>
                      );
                    if (b.type === "header")
                      return (
                        <h3
                          key={i}
                          className="font-cinzel text-xl text-white mt-12 mb-4 border-b border-white/10 pb-2 inline-block"
                        >
                          {parsedContent}
                        </h3>
                      );
                    return (
                      <p
                        key={i}
                        className="font-cormorant text-xl text-gray-300 leading-relaxed text-justify"
                      >
                        {parsedContent}
                      </p>
                    );
                  })}
                </article>

                <div className="md:hidden mt-12 pt-8 border-t border-white/10 flex justify-center">
                  <button
                    onClick={() => setIsRightPanelOpen(true)}
                    className="bg-[#d4af37] text-black font-cinzel font-bold px-8 py-3 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] border-none"
                  >
                    VIEW VISUAL DATA
                  </button>
                </div>

                {/* GRAPH MODULE: Related Entries */}
                {activeChapter.related_entries &&
                  activeChapter.related_entries.length > 0 && (
                    <div className="mt-24 border-t border-white/10 pt-8">
                      <h4 className="font-cinzel text-sm text-gray-500 uppercase tracking-widest mb-4">
                        Cross-References
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeChapter.related_entries.map((reqId) => {
                          const target = chapterMap.get(reqId);
                          if (!target) return null;
                          return (
                            <Link
                              key={reqId}
                              to={`/lore/${reqId}`}
                              className="font-code text-xs border border-white/10 px-4 py-2 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all bg-black/50 no-underline block"
                            >
                              → {target.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
              </div>
            </main>

            {/* 3. RIGHT PANEL: DATA LOG & INFOBOX */}
            <motion.aside
              initial={false}
              animate={{
                width: isDesktop ? (isRightPanelOpen ? 400 : 0) : "100%",
                x: !isDesktop ? (isRightPanelOpen ? 0 : "100%") : 0,
              }}
              className={`bg-[#0c0c0c] border-l border-white/10 overflow-hidden flex-shrink-0 ${!isDesktop ? "fixed inset-0 top-14 pt-0 z-50" : "relative h-full"}`}
              style={{ display: "flex" }}
            >
              <div className="w-full md:w-[400px] h-full flex flex-col overflow-y-auto scrollbar-hide min-w-[350px]">
                <div className="p-6 bg-[#0e0e0e] border-b border-white/10 flex justify-between items-center sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                    <span className="font-code text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Visual_Data_Log
                    </span>
                  </div>
                  <button
                    onClick={() => setIsRightPanelOpen(false)}
                    className="text-white hover:text-[#d4af37] font-code text-xs cursor-pointer bg-transparent border-none"
                  >
                    [ CLOSE ]
                  </button>
                </div>

                {activeChapter.visuals?.main_image ? (
                  <div className="w-full aspect-video md:aspect-square bg-black border-b border-white/10 relative group">
                    <img
                      src={activeChapter.visuals.main_image}
                      className="w-full h-full object-cover object-top"
                      alt="Artifact"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
                    <span className="font-code text-[10px] text-gray-600">
                      NO_VISUAL_FEED
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <LoreInfobox entry={activeChapter} />

                  {activeChapter.visuals?.tags && (
                    <div className="flex flex-wrap gap-2 mt-8">
                      {activeChapter.visuals.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="font-code text-[10px] text-[#d4af37] border border-[#d4af37]/30 px-2 py-1 bg-[#d4af37]/5 uppercase rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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
