import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { META_PROJECTS, CONTACT_INFO } from "../data/metaPortfolioData";
import arrowIcon from "../assets/images/arrow_pointing_left_up.svg";
import profilePic from "../assets/images/main_icon.webp";

// COLOR DE ACENTO: PURPLE
const ACCENT = "text-[#a855f7]";
const BORDER_ACCENT = "border-[#a855f7]";
const HOVER_BORDER_ACCENT = "hover:border-[#a855f7]";
const HOVER_TEXT_ACCENT = "hover:text-[#a855f7]";

const HybridHeader = () => (
  <div className="mb-8 md:mb-10">
    <h1 className="text-4xl md:text-5xl leading-none select-none">
      <span className="font-bebas text-gray-200 tracking-wide">META</span>
      <span className={`font-maguntia ${ACCENT} ml-2 tracking-normal`}>
        Creator
      </span>
    </h1>
    <p className="font-code text-[10px] text-gray-500 mt-2 uppercase tracking-widest">
      Portfolio & Visual Archive
    </p>
  </div>
);

// --- LIGHTBOX ---
const ImageViewer = ({ image, title, index, description, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
      onClick={onClose}
    >
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 pointer-events-none">
        <span
          className={`font-code text-[10px] ${ACCENT} uppercase tracking-widest block mb-1`}
        >
          Fig_0{index + 1} // Full Res
        </span>
        <h3 className="font-cinzel text-xl md:text-3xl text-white">{title}</h3>
      </div>

      <button
        onClick={onClose}
        className={`absolute top-6 right-6 md:top-10 md:right-10 text-white ${HOVER_TEXT_ACCENT} font-code text-xs uppercase tracking-widest z-20 pointer-events-auto`}
      >
        [ Close X ]
      </button>

      <motion.img
        src={image}
        alt="Full View"
        className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xl z-10 pointer-events-none">
        <p
          className={`font-code text-xs md:text-sm text-gray-400 bg-black/50 p-2 border-l-2 ${BORDER_ACCENT}`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// --- VISTAS ---

const GalleryFeed = ({ onSelect }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-24 pb-32 max-w-5xl mx-auto"
  >
    {META_PROJECTS.map((project) => (
      <div
        key={project.id}
        className="group cursor-pointer flex flex-col gap-6"
        onClick={() => onSelect(project)}
      >
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
          <h3
            className={`font-cinzel text-2xl md:text-3xl text-gray-200 ${HOVER_TEXT_ACCENT} transition-colors`}
          >
            {project.title}
          </h3>
          <span className="font-code text-[10px] text-gray-500 uppercase tracking-wider">
            {project.category} — {project.year}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`w-full h-64 md:h-80 bg-[#111] border border-white/10 p-3 flex items-center justify-center relative overflow-hidden ${HOVER_BORDER_ACCENT}/30 transition-colors`}
          >
            <img
              src={project.cover}
              alt={project.title}
              className="max-w-full max-h-full object-contain shadow-lg"
            />
            <div className="absolute bottom-2 right-2 font-code text-[9px] text-gray-600 bg-black/50 px-1">
              FIG_01
            </div>
          </div>

          <div
            className={`w-full h-64 md:h-80 bg-[#111] border border-white/10 p-3 flex items-center justify-center relative overflow-hidden ${HOVER_BORDER_ACCENT}/30 transition-colors`}
          >
            <img
              src={project.gallery[0]}
              alt={project.title + " Detail"}
              className="max-w-full max-h-full object-contain shadow-lg"
            />
            <div className="absolute bottom-2 right-2 font-code text-[9px] text-gray-600 bg-black/50 px-1">
              FIG_02
            </div>
          </div>
        </div>

        <div className="md:w-[70%] mt-2">
          <p className="font-code text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>
          <span
            className={`font-code text-[10px] ${ACCENT} mt-3 block opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest`}
          >
            [ + View Full Project ]
          </span>
        </div>
      </div>
    ))}
  </motion.div>
);

const getNextProject = (currentId) => {
  const currentIndex = META_PROJECTS.findIndex((p) => p.id === currentId);
  const nextIndex = (currentIndex + 1) % META_PROJECTS.length;
  return META_PROJECTS[nextIndex];
};

const ProjectDetail = ({ project, onBack, onNext }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && selectedImgIndex === null) onBack();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onBack, selectedImgIndex]);

  const nextProject = getNextProject(project.id);

  return (
    <>
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <ImageViewer
            image={project.gallery[selectedImgIndex]}
            title={project.title}
            index={selectedImgIndex}
            description={project.description}
            onClose={() => setSelectedImgIndex(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="pb-32 relative max-w-6xl mx-auto"
      >
        <div className="sticky top-6 right-0 flex justify-end z-50 pointer-events-none mb-4">
          <button
            onClick={onBack}
            className={`pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-md border ${BORDER_ACCENT}/30 px-5 py-2 rounded-full
                            ${ACCENT} hover:bg-[#a855f7] hover:text-black transition-all duration-300 group flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
          >
            <span className="font-code text-[10px] uppercase tracking-widest font-bold">
              Back to Index
            </span>
            <img
              src={arrowIcon}
              alt="Back"
              className="w-3 h-3 group-hover:invert group-hover:rotate-0 rotate-0 transition-transform"
            />
          </button>
        </div>

        <div className="mb-12 border-b border-white/10 pb-8">
          <h2 className="font-cinzel text-4xl md:text-6xl text-white mb-6 leading-tight">
            {project.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <span
                className={`font-code text-[10px] ${ACCENT} uppercase tracking-widest block mb-2`}
              >
                Project Data
              </span>
              <ul className="font-code text-xs text-gray-400 space-y-1">
                <li>Client: Internal</li>
                <li>Year: {project.year}</li>
                <li>Cat: {project.category}</li>
              </ul>
            </div>
            <div className="md:w-2/3">
              <p className="font-code text-sm md:text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImgIndex(idx)}
              className={`bg-[#111] border border-white/10 p-4 h-[300px] md:h-[400px] flex items-center justify-center cursor-zoom-in ${HOVER_BORDER_ACCENT}/50 transition-colors group relative`}
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-black/50 text-white font-code text-[9px] px-2 py-1 rounded border border-white/20">
                  + ENLARGE
                </span>
              </div>

              <img
                src={img}
                alt={`Detail ${idx}`}
                className="max-w-full max-h-full object-contain shadow-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col items-center gap-8">
          <span className="font-maguntia text-xl text-gray-600">
            End of Project
          </span>

          <button
            onClick={() => onNext(nextProject)}
            className={`group relative overflow-hidden border border-white/10 bg-[#111] px-12 py-8 text-center ${HOVER_BORDER_ACCENT}/50 transition-all duration-500 w-full md:w-2/3`}
          >
            <span className="font-code text-[9px] text-gray-500 uppercase tracking-widest block mb-2">
              Next Entry
            </span>
            <h3
              className={`font-cinzel text-3xl text-gray-300 ${HOVER_TEXT_ACCENT} transition-colors`}
            >
              {nextProject.title}
            </h3>
            <span
              className={`font-code text-[10px] ${ACCENT} mt-4 block opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0`}
            >
              View Project -&gt;
            </span>
          </button>

          <button
            onClick={onBack}
            className="font-code text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest mt-4"
          >
            [ Return to Index ]
          </button>
        </div>
      </motion.div>
    </>
  );
};

// --- MAIN COMPONENT ---

const MetaView = ({ setMode }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    if (isRightSwipe) setIsMobileMenuOpen(true);
    if (isLeftSwipe) setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const rightPanel = document.getElementById("meta-right-panel");
    if (rightPanel) rightPanel.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeProject]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={`flex flex-col md:flex-row h-full w-full bg-[#0a0a0a] text-[#e0e0e0] selection:bg-[#a855f7] selection:text-black overflow-hidden relative`}
    >
      {/* HEADER MÓVIL */}
      <div className="md:hidden px-6 py-4 bg-[#0a0a0a] border-b border-white/10 flex justify-between items-center z-40 sticky top-0 shrink-0">
        <span className="font-bebas text-white">META_ARCHIVE</span>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-[#a855f7] text-xl"
        >
          ≡
        </button>
      </div>

      {/* SIDEBAR (NAV) - Overlay en móvil */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={window.innerWidth < 768 ? { x: "-100%" } : { x: 0 }}
            animate={{ x: 0 }}
            exit={window.innerWidth < 768 ? { x: "-100%" } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`
                fixed inset-y-0 left-0 z-50 w-[85%] md:w-[30%] lg:w-[25%] md:static
                bg-[#080808] border-r border-white/10 flex flex-col shadow-2xl h-full
                `}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <HybridHeader />
                  <button
                    className="md:hidden text-2xl p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ×
                  </button>
                </div>

                <div className="mb-8 block">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 group cursor-pointer">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                <nav className="flex-1 overflow-y-auto scrollbar-hide space-y-1 mb-8">
                  <span className="font-code text-[9px] text-gray-600 uppercase tracking-widest block mb-4 border-b border-white/5 pb-2">
                    Index / Projects
                  </span>

                  {META_PROJECTS.map((p, i) => (
                    <div key={p.id}>
                      <button
                        onClick={() => {
                          setActiveProject(p);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`
                                w-full text-left py-2 group flex items-baseline gap-3 transition-all duration-300 border-l-2 pl-3
                                ${activeProject?.id === p.id ? `${BORDER_ACCENT} text-white` : "border-transparent text-gray-500 hover:text-gray-300 hover:border-white/20"}
                            `}
                      >
                        <span className="font-code text-[9px] opacity-50">
                          0{i + 1}
                        </span>
                        <span className="font-cinzel text-sm font-bold truncate">
                          {p.title}
                        </span>
                      </button>
                    </div>
                  ))}
                </nav>
              </div>

              <div className="border-t border-white/10 pt-6 mt-4 pb-4 md:pb-0">
                <span className="font-code text-[9px] text-gray-600 uppercase tracking-widest block mb-3">
                  Contact / Connect
                </span>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={`block font-code text-xs text-white ${HOVER_TEXT_ACCENT} transition-colors mb-4`}
                >
                  {CONTACT_INFO.email}
                </a>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {CONTACT_INFO.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cinzel text-xs text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white/50"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* OVERLAY DE FONDO (MÓVIL) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main
        id="meta-right-panel"
        className="flex-1 h-full overflow-y-auto relative p-6 md:p-12 lg:p-16 scroll-smooth bg-[#0a0a0a]"
      >
        <AnimatePresence mode="wait">
          {!activeProject ? (
            <GalleryFeed key="feed" onSelect={setActiveProject} />
          ) : (
            <ProjectDetail
              key="detail"
              project={activeProject}
              onBack={() => setActiveProject(null)}
              onNext={setActiveProject}
            />
          )}
        </AnimatePresence>

        <div className="fixed top-0 right-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden">
          <h1 className="font-bebas text-[20vw] text-white opacity-[0.02] select-none">
            {activeProject ? "[WIP]" : "WIP"}
          </h1>
        </div>
      </main>
    </motion.div>
  );
};

export default MetaView;
