import React from 'react';
// Ajusta la ruta de la imagen según tu estructura real
import mapImage from '../assets/images/known_world_map.jpg'; 

// ==========================================
// DATA VISUAL (COLUMNA DERECHA)
// ==========================================
export const VISUAL_DATABASE = [
  { 
    title: "KNOWN_WORLD_MAP", 
    type: "Cartography", 
    image: mapImage, 
    desc: "Imperial Cartography. Note the Vertebral Trench running North to South.",
    tags: ["Scale 1:10M", "Post-Breach"] 
  },
  { 
    title: "ORC_WARLORD_PLATE", 
    type: "Bio-Specimen", 
    image: null, 
    desc: "Chest-plate fused with ribcage. Fluted steel protruding through dermis. Runes indicate former rank: 'Lieutenant'.",
    tags: ["Fused-Alloy", "Hazard: High"]
  },
  { 
    title: "AZTLAN_OBSIDIAN", 
    type: "Contraband", 
    image: null, 
    desc: "Razor-edged glass dagger. Radiates heat. Do not touch with bare skin.",
    tags: ["Heretical", "Blood-Active"] 
  },
  { 
    title: "DVERGR_MYCELIUM", 
    type: "Anatomy", 
    image: null, 
    desc: "Microscopic view of 'Beard' filaments plugging into Granite. Note the bioluminescent pulse indicating data transfer.",
    tags: ["Fungal", "Lithic"] 
  }
];

