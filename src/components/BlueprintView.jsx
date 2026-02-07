import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/images/main_icon.webp";
import { ENGINEER_DATA, SKILLS, TOOLS } from "../data/EngineerData.jsx";
import CommLink from "./CommLink";

const SkillBar = ({ label, level }) => (
  <div className="mb-4">
    <div className="flex justify-between text-[10px] font-code text-gray-500 mb-1 uppercase tracking-wider">
      <span className="font-archivo text-gray-400">{label}</span>
      <span className="font-code text-[#ff4425]">{level}%</span>
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
  const accent = "text-[#ff4425]";
  const bgAccent = "bg-[#ff4425]";

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // FIX 1: Usar h-full en lugar de min-h-screen para evitar sumar altura extra al layout
      className="flex flex-col md:flex-row h-full w-full bg-[#050505] text-[#e0e0e0] selection:bg-[#ff4425] selection:text-white overflow-hidden"
    >
      {/* SIDEBAR */}
      <aside
        className="
        w-full md:w-1/3 lg:w-[400px] 
        border-b-2 md:border-b-0 md:border-r border-white/10 
        flex flex-col 
        h-full /* FIX 2: Altura completa del padre, no de la pantalla */
        bg-[#080808] relative z-20 shadow-2xl
      "
      >
        {/* overflow-y-auto aquí para que el scroll sea interno */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pt-12 px-8 pb-24">
          <div className="mb-10 bg-[#0a0a0a] p-1 border border-white/10 shadow-2xl group">
            <div className="w-full aspect-square mb-4 overflow-hidden border border-white/5 relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
            </div>

            <div className="p-3">
              <h1
                className={`font-bebas text-5xl leading-none mb-1 text-white tracking-wide`}
              >
                MAURICIO
                <br />
                <span className={accent}>OLVERA</span>
              </h1>
              <p className="font-archivo text-[10px] uppercase tracking-widest text-gray-500 flex justify-between">
                <span>Full Stack Engineer</span>
                <span className="text-[#ff4425]">[MX-01]</span>
              </p>
            </div>
          </div>

          <div className="mb-8 p-4 bg-red-900/5 border-l-2 border-[#ff4425]/50">
            <p className="font-code text-[11px] leading-relaxed text-gray-400">
              <strong className="text-[#ff4425] block mb-2 font-archivo uppercase tracking-widest">
                /// SYSTEM_BIO_LOADED
              </strong>
              Ingeniero creativo especializado en construir arquitecturas
              escalables e interfaces inmersivas. Transformo lógica compleja en
              experiencias de usuario fluidas.
            </p>

            <a
              href="https://github.com/mausashi-exe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full py-3 bg-[#ff4425]/10 border border-[#ff4425]/30 text-center font-code text-[10px] text-[#ff4425] uppercase hover:bg-[#ff4425] hover:text-black transition-all duration-300"
            >
              View GitHub Profile &rarr;
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3
                className={`font-archivo text-xs font-bold uppercase mb-4 border-b border-white/10 pb-2 text-white flex justify-between`}
              >
                <span>Core_Stack</span>
                <span className="text-[#ff4425] animate-pulse">●</span>
              </h3>
              {SKILLS.map((skill, i) => (
                <SkillBar key={i} label={skill.label} level={skill.level} />
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-archivo text-xs font-bold uppercase mb-2 text-white flex justify-between">
                <span>Live_System_Link</span>
                <span className="text-[#ff4425] animate-pulse">● REC</span>
              </h3>
              <p className="font-code text-[9px] text-gray-500 mb-2">
                Conexión directa vía WebSockets (Dockerizado).
              </p>
              <CommLink />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN LOG */}
      {/* FIX 3: h-full */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative scrollbar-hide bg-[#0a0a0a]">
        <div className="pt-12 px-8 md:px-12 pb-8 border-b border-white/10 flex justify-between items-end bg-[#0a0a0a] sticky top-0 z-30">
          <div>
            <h1 className="font-bebas text-6xl md:text-8xl tracking-tight leading-none text-white">
              ENGINEER<span className={accent}>_</span>LOG
            </h1>
            <span className="font-code text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 block">
              Deployments & Repositories // V.24
            </span>
          </div>
          <div className="hidden md:block font-code text-[10px] text-[#ff4425]/50 text-right leading-tight">
            STATUS: ONLINE
            <br />
            PORT: 3000
            <br />
            ENV: PROD
          </div>
        </div>

        <div className="w-full pb-32">
          <div className="hidden md:grid grid-cols-12 border-b border-white/10 bg-[#0f0f0f] text-gray-500 sticky top-[180px] z-20">
            <div className="col-span-1 p-3 border-r border-white/10 font-bold font-archivo text-[9px] uppercase text-center">
              ID
            </div>
            <div className="col-span-9 p-3 border-r border-white/10 font-bold font-archivo text-[9px] uppercase">
              PROJECT_MANIFEST
            </div>
            <div className="col-span-2 p-3 font-bold font-archivo text-[9px] uppercase text-center">
              YEAR
            </div>
          </div>

          {ENGINEER_DATA.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={index}
                className="group border-b border-white/10 bg-[#0a0a0a] transition-all duration-300"
              >
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`grid grid-cols-1 md:grid-cols-12 cursor-pointer transition-colors duration-300 ${isExpanded ? "bg-[#ff4425]/10" : "hover:bg-white/5"}`}
                >
                  <div className="col-span-1 border-r border-white/10 p-6 md:p-4 flex items-center justify-center font-code text-gray-500 text-xs font-bold">
                    {isExpanded ? (
                      <span className="text-[#ff4425]">▼</span>
                    ) : (
                      <span>{item.id.split("_")[1]}</span>
                    )}
                  </div>

                  <div className="col-span-1 md:col-span-9 border-r border-white/10 p-6 md:p-4 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-2">
                      <h2
                        className={`font-bebas text-3xl md:text-4xl tracking-wide text-white ${isExpanded ? "text-[#ff4425]" : "group-hover:text-gray-200"}`}
                      >
                        {item.title}
                      </h2>
                      <span className="font-archivo text-[9px] bg-white/10 px-2 py-0.5 rounded-sm text-gray-400 border border-white/5 uppercase tracking-wide">
                        {item.client}
                      </span>
                    </div>
                    <p className="font-code text-[11px] md:text-xs text-gray-500 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="col-span-1 md:col-span-2 p-4 flex items-center justify-center border-t md:border-t-0 border-white/10">
                    <span className="font-code text-xs text-gray-600 group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-[#050505]"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-red-900/30">
                        <div className="hidden md:block col-span-1 border-r border-white/5 bg-black/50"></div>

                        <div className="col-span-11 p-6 md:p-8">
                          <div className="flex flex-col xl:flex-row gap-8">
                            <div className="w-full xl:w-2/3">
                              <div className="flex items-center justify-between mb-0 bg-[#111] px-4 py-2 border border-white/10 border-b-0 rounded-t-sm">
                                <span className="font-archivo text-[9px] text-[#ff4425] font-bold uppercase tracking-wider">
                                  /// {item.title}_SOURCE.js
                                </span>
                                <div className="flex gap-1.5">
                                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                </div>
                              </div>
                              <div className="bg-[#0c0c0c] p-4 rounded-b-sm border border-white/10 font-code text-[10px] md:text-xs text-gray-400 overflow-x-auto shadow-inner">
                                <pre>
                                  <code>{item.codeSnippet}</code>
                                </pre>
                              </div>
                            </div>

                            <div className="w-full xl:w-1/3 flex flex-col justify-between gap-6">
                              <div>
                                <span className="font-archivo text-[9px] text-gray-600 font-bold uppercase block mb-3 tracking-widest">
                                  Stack Used:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {item.tech.map((t, i) => (
                                    <span
                                      key={i}
                                      className="font-code text-[10px] text-[#ff4425] bg-red-900/10 px-2 py-1 border border-red-900/30"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col gap-3">
                                {item.liveLink !== "#" && (
                                  <a
                                    href={item.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-archivo font-bold text-xs uppercase tracking-widest hover:bg-[#ff4425] hover:text-white transition-all"
                                  >
                                    <span>Live Demo</span>
                                    <span className="font-code text-[10px]">
                                      ↗
                                    </span>
                                  </a>
                                )}

                                <a
                                  href={item.repoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 text-white font-archivo font-bold text-xs uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all"
                                >
                                  <span>GitHub Repo</span>
                                  <span className="font-code text-[10px]">
                                    &lt;/&gt;
                                  </span>
                                </a>
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

          <div className="w-full p-8 md:p-12 mt-12 opacity-[0.03] pointer-events-none text-right">
            <h3 className="font-bebas text-[15vw] leading-none select-none text-white">
              ENG.
            </h3>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default BlueprintView;
