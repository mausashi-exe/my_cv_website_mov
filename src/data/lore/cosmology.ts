import { LoreEntry } from "./types";
import mapImage from "../../assets/images/map_with_factions_01.webp";

export const LORE_COSMOLOGY: LoreEntry[] = [
  {
    id: "COS_01",
    type: "event",
    title: "The Primordial Chaos",
    category: "I. COSMOGONY",
    summary: "The Era of the First Children.",
    aliases: ["The Primordial Chaos", "Dawn-Time"],
    related_entries: ["FAC_XIBAAL"],
    era: "Mythic Age",
    canonical_status: "mythic",
    infobox: {
      date: "Pre-History",
      participants: [],
      location: "The Unknown Continent",
      outcome: "The world remained a formless ocean of churning potential."
    },
    blocks: [
      { type: "paragraph", text: "Before the First King wore a crown, the world was a formless ocean of churning potential. From its depths rose the first lands—scattered archipelagos and verdant micro-continents drifting on the tides of the Aether." },
      { type: "quote", text: "The Dvergr were not simple; they were the world's nervous system, humming along quietly before we deafened them with our shouting." }
    ],
    visuals: {
      main_image: mapImage,
      tags: ["Origin", "Pre-History"]
    }
  },
  {
    id: "COS_02",
    type: "event",
    title: "The Great Theft",
    category: "I. COSMOGONY",
    summary: "The founding crime. The moment Xandros cut the heart from the Dragon and built an empire on the wound.",
    aliases: ["The Great Theft", "Year Zero", "The Heart-Taking", "The Primal Wound"],
    related_entries: ["FAC_ALX", "FAC_XIBAAL", "CON_AQUASOL", "CHR_IBN"],
    era: "Mythic Age",
    canonical_status: "contested",
    infobox: {
      date: "Year Zero (disputed)",
      participants: ["Xandros the First King", "Xi-Ba'al Dragon-Keepers"],
      location: "Teo-Aztlan, Body of the Dragon",
      outcome: "The Sun-Empire founded. The Xi-Ba'al covenant broken. The Dragon begins its slow death."
    },
    blocks: [
      { type: "paragraph", text: "The Xandrian Codex records it as discovery. The official narrative describes Xandros finding the Titan-Dragon already dead, its heart-shard lying unclaimed in the desert, a gift from the gods to the worthy. He built his city on the wound not as desecration but as consecration—turning tragedy into glory." },
      { type: "quote", text: "[The Codex does not explain the Xi-Ba'al. It does not explain why, if the Dragon was already dead, there were people already living within its warmth. It does not explain what 'discovery' means in a place that was already inhabited. — Ibn Al-Althaeir, marginal note, copy 7 of the Codex, destroyed 412 A.X.]" },
      { type: "paragraph", text: "What the suppressed accounts agree on: the Dragon was not dead. The heart-shard was not unclaimed. And the people who tended the covenant between the living Titan and the civilization that grew within it did not give their blessing to what was taken from them." },
      { type: "paragraph", text: "The Dragon has been dying since Year Zero. The empire built on the wound has been telling itself, for four hundred years, that it was already dead when they arrived." }
    ],
    visuals: {
      main_image: mapImage,
      tags: ["Year Zero", "Founding Myth", "Contested History", "Dragon"]
    }
  }
];