// ==========================================
// LORE CHAPTERS (ÍNDICE Y CONTENIDO)
// ==========================================
export const LORE_CHAPTERS = [
  {
    id: "I_COSMOGONY",
    title: "I. COSMOGONY",
    label: "I. Cosmogony",
    subtitle: "The Myth of the Fossilized Flame",
    fullContent: (
      <div className="space-y-8">
        <div className="p-6 border-l-2 border-gold/50 bg-white/5">
          <h4 className="font-sans font-bold text-gold mb-2 uppercase tracking-widest text-xs">i. The Primordial Dissonance</h4>
          <p className="font-serif text-lg text-gray-300">In the era before the first scribe touched pen to vellum, there was no "Nature." There was only the <strong>Aether-Ink</strong>, a sea of unwritten potential where logic and chaos were indistinguishable. This was not a void of emptiness, but a void of "Too-Muchness," where every history existed simultaneously.</p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-white mb-2 uppercase tracking-widest text-xs">ii. The Descent of the Star-Heart</h4>
          <p className="font-serif text-lg text-gray-300">From the "Cold Above" came the <strong>Star-Vessel</strong>, a shard of absolute, crystalline logic seeking to impose a singular Script. Where it stepped, the Aether froze into silver spires and geometric laws; it sought a world of perfect, silent stillness.</p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-white mb-2 uppercase tracking-widest text-xs">iii. The Coiling of the Sun-Drake</h4>
          <p className="font-serif text-lg text-gray-300">The Elden Sun-Drake, a creature of infinite thermal history, pursued the Star. In the First Breach, the Drake coiled around the Star-Heart. Its flesh did not rot; it calcified. The Dragon died to become the ground beneath our feet, hiding the cold, logical silence of the Star still beating at the world's core.</p>
        </div>
      </div>
    )
  },
  {
    id: "II_PRELUDE",
    title: "II. THE PRELUDE",
    label: "II. The Prelude",
    subtitle: "Account of the Unknown Scribe",
    fullContent: (
      <div className="italic font-serif text-xl leading-loose opacity-90 pl-6 border-l border-white/20">
        <p className="mb-6">"I have walked the corridors of Ever-Metal when the Eye-Sentinels were blind, and I have tasted the soot of the Vertebral Trenches where the sky is a permanent bruise. They tell you the world is 'natural.' They tell you the pikes stay sharp because of 'industry' and the Sun shines because of 'grace.' They lie.</p>
        <p className="mb-6">I found these records in a place erased from the Imperial Archive. The ink is made of Refined Marrow, and it remembers things your priests try to forget.</p>
        <p className="text-gold font-medium">You hold a map of a graveyard, little Princess. Do not mistake the flowers for life; they are merely the patterns the Dragon's decay makes upon the logic of the Star."</p>
      </div>
    )
  },
  {
    id: "III_AL_XANDRIS",
    title: "III. AL-XANDRIS",
    label: "III. The Sun Empire",
    subtitle: "The Shahr-Hegemony",
    fullContent: (
      <div className="space-y-12">
        <p className="font-serif text-xl italic text-gold/80">"The Sanctioned Lie: Civilization is the only thing preventing the world from dissolving."</p>
        
        <p className="font-serif text-lg text-gray-300">Rising from the shimmering dunes like a geometric mirage, the Shahr is the pinnacle of Hydraulic Despotism. A land of white marble plated in Auric-Gold, founded by Xandros I (The Sun-God).</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">1. Demographics</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>The Kashani (62%):</strong> Gilded Humans. Ritual skin-grafting with gold dust.</li>
                 <li><strong>Client-Tribes (24%):</strong> The Un-Gilded. Traded history for protection.</li>
                 <li><strong>Enclave Dvergr (8%):</strong> "Animated Property". Sub-surface laborers.</li>
              </ul>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">2. Geography</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>Siph-Arra Basin:</strong> Inner Heart. Artificial paradise.</li>
                 <li><strong>Auric Delta:</strong> The Breadbasket. Solar-irrigated terraces.</li>
                 <li><strong>Scythe of Xandros:</strong> The jagged borderlands.</li>
              </ul>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">3. Governance</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>Solar Satrapic Bureaucracy.</strong> The Basileia-Sultana rules from the Throne of Lenses. Rebellion is met with hydraulic diversion—drying out a province's water and memory.</p>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">4. Religion</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>Liturgy of the Bound Sun.</strong> Worship is contractual: "I offer my history; You offer your light." Rituals involve burning Drako-Incense.</p>
           </div>
        </div>

        <div>
           <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">5. Military: The Hammer of the Sun</h4>
           <ul className="space-y-3 text-sm text-gray-300 font-sans">
              <li><strong>The Golden Phalanx:</strong> Infantry in "Liturgy-Plated" bronze. Sarissas that "clip" the Aether to stop magic.</li>
              <li><strong>Companion Cataphracts:</strong> Cavalry with Dover-Iron hooves that gallop on air.</li>
              <li><strong>The Basileius-Core (The Nukes):</strong> Colossal, thick-plated suits of gold-iron (Walking Ziggurats). Powered by Marrow-Boilers, piloted by "Venth-Readers". A single unit can incinerate a village by citing the Dragon's heat.</li>
           </ul>
        </div>

        <div className="bg-white/5 p-4 border border-white/10">
           <h4 className="font-sans font-bold text-gold uppercase tracking-widest text-xs mb-2">6. Notable Figures</h4>
           <p className="text-sm text-gray-400 font-sans mb-2"><strong>Princess Zayna Al-Zion:</strong> The "Black Cat". Secretly reading forbidden chronicles.</p>
           <p className="text-sm text-gray-400 font-sans mb-2"><strong>Grand Vizier Mazdak:</strong> Architect of Memory Erasures. So silver-grafted he forgot his name.</p>
           <p className="text-sm text-gray-400 font-sans"><strong>Polemarch Kaleb:</strong> Commander of the Basileius-Core who hears "screams" from his armor.</p>
        </div>
      </div>
    )
  },
  {
    id: "IV_EISEN_MARROW",
    title: "IV. EISEN-MARROW",
    label: "IV. The Iron Reich",
    subtitle: "The Reichland of the Methal-Barons",
    fullContent: (
      <div className="space-y-12">
        <p className="font-serif text-xl italic text-gray-400">"The Cult of the Anvil: The world is a broken machine that must be repaired through suffering."</p>
        
        <p className="font-serif text-lg text-gray-300">If the South is a mirage of gold, the North is a visceral reality of soot and iron. Built into the petrified ribcage of the world, it is a society of Militarized Industrial Feudality.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">1. Demographics</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>The Eisen-Volk (74%):</strong> Skeletons infused with Drako-Lead. Strong, but doomed to painful calcification.</li>
                 <li><strong>The Exiled Sons (12%):</strong> Adoptees from Nifl-wulf. Potential Runic Knights.</li>
                 <li><strong>The Hods (10%):</strong> Sub-surface laborers dredging marrow in lethal trenches.</li>
              </ul>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">2. Geography</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>The Vertebral Trench:</strong> Vertical city miles deep along the Dragon's spine.</li>
                 <li><strong>The Black-Thal:</strong> The Foundry Valley.</li>
                 <li><strong>The Rib-Spires:</strong> Fortifications on the Dragon's ribs.</li>
              </ul>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">3. Governance</h4>
              <p className="text-sm text-gray-400 font-sans">Ruled by <strong>Erz-Herzogs</strong> (Arch-Dukes). Governance via "Anvil-Laws" prioritizing state production. Rebels are shackled with runic chains that drain their history.</p>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">4. Religion</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>Iron Piety.</strong> Marrow is the divine blood of a Martyr-God. Extraction is sacred surgery.</p>
           </div>
        </div>

        <div>
           <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">5. Military: The Meat-Grinder</h4>
           <ul className="space-y-3 text-sm text-gray-300 font-sans">
              <li><strong>Attrition Squares:</strong> Massive formations of pike-men. Soviet-style sacrifice.</li>
              <li><strong>Marrow-Steam Engines:</strong> Crawler-Forts using pressurized marrow-vapor for drills and flamethrowers.</li>
              <li><strong>The Marrow-Crackers (Elite):</strong> Knights with armor hammered into their bones. Wield "Gravity-Maces" containing Dragon-shard. A strike creates localized Narrative Collapse, turning targets to inert stone.</li>
           </ul>
        </div>

        <div className="bg-white/5 p-4 border border-white/10">
           <h4 className="font-sans font-bold text-gold uppercase tracking-widest text-xs mb-2">6. Notable Figures</h4>
           <p className="text-sm text-gray-400 font-sans mb-2"><strong>Erz-Herzog Vargus:</strong> "The Iron-Lungs". Breathes through a runic respirator.</p>
           <p className="text-sm text-gray-400 font-sans mb-2"><strong>Knight-Captain Bram:</strong> Veteran who survived 3 Iron-Baptisms. Can no longer feel pain.</p>
           <p className="text-sm text-gray-400 font-sans"><strong>The Scribe Malachi:</strong> Mapping the "screams" of the drills to find the Dragon's heart.</p>
        </div>
      </div>
    )
  },
  {
    id: "V_NIFL_WULF",
    title: "V. NIFL-WULF",
    label: "V. Nifl-Wulf",
    subtitle: "The Aesir-Vaticum (City of Frozen Thunder)",
    fullContent: (
      <div className="space-y-12">
        <p className="font-serif text-xl italic text-blue-200/80">"Ontological Decrees: A crime is a Narrative Dissonance that must be ritualistically erased."</p>
        
        <p className="font-serif text-lg text-gray-300">Located at the northernmost point, under an Aegis-Dome of perpetual twilight. A gothic-prismatic marvel where history is sanctified and preserved in crystalline lattices.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">1. Demographics</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>The Ljós-Kin (40%):</strong> Luminescent, immortal, slowly turning to silver statues (Narrative Calcification).</li>
                 <li><strong>The Mnemir (10%):</strong> Silent Witnesses. Elven-variants who act as archivists.</li>
                 <li><strong>High-Human Nobility (35%):</strong> Ancient lineages serving the Synod.</li>
              </ul>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">2. Geography</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>Crater Archipelago:</strong> Obsidian islands over an abyss.</li>
                 <li><strong>Glacial Spokes:</strong> Bridges of "Frozen Light".</li>
                 <li><strong>Void-Mist:</strong> Silver fog acting as a sensory barrier.</li>
              </ul>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">3. Governance</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>Matriarchal Academic Synod.</strong> Ruled by the Twelve Elder Mothers who have achieved "Cold-Ascension".</p>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">4. Religion</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>The Lunar Liturgy.</strong> Worship of the Star-Heart (Valar-shard). The Dragon's world is seen as a messy hallucination.</p>
           </div>
        </div>

        <div>
           <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">5. Military: Wrath of the Void</h4>
           <ul className="space-y-3 text-sm text-gray-300 font-sans">
              <li><strong>Einherjar-Guard:</strong> Battle-mages in porcelain-faced armor. Wield "Frozen Thunder" blades that phase through armor.</li>
              <li><strong>Astral-Scripting:</strong> Rewriting local gravity or pressure.</li>
              <li><strong>The Valkyries (The Nukes):</strong> Fractal-angels of screaming light. They create a "Static-Scream" that freezes enemies into glass statues, deleting them from the present.</li>
           </ul>
        </div>

        <div className="bg-white/5 p-4 border border-white/10">
           <h4 className="font-sans font-bold text-gold uppercase tracking-widest text-xs mb-2">6. Notable Figures</h4>
           <p className="text-sm text-gray-400 font-sans mb-2"><strong>The Lunar Seer, Ranni-Vola:</strong> Replaced her body with a four-armed porcelain doll.</p>
           <p className="text-sm text-gray-400 font-sans"><strong>Arch-Scribe Beow-Ulf:</strong> Warrior-poet guarding the archive with a spear of "Un-Ice".</p>
        </div>
      </div>
    )
  },
  {
    id: "VI_AMARTYA_ZEN",
    title: "VI. AMARTYA-ZEN",
    label: "VI. The Jade Shogunate",
    subtitle: "The Celestial Shogunate of the Thousand-Petaled Dharma",
    fullContent: (
      <div className="space-y-12">
        <p className="font-serif text-xl italic text-emerald-400/80">"The World-Breath: The Shogun rules not by force, but by Spiritual Synchronization."</p>
        
        <p className="font-serif text-lg text-gray-300">Situated where dawn kisses the continent. Floating bamboo pagodas and jungles that hum with ancient resonance. A land where the boundaries between physical and spiritual are thinned.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">1. Demographics</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>Dharmic Humans (55%):</strong> Tattooed with Sanskrit-Runes.</li>
                 <li><strong>Rakshasa (18%):</strong> Tigermen warrior-caste. Metallic fur.</li>
                 <li><strong>Vanara (15%):</strong> Monkey-kin scholars of Aether.</li>
                 <li><strong>Asura-Touched (2%):</strong> Beings with extra limbs/glowing skin.</li>
              </ul>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">2. Geography</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400 space-y-2 font-sans">
                 <li><strong>Ganges-of-the-Stars:</strong> River flowing with spirit-mist.</li>
                 <li><strong>Jade Jungle:</strong> Bioluminescent saturation zone.</li>
                 <li><strong>Spires of Amaterasu:</strong> Floating crystalline mountains.</li>
              </ul>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">3. Governance</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>Theocratic Shogunate.</strong> The Shogun mediates between spirits and humans. Daimyos use "Mudra-Laws" to bend the environment.</p>
           </div>
           <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">4. Religion</h4>
              <p className="text-sm text-gray-400 font-sans"><strong>Dharma-Resonance.</strong> The world is a song. Goal is "Moksha-Stability" to see the Radiant State without madness.</p>
           </div>
        </div>

        <div>
           <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">5. Military: The Symphony of War</h4>
           <ul className="space-y-3 text-sm text-gray-300 font-sans">
              <li><strong>Warrior-Monk Sects:</strong> Duelists who "pinch" lines of history to break armor.</li>
              <li><strong>Indra-Elephants:</strong> Six-tusked beasts emitting low-frequency Aum-Hum that liquifies organs.</li>
              <li><strong>The Asura-Vanguard (The Nukes):</strong> Elite warriors in "Frenzy". Manifest spectral arms wielding blades of Hardened Sound.</li>
           </ul>
        </div>

        <div className="bg-white/5 p-4 border border-white/10">
           <h4 className="font-sans font-bold text-gold uppercase tracking-widest text-xs mb-2">6. Notable Figures</h4>
           <p className="text-sm text-gray-400 font-sans mb-2"><strong>Shogun Amartya-Zen II:</strong> A youth who floats in perpetual trance.</p>
           <p className="text-sm text-gray-400 font-sans"><strong>General Rakshas-Khan:</strong> Tigerman with a lightning-forged katana.</p>
        </div>
      </div>
    )
  },
  {
    id: "VII_DVERGR",
    title: "VII. THE DVERGR",
    label: "VII. The Root-Kin",
    subtitle: "The Deep Maintenance (The Lithic-Mycelium)",
    fullContent: (
      <div className="space-y-12">
        <p className="font-serif text-lg text-gray-300">To surface-dwellers, they are smiths. The truth is more alien. The Dvergr are <strong>Mineral-Fungal Hybrids</strong> exuded from the Dragon’s marrow. They view the world as a colossal machine that must be tuned to prevent the Aether-Ink from leaking back in.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-4 border border-white/10">
                <h4 className="font-bold text-gold mb-2 text-xs uppercase font-sans">1. Appearance</h4>
                <p className="text-sm text-gray-300 font-sans">Skin of cold slate and rusted iron. "Muscles" are translucent fungal-fibers. Their beards are Mycelium-Filaments that plug into the stone to "taste" geological instability.</p>
            </div>
            <div className="bg-white/5 p-4 border border-white/10">
                <h4 className="font-bold text-gold mb-2 text-xs uppercase font-sans">2. Religion: The Stone-Song</h4>
                <p className="text-sm text-gray-300 font-sans">They worship <strong>The Symphony of Stasis</strong>. Their faith is rhythmic calibration. If they stop singing, the world-machine collapses.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">3. Magic & Cost</h4>
               <p className="text-sm text-gray-400 font-sans"><strong>Lithic-Resonance.</strong> Humming frequencies to make stone flow. <br/><strong>Cost:</strong> Petrification. They slowly turn into permanent statues.</p>
            </div>
            <div>
               <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">4. Governance</h4>
               <p className="text-sm text-gray-400 font-sans"><strong>The Great Mycelium Accord.</strong> Consensus via Hive-Mind connection to Root-Mothers.</p>
            </div>
        </div>
        
        <div>
            <h4 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-2 border-b border-white/10 pb-1">5. Military: Architectural Defiance</h4>
            <p className="text-sm text-gray-400 font-sans mb-2">They control the floor beneath your feet. <strong>Seismic-Breaching:</strong> Liquefying foundation stones.</p>
            <p className="text-sm text-gray-400 font-sans"><strong>The Grubs:</strong> Colossal worm-like bio-constructs that chew through Ever-Metal, deleting fortifications.</p>
        </div>
      </div>
    )
  },
  {
    id: "VIII_FRAGMENT",
    title: "VIII. [ AZTLAN ]",
    label: "VIII. Aztlan",
    subtitle: "The Xi-Ba'al Hegemony (The Sun-Eaters)",
    fullContent: (
      <div className="border border-red-900/50 bg-red-950/10 p-8 relative overflow-hidden space-y-8">
        <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-red-500 uppercase border border-red-500 bg-black">Heretical Data</div>
        
        <p className="mb-6 text-red-200/80 font-serif italic text-xl">"They don't want to rule you—they want to Harvest you to save a Dragon you don't even believe in."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="font-sans font-bold text-red-500 uppercase tracking-widest text-xs mb-2 border-b border-red-500/30 pb-1">1. Demographics</h4>
              <ul className="list-disc pl-4 text-sm text-red-200/70 space-y-2 font-sans">
                 <li><strong>Nahual-Kin (70%):</strong> Skin tattooed with ground jade and dragon-glass.</li>
                 <li><strong>Jaguar-Hussars (15%):</strong> Grafted with Dragon-nerves.</li>
                 <li><strong>Serpentine-Scribes:</strong> Write history in "Living Ink" (blood).</li>
              </ul>
           </div>
           <div>
              <h4 className="font-sans font-bold text-red-500 uppercase tracking-widest text-xs mb-2 border-b border-red-500/30 pb-1">2. Geography</h4>
              <ul className="list-disc pl-4 text-sm text-red-200/70 space-y-2 font-sans">
                 <li><strong>Xibalba-Crater:</strong> Massive sunken valley.</li>
                 <li><strong>Smoking Mirror Coast:</strong> Obsidian cliffs.</li>
              </ul>
           </div>
        </div>

        <div>
           <h4 className="font-sans font-bold text-red-500 uppercase tracking-widest text-xs mb-2 border-b border-red-500/30 pb-1">3. Philosophy: The Great Reciprocity</h4>
           <p className="text-sm text-red-200/70 font-sans">For every harvest, a specific number of "Narratives" must be extinguished to prevent the Dragon from rotting. The world is a divine patient, they are the surgeons.</p>
        </div>

        <div>
           <h4 className="font-sans font-bold text-red-500 uppercase tracking-widest text-xs mb-2 border-b border-red-500/30 pb-1">4. Military: The Obsidian Shadow</h4>
           <p className="text-sm text-red-200/70 font-sans mb-2"><strong>Atlatl-Shock-Troops:</strong> Throw "Blood-Bolts" that dissolve armor.</p>
           <p className="text-sm text-red-200/70 font-sans"><strong>The Quetzal-Eaters (Nukes):</strong> Drop "Cenote-Bombs" that create Chronicle-Voids, physically deleting targets from memory.</p>
        </div>
      </div>
    )
  },
  {
    id: "IX_TAXONOMY",
    title: "IX. TAXONOMY",
    label: "IX. Taxonomy",
    subtitle: "Ontological Taxonomy of Races",
    fullContent: (
      <div className="space-y-8">
        <p className="font-serif text-lg text-gray-400">Biology in this world is not evolution; it is a reaction to the Dragon's decay or the Star's logic.</p>
        
        <ul className="space-y-8">
          <li>
              <strong className="text-xl block text-white mb-2 font-gothic">I. HOMO-NOMOS (Narrative Parasites)</strong>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">Humans possess "Narrative Plasticity." They are shaped by the stories of their masters. <br/><span className="text-gold">Gilded Humans</span> (South) are conduits for sun-magic. <br/><span className="text-gray-200">Marrow-Bound</span> (North) have skeletons of Drako-Lead.</p>
          </li>
          <li>
              <strong className="text-xl block text-white mb-2 font-gothic">II. THE MNEMIR (Elves/Aurilim)</strong>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">Amoral custodians of the Original Script. To look into their eyes is to see the "Seams" of the universe—a psychedelic experience that leaves observers "Narratively Void."</p>
          </li>
          <li>
              <strong className="text-xl block text-white mb-2 font-gothic">III. THE CHIMERA-KIN</strong>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">Biological masterpieces of Resonance. <br/><span className="text-orange-400">Rakshasa</span> (Tigermen) act as Faraday cages. <br/><span className="text-yellow-600">Vanara</span> (Monkey-men) navigate Aether-currents. <br/><span className="text-stone-400">Felids</span> (Cat-folk) are the sensory network.</p>
          </li>
          <li>
              <strong className="text-xl block text-white mb-2 font-gothic">IV. THE MONOLITHS</strong>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">Geological burdens. <br/><span className="text-red-900">Centaurs</span> are Bio-Engines. <br/><span className="text-purple-400">Cyclopes</span> see only the Radiant Code, blind to the "Physical Lie".</p>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "X_BESTIARY",
    title: "X. THE BESTIARY",
    label: "X. The Bestiary",
    subtitle: "The Accumulated Horrors",
    fullContent: (
      <div className="space-y-10">
        <p className="text-xl italic text-gray-500 font-serif">"The horror of Nomos is not that there are monsters under the bed; it’s that we are the ones who wrote them into existence."</p>
        
        <div>
            <h4 className="font-bold text-purple-300 uppercase tracking-widest mb-2 font-sans">1. Vampires (Aristocracy of Hunger)</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Born from the "Sanctioned Lie" of Eternal Sovereignty. Nobles whose Narrative Weight has become parasitic. They must drain the "History" of others to avoid calcifying into statues.</p>
        </div>
        
        <div>
            <h4 className="font-bold text-emerald-700 uppercase tracking-widest mb-2 font-sans">2. The Wendigo (Hunger of the Husk)</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Corruption of the Survival Narrative. Manifests when biological hunger overrides rational script. Gaunt parodies of humanity with skin stretched over Dragon-bone. They consume the "Will" of victims.</p>
        </div>
        
        <div>
            <h4 className="font-bold text-cyan-200 uppercase tracking-widest mb-2 font-sans">3. The Cyclopes (The Ancient Gaze)</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Sages who have looked directly into the Radiant State for too long. Their eye is a hole in reality that sees the code but not the beauty.</p>
        </div>

        <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-2 font-sans">4. Dissonance-Spawn</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Creatures manifested when local belief violently contradicts the Dragon's memory. Glitching, unstable anatomies.</p>
        </div>
      </div>
    )
  },
  {
    id: "XI_DISCARDED",
    title: "XI. THE DISCARDED",
    label: "XI. The Discarded",
    subtitle: "Races of the Trench (Orcs & Goblins)",
    fullContent: (
      <div className="space-y-10">
        <p className="font-serif text-lg text-gray-300">Soldiers "Un-Named" by the state. They are not separate races, but <strong>Degenerated Narratives</strong> left to rot in the Static Zones.</p>

        <div className="bg-white/5 p-6 border-l-4 border-red-900">
            <h3 className="font-gothic text-3xl text-red-500 mb-2">THE ORC-VARIANTS (GRINDER-KIN)</h3>
            <p className="text-gray-300 mb-4 font-sans text-sm">Massive, hunchbacked entities whose original plate-armor has physically fused with their dermis. Tusks are marrow-outgrowths.</p>
            <p className="text-sm text-red-300 font-sans mb-1"><strong>Religion:</strong> Liturgy of the Last Command. Obsessed with the last order received before being Un-Named.</p>
            <p className="text-sm text-red-300 font-sans"><strong>Magic Cost:</strong> Biological Overwrite. Using power makes the iron dig deeper into their organs.</p>
        </div>

        <div className="bg-white/5 p-6 border-l-4 border-yellow-700">
            <h3 className="font-gothic text-3xl text-yellow-600 mb-2">THE HOBGOBLINS (SCAVENGER-VERMIN)</h3>
            <p className="text-gray-300 mb-4 font-sans text-sm">Remnants of maintenance crews. Bodies are a nightmare of Junk-Grafts (rusted hydraulics, stolen eyes). They "taste" the static of storms.</p>
            <p className="text-sm text-yellow-500 font-sans mb-1"><strong>Religion:</strong> The Great Salvage. Worship "Narrative Shards" (artifacts) to build a new truth.</p>
            <p className="text-sm text-yellow-500 font-sans"><strong>Magic Cost:</strong> Memetic Fragmentation. Speaking in voices of dead men, losing their "Self".</p>
        </div>
      </div>
    )
  },
  {
    id: "XII_TIMELINE",
    title: "XII. CHRONICLE OF AGES",
    label: "XII. Timeline",
    subtitle: "The Stratigraphy of Trauma",
    fullContent: (
      <div className="space-y-8">
        <p className="font-serif text-lg text-gray-400 italic">"Do not read this as a history. Read it as a Countdown."</p>
        
        <ul className="border-l border-white/20 ml-4 pl-8 space-y-12 relative font-sans">
          <li className="relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-black"></span>
              <strong className="text-white block text-lg mb-1">I. AGE OF THE UNBOUND</strong>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">The Era of Script</span>
              <p className="text-sm opacity-60">Pure logic, geometry, and the Star-Vessel. A perfect, silent song of mathematics.</p>
          </li>
          <li className="relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-gold border-4 border-black"></span>
              <strong className="text-gold block text-lg mb-1">II. AGE OF THE DRAKE</strong>
              <span className="text-[10px] uppercase tracking-widest text-gold/50 block mb-2">The Era of the Fall</span>
              <p className="text-sm opacity-60">The Dragon coils around the Star. The birth of Natural Law, mountains, and cooling seas.</p>
          </li>
          <li className="relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-gray-500 border-4 border-black"></span>
              <strong className="text-gray-400 block text-lg mb-1">III. AGE OF THE FRAGMENTED MASK</strong>
              <span className="text-[10px] uppercase tracking-widest text-gray-600 block mb-2">The Rise of the Lie</span>
              <p className="text-sm opacity-60">Xandros I creates the Sanctioned Narratives to hide the dead god. The "Lie of Peace" is bought with blood.</p>
          </li>
          <li className="relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-red-600 border-4 border-black animate-pulse"></span>
              <strong className="text-red-500 block text-lg mb-1">IV. AGE OF THE NOMOS (Present)</strong>
              <span className="text-[10px] uppercase tracking-widest text-red-900 block mb-2">The Era of Silence</span>
              <p className="text-sm opacity-60">The Fading Marrow. Empires crumble. The Heat of History leaks through cracks in reality. The Truth returns.</p>
          </li>
        </ul>
      </div>
    )
  }
];