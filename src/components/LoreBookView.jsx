import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ASSETS ---
import mapImage from "../assets/images/known_world_map.jpg";
import paperTexture from "../assets/images/paper_background_01.jpg";
import arrowIcon from "../assets/ui/arrow_pointing_down_righ.svg";

// Process Images
import sketchImg from "../assets/images/drawing_nomos_01.jpg"; // Sketch
import inkImg from "../assets/images/drawing_nomos_02.jpg"; // Lineart
import finalImg from "../assets/images/drawing_nomos_03.jpg"; // Render

// ==========================================
// DATA: THE ONOMASTIKON (Base de Datos de Lore)
// ==========================================
const LORE_DATA = {
  cosmogony: {
    title: "I. COSMOGONY",
    subtitle: "The Myth of the Fossilized Flame",
    content: (
      <>
        <p>
          In the era before the first scribe touched pen to vellum, there was no
          "Nature." There was only the <strong>Aether-Ink</strong>, a sea of
          unwritten potential where logic and chaos were indistinguishable. This
          was not a void of emptiness, but a void of "Too-Muchness."
        </p>
        <h4 className="font-display text-lava mt-8 mb-2">
          The Descent of the Star-Heart
        </h4>
        <p>
          From the furthest reaches of the "Cold Above" came the Star-Vessel, a
          shard of absolute, crystalline logic. It was an entity of the
          Valar-kind, cold and prismatic, seeking to impose a singular Script
          upon the chaotic ink. Where it stepped, the Aether froze into silver
          spires and geometric laws.
        </p>
        <h4 className="font-display text-lava mt-8 mb-2">
          The Coiling of the Sun-Drake
        </h4>
        <p>
          But the Aether had a guardian—the <strong>Elden Sun-Drake</strong>. It
          pursued the Star-Vessel, viewing the cold logic as a cage. In a
          collision that fractured the heavens—the First Breach—the Drake coiled
          its massive, burning form around the Star-Heart. Its flesh did not
          rot; it calcified. The Dragon died to become the ground beneath our
          feet, a beautiful, violent mask of stone and pine that hides the cold,
          logical silence of the Star still beating at the world's core.
        </p>
      </>
    ),
  },
  factions: {
    title: "II. THE EMPIRES",
    subtitle: "Geopolitics of the Husk",
    content: (
      <div className="space-y-12">
        <div>
          <h3 className="font-display text-2xl text-ink font-bold border-b border-lava/50 pb-2 mb-4">
            AL-XANDRIS{" "}
            <span className="text-sm text-lava align-middle ml-2">
              // The Sun-Empire
            </span>
          </h3>
          <p>
            Rising from the shimmering dunes like a geometric mirage, the Shahr
            is the pinnacle of Hydraulic Despotism. A land of white marble
            plated in Auric-Gold, where the architecture serves as a
            mathematical prison for reality. Founded by Xandros I, the empire
            operates on the Sanctioned Lie that civilization prevents the world
            from dissolving.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-ink font-bold border-b border-lava/50 pb-2 mb-4">
            EISEN-MARROW{" "}
            <span className="text-sm text-lava align-middle ml-2">
              // The Iron-Reich
            </span>
          </h3>
          <p>
            If the South is a mirage, the North is a visceral reality of soot
            and iron. A land of Archaeological Gothic splendor—stone cathedrals
            built directly into the petrified ribcage of the world. It is a
            society defined by Militarized Industrial Feudality, where the
            extraction of the Dragon’s "Iron-Marrow" is a religious crusade.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-ink font-bold border-b border-lava/50 pb-2 mb-4">
            NIFL-WULF{" "}
            <span className="text-sm text-lava align-middle ml-2">
              // The Aesir-Vaticum
            </span>
          </h3>
          <p>
            Located where the world terminates in a colossal crater. A
            gothic-prismatic marvel of vertical silver spires. This is the seat
            of the Star-Heart. A place of haunting elegance and clinical
            stillness, governed by the Twelve Elder Mothers who weave the "First
            Script".
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-ink font-bold border-b border-lava/50 pb-2 mb-4">
            AMARTYA-ZEN{" "}
            <span className="text-sm text-lava align-middle ml-2">
              // The Jade Shogunate
            </span>
          </h3>
          <p>
            An ethereal tapestry of Tang-grandeur and Vedic-spirituality. This
            land breathes in harmony with the World-Breath, possessing floating
            bamboo-pagodas and jungles that hum with resonance. The Shogun is a
            Living Pillar of the Dharma, holding the chaotic spirits in
            equilibrium.
          </p>
        </div>
      </div>
    ),
  },
  taxonomy: {
    title: "III. TAXONOMY",
    subtitle: "Races & The Discarded",
    content: (
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-ink/5 p-6 border-l-4 border-lava">
          <h4 className="font-display text-xl text-lava mb-2">
            THE DVERGR (Root-Kin)
          </h4>
          <p className="text-sm">
            Not biological in a human sense, but Mineral-Fungal Hybrids exuded
            from the Dragon’s marrow. They are the "Maintenance Crew" of the
            planet, communicating with the stone through mycelium beards. They
            do not worship gods; they worship The Symphony of Stasis.
          </p>
        </div>
        <div className="bg-ink/5 p-6 border-l-4 border-ink">
          <h4 className="font-display text-xl text-ink mb-2">MNEMIR (Elves)</h4>
          <p className="text-sm">
            The Silent Witnesses. Amoral custodians of the Original Script. To
            look into their eyes is to see the "Seams" of the universe—a
            psychedelic experience that often leaves the observer "Narratively
            Void."
          </p>
        </div>
        <div className="bg-ink/5 p-6 border-l-4 border-ink">
          <h4 className="font-display text-xl text-ink mb-2">
            THE DISCARDED (Orcs/Goblins)
          </h4>
          <p className="text-sm">
            <strong>Orc-Variants:</strong> Soldiers "Un-Named" by the state.
            Their armor has physically fused with their dermis. They are
            massive, hunchbacked entities obsessed with their last command.
            <br />
            <br />
            <strong>Hobgoblins:</strong> Scavenger-Vermin. Remnants of
            maintenance crews, their bodies are a nightmare of junk-grafts and
            rusted hydraulics.
          </p>
        </div>
        <div className="bg-ink/5 p-6 border-l-4 border-lava">
          <h4 className="font-display text-xl text-lava mb-2">
            XI-BA'AL (Aztlan)
          </h4>
          <p className="text-sm">
            The Sun-Eaters. A civilization hidden in the volcanic Vertebral Sea.
            They use Hæm-Galdr (Blood Magic) and believe they are the
            "Antibodies" of the Dragon. They practice Sustained Equilibrium
            through Total Sacrifice.
          </p>
        </div>
      </div>
    ),
  },
};

