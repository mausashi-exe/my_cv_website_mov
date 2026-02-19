import React from "react";
import { LoreEntry } from "../data/lore/types";
import { ALL_LORE } from "../data/lore/index";

export const LoreInfobox = ({ entry }: { entry: LoreEntry }) => {
  // Helper to safely resolve an ID to a Title for rendering
  const resolveId = (id?: string) => {
    if (!id) return null;
    const found = ALL_LORE.find((e) => e.id === id);
    return found ? found.title : id;
  };

  const renderField = (label: string, value: React.ReactNode) => {
    if (!value) return null;
    return (
      <div className="bg-[#111] p-3 border border-white/5 mb-2">
        <span className="block font-code text-[9px] text-gray-500 uppercase mb-1">{label}</span>
        <span className="block font-cormorant text-lg text-gray-200 leading-tight">{value}</span>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col">
      <h4 className="font-cinzel text-sm text-[#d4af37] font-bold mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
        Data Log: {entry.type}
      </h4>
      
      {/* Type-Safe Rendering Matrix */}
      {entry.type === "character" && entry.infobox && (
        <>
          {renderField("Status", entry.infobox.status)}
          {renderField("Allegiance", resolveId(entry.infobox.allegiance))}
        </>
      )}

      {entry.type === "faction" && entry.infobox && (
        <>
          {renderField("Founded", entry.infobox.founded)}
          {renderField("Ideology", entry.infobox.ideology)}
          {renderField("Capital", resolveId(entry.infobox.capital))}
        </>
      )}

      {/* Add switch cases for event, location, artifact as the dataset grows */}

      {/* Universal Meta Fields */}
      {entry.era && renderField("Era", entry.era)}
      {entry.canonical_status && renderField("Archive Status", entry.canonical_status.toUpperCase())}
    </div>
  );
};