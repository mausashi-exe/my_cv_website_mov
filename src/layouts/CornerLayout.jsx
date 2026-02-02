export default function CornerLayout({ children, currentMode }) {
  return (
    <div className="relative min-h-screen w-full p-6 md:p-10 transition-all duration-700">
      {/* Esquina Superior Izquierda: Identidad */}
      <div className="fixed top-6 left-6 z-50 md:top-10 md:left-10 mix-blend-difference">
        <h1 className="font-sans font-black tracking-tighter text-xl uppercase leading-none text-safety-orange">
          Mauricio <br /> <span className="text-current">Olvera</span>
        </h1>
      </div>

      {/* Esquina Superior Derecha: Estatus del Sistema */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 md:top-10 md:right-10 mix-blend-difference">
        <div className="flex flex-col items-end text-[9px] font-mono uppercase tracking-widest opacity-80">
          <span>Mode: {currentMode}</span>
          <span className="flex items-center gap-2">
            Status: Online{" "}
            <span className="h-1.5 w-1.5 rounded-full bg-safety-orange animate-pulse" />
          </span>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="mx-auto max-w-7xl pt-24 pb-32">{children}</main>

      {/* Esquina Inferior Izquierda: Geolocalización */}
      <div className="fixed bottom-6 left-6 z-50 font-mono text-[9px] tracking-widest uppercase opacity-40 md:bottom-10 md:left-10 mix-blend-difference">
        Saltillo, MX // 25.43° N
      </div>
    </div>
  );
}
