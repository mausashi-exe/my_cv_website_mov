import { CharacterEntry } from "./types";

export const LORE_CHARACTERS: CharacterEntry[] = [
  {
    id: "CHR_ROXANA",
    type: "character",
    title: "Roxana XXII",
    category: "VI. PERSONAE",
    summary: "The Zenith Sultana of the Sun-Empire.",
    aliases: ["Roxana", "Roxana XXII", "The Zenith Sultana", "Basileia-Sultana Roxana XXII"],
    related_entries: ["FAC_ALX"],
    canonical_status: "current",
    infobox: {
      allegiance: "FAC_ALX",
      status: "Active",
      abilities: ["Absolute Command of Aqua-Sol", "Veil of Light"]
    },
    blocks: [
      { type: "paragraph", text: "Absolute Autocrat of the Sun-Empire. She stands seven feet tall, draped in Living-Gold Silk. Her face is hidden behind a Veil of Light that blinds the unworthy." },
      { type: "quote", text: "She does not speak to men; she whispers to her Viziers, who scream her commands." }
    ]
  },
  {
    id: "CHR_VANE",
    type: "character",
    title: "Reinhardt",
    category: "VI. PERSONAE",
    summary: "A weary veteran mercenary, currently wandering as a stranger.",
    aliases: ["Reinhardt", "The Stranger", "The Black Wolf"],
    related_entries: ["FAC_METH"],
    canonical_status: "current",
    infobox: {
      status: "Active"
    },
    blocks: [
      { type: "paragraph", text: "A weary veteran with greying hair and a face scarred by shrapnel. He wears a mismatched suit of scavenged plate—Reichland breastplate, Sun-Empire pauldron, Shogunate greaves." },
      { type: "paragraph", text: "He carries The Zweihänder of the Lost, a massive, chipped blade etched with the names of every man who died under his command. It is heavy with Grief, striking with supernatural force." }
    ]
  }
];