import React from "react";
// Importamos imágenes generales para el panel derecho
import mapImage from "../assets/images/map_with_factions_01.webp";
import drawNomos1 from "../assets/images/drawing_nomos_01.webp";
import drawNomos2 from "../assets/images/drawing_nomos_02.webp";
import drawNomos3 from "../assets/images/drawing_nomos_03.webp";
import drawNomos4 from "../assets/images/drawing_nomos_04.webp";
import illus1 from "../assets/images/illustration_01.webp";

// Función auxiliar para títulos de sección
const SectionTitle = ({ children }) => (
  <h3 className="font-cook text-3xl md:text-4xl text-[#d4af37] mt-12 mb-6 border-b border-[#d4af37]/20 pb-2">
    {children}
  </h3>
);

const SubTitle = ({ children }) => (
  <h4 className="font-cinzel text-xl text-gray-200 mt-8 mb-4 font-bold tracking-wide">
    {children}
  </h4>
);

const BodyText = ({ children }) => (
  <p className="font-cormorant text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 text-justify">
    {children}
  </p>
);

const Quote = ({ children }) => (
  <div className="border-l-2 border-[#d4af37] pl-6 my-8 py-2 bg-[#d4af37]/5">
    <p className="font-cormorant text-xl italic text-[#d4af37]">{children}</p>
  </div>
);