const TIMELINE_DATA = [
  {
    age: "I. AGE OF THE UNBOUND",
    desc: "The Era of the Script. Before stone or blood, only Aether-Ink existed. The Star-Vessel descended to write the first laws of geometry.",
  },
  {
    age: "II. AGE OF THE DRAKE",
    desc: "The Era of the Fall. The Sun-Drake collided with the Star-Heart. The Dragon died to become the ground, its marrow the metal, its breath the winds.",
  },
  {
    age: "III. AGE OF THE MASK",
    desc: "The Rise of the Lie. Humans emerged. The First Sovereigns created Sanctioned Narratives to hide the terrifying truth of the dead god.",
  },
  {
    age: "IV. AGE OF THE NOMOS",
    desc: "Current Era. The Era of Silence. The 'Sanctioned Narratives' are fraying. The Marrow-Famine begins. The Heat of History leaks through the cracks.",
  },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

// 1. LORE SECTION
const LoreSection = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("cosmogony");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-full w-full bg-bone text-ink flex flex-col md:flex-row relative"
    >
      {/* SIDEBAR NAVIGATION */}
      <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-ink/20 p-6 md:p-12 bg-bone z-10">
        <button
          onClick={onBack}
          className="mb-12 font-mono text-xs hover:text-lava transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          <img src={arrowIcon} className="w-3 h-3 rotate-180" alt="Back" />{" "}
          Map_View
        </button>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-ink/50 mb-6">
            THE ONOMASTIKON
          </h3>
          {Object.keys(LORE_DATA).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`block w-full text-left font-display text-sm uppercase py-2 transition-all border-l-2 pl-4 ${activeTab === key ? "border-lava text-lava font-bold" : "border-transparent text-ink/60 hover:text-ink hover:border-ink/30"}`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="w-full md:w-3/4 p-8 md:p-24 overflow-y-auto h-screen relative">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto pb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl text-lava mb-2">
            {LORE_DATA[activeTab].title}
          </h2>
          <h3 className="font-serif italic text-2xl text-ink/60 mb-12">
            {LORE_DATA[activeTab].subtitle}
          </h3>

          <div className="prose prose-lg font-serif text-ink leading-loose text-justify">
            {LORE_DATA[activeTab].content}
          </div>

          {/* Firma del Escriba */}
          <div className="mt-16 pt-8 border-t border-ink/10 flex items-center gap-4 opacity-50">
            <div className="w-8 h-8 bg-ink rounded-full"></div>
            <p className="font-mono text-xs uppercase">
              Record by Scribe Ibn Al-Althaeir
            </p>
          </div>
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply z-0"
          style={{ backgroundImage: `url(${paperTexture})` }}
        ></div>
      </div>
    </motion.div>
  );
};

