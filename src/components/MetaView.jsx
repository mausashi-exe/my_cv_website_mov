import React from "react";
import { motion } from "framer-motion";

const MetaView = ({ setMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-full w-full p-6 md:p-12 bg-void text-white"
    >
      <div className="max-w-7xl mx-auto border-t-4 border-meta-accent pt-6 pb-24">
        {/* --- HEADER: BIG TYPOGRAPHY --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-meta-dim pb-8">
          <div>
            <h1 className="font-thick text-6xl md:text-9xl uppercase leading-none tracking-tighter text-white">
              MAURICIO
            </h1>
            <h1 className="font-thick text-6xl md:text-9xl uppercase leading-none tracking-tighter text-meta-accent">
              OLVERA
            </h1>
          </div>
          <div className="mt-8 md:mt-0 text-right">
            <p className="font-display text-sm md:text-lg tracking-widest text-meta-accent mb-2">
              UX / UI / ENGINEER
            </p>
            <p className="font-mono text-xs text-white/60">
              SALTILLO, MEXICO (REMOTE)
            </p>
            <div className="mt-4 inline-block px-4 py-2 border border-meta-accent text-meta-accent text-xs font-bold uppercase hover:bg-meta-accent hover:text-void transition-colors cursor-pointer">
              Available for Hire
            </div>
          </div>
        </div>

        {/* --- MAIN GRID: BRUTALIST CV --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* COLUMN 1: SIDEBAR INFO */}
          <div className="md:col-span-4 space-y-12">
            {/* Contact */}
            <div>
              <h3 className="font-mono text-xs text-meta-accent mb-4 uppercase tracking-widest">
                /// Connect
              </h3>
              <ul className="space-y-2 font-display text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-meta-accent border-b border-white/20 pb-1 block"
                  >
                    Email Me -
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-meta-accent border-b border-white/20 pb-1 block"
                  >
                    GitHub Profile -
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-meta-accent border-b border-white/20 pb-1 block"
                  >
                    LinkedIn -
                  </a>
                </li>
              </ul>
            </div>

            {/* Hard Skills */}
            <div>
              <h3 className="font-mono text-xs text-meta-accent mb-4 uppercase tracking-widest">
                /// Toolkit
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Tailwind",
                  "Vite",
                  "Figma",
                  "Photoshop",
                  "Git",
                  "Linux",
                  "Logic",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-white/20 text-xs font-bold hover:border-meta-accent hover:text-meta-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-mono text-xs text-meta-accent mb-4 uppercase tracking-widest">
                /// Languages
              </h3>
              <ul className="space-y-2 text-sm font-bold">
                <li className="flex justify-between">
                  <span>ENGLISH</span>{" "}
                  <span className="text-meta-accent">NATIVE</span>
                </li>
                <li className="flex justify-between">
                  <span>SPANISH</span>{" "}
                  <span className="text-meta-accent">NATIVE</span>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 2: MAIN EXPERIENCE */}
          <div className="md:col-span-8 border-l border-meta-dim pl-0 md:pl-12 space-y-16">
            {/* Profile Summary */}
            <div>
              <h3 className="font-mono text-xs text-meta-accent mb-6 uppercase tracking-widest">
                /// Profile_Synthesis
              </h3>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-white/90">
                "Ingeniería lógica y narrativa visual no son opuestos. Soy un
                perfil híbrido capaz de construir arquitecturas escalables y
                diseñar experiencias inmersivas."
              </p>
            </div>

            {/* Experience List */}
            <div>
              <h3 className="font-mono text-xs text-meta-accent mb-8 uppercase tracking-widest">
                /// Work_History
              </h3>

              <div className="space-y-12">
                {/* Job Item */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="font-thick text-3xl uppercase group-hover:text-meta-accent transition-colors">
                      Verizon
                    </h4>
                    <span className="font-mono text-xs text-white/50">
                      Tech Support Specialist
                    </span>
                  </div>
                  <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
                    Diagnóstico avanzado de hardware y software en un entorno
                    100% nativo inglés. Resolución de conflictos técnicos
                    críticos bajo protocolos de alta presión.
                  </p>
                </div>

                {/* Job Item */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="font-thick text-3xl uppercase group-hover:text-meta-accent transition-colors">
                      Valenzuela Rentals
                    </h4>
                    <span className="font-mono text-xs text-white/50">
                      Property Management
                    </span>
                  </div>
                  <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
                    Gestión logística de activos y mantenimiento de
                    infraestructura física. Optimización de recursos mediante la
                    aplicación de lógica de ingeniería.
                  </p>
                </div>

                {/* Job Item */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="font-thick text-3xl uppercase group-hover:text-meta-accent transition-colors">
                      Cine & Media
                    </h4>
                    <span className="font-mono text-xs text-white/50">
                      Art Assistant
                    </span>
                  </div>
                  <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
                    Ejecución visual y asistencia estética en sets
                    profesionales, asegurando la integridad visual de la
                    narrativa.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects / Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-meta-dim">
              <div>
                <h3 className="font-mono text-xs text-meta-accent mb-4 uppercase tracking-widest">
                  /// Education
                </h3>
                <p className="font-bold text-lg">UDLAP</p>
                <p className="text-sm opacity-70">
                  B.S. Sustainable Energy Engineering
                </p>
                <p className="text-xs opacity-50 mt-1">
                  6th Semester Completed
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-meta-accent mb-4 uppercase tracking-widest">
                  /// Key Project
                </h3>
                <p className="font-bold text-lg">NOMOS_SAGA (v0.5)</p>
                <p className="text-sm opacity-70">
                  World-building system development.
                </p>
                <a
                  href="#"
                  className="text-xs text-meta-accent underline mt-1 block"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MetaView;
