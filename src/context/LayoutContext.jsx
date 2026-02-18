/*
Layout State Machine
Intent:
- Centralize all viewport geometry logic
- Prevent impossible layout states
- Provide "The Brain" for hydraulic transitions
*/
import React, { createContext, useContext, useState, useMemo } from "react";

const LayoutContext = createContext();

// --- 1. THE GEOMETRY MATRIX ---
// Defines the exact "Mechanical Settings" for each mode.
const WIDTH_CONFIGS = {
  // Terminal/Home: Balanced Dashboard
  terminal: {
    left: "20%",
    center: "60%",
    right: "20%",
  },
  // Engineer/Blueprint: Wide center for Code reading
  blueprint: {
    left: "15%",
    center: "65%",
    right: "20%",
  },
  // Creator/Lore: Focused reading with optional metadata
  lore: {
    left: "15%",
    center: "55%",
    right: "30%",
  },
  // Meta/Gallery: Full visual focus
  meta: {
    left: "10%",
    center: "90%",
    right: "0%",
  },
};

export const LayoutProvider = ({ children }) => {
  // Default to 'terminal' mode
  const [layoutMode, setLayoutMode] = useState("terminal");

  const value = useMemo(
    () => ({
      layoutMode,
      setLayoutMode,
      currentWidths: WIDTH_CONFIGS[layoutMode] || WIDTH_CONFIGS.terminal,
    }),
    [layoutMode],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
