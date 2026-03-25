/*
HydraulicGrid - Responsive Layout System with Mobile Drawers
Manages three-column layout with drawer overrides for mobile.
*/
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLayout } from "../context/LayoutContext";

// Spring physics for smooth animations
const HYDRAULIC_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 40,
  mass: 1.2,
};

const HydraulicColumn = ({ width, children, className = "" }) => (
  <motion.div
    initial={false}
    animate={{ width }}
    transition={HYDRAULIC_SPRING}
    className={`h-full overflow-hidden relative flex flex-col ${className}`}
    style={{
      contain: "layout paint",
      willChange: "width",
    }}
  >
    <div className="w-full h-full flex flex-col">{children}</div>
  </motion.div>
);

const HydraulicGrid = ({ leftSlot, centerSlot, rightSlot }) => {
  const { currentWidths } = useLayout();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCommOpen, setIsCommOpen] = useState(false);

  // MOBILE LAYOUT: Single column with drawer overlays
  // This block only renders on screens < 768px (Tailwind md breakpoint)
  return (
    <>
      {/* Mobile layout: full-width center with drawer overlays */}
      <div className="flex md:hidden w-full h-full flex-col overflow-hidden bg-[#050505] relative">
        {/* Center: Full width */}
        <div className="flex-1 w-full h-full overflow-hidden">{centerSlot}</div>

        {/* Mobile FABs - Fixed above SystemBar */}
        <div className="fixed bottom-16 right-4 z-[65] flex flex-col gap-3">
          {/* PROFILE FAB */}
          <motion.button
            onClick={() => {
              setIsProfileOpen(true);
              setIsCommOpen(false);
            }}
            whileTap={{ scale: 0.92 }}
            className="w-11 h-11 rounded-full bg-[#ff4425] text-black flex items-center justify-center font-bebas text-sm shadow-[0_0_20px_rgba(255,68,37,0.4)] border border-[#ff4425]/50"
            title="Profile"
          >
            ID
          </motion.button>

          {/* COMM FAB */}
          <motion.button
            onClick={() => {
              setIsCommOpen(true);
              setIsProfileOpen(false);
            }}
            whileTap={{ scale: 0.92 }}
            className="w-11 h-11 rounded-full bg-[#050505] border border-[#ff4425]/40 text-[#ff4425] flex items-center justify-center font-mono text-[10px] shadow-lg"
            title="CommLink"
          >
            ⌨
          </motion.button>
        </div>

        {/* LEFT SLOT DRAWER (Profile) */}
        <AnimatePresence>
          {isProfileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsProfileOpen(false)}
                className="fixed inset-0 z-[66] bg-black/70 backdrop-blur-sm"
              />
              {/* Drawer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 350, damping: 40 }}
                className="fixed inset-y-0 left-0 z-[67] w-[85vw] max-w-sm bg-[#080808] border-r border-[#ff4425]/20 overflow-y-auto scrollbar-hide"
              >
                <div className="p-4 border-b border-[#222] flex justify-between items-center sticky top-0 bg-[#080808] z-10">
                  <span className="font-mono text-[9px] text-[#ff4425] uppercase tracking-widest">
                    /// IDENTITY_MODULE
                  </span>
                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className="text-white/60 hover:text-white text-xl w-8 h-8 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
                <div className="h-full">{leftSlot}</div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* RIGHT SLOT DRAWER (CommLink) */}
        <AnimatePresence>
          {isCommOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCommOpen(false)}
                className="fixed inset-0 z-[66] bg-black/70 backdrop-blur-sm"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 350, damping: 40 }}
                className="fixed inset-y-0 right-0 z-[67] w-[90vw] max-w-sm bg-[#0a0a0a] border-l border-[#ff4425]/20 flex flex-col"
              >
                <div className="p-4 border-b border-[#222] flex justify-between items-center">
                  <span className="font-mono text-[9px] text-[#ff4425] uppercase tracking-widest">
                    /// SECURE_COMM_LINK
                  </span>
                  <button
                    onClick={() => setIsCommOpen(false)}
                    className="text-white/60 hover:text-white text-xl w-8 h-8 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
                <div className="flex-1 overflow-hidden p-3">{rightSlot}</div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ============================================
          DESKTOP LAYOUT (>= 768px) — UNTOUCHED
          ============================================ */}
      <div className="hidden md:flex w-full h-[100dvh] overflow-hidden bg-[#050505]">
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
    </>
  );
};

export default HydraulicGrid;
