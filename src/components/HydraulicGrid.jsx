/*
Hydraulic Chassis
Intent:
- The physical frame that holds content
- Enforces strict layout isolation (contain: strict)
- Handles the heavy lifting of width interpolation
*/
import React from "react";
import { motion } from "framer-motion";
import { useLayout } from "../context/LayoutContext";

// Tuning: Heavy Industrial Feel
const HYDRAULIC_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 40, // Heavier damping for "Precision" feel
  mass: 1.2,
};

const HydraulicColumn = ({ width, children, className = "" }) => (
  <motion.div
    initial={false}
    animate={{ width }}
    transition={HYDRAULIC_SPRING}
    className={`h-full overflow-hidden relative flex flex-col ${className}`}
    style={{
      contain: "strict", // SENIOR FIX: Layout Isolation
      willChange: "width", // SENIOR FIX: GPU Promotion
    }}
  >
    {children}
  </motion.div>
);

const HydraulicGrid = ({ leftSlot, centerSlot, rightSlot }) => {
  const { currentWidths } = useLayout();

  return (
    <div className="flex w-full h-full overflow-hidden bg-[#050505]">
      {/* 1. LEFT PISTON (Navigation/Index) */}
      <HydraulicColumn
        width={currentWidths.left}
        className="border-r border-[#222] bg-[#080808] z-20"
      >
        <div className="w-[300px] h-full flex flex-col">{leftSlot}</div>
      </HydraulicColumn>

      {/* 2. CENTER ENGINE (Main Content) */}
      <HydraulicColumn
        width={currentWidths.center}
        className="bg-[#050505] z-10 relative"
      >
        <div className="w-full h-full overflow-y-auto scrollbar-hide">
          {centerSlot}
        </div>
      </HydraulicColumn>

      {/* 3. RIGHT PISTON (Meta/Status) */}
      <HydraulicColumn
        width={currentWidths.right}
        className="border-l border-[#222] bg-[#080808] z-20"
      >
        <div className="w-[400px] h-full flex flex-col">{rightSlot}</div>
      </HydraulicColumn>
    </div>
  );
};

export default HydraulicGrid;
