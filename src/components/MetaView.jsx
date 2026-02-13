import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { META_PROJECTS, CONTACT_INFO } from "../data/metaPortfolioData";
import arrowIcon from "../assets/images/arrow_pointing_left_up.svg";
import profilePic from "../assets/images/main_icon.webp";

const ACCENT = "text-[#a855f7]";
const BORDER_ACCENT = "border-[#a855f7]";
const HOVER_TEXT_ACCENT = "hover:text-[#a855f7]";

// --- COMPONENTES DE APOYO ---

const HybridHeader = () => (
  <div className="mb-8 md:mb-12 border-b border-white/5 pb-6">
    <h1 className="text-5xl md:text-6xl leading-none select-none">
      <span className="font-bebas text-gray-200 tracking-wide">META</span>
      <span
        className={`font-maguntia ${ACCENT} ml-3 tracking-normal drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]`}
      >
        Creator
      </span>
    </h1>
    <p className="font-code text-[9px] text-gray-600 mt-3 uppercase tracking-[0.4em]">
      System_Archive // V.2.0
    </p>
  </div>
);

const ImageViewer = ({ image, title, index, onClose }) => {
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
        className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/5"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
};

const ArtifactFrame = ({ img, index, onClick }) => (
  <div
    onClick={onClick}
    className="group relative aspect-square bg-[#0d0d0d] border border-white/10 p-2 overflow-hidden cursor-zoom-in hover:border-[#a855f7]/40 transition-all duration-500"
  >
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#a855f7]/60" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#a855f7]/60" />
    <img
      src={img}
      alt=""
      loading="lazy"
      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
    />
    <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="font-code text-[8px] text-[#a855f7] bg-black/80 px-1.5 py-0.5 border border-[#a855f7]/30">
        REF_0{index + 1}
      </span>
    </div>
  </div>
);

// --- SECCIONES PRINCIPALES ---

const GalleryFeed = ({ onSelect }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-48 pb-40 max-w-5xl mx-auto"
  >
    {META_PROJECTS.map((project) => (
      <div key={project.id} className="group flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
          <div className="space-y-2">
            <span className="font-code text-[10px] text-[#a855f7] tracking-[.3em] uppercase">
              Manifest_{project.id}
            </span>
            <h3 className="font-cinzel text-4xl md:text-5xl text-gray-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => onSelect(project)}
            className="font-code text-[10px] uppercase tracking-widest border border-white/10 px-6 py-3 hover:bg-[#a855f7] hover:text-black transition-all duration-300"
          >
            Open_Manifest +
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ArtifactFrame
            img={project.cover}
            index={0}
            onClick={() => onSelect(project)}
          />
          <ArtifactFrame
            img={project.gallery[0]}
            index={1}
            onClick={() => onSelect(project)}
          />
        </div>
        <p className="font-code text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed italic border-l border-white/10 pl-6">
          {project.description}
        </p>
      </div>
    ))}
  </motion.div>
);

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
        exit={{ opacity: 0 }}
        className="pb-40 relative max-w-7xl mx-auto"
      >
        <div className="sticky top-0 flex justify-end z-50 py-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
          <button
            onClick={onBack}
            className={`bg-[#0a0a0a]/90 border border-[#a855f7]/30 px-8 py-3 rounded-full ${ACCENT} hover:bg-[#a855f7] hover:text-black transition-all flex items-center gap-4 font-code text-[10px] font-bold uppercase tracking-widest shadow-2xl`}
          >
            RETURN_TO_ARCHIVE <img src={arrowIcon} alt="" className="w-3 h-3" />
          </button>
        </div>

        <div className="mb-24 border-b border-white/10 pb-16">
          <h2 className="font-cinzel text-6xl md:text-8xl text-white mb-10 leading-tight uppercase tracking-tighter">
            {project.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <span
                className={`font-code text-[10px] ${ACCENT} uppercase tracking-widest block`}
              >
                Technical_Data
              </span>
              <ul className="font-code text-[11px] text-gray-500 space-y-3 uppercase">
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
            <ArtifactFrame
              key={idx}
              img={img}
              index={idx}
              onClick={() => setSelectedImgIndex(idx)}
            />
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-white/10">
          <button
            onClick={() => onNext(nextProject)}
            className="group border border-white/10 bg-[#0d0d0d] p-16 text-center hover:border-[#a855f7]/50 transition-all w-full shadow-2xl"
          >
            <span className="font-code text-[9px] text-gray-600 uppercase tracking-[0.4em] mb-4 block">
              Next_Manifest
            </span>
            <h3 className="font-cinzel text-4xl text-gray-300 group-hover:text-white transition-colors uppercase">
              {nextProject.title}
            </h3>
          </button>
        </div>
      </motion.div>
    </>
  );
};

// --- COMPONENTE PRINCIPAL ---

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
      {/* SIDEBAR */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={window.innerWidth < 768 ? { x: "-100%" } : { x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-y-0 left-0 z-50 w-[85%] md:w-1/3 lg:w-[380px] md:static bg-[#080808] border-r border-white/5 flex flex-col shadow-2xl h-full"
          >
            <div className="p-10 h-full flex flex-col justify-between overflow-y-auto scrollbar-hide">
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <HybridHeader />
                  <button
                    className="md:hidden text-3xl p-4 -mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ×
                  </button>
                </div>

                <div className="relative w-20 h-20 group mx-auto md:mx-0">
                  <div className="absolute inset-0 border border-[#a855f7]/40 rounded-full animate-spin-slow group-hover:border-[#a855f7] transition-colors" />
                  <div className="w-full h-full rounded-full overflow-hidden p-1">
                    <img
                      src={profilePic}
                      alt="Mauricio"
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </div>

                <nav className="space-y-2">
                  <span className="font-code text-[8px] text-gray-600 uppercase tracking-[.4em] block mb-6 px-4">
                    Directory_Index
                  </span>
                  {META_PROJECTS.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveProject(p);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-4 px-4 flex items-center justify-between transition-all group border-b border-white/5 ${activeProject?.id === p.id ? "bg-[#a855f7]/5" : "hover:bg-white/5"}`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-code text-[9px] text-[#a855f7] opacity-60">
                          0{i + 1}
                        </span>
                        <span
                          className={`font-cinzel text-sm tracking-widest ${activeProject?.id === p.id ? "text-white" : "text-gray-500"}`}
                        >
                          {p.title}
                        </span>
                      </div>
                      {activeProject?.id === p.id && (
                        <div className="w-1.5 h-1.5 bg-[#a855f7] animate-pulse rounded-full" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="border-t border-white/5 pt-10 mt-10 space-y-6">
                <div className="flex flex-col gap-2">
                  <span className="font-code text-[8px] text-gray-700 uppercase tracking-widest">
                    Global_Relay
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-code text-xs text-white hover:text-[#a855f7] transition-colors truncate"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex flex-wrap gap-4">
                  {CONTACT_INFO.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-code text-[9px] text-gray-600 hover:text-white uppercase border border-white/10 px-2 py-1 transition-all"
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

      {/* MOBILE TRIGGER */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-[#a855f7] text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
        >
          ≡
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main
        id="meta-right-panel"
        className="flex-1 h-full overflow-y-auto relative p-8 md:p-20 lg:p-32 scroll-smooth bg-[#0a0a0a] border-l border-white/5"
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

        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.02]">
          <h1 className="font-bebas text-[30vw] text-white tracking-tighter uppercase select-none">
            {activeProject ? "Manifest" : "Archive"}
          </h1>
        </div>
      </main>
    </motion.div>
  );
};

export default MetaView;