// 2. VISUALS SECTION
const GallerySection = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-full w-full bg-void text-bone p-8 md:p-12 overflow-y-auto"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 border-b border-bone/20 pb-6">
        <button
          onClick={onBack}
          className="font-mono text-xs hover:text-gold transition-colors flex items-center gap-2 uppercase"
        >
          <img
            src={arrowIcon}
            className="w-3 h-3 rotate-180 invert"
            alt="Back"
          />{" "}
          Return
        </button>
        <h2 className="font-display text-2xl md:text-4xl text-bone">
          CREATIVE_PROCESS // NOMOS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Step 1 */}
        <div className="group space-y-4">
          <div className="border border-bone/30 p-2 bg-white/5 relative overflow-hidden">
            <img
              src={sketchImg}
              alt="Sketch"
              className="w-full h-auto grayscale opacity-80 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 font-mono text-[10px] text-gold">
              STEP_01: CONCEPT
            </div>
          </div>
          <p className="font-mono text-xs text-bone/60">
            Initial blocking using loose strokes. Focus on silhouette and
            dynamic anatomy.
          </p>
        </div>

        {/* Step 2 */}
        <div className="group space-y-4">
          <div className="border border-bone/30 p-2 bg-white/5 relative overflow-hidden">
            <img
              src={inkImg}
              alt="Lineart"
              className="w-full h-auto contrast-125 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 font-mono text-[10px] text-gold">
              STEP_02: INKING
            </div>
          </div>
          <p className="font-mono text-xs text-bone/60">
            Refining the linework. Adding "Metabarons" mechanical details and
            grit texture.
          </p>
        </div>

        {/* Step 3 */}
        <div className="group space-y-4">
          <div className="border border-bone/30 p-2 bg-white/5 relative overflow-hidden">
            <img
              src={finalImg}
              alt="Final"
              className="w-full h-auto saturate-0 group-hover:saturate-100 transition-all duration-700"
            />
            <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 font-mono text-[10px] text-gold">
              STEP_03: RENDER
            </div>
          </div>
          <p className="font-mono text-xs text-bone/60">
            Final composition. Applying "Rojo Lava" accents and atmospheric
            lighting.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// 3. CHRONICLES SECTION
