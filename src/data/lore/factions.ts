import { FactionEntry, ArtifactEntry } from "./types";
import drawing1 from "../../assets/images/drawing_nomos_01.webp";

export const LORE_FACTIONS: FactionEntry[] = [
  {
    id: "FAC_ALX",
    type: "faction",
    title: "Al-Xandris",
    category: "II. FACTIONS",
    summary: "The Radiant Shahr-Hegemony built on the stolen heart of a Titan.",
    aliases: ["Al-Xandris", "Sun-Empire", "The Radiant Shahr-Hegemony", "Xandropolis"],
    related_entries: ["CHR_ROXANA"],
    canonical_status: "current",
    era: "Imperial Age",
    infobox: {
      founded: "Year Zero (The Great Theft)",
      ideology: "Hydraulic Despotism",
      capital: "Xandropolis"
    },
    blocks: [
      { type: "header", text: "The Visage of the Empire" },
      { type: "paragraph", text: "A vision of Babylon dreaming of the stars, rendered in the heavy, ornate style of the Baroque. Great Ziggurats rise like stairs to a stolen heaven, draped in hanging gardens that never wither. Colossal Aqueducts stride across the dunes on legs of fused sandstone, carrying the glowing Golden Water (Aqua-Sol) to every city, turning night into day." },
      { type: "quote", text: "The capital, Xandropolis, is the Primal Wound made glorious. It is a beauty built on Silence. To speak of the time before Xandros is to commit treason." }
    ],
    visuals: {
      main_image: drawing1,
      tags: ["Solar", "Baroque", "Rebis"]
    }
  },
  {
    id: "FAC_METH",
    type: "faction",
    title: "The Methal-Barons",
    category: "II. FACTIONS",
    summary: "The Holy Arch-Duchy of the North, an industrial juggernaut.",
    aliases: ["Methal-Barons", "Iron Reich", "The Holy Arch-Duchy", "Reichland"],
    related_entries: ["CHR_BRUNHILDE", "CHR_VANE"],
    canonical_status: "current",
    era: "Imperial Age",
    infobox: {
      founded: "Dawn of the Iron Age",
      ideology: "Elective Monarchy / Industrialism"
    },
    blocks: [
      { type: "header", text: "The Chronicle of the Iron" },
      { type: "paragraph", text: "A civilization built on a graveyard. The Barons mine the actual skeletal structure of the Dragon, believing the fossilized bone and marrow to be 'God’s Ore.' They are eating the Titan that supports them." }
    ]
  }
];

// FIXED: Explicitly exporting LORE_ARS_ARCANA
export const LORE_ARS_ARCANA: ArtifactEntry[] = [
  {
    id: "ARS_ALX_CORE",
    type: "artifact",
    title: "The Basileius-Cores",
    category: "III. ARS ARCANA",
    summary: "The Supreme Weapon of the Hegemony.",
    aliases: ["Basileius-Cores", "Basileius-Core", "Pyrochrysos core"],
    related_entries: ["FAC_ALX"],
    canonical_status: "current",
    infobox: {
      creator: "FAC_ALX",
      material: "Mithril and Bronze",
      powerLevel: "Relic"
    },
    blocks: [
      { type: "paragraph", text: "Heavy Exoskeletons of the Giménez aesthetic. Metal rods inscribed with binding runes pierce the pilot's limbs, connecting the nervous system directly to the Pyrochrysos core. It is a union of agony and ecstasy." },
      { type: "quote", text: "The engine burns the soul to move the iron. A pilot climbs out weeping, having forgotten the name of their lover." }
    ],
    visuals: {
      tags: ["Biomechanical", "Greek-Baroque"]
    }
  }
];