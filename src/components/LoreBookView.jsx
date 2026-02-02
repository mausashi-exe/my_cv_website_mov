import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mapImage from '../assets/images/known_world_map.jpg';

// DATA: THE COMPLETE ONOMASTIKON
const LORE_CHAPTERS = [
  {
    id: 'cosmogony',
    title: 'I. COSMOGONY',
    content: (
      <>
        <h3 className="sub-header">The Myth of the Fossilized Flame</h3>
        <h4 className="font-bold mb-2">i. The Primordial Dissonance</h4>
        <p className="body-text">In the era before the first scribe touched pen to vellum, there was no "Nature." There was only the Aether-Ink, a sea of unwritten potential where logic and chaos were indistinguishable. This was not a void of emptiness, but a void of "Too-Muchness," where every history existed simultaneously, screaming for a hand to guide the quill and grant them the weight of reality.</p>
        
        <h4 className="font-bold mb-2">ii. The Descent of the Star-Heart</h4>
        <p className="body-text">From the furthest reaches of the "Cold Above" came the Star-Vessel, a shard of absolute, crystalline logic. It was an entity of the Valar-kind, cold and prismatic, seeking to impose a singular Script upon the chaotic ink. Where it stepped, the Aether froze into silver spires and geometric laws; it sought to build a world of perfect, silent stillness, free from the messy trauma of memory and breath.</p>
        
        <h4 className="font-bold mb-2">iii. The Coiling of the Sun-Drake</h4>
        <p className="body-text">But the Aether had a guardian—the Elden Sun-Drake, a creature of infinite thermal history and solar memory. It pursued the Star-Vessel, viewing the cold logic as a cage. In a collision that fractured the heavens—the First Breach—the Drake coiled its massive, burning form around the Star-Heart. Its flesh did not rot; it calcified. Its blood did not spill; it became the Ink of the World. The Dragon died to become the ground beneath our feet, a beautiful, violent mask of stone and pine that hides the cold, logical silence of the Star still beating at the world's core.</p>
      </>
    )
  },
  {
    id: 'prelude',
    title: 'II. THE PRELUDE',
    content: (
      <>
        <h3 className="sub-header">Account of the Unknown Scribe</h3>
        <p className="body-text">"I have walked the corridors of Ever-Metal when the Eye-Sentinels were blind, and I have tasted the soot of the Vertebral Trenches where the sky is a permanent bruise. They tell you the world is 'natural.' They tell you the pikes stay sharp because of 'industry' and the Sun shines because of 'grace.' They lie.</p>
        <p className="body-text">I found these records in a place that has been erased from the Imperial Archive, a city that the Basileia-Sultana claims never existed. The ink is made of Refined Marrow, and it remembers things that your priests have spent centuries trying to make you forget. You hold a map of a graveyard, little Princess. Do not mistake the flowers for life; they are merely the patterns the Dragon's decay makes upon the logic of the Star. Read, if you wish to know why the iron in your hand screams when the wind blows from the North."</p>
      </>
    )
  },
  {
    id: 'empires',
    title: 'III. THE EMPIRES',
    content: (
      <>
        {/* AL-XANDRIS */}
        <div className="mb-16">
          <div className="w-full h-64 bg-gray-300 mb-4 animate-pulse flex items-center justify-center text-xs tracking-widest text-gray-500 uppercase">[ IMAGE: AL-XANDRIS_GOLDEN_CITY ]</div>
          <h3 className="sub-header text-cargo-accent">The Shahr-Hegemony of Al-Xandris</h3>
          <p className="body-text"><strong>Common Name:</strong> The Sun-Empire, The Gilded Shahr.</p>
          <p className="body-text">Rising from the shimmering dunes like a geometric mirage, the Shahr is the pinnacle of Hydraulic Despotism and Hellenic-Babylonian grandeur. It is a land of white marble plated in Auric-Gold, where the architecture serves as a mathematical prison for reality. Founded by the warrior-king Xandros I—who supposedly wrestled the Sun until it yielded its name—the Empire operates on the Sanctioned Lie that civilization is the only thing preventing the world from dissolving. Every aqueduct and palace is a physical decree of order against the chaos of the natural world.</p>
          
          <h4 className="font-bold mt-6 mb-2">1. DEMOGRAPHICS</h4>
          <p className="body-text">The Shahr is a meticulously tiered society where "Narrative Weight" determines one's worth.<br/>
          - <strong>The Kashani (Gilded Humans):</strong> 62%. The primary citizenry. They undergo ritualistic skin-grafting where gold-dust is suspended in their dermis.<br/>
          - <strong>The Client-Tribes:</strong> 24%. Multicultural mosaic who traded original histories for protection.<br/>
          - <strong>Enclave Dvergr:</strong> 8%. Sub-surface laborers categorized as "Animated Property".</p>
          
          <h4 className="font-bold mt-6 mb-2">4. RELIGION: The Liturgy of the Bound Sun</h4>
          <p className="body-text">The Shahr does not worship gods so much as it worships Stability. Worship is purely contractual: "I offer my history; You offer your light." Rituals involve the burning of Drako-Incense and the public recitation of the Chronicle of Names.</p>
        </div>

        {/* EISEN-MARROW */}
        <div className="mb-16">
           <div className="w-full h-64 bg-gray-800 mb-4 animate-pulse flex items-center justify-center text-xs tracking-widest text-gray-500 uppercase">[ IMAGE: EISEN_MARROW_FOUNDRY ]</div>
           <h3 className="sub-header text-gray-700">The Reichland of the Methal-Barons</h3>
           <p className="body-text"><strong>Common Name:</strong> The Iron-Reich, The Bone-Trenches.</p>
           <p className="body-text">If the South is a mirage of gold, the North is a visceral reality of soot and iron. The Reichland is a land of Archaeological Gothic splendor—stone cathedrals and brutalist fortresses built directly into the petrified ribcage of the world. It is a world of Grit and Gear, where the "Blood-Tax" is the only currency that matters and the individual is merely a component in the Great Machine of the State.</p>
        </div>

        {/* NIFL-WULF */}
        <div className="mb-16">
           <div className="w-full h-64 bg-blue-100 mb-4 animate-pulse flex items-center justify-center text-xs tracking-widest text-gray-500 uppercase">[ IMAGE: NIFL_WULF_SPIRES ]</div>
           <h3 className="sub-header text-blue-900">The Aesir-Vaticum of Nifl-wulf</h3>
           <p className="body-text"><strong>Common Name:</strong> The Arcane Vatican, The City of Frozen Thunder.</p>
           <p className="body-text">Located at the northernmost point of the Eäresea continent. Protected by the Aegis-Dome, the city exists in a state of perpetual, moonlit twilight. This is the seat of the Star-Heart. Here, history is not lived; it is sanctified and preserved in crystalline lattices, creating a society that is as beautiful as it is stagnant.</p>
        </div>

        {/* AMARTYA-ZEN */}
        <div className="mb-16">
           <div className="w-full h-64 bg-green-100 mb-4 animate-pulse flex items-center justify-center text-xs tracking-widest text-gray-500 uppercase">[ IMAGE: JADE_SHOGUNATE_JUNGLE ]</div>
           <h3 className="sub-header text-green-800">The Celestial Shogunate of Amartya-Zen</h3>
           <p className="body-text"><strong>Common Name:</strong> The Jade Shogunate, Land of the World-Breath.</p>
           <p className="body-text">Situated where the dawn-light first kisses the continent. An ethereal tapestry of Tang-grandeur and Vedic-spirituality. This land breathes in harmony with the World-Breath, possessing floating bamboo-pagodas and jungles that hum with an ancient, vibrational resonance. It is a theocratic stronghold where the boundaries between the physical and the spiritual have been ritualistically thinned.</p>
        </div>
      </>
    )
  },
  {
    id: 'deep-maintenance',
    title: 'IV. THE DEEP MAINTENANCE',
    content: (
      <>
        <div className="w-full h-64 bg-stone-800 mb-4 animate-pulse flex items-center justify-center text-xs tracking-widest text-gray-500 uppercase">[ IMAGE: DVERGR_SMITH ]</div>
        <h3 className="sub-header">The Dvergr (The Root-Kin)</h3>
        <p className="body-text">To the surface-dwellers, the Dvergr are a curiosity—short, powerful smiths who maintain the world’s ancient foundations. But the truth is far more alien. The Dvergr are Mineral-Fungal Hybrid species exuded from the Dragon’s marrow-veins. They are the "Maintenance Crew" of the planet. They do not view the world as a place to live, but as a colossal machine that must be constantly tuned.</p>
        
        <h4 className="font-bold mt-6 mb-2">RELIGIOUS BELIEF: The Stone-Song</h4>
        <p className="body-text">They believe they were exuded from the Dragon's "First Sigh." They worship The Symphony of Stasis. Their "faith" is a series of rhythmic calibrations; they believe that if the Dvergr stop singing to the foundations, the mountain-ribs will collapse, and the logic of the Star will shatter.</p>
      </>
    )
  },
  {
    id: 'taxonomy',
    title: 'V. TAXONOMY',
    content: (
      <>
        <h3 className="sub-header">Homo-Nomos & Elder Races</h3>
        
        <h4 className="font-bold mt-6 mb-2">I. HOMO-NOMOS: THE NARRATIVE PARASITES</h4>
        <p className="body-text">Humans possess Narrative Plasticity. Lacking biological certainty, they are shaped by the stories their masters tell them. Gilded Humans (South) are defined by Radiant Integration. Marrow-Bound (North) are victims of Industrial Calcification.</p>
        
        <h4 className="font-bold mt-6 mb-2">II. THE MNEMIR: SILENT WITNESSES</h4>
        <p className="body-text">Known colloquially as "Elves," the Mnemir are the amoral custodians of the Original Script. They withdraw from human affairs not out of arrogance, but out of terrifying ethical restraint. To look into the eyes of an Aurilim is to see the "Seams" of the universe—a psychedelic experience that often leaves the observer "Narratively Void."</p>

        <h4 className="font-bold mt-6 mb-2">III. THE CHIMERA-KIN</h4>
        <p className="body-text">Biological masterpieces of Resonance. <strong>Rakshasa (Tigermen)</strong>: Metallic fur acts as a Faraday cage against radiation. <strong>Vanara (Monkey-men)</strong>: Ascetic scholars who maintain ancient archives.</p>
      </>
    )
  },
  {
    id: 'bestiary',
    title: 'VI. THE BESTIARY',
    content: (
      <>
        <h3 className="sub-header">The Accumulated Horrors</h3>
        <p className="body-text">Monsters in Nomos are rarely born; they are manifested from "Narrative Static".</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="border border-gray-300 p-4">
               <h4 className="font-bold mb-2 uppercase">The Orc-Variants</h4>
               <p className="text-sm font-serif">Soldiers "Un-Named" by the state. Their armor has physically fused with their dermis. They are massive, hunchbacked entities obsessed with their last command.</p>
            </div>
            <div className="border border-gray-300 p-4">
               <h4 className="font-bold mb-2 uppercase">The Hobgoblins</h4>
               <p className="text-sm font-serif">Scavenger-Vermin. Remnants of maintenance crews, their bodies are a nightmare of junk-grafts and rusted hydraulics.</p>
            </div>
             <div className="border border-gray-300 p-4">
               <h4 className="font-bold mb-2 uppercase">Vampires</h4>
               <p className="text-sm font-serif">Born from the "Eternal Aristocracy" myth. Humans whose Narrative Weight has become parasitic. They must "drain" the memories of others to remain anchored in reality.</p>
            </div>
        </div>
      </>
    )
  }
];