export const LORE_CHAPTERS = [
  // =====================================================================
  // I. GENESIS
  // =====================================================================
  {
    id: "GEN_01",
    title: "Genesis",
    subtitle: "The Stone and The Fire",
    category: "I. GENESIS",
    visualData: {
      image: mapImage, // Mapa General
      stats: [
        { label: "Era", value: "Time Before Time" },
        { label: "Event", value: "The Calcification" },
      ],
      tags: ["Cosmogony", "Titan-War", "Apanchwi"],
      summary:
        "The collision of Spirit (Fire) and Logic (Ice) that created the world.",
    },
    fullContent: (
      <>
        <Quote>
          To the High Priest, this is a hymn. To the Natural Philosopher, it is
          the anatomy of a calamity.
        </Quote>

        <SectionTitle>i. The War in the Firmament</SectionTitle>
        <BodyText>
          In the Time Before Time, when the stars were yet young, there was only
          the Aether—the Ocean of Night. In this void, two Great Powers waged a
          war of Spirit and Substance.
        </BodyText>
        <BodyText>
          One was the <strong>Chryso-Pyr (The Golden Fire)</strong>, a Being of
          infinite hunger and furious life, burning with the heat of a thousand
          suns. It sought to consume the void and fill it with the pain of
          feeling.
        </BodyText>
        <BodyText>
          The other was the <strong>Argent-Ark (The Silver Logic)</strong>, a
          Sphere of cold, perfect order. It sought to freeze the Aether into a
          silent crystal, where nothing would ever bleed, or change, or die.
        </BodyText>

        <SectionTitle>ii. The Flight of the Moon-Vessel</SectionTitle>
        <BodyText>
          From the burning heavens of the First-Born, the Argent-Ark fled. It
          was not a god, though the pale men of the North pray to its shards. It
          was a Vessel of the Aurelim (The High Ones), a moon made of silver
          glass and geometry, carrying the seeds of worlds that were clean and
          silent. It sailed the winds of the stars, seeking a "Blank Scroll"—a
          world without a story—where it could write a new, perfect law.
        </BodyText>

        <SectionTitle>iii. The Stalking Hunger</SectionTitle>
        <BodyText>
          But the Fire followed. The Eldhrás (The Sun-Drake) was no mere beast.
          It was a Celestial Leviathan, vast as a continent, born from the
          death-throes of stars. It pursued the Ark not out of hate, but out of
          Great Need. It craved the cold order of the Ark as a man craves water
          in the dunes. It trailed the Ark across the firmament, a comet of
          flesh and gold, burning the darkness behind it.
        </BodyText>

        <SectionTitle>iv. The Fall and The Coil</SectionTitle>
        <BodyText>
          Fifty thousand years ago, the Hunger overtook the Silence in the skies
          above our earth. The collision did not just crack the ground; it
          shattered the seas, creating the Apanchwi (The Boiling Deluge). Waves
          as high as mountains, heavy with the heat of the falling stars,
          threatened to wash all life into the void.
        </BodyText>
        <SubTitle>The Transformation</SubTitle>
        <BodyText>
          When the Dragon’s burning flesh touched the cold magic of the Ark, a
          great alchemy occurred. The Dragon turned to Stone. Its body became
          the land we walk. Its spine became the Misty Peaks. Its wings became
          the Broken Isles. The Ark was buried beneath the weight of the beast,
          entombed in the ice of the furthest North.
        </BodyText>
        <SubTitle>The Miracle of the West</SubTitle>
        <BodyText>
          While the Celestial Giants fell, the god of the West, Quetzalcoatl,
          rose. To save his children from the drowning waters, the Plumed
          Serpent expanded his divine form. He Coiled around the lands of the
          setting sun. The heat of the falling stars petrified him, turning his
          feathers into a wall of diamond mountains, shielding the West from the
          end of the world.
        </BodyText>

        <SectionTitle>v. The Age of the Sleepers</SectionTitle>
        <BodyText>
          For thirty thousand years, we have dwelt here. We call ourselves the
          Masters of the Earth. We are not. We are Fleas. We awoke in the
          cooling valleys of the Dragon’s hide. We found the leaking humors of
          the gods—the Silver Marrow, the Golden Oil, the Light of the Star—and
          we drank. We built our Ziggurats on the warmth of a rotting corpse.
        </BodyText>
      </>
    ),
  },
  {
    id: "GEN_02",
    title: "Prelude",
    subtitle: "Confession of the Scribe",
    category: "I. GENESIS",
    visualData: {
      image: illus1,
      stats: [
        { label: "Scribe", value: "Ibn Al-Althaeir" },
        { label: "Status", value: "Purged" },
      ],
      tags: ["Heresy", "Truth", "Warning"],
      summary: "Written in a shaking hand on the back of a stolen scroll.",
    },
    fullContent: (
      <>
        <Quote>
          "Princess Zayna, Light of the Morning, if you read this, I have
          already passed into the Shadow. The Keepers of Memory do not forgive
          those who dig too deep."
        </Quote>

        <SectionTitle>i. The Discovery in the Mirror-Wastes</SectionTitle>
        <BodyText>
          "I found it in the Lake of Visions, where the High-Road crumbles into
          the salt. It was a place of silence, where the memory of the earth had
          faded to grey dust. There, buried beneath the sands of an ancient
          city, I found the Rib of the Star. It was not bone. It was a metal
          that wept cold light, forged not by hammers, but grown like crystal."
        </BodyText>
        <BodyText>
          "I read the truth, and my heart turned to ash. Xandros the Great did
          not conquer the sun; he stole a heart-shard from a dying beast. The
          Iron-Barons of the North are not mining ore; they are cutting into the
          nerves of a god. The West is not lost; they are the only ones holding
          the gate shut against the flood. We do not live on a world, Princess.
          We live on a Murder."
        </BodyText>

        <SectionTitle>ii. The Warning to the Reader</SectionTitle>
        <BodyText>
          "You hold the Onomastikon. It is the only map that tells no lies. But
          hear my warning: To know this truth is to lose the peace of the
          Sanctioned Lie. You will never taste the Golden Water again without
          tasting the blood of a Titan. You will never look at the Silver Pike
          without seeing the spine of a monster. You will be alone in a world of
          sleepwalkers."
        </BodyText>
        <Quote>
          "The Dragon stirs, Zayna. The Jade-Knot unravels. The Slumber is
          ending. Awaken."
        </Quote>
      </>
    ),
  },

  // =====================================================================
  // II. THE POWERS (FACTIONS)
  // =====================================================================
  {
    id: "PWR_01",
    title: "Al-Xandris",
    subtitle: "The Sun Empire",
    category: "II. THE POWERS",
    visualData: {
      image: drawNomos1, // Faction Art
      stats: [
        { label: "Capital", value: "Xandropolis" },
        { label: "Leader", value: "Raziya al-Xandris" },
        { label: "Relic", value: "Basileius-Core" },
      ],
      tags: ["Solar", "Gold", "Despotism"],
      summary:
        "The Gilded Lie. A hydraulic despotism built on the Head of the Dragon.",
    },
    fullContent: (
      <>
        <Quote>
          "Princess, do not look at the gold; look at what it drowns. The
          Aqueducts do not bring life; they bring compliance."
        </Quote>

        <SectionTitle>1. The Face of the Empire</SectionTitle>
        <BodyText>
          The Shahr-Hegemony is a civilization built on the "Head" of the
          Dragon. It is a Tower of Babel realized through the heavy, ornate
          aesthetics of the Baroque Age mixed with the grandeur of Babylon. From
          the air, it appears as tiered ziggurats like steps to a stolen heaven.
          Hanging Gardens spill emerald vines and lapis lazuli over
          mathematically precise boulevards.
        </BodyText>
        <BodyText>
          The capital, <strong>Xandropolis</strong>, is the Primal Wound made
          glorious: a concentric series of walls, each taller and more
          resplendent than the last, culminating in The Gilded Palace, a needle
          of gold that pierces the sky.
        </BodyText>

        <SectionTitle>2. The Stratum of the Gilded Lie</SectionTitle>
        <SubTitle>The Gilded Palace (Core)</SubTitle>
        <BodyText>
          Home of the Basileia-Sultana and the Dynastoi. Many exhibit dual
          genders, a mutation from the Pyrochrysos Heart. They are a curated
          bloodline of living relics, their bodies slowly transmuting toward
          gold. They do not rule; they curate.
        </BodyText>
        <SubTitle>The Silver Caste</SubTitle>
        <BodyText>
          Soldiers and Captains. Assimilated warriors who earned citizenship
          through blood. They wear masks of silver to hide their old identities.
        </BodyText>
        <SubTitle>The Foundations</SubTitle>
        <BodyText>
          Beneath the gleaming streets lie the stifling tunnels where Enclave
          Dvergr (Petrified-Skin Dwarves) and the Un-Named maintain the
          foundations of the earth.
        </BodyText>

        <SectionTitle>3. Military Might: The Spears of the Sun</SectionTitle>
        <BodyText>
          <strong>The Silver Phalanx:</strong> Heavy infantry in Liturgy-Plated
          silver. Their immense Sarissas are not just pikes; they are
          Aether-Dissonance Rods. When planted, they create a zone where foreign
          magic sputters.
        </BodyText>
        <SubTitle>The Basileius-Core (The Relic)</SubTitle>
        <BodyText>
          The transcendent weapon. Not a machine, but a Walking, Armored Statue
          of mithril, platinum, and crystallized fire. It resembles a classical
          Greek or Babylonian god, flayed to reveal gears of gold-iron.
          <br />
          <br />
          <strong>The Price:</strong> Pyrochrysian Transmutation. Piloting
          consumes the pilot’s Historicity (Memories, Identity). A pilot emerges
          forgetting their child's face.
        </BodyText>

        <SectionTitle>4. Magic: Solar-Thaumaturgy</SectionTitle>
        <BodyText>
          Principle: Citing the Dragon's fossilized heat using Aqua-Sol as a
          medium.
          <br />
          Cost: The Hollow Soul. To cast fire is to burn a memory of warmth from
          your own mind.
        </BodyText>
      </>
    ),
  },
  {
    id: "PWR_02",
    title: "The Reichland",
    subtitle: "Iron-Barons of the North",
    category: "II. THE POWERS",
    visualData: {
      image: drawNomos2,
      stats: [
        { label: "Capital", value: "The Trench" },
        { label: "Leader", value: "Kaiser Vargus" },
        { label: "Relic", value: "Eisen-Mail" },
      ],
      tags: ["Industrial", "Iron", "Gothic"],
      summary: "The Anvil of God. A faith founded upon the autopsy of a Titan.",
    },
    fullContent: (
      <>
        <Quote>
          "The sounds coming from the mines are no longer just shifting stone.
          The patient is beginning to scream."
        </Quote>

        <SectionTitle>1. The Passion of the Ore</SectionTitle>
        <BodyText>
          Karl-Urich, a miner-prophet, found the silver ribs of the Dragon and
          mistook them for the bones of a Crucified God. He proclaimed that the
          land was the body of a Wounded God-King, crucified to save the world
          from the Cold Void.
        </BodyText>
        <BodyText>
          They were not miners; they were Surgeons. Their duty was to drain the
          "infected" silver blood, refine it into cold Order (Iron), and keep
          the God in a holy, comatose peace.
        </BodyText>

        <SectionTitle>2. The Visage of the March</SectionTitle>
        <BodyText>
          The Reichland is a land of violent duality. Vast swathes remain a
          paradise of the Old World—emerald valleys and snow-capped peaks. But
          eating away at this beauty is the Industry of the Drill. The capitals
          are not built on the ground, but carved into the canyon walls of the
          Vertebral Trench. They are sprawling, brutalist fortresses of black
          iron and gargoyles that spew smoke.
        </BodyText>

        <SectionTitle>3. The Stratum of the Grind</SectionTitle>
        <SubTitle>The Methal-Barons (Die Kurfürsten)</SubTitle>
        <BodyText>
          The ruling lords. They dwell in the Ehrenfesten high above the smog.
          They are addicted to Sacred Herbs grown in the Marrow-fumes. This
          smoke grants them Stahlgewissen (Steel-Conscience); they feel no pity,
          only the cold logic of iron.
        </BodyText>
        <SubTitle>The Iron-Sons (Der Eisen-Orden)</SubTitle>
        <BodyText>
          Genetically pure giants imported from the North. The Teutonic Knights
          of the age, sworn to Silence and Steel.
        </BodyText>

        <SectionTitle>4. The Eisen-Mailplates (The Relic)</SectionTitle>
        <BodyText>
          These are Heavy Full-Plated Armors of the Giménez aesthetic. They
          resemble the classical full-mailed armors of the medieval age, but
          magnified to the scale of giants. The more ornamented they are with
          runic inscriptions and the history of war, the greater their power.
          <br />
          <br />
          <strong>The Curse:</strong> The Berserkergang. The mixture of Star and
          Dragon energies creates a "Dissonance" in the engine that sounds like
          screaming, driving the pilot mad with rage.
        </BodyText>
      </>
    ),
  },
  {
    id: "PWR_03",
    title: "Naglfarborg",
    subtitle: "Citadel of the Dead Moon",
    category: "II. THE POWERS",
    visualData: {
      image: drawNomos3,
      stats: [
        { label: "Site", value: "Ark Crash" },
        { label: "Relic", value: "Valkyrja" },
      ],
      tags: ["Technocracy", "Ice", "Star-Logic"],
      summary: "Squatters in the engine room of a dead machine.",
    },
    fullContent: (
      <>
        <Quote>
          "They are the keepers of the light, but they are freezing to death in
          the dark."
        </Quote>

        <SectionTitle>1. The Twilight of the Gods</SectionTitle>
        <BodyText>
          In the Age of Myth, the Silver Ark fell from the stars. The Pilots
          (Elves) died, but their human thralls survived inside the warm
          wreckage. Over centuries, they forgot they were mechanics and
          convinced themselves they were the Chosen Keepers.
        </BodyText>

        <SectionTitle>2. The Hall of the Pale Star</SectionTitle>
        <BodyText>
          Naglfarborg is a vision of Beowulf played out in a cathedral of
          crystal and chrome. It is built inside the exposed ribs of the crashed
          Ark. There are no fires here, only the cold, blue hum of the Liquid
          Starlight. The city sings—a constant, resonant frequency that keeps
          the ice from crushing the walls.
        </BodyText>

        <SectionTitle>3. The Weave of Fate</SectionTitle>
        <BodyText>
          <strong>The Urðar-Matriarchs (Norns):</strong> Cyborg council fused
          into the Ark’s control mechanisms. They interpret dying data-streams
          as divine whispers.
          <br />
          <strong>Daughters of Light:</strong> Tall, pale women with
          bioluminescent skin. Logic is the language of Gods; emotion is a
          sickness.
        </BodyText>

        <SectionTitle>4. The Valkyrja-Armor (The Relic)</SectionTitle>
        <BodyText>
          Tall, slender suits etched from the Ark's translucent hull. They
          resemble winged angels of death. They wield Gungnir-Lances (Gravity
          Beams).
          <br />
          <br />
          <strong>The Price:</strong> The Fading. The pilot slowly loses her
          connection to the earth, forgetting warmth, taste, and love.
        </BodyText>
      </>
    ),
  },
  {
    id: "PWR_04",
    title: "Amartya-Zen",
    subtitle: "The Tenjō Shogunate",
    category: "II. THE POWERS",
    visualData: {
      image: drawNomos4,
      stats: [
        { label: "Axis", value: "Shattered Tree" },
        { label: "Relic", value: "Asura" },
      ],
      tags: ["Jade", "Floating", "Resonance"],
      summary:
        "A garden hanging over an infinite drop. High Eastern Fantasy filtered through Baroque Tragedy.",
    },
    fullContent: (
      <>
        <Quote>
          "They float above the mud, pretending the ground does not exist. But
          gravity is patient."
        </Quote>

        <SectionTitle>1. The Shattering of the Axis</SectionTitle>
        <BodyText>
          When the World-Tree fell, the First Devaraja did not save it; she
          froze its fall. She bound her soul to the dying scream of the tree,
          creating a "Harmonic Cage". The islands float only because the
          chanting of the monks matches the vibration of the falling earth.
        </BodyText>

        <SectionTitle>2. The Visage of the Dream</SectionTitle>
        <BodyText>
          A vertical empire. The Celestial Canopy consists of continent-sized
          islands of white jade floating miles above the ruined surface. Pagodas
          rise from the hollows of petrified mega-fauna bones. It is a place of
          breathtaking, terrifying beauty.
        </BodyText>

        <SectionTitle>3. The Stratum of Resonance</SectionTitle>
        <BodyText>
          <strong>The Devaraja (Shogun):</strong> A Living Tuning Fork. He sits
          on the Lotus Throne, wired into the root-system, dreaming the Empire
          into stability.
          <br />
          <strong>Rakshasa (Tiger-Folk):</strong> Noble warriors with metallic
          fur. Second-class citizens bound by honor.
        </BodyText>

        <SectionTitle>4. The Asura-Vanguard (The Relic)</SectionTitle>
        <BodyText>
          Colossal Samurai-Effigies of heavy, red-lacquered iron. They possess
          four arms (two physical, two spectral). Their blade severs the "String
          of Fate," erasing enemies from reincarnation.
          <br />
          <br />
          <strong>The Price:</strong> Karmic Suicide. To power the Asura, the
          pilot burns his own future lives.
        </BodyText>
      </>
    ),
  },
  {
    id: "PWR_05",
    title: "Teo-Aztlan",
    subtitle: "Hegemony of the Fifth Sun",
    category: "II. THE POWERS",
    visualData: {
      image: drawNomos1, // Placeholder reuse or specific image if available
      stats: [
        { label: "Site", value: "The Coil" },
        { label: "Relic", value: "Coatl-Colossi" },
      ],
      tags: ["Blood", "Obsidian", "Debt"],
      summary:
        "Survivors of the Great Deluge, preserved by the sacrifice of Quetzalcoatl.",
    },
    fullContent: (
      <>
        <Quote>
          "We have forgotten the flood, Zayna. But the flood has not forgotten
          us."
        </Quote>

        <SectionTitle>1. The Coil Against the Deluge</SectionTitle>
        <BodyText>
          Quetzalcoatl, the Dragon of Wind, did not fight the falling giants; he
          protected the small. He Coiled around the lands of the setting sun.
          The heat of the falling stars petrified him, turning his feathers into
          a wall of diamond mountains.
        </BodyText>

        <SectionTitle>2. The City of the White Heron</SectionTitle>
        <BodyText>
          Hidden inside the Xibalba Crater, Teo-Aztlan floats on the Lake of the
          Moon. It is a white city of bleached limestone and silver. The crater
          walls are the fossilized plumes of the Serpent.
        </BodyText>

        <SectionTitle>3. The Coatl-Colossi (The Relic)</SectionTitle>
        <BodyText>
          Giménez-Style Stone-Mechs. Massive statues of basalt and jade with
          exposed bio-muscle fibers. They wield Turquoise-Serpent Flamethrowers.
          <br />
          <br />
          <strong>The Power:</strong> They do not burn fuel; they burn Teotl
          (Divine Energy). The pilot often wastes away, their body burned as
          kindling.
        </BodyText>
      </>
    ),
  },

  // =====================================================================
  // III. THE WORLD
  // =====================================================================
  {
    id: "WRLD_01",
    title: "Arteries",
    subtitle: "Geography & Great Works",
    category: "III. THE WORLD",
    visualData: {
      image: mapImage,
      stats: [
        { label: "Network", value: "Wall-Roads" },
        { label: "Danger", value: "The Wilds" },
      ],
      tags: ["Infrastructure", "Harradin", "Wilds"],
      summary: "The anatomy of a God. The roads are veins.",
    },
    fullContent: (
      <>
        <Quote>"Stay on the pavement, Zayna. The grass bites."</Quote>

        <SectionTitle>1. The Harrādin (The High-Stone Walls)</SectionTitle>
        <BodyText>
          These are not walls built by hands. They are the fossilized arteries
          of the Dragon, reinforced to allow mortals to traverse the necrotic
          flesh of a Titan without being digested. They are colossal,
          highway-sized walls of seamless black basalt.
        </BodyText>

        <SectionTitle>2. The Landscapes of Myth</SectionTitle>
        <SubTitle>The Mirror-Wastes (South)</SubTitle>
        <BodyText>
          A salt-lake that reflects the sky of 10,000 years ago. Travelers
          getting lost in time.
        </BodyText>
        <SubTitle>The Glass Desert (Center)</SubTitle>
        <BodyText>
          The Forbidden Zone. Black silica sand and violet lightning. Home of
          the Shadow-Keepers.
        </BodyText>

        <SectionTitle>3. The Wilds</SectionTitle>
        <BodyText>
          The "Nature" of our world is not natural. It is the overgrown body of
          a God. The mountains are spines; the caves are pores. To step off the
          Road is to step onto the skin of a god that hates you.
        </BodyText>
      </>
    ),
  },

  // =====================================================================
  // IV. ARS ARCANA (PLACEHOLDER)
  // =====================================================================
  {
    id: "ARC_01",
    title: "Ars Arcana",
    subtitle: "Systemic Magic",
    category: "IV. ARS ARCANA",
    visualData: {
      image: null,
      stats: [],
      tags: ["Encrypted", "Classified"],
      summary: "Data Fragmented. Access Restricted.",
    },
    fullContent: (
      <div className="flex flex-col items-center justify-center h-64 border border-white/10 bg-white/5 p-8 text-center">
        <span className="font-code text-red-500 text-xs uppercase tracking-widest animate-pulse mb-4">
          /// ERROR: FILE CORRUPTED
        </span>
        <p className="font-cormorant text-gray-400">
          The unified theory of Magic is currently fragmented across the Faction
          Archives. Please refer to individual Faction entries for specific
          Thaumaturgical Systems.
        </p>
      </div>
    ),
  },

  // =====================================================================
  // V. LIFE
  // =====================================================================
  {
    id: "LIF_01",
    title: "Teratologia",
    subtitle: "The Book of Beasts",
    category: "V. LIFE",
    visualData: {
      image: illus1, // Monster art
      stats: [
        { label: "Class", value: "Antibodies" },
        { label: "Threat", value: "Extreme" },
      ],
      tags: ["Monsters", "Antibodies", "Mutants"],
      summary: "They are the Antibodies of the Titan.",
    },
    fullContent: (
      <>
        <Quote>
          "Silver for the Spirits, Lead for the Flesh, and Fire for the Rot."
        </Quote>

        <SectionTitle>1. Beasts of the North (Reichland)</SectionTitle>
        <SubTitle>The Leshen (The Old Sovereign)</SubTitle>
        <BodyText>
          General of the Wilds. Roots and deer-skulls. It does not slash; it
          Commands.
        </BodyText>
        <SubTitle>The Lindwyrm</SubTitle>
        <BodyText>
          Massive pale serpents with human faces frozen in a scream. Burrowers.
        </BodyText>
        <SubTitle>The Nekker</SubTitle>
        <BodyText>
          Small, agile humanoids with skin like polished flint. Ore-Eaters.
        </BodyText>

        <SectionTitle>2. Beasts of the South (Al-Xandris)</SectionTitle>
        <SubTitle>Royal Griffin</SubTitle>
        <BodyText>
          Apex predator. Golden eagle head, flexible bronze feathers.
        </BodyText>
        <SubTitle>Manticore</SubTitle>
        <BodyText>
          Red lion with scorpion tail. Venom is Liquid Fire. Loves riddles.
        </BodyText>

        <SectionTitle>3. Beasts of the East (Shogunate)</SectionTitle>
        <SubTitle>The Gashadokuro</SubTitle>
        <BodyText>
          A fifty-foot skeleton made of dried mud and bleached bone. Its shadow
          brings starvation.
        </BodyText>
        <SubTitle>The Oni</SubTitle>
        <BodyText>
          Old Guardians of the peaks. Intelligent, honorable, wielding iron
          clubs.
        </BodyText>

        <SectionTitle>4. Beasts of the West (Teo-Aztlan)</SectionTitle>
        <SubTitle>The Ahuizotl</SubTitle>
        <BodyText>
          Water-beast with a hand on its tail. Lures prey with the cry of a
          baby.
        </BodyText>
        <SubTitle>The Tzitzimitl</SubTitle>
        <BodyText>
          Skeletal figures that fall from the sky during eclipses. They devour
          light.
        </BodyText>

        <SectionTitle>5. The Shadow-Kings</SectionTitle>
        <BodyText>
          <strong>The Hemat-Archons:</strong> Vampire Lords of tragic elegance.
          Alchemists who drank refined Dragon-Blood.
          <br />
          <strong>The Sphinx:</strong> Biomechanical statues guarding the deep
          earth. They speak in Paradoxes.
        </BodyText>
      </>
    ),
  },
  {
    id: "LIF_02",
    title: "Small Folk",
    subtitle: "Parasites of the Aether",
    category: "V. LIFE",
    visualData: {
      image: null,
      stats: [],
      tags: ["Spirits", "Helpers", "Pests"],
      summary: "The micro-flora feeding on the scraps of power.",
    },
    fullContent: (
      <>
        <SectionTitle>The Common Spirits</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 border border-white/10">
            <h4 className="font-cinzel text-white font-bold mb-2">
              Kobolds (North)
            </h4>
            <p className="font-cormorant text-gray-400">
              Small creatures of slate and ember. Infest mines. Obsessed with
              gears and fire. Considered lucky indicators of cave-ins.
            </p>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <h4 className="font-cinzel text-[#d4af37] font-bold mb-2">
              Shabti (South)
            </h4>
            <p className="font-cormorant text-gray-400">
              Tiny clay dolls animated by minor magic. The "House Elves" of the
              Sun-Empire.
            </p>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <h4 className="font-cinzel text-emerald-400 font-bold mb-2">
              Kodama (East)
            </h4>
            <p className="font-cormorant text-gray-400">
              Moss-children. Indicators of spiritual health. If they wither, the
              island falls.
            </p>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <h4 className="font-cinzel text-red-400 font-bold mb-2">
              Chaneques (West)
            </h4>
            <p className="font-cormorant text-gray-400">
              Mask-Imps. Pranksters who guard the jungle borders with phantom
              scents.
            </p>
          </div>
        </div>
      </>
    ),
  },
];
