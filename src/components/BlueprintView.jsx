import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/main_icon.jpg"; // Asegúrate de tener tu foto aquí

const WORK_ITEMS = [
  {
    id: "01",
    title: "SYSTEM_ARCH",
    client: "INT_CORP",
    description: "Diagnóstico avanzado de infraestructura. Resolución crítica bajo protocolos de alta presión.",
    tech: ["NET_OPS", "AWS", "LINUX"],
    year: "2023",
    link: "#",
  },
  {
    id: "02",
    title: "ASSET_LOGIC",
    client: "PRIVATE",
    description: "Optimización de recursos mediante aplicación de lógica de ingeniería en gestión inmobiliaria.",
    tech: ["LOGISTICS", "MATH_MODEL", "MGMT"],
    year: "2024",
    link: "#",
  },
  {
    id: "03",
    title: "VISUAL_ENG",
    client: "MEDIA_ARTS",
    description: "Ejecución técnica en sets profesionales. Integridad visual y continuidad narrativa.",
    tech: ["LIGHTING", "CAM_OP", "SET_DESIGN"],
    year: "2022",
    link: "#",
  },
];

const BlueprintView = ({ setMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // FONDO: Blanco Humo (Industrial Clean)
      className="flex flex-col md:flex-row min-h-screen w-full bg-[#F4F4F4] text-[#1a1a1a] font-mono selection:bg-[#2563EB] selection:text-white"
    >
      
      {/* =================================================================================
          COLUMNA IZQUIERDA: CV / INFO
          Padding ajustado: pt-28 (Top) pb-24 (Bottom) para no chocar con el HUD
      ================================================================================= */}
      <aside className="w-full md:w-1/3 lg:w-[400px] border-b-2 md:border-b-0 md:border-r border-[#e5e5e5] flex flex-col overflow-y-auto scrollbar-hide h-screen">
        
        <div className="pt-28 px-8 pb-24 flex flex-col h-full">
          
          {/* FOTO Y NOMBRE */}
          <div className="mb-10 bg-white p-4 border border-[#e5e5e5] shadow-sm">
            <div className="w-full aspect-square mb-4 overflow-hidden grayscale contrast-125 border border-[#e5e5e5]">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Nombre en Azul Técnico */}
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1 text-[#2563EB]">
              MAURICIO<br/>OLVERA
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Creative Engineer // SysAdmin
            </p>
          </div>

          {/* BIO */}
          <div className="mb-8 text-xs font-medium leading-relaxed text-justify text-gray-600">
             <span className="text-[#2563EB] font-bold">[BIO_DATA]:</span> Ingeniero creativo enfocado en la intersección entre sistemas lógicos y narrativa visual. Especialista en resolver problemas complejos mediante rigurosidad técnica.
          </div>

          {/* HABILIDADES */}
          <div className="space-y-8">
            
            {/* Sección 1 */}
            <div>
               <h3 className="text-sm font-black uppercase mb-3 border-b border-[#2563EB] text-[#2563EB] inline-block">
                 Logic & Technical
               </h3>
               <ul className="text-xs font-bold space-y-2 list-none text-gray-700">
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2563EB]"></span> LOGICAL REASONING
                 </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2563EB]"></span> SYSTEM ARCHITECTURE
                 </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2563EB]"></span> PROBLEM SOLVING
                 </li>
               </ul>
            </div>

            {/* Sección 2 */}
            <div>
               <h3 className="text-sm font-black uppercase mb-3 border-b border-[#2563EB] text-[#2563EB] inline-block">
                 Tech Stack
               </h3>
               <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                 {["REACT", "NODE.JS", "PYTHON", "LINUX", "AWS"].map((skill) => (
                    <span key={skill} className="border border-[#e5e5e5] px-2 py-1 bg-white text-gray-600">
                        {skill}
                    </span>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </aside>

      {/* =================================================================================
          COLUMNA DERECHA: ENGINEER LOG
          Padding ajustado: pt-28 (Top) para dejar espacio al botón BACK y Titulo
      ================================================================================= */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative scrollbar-hide">
        
        {/* HEADER SIMPLE (Sin botón, solo título) */}
        {/* pt-28 asegura que el título empiece abajo del HUD Top-Right */}
        <div className="pt-28 px-8 md:px-12 pb-8 border-b border-[#e5e5e5]">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#1a1a1a]">
              ENGINEER<span className="text-[#2563EB]">_</span>LOG
            </h1>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mt-2 block">
                System Status: Nominal // V.24
            </span>
        </div>

        {/* LISTADO DE PROYECTOS */}
        <div className="w-full pb-32">
          
          {/* LABELS TABLA */}
          <div className="hidden md:grid grid-cols-12 border-b border-[#e5e5e5] bg-[#fafafa] text-gray-400">
            <div className="col-span-2 p-3 border-r border-[#e5e5e5] font-bold text-[9px] uppercase">ID_REF</div>
            <div className="col-span-8 p-3 border-r border-[#e5e5e5] font-bold text-[9px] uppercase">TECHNICAL_BRIEF</div>
            <div className="col-span-2 p-3 font-bold text-[9px] uppercase">ACTION</div>
          </div>

          {/* ITEMS LOOP */}
          {WORK_ITEMS.map((item, index) => (
            <div key={index} className="group grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5] hover:bg-white transition-colors duration-200">
              
              {/* ID */}
              <div className="col-span-1 md:col-span-2 border-b md:border-b-0 md:border-r border-[#e5e5e5] p-6 md:p-8 flex flex-col justify-start">
                 <span className="font-black text-xl text-[#2563EB]">{item.id}</span>
                 <span className="font-bold text-[10px] text-gray-400 mt-1">{item.year}</span>
              </div>

              {/* CONTENIDO */}
              <div className="col-span-1 md:col-span-8 border-b md:border-b-0 md:border-r border-[#e5e5e5] p-6 md:p-8 flex flex-col justify-between">
                <div className="mb-6">
                  <h2 className="text-2xl font-black uppercase tracking-tight leading-none mb-2 text-[#1a1a1a] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h2>
                  <span className="font-medium text-[10px] uppercase text-gray-400 tracking-widest">
                    CLT: {item.client}
                  </span>
                  <p className="text-sm font-medium leading-relaxed mt-4 text-gray-600 max-w-2xl">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 border border-[#e5e5e5] text-[9px] font-bold uppercase bg-[#fafafa] text-gray-500">
                        {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINK / ACTION */}
              <div className="col-span-1 md:col-span-2 p-6 md:p-8 flex items-center justify-center md:justify-start">
                 <a href={item.link} className="w-full text-center border border-[#1a1a1a] text-[#1a1a1a] px-4 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all">
                    View Data
                 </a>
              </div>
            </div>
          ))}

          {/* FOOTER DECORATIVO DERECHA */}
           <div className="w-full p-8 md:p-12 mt-12 opacity-10 pointer-events-none text-right">
                <h3 className="font-black text-[10vw] leading-none select-none text-[#1a1a1a]">
                  ENG.
                </h3>
           </div>

        </div>
      </main>
    </motion.div>
  );
};

export default BlueprintView;