// INSPIRATIONS SECTION
const INSPIRATIONS = [
  "Brandon Sanderson", "Tolkien", "Ursula K. Le Guin", "Robin Hobb", 
  "Alejandro Jodorowsky", "Juan Giménez", "Patrick Rothfuss", 
  "François Marcela-Froideval", "Dan Abnett", "George R. Martin"
];

const LoreBookView = ({ setMode }) => {
  const [view, setView] = useState('map'); // map, reading

  // Helper function to scroll to section
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      
      {/* 1. MAP VIEW (Landing) */}
      {view === 'map' && (
        <motion.div 
          key="map"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden group"
        >
          <div 
             className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 group-hover:blur-sm opacity-60"
             style={{ backgroundImage: `url(${mapImage})` }}
          />
          
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-7xl text-white tracking-tighter mb-4 mix-blend-difference">
              THE ONOMASTIKON
            </h1>
            <p className="font-serif italic text-white/80 mb-8 text-xl">
              "The Book of Names"
            </p>
            <button 
              onClick={() => setView('reading')}
              className="px-8 py-3 bg-white text-black font-display font-bold uppercase tracking-widest hover:bg-creator-gold hover:text-white transition-all"
            >
              Enter The Archives
            </button>
          </div>
        </motion.div>
      )}

      {/* 2. READING VIEW (Cargo.site Style) */}
      {view === 'reading' && (
        <motion.div 
          key="reading"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="cargo-container"
        >
          {/* SIDEBAR NAVIGATION */}
          <aside className="cargo-sidebar">
            <button onClick={() => setView('map')} className="mb-12 font-mono text-xs uppercase flex items-center gap-2 hover:text-cargo-accent">
               <img src={mapImage} className="w-4 h-4 rounded-full grayscale" alt="" /> Back to Map
            </button>
            
            <nav className="space-y-6">
               <h3 className="font-display font-bold text-sm tracking-widest border-b border-gray-300 pb-2">INDEX</h3>
               <ul className="space-y-2 font-sans text-sm">
                 {LORE_CHAPTERS.map(chapter => (
                   <li key={chapter.id}>
                     <button onClick={() => scrollTo(chapter.id)} className="hover:text-cargo-accent hover:underline text-left">
                       {chapter.title}
                     </button>
                   </li>
                 ))}
                 <li><button onClick={() => scrollTo('inspirations')} className="hover:text-cargo-accent text-left mt-4 font-bold">AUTHORIAL INSPIRATIONS</button></li>
                 <li><button onClick={() => scrollTo('blog')} className="hover:text-cargo-accent text-left font-bold">DEV_LOG</button></li>
               </ul>
            </nav>

            <div className="mt-24 text-xs font-mono opacity-50">
              <p>Scribe: Ibn Al-Althaeir</p>
              <p>Ref: Princess Zayna</p>
            </div>
          </aside>

          {/* MAIN SCROLLABLE CONTENT */}
          <main className="cargo-content">
             <div className="max-w-4xl mx-auto pb-32">
               
               {/* Intro Header */}
               <div className="mb-24 pt-12">
                 <h1 className="font-display text-5xl md:text-8xl leading-none mb-6">THE BOOK<br/>OF NAMES</h1>
                 <p className="font-serif text-2xl italic opacity-60">Chronicles of the Eäresea Continent</p>
               </div>

               {/* Render Chapters */}
               {LORE_CHAPTERS.map(chapter => (
                 <section key={chapter.id} id={chapter.id} className="mb-32">
                    <h2 className="chapter-title">{chapter.title}</h2>
                    {chapter.content}
                 </section>
               ))}

               {/* INSPIRATIONS SECTION */}
               <section id="inspirations" className="mb-32 border-t-2 border-cargo-text pt-12">
                 <h2 className="font-display text-4xl mb-8">INSPIRATIONS</h2>
                 <div className="flex flex-wrap gap-4">
                    {INSPIRATIONS.map((author, i) => (
                      <span key={i} className="px-4 py-2 border border-cargo-text/30 text-sm font-bold uppercase hover:bg-cargo-text hover:text-white transition-colors">
                        {author}
                      </span>
                    ))}
                 </div>
               </section>

               {/* BLOG SECTION */}
               <section id="blog" className="mb-32">
                 <h2 className="font-display text-4xl mb-8 text-cargo-accent">DEV_LOG // BLOG</h2>
                 <div className="bg-white p-8 border border-gray-200 shadow-sm">
                   <span className="font-mono text-xs opacity-50">FEB 02, 2026</span>
                   <h3 className="font-bold text-xl mt-2 mb-4">Refining the "Snow White" Terminal</h3>
                   <p className="font-serif text-lg leading-relaxed opacity-80">
                     Working on the contrast between the scanline background and the new ghost-white typography for the Engineer section. Achieving that specific "Eva" feel without the neon overload.
                   </p>
                   <button className="mt-6 text-xs font-bold underline">Read Full Entry -</button>
                 </div>
               </section>

             </div>
          </main>
        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default LoreBookView;