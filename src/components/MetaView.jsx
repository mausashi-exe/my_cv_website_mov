import React from "react";
import { motion } from "framer-motion";

const MetaView = ({ setMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-full w-full pb-12 pt-12 md:pt-4"
    >
      {/* GRID LAYOUT: Estilo página de Cómic */}
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* --- HEADER PANEL (Identity) --- */}
        <div className="md:col-span-12 border-b-4 border-lava pb-4 mb-4 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h1 className="font-thick text-5xl md:text-8xl uppercase leading-none text-bone tracking-tighter">
              MAURICIO<span className="text-lava">OLVERA</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-2 font-mono text-xs text-lava/80">
              <span>@identity: UX_UI_ARCHITECT</span>
              <span className="hidden md:inline">|</span>
              <span>@location: VERACRUZ, MX</span>
              <span className="hidden md:inline">|</span>
              <span>@version: 2.0.26</span>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-display text-4xl font-bold opacity-20">CV.sys</p>
          </div>
        </div>

        {/* --- PANEL 1: THE HYBRID ENGINE (Core Logic Abstract) --- */}
        <div className="md:col-span-8 mech-panel min-h-[250px] flex flex-col justify-between group">
          <div className="corner-accent top-0 left-0"></div>
          <div className="corner-accent top-0 right-0 rotate-90"></div>

          <div>
            <h3 className="font-display text-2xl text-lava mb-4">
              CORE_LOGIC // SUMMARY
            </h3>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-bone/90 border-l-2 border-bone/20 pl-6">
              "Fusión de lenguajes visuales, mitología y lógica estructural."
            </p>
            <p className="font-sans text-sm mt-4 text-bone/60 max-w-lg">
              Desarrollador Junior UX/UI con background en Ingeniería en
              Energías Sustentables. Status actual:{" "}
              <span className="text-lava font-bold">
                Open_for_Opportunities
              </span>
              .
            </p>
          </div>

          {/* Diagrama Decorativo CSS */}
          <div className="w-full h-1 bg-bone/20 mt-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3/4 h-full bg-lava/50"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-full bg-bone/50"></div>
            <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-void border border-lava"></div>
          </div>
        </div>

        {/* --- PANEL 2: LANGUAGES (Stats) --- */}
        <div className="md:col-span-4 mech-panel flex flex-col justify-center">
          <h4 className="font-mono text-xs text-lava mb-4 uppercase">
            /// COMMUNICATION_MODULES
          </h4>
          <ul className="space-y-4 font-display text-lg">
            <li className="flex justify-between border-b border-bone/10 pb-2">
              <span>ENGLISH</span>{" "}
              <span className="text-lava">NATIVE/PROF.</span>
            </li>
            <li className="flex justify-between border-b border-bone/10 pb-2">
              <span>SPANISH</span> <span className="text-lava">NATIVE</span>
            </li>
            <li className="flex justify-between border-b border-bone/10 pb-2">
              <span>DOCS</span> <span className="text-lava">WRITE/READ</span>
            </li>
          </ul>
        </div>

        {/* --- PANEL 3: CORE LOGIC (Skills) --- */}
        <div className="md:col-span-6 mech-panel">
          <div className="corner-accent bottom-0 left-0 -rotate-90"></div>

          <h3 className="font-display text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-bone"></span> SYSTEM_SKILLS
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-xs text-lava mb-2">[ FRONTEND ]</p>
              <ul className="font-sans text-sm space-y-1 font-bold text-bone/80">
                <li>React.js</li>
                <li>Vite</li>
                <li>Tailwind CSS v4</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-lava mb-2">[ DESIGN_SYS ]</p>
              <ul className="font-sans text-sm space-y-1 font-bold text-bone/80">
                <li>Photoshop (Expert)</li>
                <li>Illustrator (Prolific)</li>
                <li>Industrial Brutalism</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-lava mb-2">[ ENG_LOGIC ]</p>
              <ul className="font-sans text-sm space-y-1 font-bold text-bone/80">
                <li>System Efficiency</li>
                <li>Logical Solving</li>
                <li>Sust. Architecture</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-lava mb-2">[ TOOLS ]</p>
              <ul className="font-sans text-sm space-y-1 font-bold text-bone/80">
                <li>Git / Bash</li>
                <li>Linux Server Mgmt</li>
                <li>Adobe Creative Cloud</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- PANEL 4: SYSTEM EXPERIENCE (Work History) --- */}
        <div className="md:col-span-6 mech-panel">
          <div className="corner-accent bottom-0 right-0 rotate-180"></div>

          <h3 className="font-display text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-lava"></span> FIELD_DATA
          </h3>

          <div className="space-y-6">
            {/* Job 1 */}
            <div className="flex gap-4 items-start group">
              <span className="font-mono text-xs text-lava mt-1 group-hover:text-bone transition-colors">
                01
              </span>
              <div>
                <h4 className="font-bold text-bone">
                  VERIZON // Tech Support Spc.
                </h4>
                <p className="text-xs opacity-70 mt-1">
                  Diagnóstico avanzado de hardware/software. Entorno 100% nativo
                  inglés. Resolución de conflictos bajo alta presión.
                </p>
              </div>
            </div>

            {/* Job 2 */}
            <div className="flex gap-4 items-start group">
              <span className="font-mono text-xs text-lava mt-1 group-hover:text-bone transition-colors">
                02
              </span>
              <div>
                <h4 className="font-bold text-bone">VALENZUELA RENTALS</h4>
                <p className="text-xs opacity-70 mt-1">
                  Gestión logística de activos y mantenimiento de
                  infraestructura física. Optimización de recursos con lógica
                  ingenieril.
                </p>
              </div>
            </div>

            {/* Job 3 */}
            <div className="flex gap-4 items-start group">
              <span className="font-mono text-xs text-lava mt-1 group-hover:text-bone transition-colors">
                03
              </span>
              <div>
                <h4 className="font-bold text-bone">
                  CINE & MEDIA // Art Assistant
                </h4>
                <p className="text-xs opacity-70 mt-1">
                  Ejecución visual y asistencia estética en sets profesionales.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-bone/10 my-4"></div>

            {/* Education */}
            <div className="flex gap-4 items-start group">
              <span className="font-mono text-xs text-lava mt-1">EDU</span>
              <div>
                <h4 className="font-bold text-bone">
                  UDLAP // B.S. Sustainable Energy
                </h4>
                <p className="text-xs opacity-70 mt-1">
                  6to Semestre completado. Enfoque en eficiencia y sistemas
                  lógicos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- PANEL 5: PROJECTS VAULT (Footer) --- */}
        <div className="md:col-span-12 mt-4 bg-lava text-void p-8 flex flex-col md:flex-row justify-between items-center clip-path-slant">
          <div>
            <h2 className="font-thick text-3xl uppercase">
              PROJECT: NOMOS_SAGA (v0.5)
            </h2>
            <p className="font-mono text-sm max-w-xl mt-2">
              Sistema de world-building (28 págs). Fusión de lenguajes visuales
              y lógica estructural.
            </p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0 font-display font-bold text-xl underline decoration-void">
            <a
              href="mailto:tuemail@gmail.com"
              className="hover:text-white transition-colors"
            >
              EMAIL
            </a>
            <a
              href="https://github.com/mausashi-exe/my_cv_website_mov"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              REPO
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MetaView;
