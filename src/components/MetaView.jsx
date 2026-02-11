import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { META_PROJECTS, CONTACT_INFO } from "../data/metaPortfolioData";
import arrowIcon from "../assets/images/arrow_pointing_left_up.svg";
import profilePic from "../assets/images/main_icon.webp";

const ACCENT = "text-[#a855f7]";
const BORDER_ACCENT = "border-[#a855f7]";
const HOVER_TEXT_ACCENT = "hover:text-[#a855f7]";

const HybridHeader = () => (
  <div className="mb-12 md:mb-16">
    <h1 className="text-5xl md:text-6xl leading-none select-none">
      <span className="font-bebas text-gray-200 tracking-wide">META</span>
      <span className={`font-maguntia ${ACCENT} ml-3 tracking-normal`}>
        Creator
      </span>
    </h1>
    <p className="font-code text-[10px] text-gray-600 mt-4 uppercase tracking-[0.3em]">
      Visual Archive & Systems
    </p>
  </div>
);

// --- LIGHTBOX OPTIMIZADO ---
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
      className="fixed inset-0 z-[100] bg-[#050505]/fb backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
      onClick={onClose}
    >
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <span
          className={`font-code text-[10px] ${ACCENT} uppercase tracking-widest`}
        >
          Fig_0{index + 1} // Source
        </span>
        <h3 className="font-cinzel text-2xl text-white mt-2">{title}</h3>
      </div>
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white font-code text-xs uppercase tracking-widest z-20 p-4"
      >
        [ CLOSE X ]
      </button>
      <motion.img
        src={image}
        alt="High Res View"
        loading="lazy"
        className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/5"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
};

// --- FEED DE GALERÍA (ESPACIADO REFORZADO) ---
const GalleryFeed = ({ onSelect }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-40 pb-40 max-w-6xl mx-auto"
  >
    {META_PROJECTS.map((project) => (
      <div
        key={project.id}
        className="group cursor-pointer flex flex-col gap-10"
        onClick={() => onSelect(project)}
      >
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3
              className={`font-cinzel text-4xl md:text-5xl text-gray-200 ${HOVER_TEXT_ACCENT} transition-colors leading-none`}
            >
              {project.title}
            </h3>
            <span className="font-code text-[10px] text-gray-600 uppercase tracking-[0.2em] mt-4 block">
              {project.category} // {project.year}
            </span>
          </div>
          <span
            className={`font-code text-xs ${ACCENT} opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0`}
          >
            EXPLORE_MANIFEST &rarr;
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[project.cover, project.gallery[0]].map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-[#0d0d0d] border border-white/5 p-4 overflow-hidden relative"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 font-code text-[9px] text-gray-500 bg-black/80 px-2 py-1">
                VIEW_0{i + 1}
              </div>
            </div>
          ))}
        </div>

        <p className="font-code text-xs md:text-sm text-gray-500 max-w-prose leading-relaxed group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>
      </div>
    ))}
  </motion.div>
);

