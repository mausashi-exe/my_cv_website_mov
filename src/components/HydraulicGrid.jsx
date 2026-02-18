/*
Hydraulic Chassis v2.0 (Senior Grade)
Fixes:
- Enforces 100dvh at root level
- Uses "layout paint" containment (allows sticky headers)
- Removes hardcoded internal widths (True fluid mechanics)
*/
import React from "react";
import { motion } from "framer-motion";
import { useLayout } from "../context/LayoutContext";

// Tuning: Heavy Industrial Feel
const HYDRAULIC_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 40, // Precision damping
  mass: 1.2,
};

const HydraulicColumn = ({ width, children, className = "" }) => (
  <motion.div
    initial={false}
    animate={{ width }}
    transition={HYDRAULIC_SPRING}
    className={`h-full overflow-hidden relative flex flex-col ${className}`}
    style={{
      contain: "layout paint", // FIX: Allows sticky headers, prevents layout thrashing
      willChange: "width", // FIX: GPU Promotion
    }}
  >
    {/* FIX: Removed w-[fixed] constraints. 
      The content must flow to fill the hydraulic chamber. 
    */}
    <div className="w-full h-full flex flex-col">{children}</div>
  </motion.div>
);

const HydraulicGrid = ({ leftSlot, centerSlot, rightSlot }) => {
  const { currentWidths } = useLayout();

  return (
    // FIX: Enforce 100dvh here. This acts as the physical frame.
    <div className="flex w-full h-[100dvh] overflow-hidden bg-[#050505]">
      {/* 1. LEFT PISTON (Navigation/Index) */}
      <HydraulicColumn
        width={currentWidths.left}
        className="border-r border-[#222] bg-[#080808] z-20"
      >
        {leftSlot}
      </HydraulicColumn>

      {/* 2. CENTER ENGINE (Main Content) */}
      <HydraulicColumn
        width={currentWidths.center}
        className="bg-[#050505] z-10 relative"
      >
        {/* Scroll container is internal to the column */}
        <div className="w-full h-full overflow-y-auto scrollbar-hide">
          {centerSlot}
        </div>
      </HydraulicColumn>

      {/* 3. RIGHT PISTON (Meta/Status) */}
      <HydraulicColumn
        width={currentWidths.right}
        className="border-l border-[#222] bg-[#080808] z-20"
      >
        {rightSlot}
      </HydraulicColumn>
    </div>
  );
};

export default HydraulicGrid;
