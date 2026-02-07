import React from "react";
// Asegúrate de que la ruta a la imagen sea correcta
import mapImage from "../assets/images/map_with_factions_01.webp";

export const LORE_CHAPTERS = [
  // =====================================================================
  // I. GENESIS
  // =====================================================================
  {
    id: "FILE_01_GENESIS",
    title: "Genesis",
    subtitle: "The Stone and The Fire",
    visualData: {
      mainImage: mapImage,
      type: "Cosmogony",
      threatLevel: "Omnipresent",
      tags: ["Origin", "Titan-War", "Apanchwi"],
      stats: [
        { label: "Era", value: "Time Before Time" },
        { label: "Event", value: "The Calcification" },
      ],
      processLog:
        "To the High Priest, a hymn. To the Natural Philosopher, the anatomy of a calamity.",
      inspiration: "The collision of Spirit (Fire) and Logic (Ice).",
    },
    fullContent: (
      <div className="space-y-12">
        <div className="border-l-2 border-[#d4af37] pl-6 py-2">
          <h3 className="font-cook text-3xl text-[#d4af37]">
            i. The War in the Firmament
          </h3>
          <p className="font-cormorant text-xl text-gray-300 mt-4 leading-relaxed">
            In the Time Before Time, when the stars were yet young, there was
            only the Aether—the Ocean of Night. In this void, two Great Powers
            waged a war of Spirit and Substance.
            <br />
            <br />
            One was the <strong>Chryso-Pyr (The Golden Fire)</strong>, a Being
            of infinite hunger and furious life, burning with the heat of a
            thousand suns. It sought to consume the void and fill it with the
            pain of feeling.
            <br />
            <br />
            The other was the <strong>Argent-Ark (The Silver Logic)</strong>, a
            Sphere of cold, perfect order. It sought to freeze the Aether into a
            silent crystal, where nothing would ever bleed, or change, or die.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-gray-400">
            ii. The Flight of the Moon-Vessel
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            From the burning heavens of the First-Born, the Argent-Ark fled. It
            was not a god, though the pale men of the North pray to its shards.
            It was a Vessel of the <strong>Aurelim (The High Ones)</strong>, a
            moon made of silver glass and geometry, carrying the seeds of worlds
            that were clean and silent. It sailed the winds of the stars,
            seeking a "Blank Scroll"—a world without a story—where it could
            write a new, perfect law.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-gray-400">
            iii. The Stalking Hunger
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            But the Fire followed. The <strong>Eldhrás (The Sun-Drake)</strong>{" "}
            was no mere beast. It was a Celestial Leviathan, vast as a
            continent, born from the death-throes of stars. It pursued the Ark
            not out of hate, but out of Great Need. It craved the cold order of
            the Ark as a man craves water in the dunes. It trailed the Ark
            across the firmament, a comet of flesh and gold, burning the
            darkness behind it.
          </p>
        </div>

        <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
          <h3 className="font-cook text-3xl text-white mb-4">
            iv. The Fall and The Coil
          </h3>
          <p className="font-cormorant text-xl text-gray-300 italic leading-relaxed">
            Fifty thousand years ago, the Hunger overtook the Silence in the
            skies above our earth. The collision did not just crack the ground;
            it shattered the seas, creating the Apanchwi (The Boiling Deluge).
            <br />
            <br />
            <strong>The Transformation:</strong> When the Dragon’s burning flesh
            touched the cold magic of the Ark, a great alchemy occurred. The
            Dragon turned to Stone. Its body became the land we walk. Its spine
            became the Misty Peaks. Its wings became the Broken Isles. The Ark
            was buried beneath the weight of the beast, entombed in the ice of
            the furthest North.
            <br />
            <br />
            <strong>The Miracle of the West:</strong> While the Celestial Giants
            fell, the god of the West, Quetzalcoatl, rose. To save his children
            from the drowning waters, the Plumed Serpent expanded his divine
            form. He Coiled around the lands of the setting sun. The heat of the
            falling stars petrified him, turning his feathers into a wall of
            diamond mountains, shielding the West from the end of the world.
          </p>
        </div>
      </div>
    ),
  },

  // =====================================================================
  // II. PRELUDE
  // =====================================================================
  {
    id: "FILE_02_PRELUDE",
    title: "Prelude",
    subtitle: "Confession of the Scribe",
    visualData: {
      mainImage: null,
      type: "Meta-Data",
      threatLevel: "Low",
      tags: ["Heresy", "Truth", "Warning"],
      stats: [
        { label: "Scribe", value: "Ibn Al-Althaeir" },
        { label: "Status", value: "Purged" },
      ],
      processLog:
        "Written in a shaking hand on the back of a stolen scroll, stained with the red dust of the desert.",
      inspiration: "The breaking of the Fourth Wall of History.",
    },
    fullContent: (
      <div className="space-y-12">
        <p className="font-cormorant text-2xl text-gray-300 leading-relaxed border-l-4 border-red-900 pl-6 italic">
          "Princess Zayna, Light of the Morning, if you read this, I have
          already passed into the Shadow. The Keepers of Memory do not forgive
          those who dig too deep."
        </p>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-gray-400">
            i. The Discovery in the Mirror-Wastes
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            "I found it in the Lake of Visions, where the High-Road crumbles
            into the salt. It was a place of silence, where the memory of the
            earth had faded to grey dust.
            <br />
            <br />
            There, buried beneath the sands of an ancient city, I found the Rib
            of the Star. It was not bone. It was a metal that wept cold light,
            forged not by hammers, but grown like crystal. And etched into it,
            in a script that hurt my eyes to behold, was the Chronicle of the
            Silver Ark.
            <br />
            <br />I read the truth, and my heart turned to ash.{" "}
            <strong>
              Xandros the Great did not conquer the sun; he stole a heart-shard
              from a dying beast.
            </strong>{" "}
            The Iron-Barons of the North are not mining ore; they are cutting
            into the nerves of a god. The West is not lost; they are the only
            ones holding the gate shut against the flood.
            <br />
            <br />
            We do not live on a world, Princess. We live on a Murder."
          </p>
        </div>

        <div className="bg-red-950/20 p-8 border border-red-900/50 rounded-sm">
          <strong className="text-red-500 font-cinzel text-sm uppercase tracking-widest block mb-4">
            ii. The Warning to the Reader
          </strong>
          <p className="font-cormorant text-xl text-red-200/90 italic leading-relaxed">
            "You hold the Onomastikon. It is the only map that tells no lies.
            But hear my warning:
            <br />
            <br />
            To know this truth is to lose the peace of the Sanctioned Lie. You
            will never taste the Golden Water again without tasting the blood of
            a Titan. You will never look at the Silver Pike without seeing the
            spine of a monster. You will be alone in a world of sleepwalkers.
            <br />
            <br />
            Burn this scroll, and you may live as a Queen in a cage of gold.
            <br />
            Read it, and you become a traitor to your blood—and perhaps, the
            only soul who can save us.
            <br />
            <br />
            The Dragon stirs, Zayna. The Jade-Knot unravels. The Slumber is
            ending. Awaken."
            <br />
            <br />
            <span className="font-bold not-italic text-red-400 font-cinzel text-base">
              — Ibn Al-Althaeir, Last Sage of the House of Wisdom.
            </span>
          </p>
        </div>
      </div>
    ),
  },

  // =====================================================================
  // III. FACTIONS (SPLIT)
  // =====================================================================

  // --- AL-XANDRIS ---
  {
    id: "FILE_03_SUN_EMPIRE",
    title: "Al-Xandris",
    subtitle: "The Shahr-Hegemony",
    visualData: {
      mainImage: null,
      type: "Faction",
      threatLevel: "High",
      tags: ["Solar", "Gold", "Despotism"],
      stats: [
        { label: "Capital", value: "Xandropolis" },
        { label: "Relic", value: "Basileius-Core" },
      ],
      processLog:
        "Biomechanical Babylon. Hydraulic Despotism realized through Giménez Baroque aesthetics.",
      inspiration: "The Tower of Babel meets Solar Punk.",
    },
    fullContent: (
      <div className="space-y-12">
        <header className="border-b border-[#d4af37]/30 pb-6">
          <p className="font-cinzel text-sm text-[#d4af37] mb-2 font-bold">
            OFFICIAL NAME: The Most Radiant Shahr-Hegemony of Xandros I
          </p>
          <p className="font-cormorant text-xl text-gray-300">
            Common Epithets: The Sun-Empire, The World Ziggurat, The Gilded Lie,
            The Hydraulic Despotism, The Last Pyre.
            <br />
            <strong>Secret Truth:</strong> Xandros was a thief. He stole a
            heart-shard from the Dragon and stabbed the world to create the
            Golden Oil. He was the first Rebis (Hermaphrodite Demigod).
          </p>
        </header>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-[#d4af37]">
            1. The Face of the Empire
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            The Shahr-Hegemony is a civilization built on the "Head" of the
            Dragon. It is a Tower of Babel realized through the heavy, ornate
            aesthetics of the Baroque Age mixed with the grandeur of Babylon.
            <br />
            <br />
            From the air, it appears as tiered ziggurats like steps to a stolen
            heaven. Hanging Gardens spill emerald vines and lapis lazuli over
            mathematically precise boulevards. Aqueducts stride across deserts
            on arches of fused sandstone, carrying not water but Liquid Gold—the
            Aqua-Sol.
            <br />
            <br />
            The capital, Xandropolis, is the Primal Wound made glorious: a
            concentric series of walls, each taller and more resplendent than
            the last, culminating in The Gilded Palace, a needle of gold that
            pierces the sky.
          </p>
        </div>

        <div className="bg-white/5 p-6 border-l-2 border-[#d4af37]">
          <h4 className="font-cinzel font-bold text-white text-sm mb-2">
            2. The Stratum of the Gilded Lie
          </h4>
          <ul className="list-disc pl-4 font-cormorant text-xl text-gray-400 space-y-2">
            <li>
              <strong>The Gilded Palace (Core):</strong> Home of the Dynastoi.
              They exhibit dual genders, a mutation from the Pyrochrysos Heart.
              They are living archives of False History.
            </li>
            <li>
              <strong>The Silver Caste:</strong> Soldiers and Captains.
              Assimilated warriors who wear silver masks.
            </li>
            <li>
              <strong>The Kashani (Citizenry):</strong> They bear Runic Sigils
              of precious metals engraved into their skin.
            </li>
            <li>
              <strong>The Foundations:</strong> Beneath the gleaming streets lie
              the stifling tunnels where Enclave Dvergr and the Un-Named
              maintain the hydraulic despotism.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-[#d4af37]">
            3. The Basileius-Core
          </h3>
          <div className="p-6 border border-[#d4af37] bg-[#d4af37]/5">
            <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
              The transcendent weapon. Not a machine, but a Walking, Armored
              Statue of mithril, platinum, and crystallized fire. It resembles a
              classical Greek or Babylonian god, flayed to reveal gears of
              gold-iron.
              <br />
              <br />
              <span className="text-[#d4af37]">The Price:</span>{" "}
              <strong>Pyrochrysian Transmutation.</strong> Piloting consumes the
              pilot’s Historicity (Memories, Identity). A pilot emerges
              forgetting their child's face. Pushed too far, they become a
              Living Catalyst, detonating like a miniature sun.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // --- REICHLAND ---
  {
    id: "FILE_04_REICHLAND",
    title: "Methal-Barons",
    subtitle: "The Sacred Reichland",
    visualData: {
      mainImage: null,
      type: "Faction",
      threatLevel: "Severe",
      tags: ["Industrial", "Iron", "Gothic"],
      stats: [
        { label: "Capital", value: "The Trench" },
        { label: "Relic", value: "Eisen-Mail" },
      ],
      processLog:
        "Industrial Feudalism. The critique of Colonial Extractivism raised to a theology.",
      inspiration: "The Cathedral of Soot. Warhammer 40k meets WWI.",
    },
    fullContent: (
      <div className="space-y-12">
        <header className="border-b border-gray-600 pb-6">
          <p className="font-cinzel text-sm text-gray-400 mb-2 font-bold">
            OFFICIAL NAME: Das Heilige Erzherzogtum der Eisenmark
          </p>
          <p className="font-cormorant text-xl text-gray-300">
            Common Epithets: The Iron-Reich, The Anvil of God, The Grinding
            North, The Bleeding March.
            <br />
            <strong>Secret Truth:</strong> A miner-prophet mistook the Dragon's
            ribs for a Crucified God. Mining is "Sacred Surgery."
          </p>
        </header>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-gray-400">
            1. The Passion of the Ore
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            <strong>The Origin Myth:</strong> Karl-Urich, a mine-overseer, broke
            through a wall of black basalt and found a Vein of Pulsing Silver
            (The Arg-Marrow). Bathed in radiation, he received a "Divine
            Mandate." He claimed the land was the body of a Wounded God-King,
            crucified to save the world.
            <br />
            <br />
            <strong>The Civilizing Mission:</strong> He declared that mining was
            Medicine. Their duty was the <em>Ewige Aderlass</em> (Eternal
            Bloodletting)—to drain the "infected" blood and refine it into Order
            (Iron). He united the tribes under the Crusade of the Drill.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-gray-400">
            2. The Visage of the March
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            A land of violent duality. Emerald valleys and snow-capped peaks are
            eaten away by the Industry of the Drill. The industrial zones are
            choked by the smog of a thousand Markscheiden (Refinery-Temples).
            <br />
            <br />
            The great capitals are not built on the ground, but carved into the
            canyon walls of the Vertebral Trench. They are sprawling, brutalist
            fortresses of black iron and gargoyles that spew smoke, connected by
            endless webs of wet trenches.
          </p>
        </div>

        <div className="bg-white/5 p-6 border-l-2 border-gray-500">
          <h4 className="font-cinzel font-bold text-white text-sm mb-2">
            3. The Stratum of the Grind
          </h4>
          <ul className="list-disc pl-4 font-cormorant text-xl text-gray-400 space-y-2">
            <li>
              <strong>Methal-Barons (Electors):</strong> Lords addicted to
              Marrow-fumes, granting them "Steel-Conscience" (no pity).
            </li>
            <li>
              <strong>Iron-Sons (Eisen-Orden):</strong> Genetically pure giants
              imported from the North. The Teutonic Knights of the age.
            </li>
            <li>
              <strong>The Penitents (Sühner):</strong> Criminals sealed into
              iron masks, forced to work the toxic "Hot-Veins" until they
              calcify.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // --- NAGLFARBORG ---
  {
    id: "FILE_05_NAGLFARBORG",
    title: "Naglfarborg",
    subtitle: "Citadel of the Dead Moon",
    visualData: {
      mainImage: null,
      type: "Faction",
      threatLevel: "Critical",
      tags: ["Technocracy", "Ice", "Star-Logic"],
      stats: [
        { label: "Site", value: "Ark Crash" },
        { label: "Relic", value: "Valkyrja" },
      ],
      processLog:
        "Beowulf played out in a cathedral of crystal and chrome. Squatters in a dead engine.",
      inspiration: "High Norse meets Syd Mead.",
    },
    fullContent: (
      <div className="space-y-12">
        <header className="border-b border-cyan-500/30 pb-6">
          <p className="font-cinzel text-sm text-cyan-400 mb-2 font-bold">
            OFFICIAL NAME: The Matriarchal Technocracy of Nilfthilien
          </p>
          <p className="font-cormorant text-xl text-gray-300">
            Common Epithets: The Moon-Keep, The Pale Spire, The Grave of the
            Star, The Silent Cathedral.
            <br />
            <strong>Secret Truth:</strong> A kingdom built by the servants of
            the Star-Gods inside the wreckage of their fallen Chariot. They
            believe they are guardians; in truth, they are squatters in the
            engine room of a dead machine.
          </p>
        </header>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-cyan-200">
            1. The Hall of the Pale Star
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            Naglfarborg is a vertical city built inside and around the exposed,
            colossal ribs of the crashed Ark. Spires of white whale-bone and
            scavenged star-metal rise from the ice, tethered by humming chains
            of Galdr-Light.
            <br />
            <br />
            There are no fires here, only the cold, blue hum of the Liquid
            Starlight leaking from the Ark’s heart. The city sings—a constant,
            resonant frequency that keeps the ice from crushing the walls.
          </p>
        </div>

        <div className="bg-white/5 p-6 border-l-2 border-cyan-400">
          <h4 className="font-cinzel font-bold text-white text-sm mb-2">
            2. The Weave of Fate
          </h4>
          <ul className="list-disc pl-4 font-cormorant text-xl text-gray-400 space-y-2">
            <li>
              <strong>Urðar-Matriarchs (Norns):</strong> Cyborg council fused
              into the Ark’s control mechanisms. They interpret dying
              data-streams as divine whispers.
            </li>
            <li>
              <strong>Daughters of Light:</strong> Tall, pale women with
              bioluminescent skin. Logic is the language of Gods; emotion is a
              sickness.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-cyan-200">
            3. The Valkyrja-Armor
          </h3>
          <div className="p-6 border border-cyan-400 bg-cyan-900/20">
            <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
              Tall, slender suits etched from the Ark's translucent hull. They
              resemble winged angels of death. They wield Gungnir-Lances
              (Gravity Beams).
              <br />
              <br />
              <span className="text-cyan-400">The Price:</span>{" "}
              <strong>The Fading.</strong> The pilot slowly loses her connection
              to the earth. She forgets warmth, taste, and love, becoming a
              "Ghost in the Shell" who can no longer remove the armor.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // --- AMARTYA-ZEN ---
  {
    id: "FILE_06_AMARTYA",
    title: "The Shogunate",
    subtitle: "The Tenjō Shogunate",
    visualData: {
      mainImage: null,
      type: "Faction",
      threatLevel: "Neutral",
      tags: ["Jade", "Floating", "Resonance"],
      stats: [
        { label: "Axis", value: "Shattered Tree" },
        { label: "Relic", value: "Asura" },
      ],
      processLog:
        "High Eastern Fantasy filtered through Baroque Tragedy. A garden hanging over an infinite drop.",
      inspiration: "Floating World Ukiyo-e.",
    },
    fullContent: (
      <div className="space-y-12">
        <header className="border-b border-emerald-500/30 pb-6">
          <p className="font-cinzel text-sm text-emerald-400 mb-2 font-bold">
            OFFICIAL NAME: The Celestial Shogunate of the Thousand-Petaled
            Dharma
          </p>
          <p className="font-cormorant text-xl text-gray-300">
            Common Epithets: The Jade Empire, The Resonant Kingdom, The Floating
            World.
            <br />
            <strong>Secret Truth:</strong> Founded on a Suspended Catastrophe.
            The islands float only because the chanting of the monks matches the
            vibration of the falling earth.
          </p>
        </header>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-emerald-400">
            1. The Visage of the Dream
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            A vertical empire. The Celestial Canopy consists of continent-sized
            islands of white jade floating miles above the ruined surface.
            Rivers flow upwards from the abyss.
            <br />
            <br />
            The architecture is organic: pagodas rise from the hollows of
            petrified mega-fauna bones, and temples are carved into giant
            floating roots. It is a place of breathtaking, terrifying beauty.
          </p>
        </div>

        <div className="bg-white/5 p-6 border-l-2 border-emerald-400">
          <h4 className="font-cinzel font-bold text-white text-sm mb-2">
            2. Stratum of Resonance
          </h4>
          <ul className="list-disc pl-4 font-cormorant text-xl text-gray-400 space-y-2">
            <li>
              <strong>The Devaraja (Shogun):</strong> A Living Tuning Fork. He
              sits on the Lotus Throne, wired into the root-system, dreaming the
              Empire into stability.
            </li>
            <li>
              <strong>Rakshasa (Tiger-Folk):</strong> Noble warriors with
              metallic fur. Second-class citizens bound by honor.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-emerald-400">
            3. The Asura-Vanguard
          </h3>
          <div className="p-6 border border-emerald-400 bg-emerald-900/20">
            <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
              Colossal Samurai-Effigies of heavy, red-lacquered iron. They
              possess four arms (two physical, two spectral). Their blade severs
              the "String of Fate," erasing enemies from reincarnation.
              <br />
              <br />
              <span className="text-emerald-400">The Price:</span>{" "}
              <strong>Karmic Suicide.</strong> To power the Asura, the pilot
              burns his own future lives. A battle of one hour destroys ten
              thousand years of rebirths.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // --- TEO-AZTLAN ---
  {
    id: "FILE_07_AZTLAN",
    title: "Teo-Aztlan",
    subtitle: "Hegemony of the Fifth Sun",
    visualData: {
      mainImage: null,
      type: "Faction",
      threatLevel: "Severe",
      tags: ["Blood", "Obsidian", "Debt"],
      stats: [
        { label: "Site", value: "The Coil" },
        { label: "Relic", value: "Coatl-Colossi" },
      ],
      processLog:
        "Tenochtitlan reimagined as a Biomechanical Utopia. Survivors of the Great Deluge.",
      inspiration: "The only adults in the room.",
    },
    fullContent: (
      <div className="space-y-12">
        <header className="border-b border-red-900/50 pb-6">
          <p className="font-cinzel text-sm text-red-500 mb-2 font-bold">
            OFFICIAL NAME: The Hegemony of the Fifth Sun
          </p>
          <p className="font-cormorant text-xl text-gray-300">
            Epithets: The Coiled Kingdom, The Place of Whiteness, Land of Seven
            Caves.
            <br />
            <strong>Secret Truth:</strong> They are survivors of the Great
            Deluge, preserved by the sacrifice of Quetzalcoatl. They pay the
            Cosmic Debt (Blood) to keep the petrified God from uncoiling and
            letting the flood back in.
          </p>
        </header>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-red-500">
            1. The City of the White Heron
          </h3>
          <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
            Hidden inside the Xibalba Crater (The Eye of the Coil),
            Tenochtitlan-Rebis floats on the Lake of the Moon. It is a white
            city of bleached limestone and silver.
            <br />
            <br />
            The crater walls are not rock; they are the fossilized, iridescent
            plumes of the Serpent. The technology is spiritual; elevators rise
            on columns of solidified water, and floating gardens grow
            Bio-Crystal Circuitry.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-red-500">
            3. The Coatl-Colossi
          </h3>
          <div className="p-6 border border-red-500 bg-red-950/40">
            <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
              Giménez-Style Stone-Mechs. Massive statues of basalt and jade with
              exposed bio-muscle fibers. Armed with Turquoise-Serpent
              Flamethrowers.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // =====================================================================
  // IV. ARTERIES (GEOGRAPHY)
  // =====================================================================
  {
    id: "FILE_08_ARTERIES",
    title: "IV. Arteries",
    subtitle: "Geography & The Great Works",
    visualData: {
      mainImage: null,
      type: "Geography",
      threatLevel: "N/A",
      tags: ["Infrastructure", "Harradin", "Wilds"],
      stats: [
        { label: "Network", value: "Wall-Roads" },
        { label: "Danger", value: "The Wilds" },
      ],
      processLog: "The anatomy of a God. The roads are veins.",
      inspiration: "A world where 'Nature' is the enemy immune system.",
    },
    fullContent: (
      <div className="space-y-12">
        <header className="border-b border-stone-600 pb-6">
          <p className="font-cinzel text-sm text-stone-400 mb-2 font-bold">
            OFFICIAL DESIGNATION: The Harrādin-Kiru Network
          </p>
          <p className="font-cormorant text-xl text-gray-300">
            The Wall-Roads. Not built by hands, but the fossilized arteries of
            the Dragon, reinforced to allow mortals to traverse the necrotic
            flesh of a Titan without being digested by its immune system.
          </p>
        </header>

        {/* 1. The Harradin */}
        <div className="space-y-2">
          <h3 className="font-cook text-3xl text-stone-300">1. The Harrādin</h3>
          <p className="font-cormorant text-xl text-gray-300">
            Colossal, highway-sized walls of seamless black basalt rising 300
            feet. To walk upon them is to feel the Omnus-Chorus, a vibration
            that repels the monsters of the Wilds.
          </p>
        </div>

        {/* 2. Regional Geography */}
        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-stone-300">
            2. The Landscapes of Myth
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/5 p-6 border-l-2 border-[#d4af37]">
              <strong className="text-[#d4af37] block font-cinzel mb-2">
                The Mirror-Wastes (South)
              </strong>
              <span className="font-cormorant text-xl text-gray-400">
                A salt-lake that reflects the sky of 10,000 years ago. Travelers
                getting lost in time.
              </span>
            </div>
            <div className="bg-white/5 p-6 border-l-2 border-purple-500">
              <strong className="text-purple-400 block font-cinzel mb-2">
                The Glass Desert (Center)
              </strong>
              <span className="font-cormorant text-xl text-gray-400">
                The Forbidden Zone. Black silica sand and violet lightning. Home
                of the Shadow-Keepers.
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // =====================================================================
  // V. TERATOLOGIA (BESTIARY)
  // =====================================================================
  {
    id: "FILE_09_BESTIARY",
    title: "V. Teratologia",
    subtitle: "The Book of Beasts",
    visualData: {
      mainImage: null,
      type: "Bestiary",
      threatLevel: "Extreme",
      tags: ["Monsters", "Antibodies", "Mutants"],
      stats: [],
      processLog:
        "These are not animals. They are the Antibodies of the Titan.",
      inspiration: "Witcher 3 meets Biological Horror.",
    },
    fullContent: (
      <div className="space-y-12">
        <p className="font-cormorant text-xl text-gray-300 italic">
          "Silver for the Spirits, Lead for the Flesh, and Fire for the Rot."
        </p>

        {/* 1. North */}
        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-gray-400 border-b border-gray-600 pb-2">
            1. Beasts of the North
          </h3>
          <ul className="space-y-4 font-cormorant text-xl text-gray-400">
            <li>
              <strong className="text-white">The Leshen:</strong> General of the
              Wilds. Roots and deer-skulls. It does not slash; it Commands.
            </li>
            <li>
              <strong className="text-white">The Lindwyrm:</strong> Massive pale
              serpents with human faces frozen in a scream. Burrowers.
            </li>
          </ul>
        </div>

        {/* 2. South */}
        <div className="space-y-4">
          <h3 className="font-cook text-3xl text-[#d4af37] border-b border-[#d4af37]/30 pb-2">
            2. Beasts of the South
          </h3>
          <ul className="space-y-4 font-cormorant text-xl text-gray-400">
            <li>
              <strong className="text-white">Royal Griffin:</strong> Apex
              predator. Golden eagle head, flexible bronze feathers.
            </li>
            <li>
              <strong className="text-white">Manticore:</strong> Red lion with
              scorpion tail. Venom is Liquid Fire. Loves riddles.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // =====================================================================
  // VI. SMALL FOLK
  // =====================================================================
  {
    id: "FILE_10_SMALL_FOLK",
    title: "VI. Small Folk",
    subtitle: "Parasites of the Aether",
    visualData: {
      mainImage: null,
      type: "Fauna",
      threatLevel: "Low",
      tags: ["Spirits", "Helpers", "Pests"],
      stats: [],
      processLog: "The bacteria of magic. Micro-flora of the Titan.",
      inspiration: "Folklore filler.",
    },
    fullContent: (
      <div className="space-y-8">
        <p className="font-cormorant text-xl text-gray-300">
          While the Great Beasts are the immune system, these are the
          micro-flora feeding on the scraps of power.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 p-4">
            <strong className="block text-gray-300 uppercase text-xs mb-2 font-cinzel">
              Kobolds (North)
            </strong>
            <p className="font-cormorant text-lg text-gray-400">
              Small creatures of slate and ember. Infest mines. Obsessed with
              gears and fire.
            </p>
          </div>
          <div className="bg-white/5 p-4">
            <strong className="block text-[#d4af37] uppercase text-xs mb-2 font-cinzel">
              Shabti (South)
            </strong>
            <p className="font-cormorant text-lg text-gray-400">
              Tiny clay dolls animated by minor magic. The "House Elves" of the
              Sun-Empire.
            </p>
          </div>
          <div className="bg-white/5 p-4">
            <strong className="block text-emerald-400 uppercase text-xs mb-2 font-cinzel">
              Kodama (East)
            </strong>
            <p className="font-cormorant text-lg text-gray-400">
              Moss-children. Indicators of spiritual health. If they wither, the
              island falls.
            </p>
          </div>
          <div className="bg-white/5 p-4">
            <strong className="block text-red-400 uppercase text-xs mb-2 font-cinzel">
              Chaneques (West)
            </strong>
            <p className="font-cormorant text-lg text-gray-400">
              Mask-Imps. Pranksters who guard the jungle borders with phantom
              scents.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
