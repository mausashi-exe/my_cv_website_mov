/*
LayoutContext - Hydraulic Layout State Management
Derives layout mode from URL path (source of truth).
*/
import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";

const LayoutContext = createContext();

// Responsive width configurations for each mode
const WIDTH_CONFIGS = {
  terminal: { left: "20%", center: "60%", right: "20%" },
  engineer: { left: "15%", center: "65%", right: "20%" },
  creator: { left: "15%", center: "55%", right: "30%" },
  meta: { left: "10%", center: "90%", right: "0%" },
};

export const LayoutProvider = ({ children }) => {
  const location = useLocation();

  // Derive layout mode from URL (single source of truth)
  const layoutMode = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith("/blueprint")) return "engineer";
    if (path.startsWith("/lore")) return "creator";
    if (path.startsWith("/meta")) return "meta";
    return "terminal";
  }, [location.pathname]);

  const value = useMemo(
    () => ({
      layoutMode,
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
  if (!context) throw new Error("useLayout requires LayoutProvider");
  return context;
};
