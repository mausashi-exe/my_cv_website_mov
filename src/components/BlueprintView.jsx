import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/images/main_icon.webp";
import { ENGINEER_DATA, SKILLS } from "../data/EngineerData.jsx";
import CommLink from "./CommLink";

const SkillBar = ({ label, level }) => (
  <div className="mb-6">
    <div className="flex justify-between text-[10px] font-code text-gray-500 mb-2 uppercase tracking-widest">
      <span className="font-archivo text-gray-400">{label}</span>
      <span className="font-code text-[#ff4425] font-bold">{level}%</span>
    </div>
    <div className="w-full h-1 bg-white/5 overflow-hidden relative border border-white/10">
      <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#000_4px,#000_5px)] opacity-30"></div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-[#ff4425]"
      />
    </div>
  </div>
);

const BlueprintView = ({ setMode }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const accent = "text-[#ff4425]";

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row h-full w-full bg-[#050505] text-[#e0e0e0] selection:bg-[#ff4425] selection:text-white relative"
    >
      <div className="md:hidden w-full px-6 py-4 bg-[#0a0a0a] border-b border-white/10 flex justify-between items-center shrink-0 z-30 sticky top-0">
        <span className="font-bebas text-xl text-white tracking-widest">ENGINEER_LOG</span>
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="text-[#ff4425] border border-[#ff4425]/30 px-3 py-1 rounded-sm font-code font-bold text-xs bg-[#ff4425]/10"
        >
          PROFILE / SKILLS ≡
        </button>
      </div>

      <AnimatePresence>
        {(isMobileSidebarOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={window.innerWidth < 768 ? { x: "-100%" } : { x: 0 }}
            animate={{ x: 0 }}
            exit={window.innerWidth < 768 ? { x: "-100%" } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-[85%] md:w-1/3 lg:w-[400px] md:static border-r border-white/10 flex flex-col shrink-0 bg-[#080808] shadow-2xl h-full"
          >
            <div className="md:hidden p-4 flex justify-end border-b border-white/10">
              <button onClick={() => setIsMobileSidebarOpen(false)} className="text-gray-500 font-code text-xs">[ CLOSE ]</button>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide pt-8 px-8 pb-24 md:pt-12">
              <div className="mb-10 bg-[#0a0a0a] p-1 border border-white/10 shadow-2xl group">
                <div className="w-full aspect-square mb-6 overflow-hidden border border-white/5 relative">
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
                </div>
                <div className="p-4">
                  <h1 className="font-bebas text-5xl leading-none mb-2 text-white tracking-wide">MAURICIO<br /><span className={accent}>OLVERA</span></h1>
                  <p className="font-archivo text-[10px] uppercase tracking-[0.2em] text-gray-500 flex justify-between">
                    <span>Full Stack Engineer</span>
                    <span className="text-[#ff4425]">[MX-01]</span>
                  </p>
                </div>
              </div>

              <div className="mb-10 p-6 bg-red-900/5 border-l-2 border-[#ff4425]/50">
                <p className="font-code text-xs leading-relaxed text-gray-400">
                  <strong className="text-[#ff4425] block mb-2 font-archivo uppercase tracking-widest">/// SYSTEM_BIO_LOADED</strong>
                  Ingeniero creativo especializado en construir arquitecturas escalables y experiencias inmersivas.
                </p>
                <a href="https://github.com/mausashi-exe" target="_blank" rel="noopener noreferrer" className="mt-6 block w-full py-4 bg-[#ff4425]/10 border border-[#ff4425]/30 text-center font-code text-[10px] text-[#ff4425] uppercase font-bold hover:bg-[#ff4425] hover:text-black transition-all duration-300">
                  Access GitHub Repositories &rarr;
                </a>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="font-archivo text-xs font-bold uppercase mb-6 border-b border-white/10 pb-2 text-white flex justify-between tracking-widest">
                    <span>Core_Stack</span>
                    <span className="text-[#ff4425] animate-pulse">●</span>
                  </h3>
                  {SKILLS.map((skill, i) => (
                    <SkillBar key={i} label={skill.label} level={skill.level} />
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h3 className="font-archivo text-xs font-bold uppercase mb-4 text-white flex justify-between tracking-widest">
                    <span>Live_Comm_Link</span>
                    <span className="text-[#ff4425] animate-pulse">● REC</span>
                  </h3>
                  <CommLink />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content optimization */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative scrollbar-hide bg-[#0a0a0a]">
        <div className="pt-12 px-8 md:pt-16 md:px-16 pb-12 border-b border-white/10 flex justify-between items-end bg-[#0a0a0a] sticky top-0 z-20">
          <div>
            <h1 className="font-bebas text-6xl md:text-9xl tracking-tight leading-none text-white">ENGINEER<span className={accent}>_</span>LOG</h1>
            <span className="font-code text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-4 block">Deployment Archive // v.2.0.4</span>
          </div>
          <div className="hidden md:block font-code text-[10px] text-[#ff4425] text-right leading-loose font-bold opacity-60">
            ST: ONLINE <br /> PR: 3000 <br /> EV: PROD
          </div>
        </div>

        <div className="w-full pb-40">
          <div className="hidden md:grid grid-cols-12 border-b border-white/10 bg-[#0f0f0f] text-gray-500 sticky top-[200px] z-20">
            <div className="col-span-1 p-4 border-r border-white/10 font-bold font-archivo text-[9px] uppercase text-center">ID</div>
            <div className="col-span-9 p-4 border-r border-white/10 font-bold font-archivo text-[9px] uppercase px-8">PROJECT_MANIFEST</div>
            <div className="col-span-2 p-4 font-bold font-archivo text-[9px] uppercase text-center">YEAR</div>
          </div>

          {ENGINEER_DATA.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={index} className="group border-b border-white/10 bg-[#0a0a0a] transition-all duration-300">
                <div onClick={() => toggleExpand(item.id)} className={`grid grid-cols-1 md:grid-cols-12 cursor-pointer transition-colors duration-500 ${isExpanded ? "bg-[#ff4425]/10" : "hover:bg-white/5"}`}>
                  <div className="col-span-1 border-r border-white/10 p-8 md:p-4 flex items-center justify-center font-code text-gray-500 text-sm font-bold">
                    {isExpanded ? <span className="text-[#ff4425]">▼</span> : <span>{item.id.split("_")[1]}</span>}
                  </div>

                  <div className="col-span-1 md:col-span-9 border-r border-white/10 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-4">
                      <h2 className={`font-bebas text-4xl md:text-5xl tracking-wide text-white ${isExpanded ? "text-[#ff4425]" : "group-hover:text-gray-200"}`}>{item.title}</h2>
                      <span className="font-archivo text-[10px] bg-white/10 px-3 py-1 rounded-sm text-gray-400 border border-white/5 uppercase tracking-widest font-bold">{item.client}</span>
                    </div>
                    {/* FIX 3: Espacio negativo y límite de lectura */}
                    <p className="font-code text-xs md:text-sm text-gray-500 max-w-prose leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="col-span-1 md:col-span-2 p-6 flex items-center justify-center border-t md:border-t-0 border-white/10 bg-white/5 md:bg-transparent">
                    <span className="font-code text-sm text-gray-500 group-hover:text-white font-bold transition-colors">{item.year}</span>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-[#050505] border-t border-[#ff4425]/30">
                      <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="hidden md:block col-span-1 border-r border-white/5 bg-black/50"></div>
                        <div className="col-span-11 p-8 md:p-16">
                          <div className="flex flex-col xl:flex-row gap-12">
                            <div className="w-full xl:w-2/3">
                              <div className="flex items-center justify-between mb-0 bg-[#111] px-6 py-3 border border-white/10 border-b-0 rounded-t-sm">
                                <span className="font-archivo text-[10px] text-[#ff4425] font-bold uppercase tracking-widest">/// {item.title}_SOURCE.js</span>
                                <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-red-500/50"></div><div className="w-2 h-2 rounded-full bg-yellow-500/50"></div><div className="w-2 h-2 rounded-full bg-green-500/50"></div></div>
                              </div>
                              <div className="bg-[#0c0c0c] p-6 rounded-b-sm border border-white/10 font-code text-xs text-gray-400 overflow-x-auto shadow-inner max-w-[85vw] md:max-w-none">
                                <pre><code>{item.codeSnippet}</code></pre>
                              </div>
                            </div>
                            <div className="w-full xl:w-1/3 flex flex-col justify-between gap-10">
                              <div>
                                <span className="font-archivo text-[10px] text-gray-600 font-bold uppercase block mb-4 tracking-widest">Technology Stack:</span>
                                <div className="flex flex-wrap gap-3">{item.tech.map((t, i) => (<span key={i} className="font-code text-[10px] text-[#ff4425] bg-[#ff4425]/5 px-3 py-1.5 border border-[#ff4425]/20 font-bold uppercase">{t}</span>))}</div>
                              </div>
                              <div className="flex flex-col gap-4">
                                {item.liveLink !== "#" && (<a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black font-archivo font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#ff4425] hover:text-white transition-all shadow-xl"><span>Run Live Demo</span><span className="text-lg">↗</span></a>)}
                                <a href={item.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 border border-white/20 text-white font-archivo font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all"><span>Browse Source</span><span className="font-code font-normal">&lt;/&gt;</span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </main>
    </motion.div>
  );
};

export default BlueprintView;