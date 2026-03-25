/**
 * Theme Configuration
 * Centralized color and styling constants for the entire application.
 * Ensures consistency and makes theme updates easy.
 */

export const THEME_CONFIG = {
  terminal: {
    border: "border-white/20",
    accent: "text-white",
    bgTint: "bg-white/5",
    pulse: "bg-emerald-500",
    status: "text-emerald-500",
    name: "terminal",
  },
  engineer: {
    border: "border-[#ff4425]/60",
    accent: "text-[#ff4425]",
    bgTint: "bg-[#ff4425]/10",
    pulse: "bg-[#ff4425]",
    status: "text-[#ff4425]",
    name: "engineer",
  },
  creator: {
    border: "border-[#d4af37]/60",
    accent: "text-[#d4af37]",
    bgTint: "bg-[#d4af37]/10",
    pulse: "bg-[#d4af37]",
    status: "text-[#d4af37]",
    name: "creator",
  },
  meta: {
    border: "border-[#a855f7]/60",
    accent: "text-[#a855f7]",
    bgTint: "bg-[#a855f7]/10",
    pulse: "bg-[#a855f7]",
    status: "text-[#a855f7]",
    name: "meta",
  },
};

export const COLORS = {
  primary: "#050505",
  secondary: "#1a1a1a",
  tertiary: "#0a0a0a",
  accent: {
    engineer: "#ff4425",
    creator: "#d4af37",
    meta: "#a855f7",
    terminal: "#ffffff",
  },
  text: {
    primary: "#ffffff",
    secondary: "#888888",
    tertiary: "#555555",
    muted: "#666666",
  },
  border: "#222222",
  success: "#22c55e",
  error: "#ef4444",
};

export const SPRING_PHYSICS = {
  type: "spring",
  stiffness: 300,
  damping: 40,
  mass: 1.2,
};