const ChroniclesSection = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    className="min-h-full w-full bg-ink text-bone p-8 md:p-24 overflow-y-auto"
  >
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-12 font-mono text-xs hover:text-gold flex items-center gap-2 uppercase"
      >
        <img src={arrowIcon} className="w-3 h-3 rotate-180 invert" alt="Back" />{" "}
        Map_View
      </button>

      <h2 className="font-display text-5xl md:text-7xl text-lava mb-4">
        THE CHRONICLES
      </h2>
      <p className="font-mono text-sm text-bone/50 mb-16 border-l-2 border-bone/20 pl-4">
        A stratigraphic record of the Four Ages, as recorded by the Scribe
        Malachi.
      </p>

      <div className="relative border-l border-bone/20 ml-4 space-y-16">
        {TIMELINE_DATA.map((era, i) => (
          <div key={i} className="relative pl-12 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-void border border-bone group-hover:bg-lava group-hover:border-lava transition-colors rounded-full"></div>

            <h3 className="font-display text-2xl md:text-3xl text-bone mb-2">
              {era.age}
            </h3>
            <p className="font-serif text-lg text-bone/70 leading-relaxed max-w-xl">
              {era.desc}
            </p>
          </div>
        ))}

        <div className="pl-12 pt-8">
          {/* CORRECCIÓN AQUI: Usamos {'>>'} para evitar el error de sintaxis */}
          <p className="font-mono text-xs text-lava animate-pulse">
            {">>"} CURRENT ERA: SYSTEM INSTABILITY DETECTED
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const LoreBookView = ({ setMode }) => {
  const [currentSection, setCurrentSection] = useState("map");

  return (
    <div className="w-full h-full relative bg-void">
      <AnimatePresence mode="wait">
        {/* --- MAPA PRINCIPAL --- */}
        {currentSection === "map" && (
          <motion.div
            key="map-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 flex items-center justify-center group cursor-default"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out filter blur-md grayscale group-hover:blur-0 group-hover:grayscale-0 scale-105 group-hover:scale-100"
              style={{ backgroundImage: `url(${mapImage})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000"></div>

            <div className="relative z-10 w-full h-full max-w-6xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
              <button
                onClick={() => setCurrentSection("lore")}
                className="nav-hotspot group/btn flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 border border-gold rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover/btn:bg-gold group-hover/btn:text-black transition-all">
                  <span className="font-serif italic text-2xl">I</span>
                </div>
                <span className="font-display text-sm tracking-widest bg-black text-bone px-3 py-1">
                  THE ONOMASTIKON
                </span>
              </button>

              <button
                onClick={() => setCurrentSection("gallery")}
                className="nav-hotspot group/btn flex flex-col items-center gap-4 mt-12 md:mt-0"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 border border-gold rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover/btn:bg-gold group-hover/btn:text-black transition-all">
                  <span className="font-serif italic text-2xl">II</span>
                </div>
                <span className="font-display text-sm tracking-widest bg-black text-bone px-3 py-1">
                  VISUALS
                </span>
              </button>

              <button
                onClick={() => setCurrentSection("chronicles")}
                className="nav-hotspot group/btn flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 border border-gold rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover/btn:bg-gold group-hover/btn:text-black transition-all">
                  <span className="font-serif italic text-2xl">III</span>
                </div>
                <span className="font-display text-sm tracking-widest bg-black text-bone px-3 py-1">
                  THE CHRONICLES
                </span>
              </button>
            </div>

            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <p className="font-mono text-xs text-gold animate-pulse text-center">
                [ HOVER TO REVEAL THE KNOWN WORLD ]
              </p>
            </div>
          </motion.div>
        )}

        {currentSection === "lore" && (
          <LoreSection key="lore" onBack={() => setCurrentSection("map")} />
        )}
        {currentSection === "gallery" && (
          <GallerySection
            key="gallery"
            onBack={() => setCurrentSection("map")}
          />
        )}
        {currentSection === "chronicles" && (
          <ChroniclesSection
            key="chronicles"
            onBack={() => setCurrentSection("map")}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoreBookView;
