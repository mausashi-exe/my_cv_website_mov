import { motion } from "framer-motion";

export default function CornerLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full p-6 md:p-10">
      {/* Top Left: Name */}
      <div className="fixed top-6 left-6 z-50 font-sans font-black tracking-tighter text-xl uppercase leading-none transition-colors duration-500">
        Mauricio <br /> Olvera Valenzuela
      </div>

      {/* Bottom Left: Location */}
      <div className="fixed bottom-6 left-6 z-50 font-mono text-[10px] tracking-widest uppercase opacity-60">
        Saltillo, MX // 25.43° N
      </div>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl pt-20">{children}</main>

      {/* Bottom Right: Status Indicator */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 font-mono text-[10px] uppercase">
        <span className="h-2 w-2 rounded-full bg-dynamic-accent animate-pulse" />
        System_Status: Optimal
      </div>
    </div>
  );
}
