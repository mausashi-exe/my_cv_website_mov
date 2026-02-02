export default function LoreBookView() {
  return (
    <div className="min-h-screen p-6 md:p-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 border border-stone-800 shadow-2xl overflow-hidden bg-stone-900/40 backdrop-blur-md">
        <div className="p-12 md:p-20 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-800">
          <header>
            <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-dynamic-accent">
              Collection_01
            </span>
            <h2 className="text-6xl font-serif italic mt-4 leading-none">
              The <br /> Nomos <br /> Archive.
            </h2>
          </header>

          <div className="mt-20 space-y-6">
            <p className="font-serif text-lg leading-relaxed text-stone-300">
              A 28-page exploration of world-building lore and high-fantasy
              logic. Designing narratives that bridge the gap between
              imagination and structure.
            </p>
            <div className="h-px w-20 bg-dynamic-accent" />
            <p className="font-mono text-[10px] uppercase text-stone-500">
              Nomos_Saga // Visual_Lore_System
            </p>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto bg-stone-800 flex items-center justify-center p-12">
          {/* Use your 'art-nomos-hero.webp' here */}
          <div className="w-full h-full border border-stone-700 p-4 grayscale hover:grayscale-0 transition-all duration-1000 cursor-crosshair">
            <div className="w-full h-full bg-stone-900 flex items-center justify-center text-stone-600 font-serif italic text-sm">
              [IMAGE: ART_NOMOS_HERO]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