// --- VISTA DETALLE ---
const ProjectDetail = ({ project, onBack, onNext }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const nextProject =
    META_PROJECTS[
      (META_PROJECTS.findIndex((p) => p.id === project.id) + 1) %
        META_PROJECTS.length
    ];

  return (
    <>
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <ImageViewer
            image={project.gallery[selectedImgIndex]}
            title={project.title}
            index={selectedImgIndex}
            onClose={() => setSelectedImgIndex(null)}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pb-40 relative max-w-7xl mx-auto"
      >
        <div className="sticky top-10 flex justify-end z-50 mb-12">
          <button
            onClick={onBack}
            className={`bg-[#0a0a0a]/90 backdrop-blur-md border ${BORDER_ACCENT}/30 px-8 py-3 rounded-full ${ACCENT} hover:bg-[#a855f7] hover:text-black transition-all flex items-center gap-4 shadow-2xl font-code text-[10px] font-bold uppercase tracking-widest`}
          >
            RETURN_TO_ARCHIVE <img src={arrowIcon} alt="" className="w-3 h-3" />
          </button>
        </div>

        <div className="mb-20 border-b border-white/10 pb-16">
          <h2 className="font-cinzel text-5xl md:text-8xl text-white mb-10 leading-tight uppercase">
            {project.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <span
                className={`font-code text-[10px] ${ACCENT} uppercase tracking-widest block`}
              >
                Technical_Data
              </span>
              <ul className="font-code text-xs text-gray-500 space-y-3 uppercase tracking-tighter">
                <li>
                  <span className="text-gray-700">Client:</span>{" "}
                  Internal_Project
                </li>
                <li>
                  <span className="text-gray-700">Year:</span> {project.year}
                </li>
                <li>
                  <span className="text-gray-700">Process:</span> {project.tech}
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="font-code text-sm md:text-base text-gray-300 leading-loose max-w-prose italic">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {project.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImgIndex(idx)}
              className="bg-[#0d0d0d] border border-white/5 p-6 aspect-square flex items-center justify-center cursor-zoom-in hover:border-[#a855f7]/30 transition-colors group relative"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              <div className="absolute inset-0 bg-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-white/10 flex flex-col items-center">
          <button
            onClick={() => onNext(nextProject)}
            className="group border border-white/10 bg-[#0d0d0d] p-16 text-center hover:border-[#a855f7]/50 transition-all w-full md:w-2/3 shadow-2xl"
          >
            <span className="font-code text-[9px] text-gray-600 uppercase tracking-[0.4em] mb-4 block">
              Next_Manifest
            </span>
            <h3 className="font-cinzel text-4xl text-gray-300 group-hover:text-white transition-colors uppercase leading-none">
              {nextProject.title}
            </h3>
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

  useEffect(() => {
    const rightPanel = document.getElementById("meta-right-panel");
    if (rightPanel) rightPanel.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeProject]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row h-full w-full bg-[#050505] text-[#e0e0e0] selection:bg-[#a855f7] selection:text-black overflow-hidden relative"
    >
      {/* MOBILE HEADER */}
      <div className="md:hidden px-6 py-5 bg-[#0a0a0a] border-b border-white/10 flex justify-between items-center z-40 sticky top-0">
        <span className="font-bebas text-2xl tracking-widest text-white">
          META_ARCHIVE
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-[#a855f7] text-2xl p-2"
        >
          ≡
        </button>
      </div>

      {/* SIDEBAR (NAV) */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={window.innerWidth < 768 ? { x: "-100%" } : { x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-y-0 left-0 z-50 w-[85%] md:w-1/3 lg:w-[400px] md:static bg-[#080808] border-r border-white/10 flex flex-col shadow-2xl h-full"
          >
            <div className="p-10 h-full flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex justify-between items-start">
                  <HybridHeader />
                  <button
                    className="md:hidden text-3xl p-4 -mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="mb-12 w-24 h-24 rounded-full overflow-hidden border-2 border-white/5 p-1 bg-black shadow-2xl">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <nav className="space-y-2">
                  <span className="font-code text-[9px] text-gray-700 uppercase tracking-widest block mb-6 border-b border-white/5 pb-2">
                    Project_Index
                  </span>
                  {META_PROJECTS.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveProject(p);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-4 px-4 group flex items-baseline gap-4 transition-all border-l-2 ${activeProject?.id === p.id ? "border-[#a855f7] bg-[#a855f7]/5 text-white" : "border-transparent text-gray-600 hover:text-gray-300 hover:border-white/10"}`}
                    >
                      <span className="font-code text-[10px] opacity-40">
                        0{i + 1}
                      </span>
                      <span className="font-cinzel text-base font-bold uppercase tracking-widest">
                        {p.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
              <div className="border-t border-white/5 pt-10 mt-10">
                <span className="font-code text-[9px] text-gray-700 uppercase tracking-widest block mb-4">
                  Transmission_Lines
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={`block font-code text-xs text-white ${HOVER_TEXT_ACCENT} mb-6 tracking-tighter`}
                >
                  {CONTACT_INFO.email}
                </a>
                <div className="flex flex-wrap gap-6">
                  {CONTACT_INFO.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cinzel text-[10px] text-gray-600 hover:text-white uppercase tracking-widest border-b border-transparent hover:border-[#a855f7] transition-all pb-1"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* OVERLAY MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main
        id="meta-right-panel"
        className="flex-1 h-full overflow-y-auto relative p-8 md:p-16 lg:p-24 scroll-smooth bg-[#0a0a0a]"
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
        <div className="fixed top-0 right-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
          <h1 className="font-bebas text-[25vw] text-white opacity-[0.015] select-none tracking-tighter">
            {activeProject ? "[MANIFEST]" : "ARCHIVE"}
          </h1>
        </div>
      </main>
    </motion.div>
  );
};

export default MetaView;
