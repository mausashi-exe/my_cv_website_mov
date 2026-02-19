import { LoreEntry } from "./types";

export const LORE_BESTIARY: LoreEntry[] = [
  {
    id: "BST_FIEND",
    type: "concept",
    title: "The Fiend",
    category: "VII. BESTIARY",
    summary: "Der Waldschrat, a Guardian Spirit.",
    aliases: ["The Fiend", "Der Waldschrat", "Horned Lord"],
    related_entries: ["FAC_METH"],
    canonical_status: "current",
    infobox: {
      origin: "The Schwarzwald",
      practitioners: []
    },
    blocks: [
      { type: "paragraph", text: "A majestic, bipedal elk-titan standing twelve feet tall. Found in the deep groves of the Schwarzwald, it is a Guardian Spirit encased in petrified wood and ancient iron-moss. It possesses a third eye of Hypnotic Amber." },
      { type: "quote", text: "To hunt it, one must use heavy bolts dipped in oil to soften the wood-armor." }
    ],
    visuals: {
      tags: ["Titan", "Guardian"]
    }
  }
];

export const LORE_UTILITY: LoreEntry[] = [
  {
    id: "UTL_BEETLE",
    type: "concept",
    title: "Kabuto-Hauler",
    category: "VIII. UTILITY",
    summary: "Enormous domesticated rhinoceros beetles.",
    aliases: ["Kabuto-Hauler", "Kabuto Hauler"],
    related_entries: ["FAC_ZEN"],
    canonical_status: "current",
    infobox: {
      origin: "Amartya-Zen",
      practitioners: []
    },
    blocks: [
      { type: "paragraph", text: "Enormous domesticated rhinoceros beetles used to walk vertically up the petrified roots connecting the floating islands of the Shogunate." }
    ],
    visuals: {
      tags: ["Burden", "East"]
    }
  }
];