import { motion } from "framer-motion";
import graph from "../assets/vectors/graph_01.svg"; // Asegúrate de que este archivo exista

export default function BlueprintView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-concrete-800/20 bg-concrete-100/50 backdrop-blur-sm">
      {/* Columna Lateral: Datos Técnicos */}
      <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-concrete-800/20 p-8">
        <h3 className="mb-8 font-mono text-[10px] uppercase tracking-widest text-concrete-400">
          // System_Logs
        </h3>
        <div className="space-y-12">
          <LogEntry
            title="Verizon_Support"
            meta="Technical Lead // English Native"
            desc="Diagnóstico de hardware/software en entornos de alta presión."
          />
          <LogEntry
            title="UDLAP_Engineering"
            meta="Sustainable Energy // Semester 06"
            desc="Lógica de sistemas y arquitectura de eficiencia energética."
          />
          <LogEntry
            title="Rental_Ops"
            meta="Property Management"
            desc="Logística de infraestructura y mantenimiento de activos."
          />
        </div>
      </div>

      {/* Columna Principal: Manifiesto */}
      <div className="col-span-12 md:col-span-8 p-12 md:p-20">
        <img
          src={graph}
          className="mb-12 w-full max-w-xs opacity-20 mix-blend-multiply"
          alt="Technical Graph"
        />
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-concrete-900 mb-8 leading-none">
          Logic <span className="text-concrete-400">&</span> <br /> Structure.
        </h2>
        <p className="max-w-lg border-l-2 border-safety-orange pl-6 py-2 text-sm font-medium uppercase leading-relaxed text-concrete-800">
          "Aplico la rigurosidad de la ingeniería de energías sustentables al
          diseño de interfaces. Si no es eficiente, no es diseño."
        </p>
      </div>
    </div>
  );
}

function LogEntry({ title, meta, desc }) {
  return (
    <div>
      <h4 className="font-bold text-sm uppercase text-concrete-900">{title}</h4>
      <p className="font-mono text-[10px] text-safety-orange uppercase mb-1">
        {meta}
      </p>
      <p className="text-xs text-concrete-600 leading-snug">{desc}</p>
    </div>
  );
}
