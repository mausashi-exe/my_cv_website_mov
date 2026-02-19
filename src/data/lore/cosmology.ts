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
    related_entries: ["FAC_TEO"],
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
  }
];