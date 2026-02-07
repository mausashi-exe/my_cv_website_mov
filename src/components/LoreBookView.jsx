import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapImage from "../assets/images/map_with_factions_01.webp";
import coinBtn from "../assets/images/map_landing_button_01.webp";
import { LORE_CHAPTERS } from "../data/loreData";

const NoiseOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
);

const BiomechDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent my-8 relative opacity-60">
    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 border border-[#d4af37] bg-[#050505]"></div>
  </div>
);

const ArtifactButton = ({ onClick, text = "Enter", scale = 1 }) => {
  return (
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
        className="w-full h-full object-contain drop-shadow-2xl transition-all duration-700 
                   filter brightness-[0.6] contrast-125 sepia-[0.3] 
                   group-hover:brightness-[0.8] group-hover:sepia-0 group-hover:drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
      />
      <div className="absolute inset-0 flex items-center justify-center pt-2 z-10 pointer-events-none">
        <span
          className="font-cook text-3xl md:text-5xl tracking-normal 
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

const LoreBookView = ({ setMode }) => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(LORE_CHAPTERS[0]);
  const [isMetaOpen, setIsMetaOpen] = useState(false);
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState(false);

  // SWIPE LOGIC
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe) {
      setIsMobileIndexOpen(true);
      setIsMetaOpen(false);
    }
    if (isLeftSwipe) {
      if (isMobileIndexOpen) setIsMobileIndexOpen(false);
      else setIsMetaOpen(true);
    }
  };

  useEffect(() => {
    setIsMetaOpen(false);
    setIsMobileIndexOpen(false);
  }, [activeChapter]);

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
              scale: 1.2,
              filter: "blur(15px)",
              transition: { duration: 1 },
            }}
          >
            <div className="absolute inset-0 z-0">
              <motion.img
                src={mapImage}
                className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.1]"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            </div>

            <div className="relative z-30 flex flex-col items-center justify-center p-8 max-w-6xl w-full h-full">
              <div className="mb-10 relative z-50">
                <ArtifactButton
                  onClick={() => setIsArchiveOpen(true)}
                  text="Enter"
                  scale={1.3}
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <span className="font-code text-[10px] text-[#d4af37] tracking-[0.6em] uppercase block animate-pulse-subtle">
                  /// ARCHIVAL_PROTOCOL_INIT
                </span>
                <h1 className="font-cook text-6xl md:text-[8vw] text-[#e0e0e0] leading-[0.9] tracking-normal drop-shadow-2xl mix-blend-screen opacity-90">
                  Chronicles of
                  <br />
                  <span className="text-[#d4af37]/90">The Nomos</span>
                </h1>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="flex w-full h-full relative z-10 pt-14 flex-col md:flex-row"
          >
            {/* MOBILE MENU TOGGLE */}
            <div className="md:hidden w-full px-6 py-4 bg-[#0a0a0a] border-b border-white/10 flex justify-between items-center shrink-0 z-30 sticky top-0">
              <button
                onClick={() => setIsArchiveOpen(false)}
                className="text-gray-500 text-xs font-code uppercase"
              >
                ← EXIT
              </button>
              <button
                onClick={() => setIsMobileIndexOpen(true)}
                className="text-[#d4af37] border border-[#d4af37]/30 px-4 py-1 rounded-sm font-cinzel font-bold text-xs bg-[#d4af37]/5"
              >
                INDEX / CHAPTERS ≡
              </button>
            </div>

            {/* MOBILE INDEX OVERLAY */}
            <AnimatePresence>
              {isMobileIndexOpen && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  className="fixed inset-0 z-[60] bg-[#080808]/95 backdrop-blur-xl flex flex-col w-full h-full md:hidden"
                  onTouchStart={(e) => e.stopPropagation()}
                >
                  <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                    <h3 className="font-cook text-2xl text-[#d4af37]">
                      Index Librorum
                    </h3>
                    <button
                      onClick={() => setIsMobileIndexOpen(false)}
                      className="text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {LORE_CHAPTERS.map((chap, idx) => (
                      <button
                        key={chap.id}
                        onClick={() => setActiveChapter(chap)}
                        className={`w-full text-left px-4 py-4 border-l-2 ${activeChapter.id === chap.id ? "border-[#d4af37] bg-white/5" : "border-white/10"}`}
                      >
                        <span className="block font-code text-[10px] text-gray-500">
                          FILE_0{idx + 1}
                        </span>
                        <span
                          className={`font-cinzel text-lg ${activeChapter.id === chap.id ? "text-[#d4af37]" : "text-gray-300"}`}
                        >
                          {chap.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* DESKTOP SIDEBAR */}
            <nav className="hidden md:flex flex-col w-[260px] h-full border-r border-white/5 bg-[#080808] z-20 shadow-2xl relative shrink-0">
              <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
                <button
                  onClick={() => setIsArchiveOpen(false)}
                  className="font-code text-[9px] text-gray-500 hover:text-[#d4af37] uppercase tracking-widest flex items-center gap-2 mb-4 transition-colors group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>{" "}
                  Return
                </button>
                <h3 className="font-cook text-3xl text-white/90 tracking-normal">
                  Index Librorum
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
                {LORE_CHAPTERS.map((chap, idx) => {
                  const isActive = activeChapter.id === chap.id;
                  return (
                    <button
                      key={chap.id}
                      onClick={() => setActiveChapter(chap)}
                      className={`w-full text-left px-6 py-4 group relative border-l-2 transition-all duration-300
                        ${isActive ? "border-[#d4af37] bg-white/[0.02]" : "border-transparent hover:border-white/10 hover:bg-white/[0.01]"}`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span
                          className={`font-code text-[9px] uppercase tracking-widest ${isActive ? "text-[#d4af37]" : "text-gray-600 group-hover:text-gray-400"}`}
                        >
                          FILE_0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1 h-1 rounded-full bg-[#d4af37] animate-pulse"></span>
                        )}
                      </div>
                      <span
                        className={`font-cinzel text-sm font-bold leading-tight block ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                      >
                        {chap.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* MAIN CONTENT */}
            <section className="flex-1 h-full overflow-y-auto scrollbar-hide bg-[#0a0a0a] relative px-6 md:px-16 py-12">
              <div className="fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-[#d4af37]/5 rounded-full opacity-20 animate-spin-slow pointer-events-none"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto relative z-10"
                >
                  <header className="mb-8 text-center">
                    <span className="font-code text-[9px] text-[#d4af37] uppercase tracking-[0.25em] mb-2 block">
                      Directive: {activeChapter.visualData.tags[0]}
                    </span>
                    <h2 className="font-cook text-5xl md:text-8xl text-[#e0e0e0] mb-2 drop-shadow-lg leading-[0.85] tracking-normal capitalize">
                      {activeChapter.title}
                    </h2>
                    <p className="font-cinzel text-lg text-gray-500 font-bold tracking-widest mt-4">
                      "{activeChapter.subtitle}"
                    </p>
                  </header>
                  <div className="mb-12 relative w-full aspect-[21/9] md:aspect-[2/1] bg-[#050505] border border-white/10 overflow-hidden group">
                    {activeChapter.visualData.mainImage ? (
                      <img
                        src={activeChapter.visualData.mainImage}
                        alt="Ref"
                        className="w-full h-full object-cover opacity-50 grayscale transition-all duration-1000"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20">
                        <span className="font-code text-[9px] text-gray-600">
                          NO VISUAL FEED
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArtifactButton
                        onClick={() => setIsMetaOpen(true)}
                        text="Open"
                        scale={0.6}
                      />
                    </div>
                  </div>
                  <BiomechDivider />
                  <article className="font-cormorant text-2xl text-gray-300 leading-loose text-justify space-y-10 px-2 md:px-8 font-medium">
                    {activeChapter.fullContent}
                  </article>
                  <div className="h-32"></div>
                </motion.div>
              </AnimatePresence>
            </section>

            {/* RIGHT PANEL (META) */}
            <AnimatePresence>
              {isMetaOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMetaOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                  />
                  <motion.aside
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0c0c0c] border-l border-[#d4af37]/30 z-40 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] overflow-y-auto"
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <div className="sticky top-0 bg-[#0c0c0c]/90 backdrop-blur border-b border-white/10 p-6 flex justify-between items-center z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#d4af37] animate-pulse"></div>
                        <h3 className="font-code text-xs font-bold text-[#d4af37] uppercase tracking-widest">
                          System_Analysis
                        </h3>
                      </div>
                      <button
                        onClick={() => setIsMetaOpen(false)}
                        className="text-gray-500 hover:text-white font-code text-xs uppercase"
                      >
                        [ Close X ]
                      </button>
                    </div>
                    <div className="p-8 space-y-10">
                      <div>
                        <span className="block font-code text-[9px] text-gray-600 uppercase mb-2">
                          Threat Assessment
                        </span>
                        <div className="bg-[#111] p-4 border border-white/5">
                          <div className="flex justify-between items-end mb-2">
                            <span
                              className={`font-bebas text-3xl tracking-widest ${activeChapter.visualData.threatLevel === "Severe" || activeChapter.visualData.threatLevel === "Critical" ? "text-red-500" : "text-blue-400"}`}
                            >
                              {activeChapter.visualData.threatLevel}
                            </span>
                            <span className="font-code text-[9px] text-gray-500">
                              LEVEL
                            </span>
                          </div>
                          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "70%" }}
                              className="h-full bg-[#d4af37]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative pt-4 border-t border-dashed border-white/10">
                        <h4 className="font-code text-[9px] font-bold text-[#d4af37] uppercase tracking-widest mb-3">
                          /// Creator_Log.txt
                        </h4>
                        <p className="font-code text-[10px] text-gray-400 leading-relaxed italic border-l-2 border-[#d4af37]/20 pl-4">
                          {activeChapter.visualData.processLog}
                        </p>
                      </div>
                    </div>
                  </motion.aside>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoreBookView;
