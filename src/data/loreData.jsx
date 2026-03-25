/*
LORE DATA MANIFEST - Nomos Mythos
Block-based content structure for rich rendering and AI integration.
*/

import mapImage from "../assets/images/map_with_factions_01.webp";
import drawing1 from "../assets/images/drawing_nomos_01.webp";

export const LORE_CHAPTERS = [
  {
    id: "GEN_01",
    title: "The Genesis",
    subtitle: "The Stone and The Fire",
    category: "I. MYTHOS",
    // SENIOR FIX: Block-based content allows for rich rendering (quotes, refs)
    blocks: [
      {
        type: "paragraph",
        text: "In the Time Before Time, when the stars were yet young, there was only the Aether—the Ocean of Night. In this void, two Great Powers waged a war of Spirit and Substance.",
      },
      {
        type: "paragraph",
        text: "One was the Chryso-Pyr (The Golden Fire), a Being of infinite hunger and furious life. The other was the Argent-Ark (The Silver Logic), a Sphere of cold, perfect order.",
      },
      {
        type: "quote",
        text: "To the High Priest, this is a hymn. To the Natural Philosopher, it is the anatomy of a calamity.",
      },
      {
        type: "paragraph",
        text: "Fifty thousand years ago, the Hunger overtook the Silence in the skies above our earth. The collision did not just crack the ground; it shattered the seas, creating the Apanchwi (The Boiling Deluge).",
      },
      { type: "header", text: "The Transformation" },
      {
        type: "paragraph",
        text: "When the Dragon’s burning flesh touched the cold magic of the Ark, a great alchemy occurred. The Dragon turned to Stone. Its body became the land we walk. Its spine became the Misty Peaks. Its wings became the Broken Isles.",
      },
    ],
    visuals: {
      main_image: mapImage,
      stats: [
        { label: "ERA", value: "Pre-History" },
        { label: "THREAT", value: "Existential" },
        { label: "ORIGIN", value: "Celestial" },
      ],
      tags: ["Cosmogony", "Titan-War"],
    },
  },
  {
    id: "PWR_01",
    title: "Al-Xandris",
    subtitle: "The Sun Empire",
    category: "II. POWERS",
    blocks: [
      {
        type: "paragraph",
        text: "The Shahr-Hegemony is a civilization built on the 'Head' of the Dragon. It is a Tower of Babel realized through the heavy, ornate aesthetics of the Baroque Age mixed with the grandeur of Babylon.",
      },
      {
        type: "quote",
        text: "Princess, do not look at the gold; look at what it drowns.",
      },
      {
        type: "paragraph",
        text: "The capital, Xandropolis, is the Primal Wound made glorious: a concentric series of walls, each taller and more resplendent than the last, culminating in The Gilded Palace, a needle of gold that pierces the sky.",
      },
    ],
    visuals: {
      main_image: drawing1,
      stats: [
        { label: "CAPITAL", value: "Xandropolis" },
        { label: "LEADER", value: "Basileia Raziya" },
        { label: "RELIC", value: "Basileius-Core" },
      ],
      tags: ["Solar", "Gold", "Despotism"],
    },
  },
];
