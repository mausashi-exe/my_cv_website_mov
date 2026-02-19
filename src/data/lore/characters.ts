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
  },
  {
    id: "CHR_IBN",
    type: "character",
    title: "Ibn Al-Althaeir",
    category: "VI. PERSONAE",
    summary: "Imperial Archivist. The man who hid the truth inside the official lie.",
    aliases: ["Ibn Al-Althaeir", "The Scribe", "The Annotator", "Author Unknown"],
    related_entries: ["FAC_ALX", "FAC_XIBAAL", "COS_02"],
    canonical_status: "current",
    infobox: {
      allegiance: "FAC_ALX",
      status: "Deceased",
      abilities: ["Perfect Memory", "Archival Access", "Systemic Subterfuge"]
    },
    blocks: [
      { type: "paragraph", text: "Senior Archivist of Xandropolis under three successive Sultanas. Compiler of the Fourth Edition of the Xandrian Codex—the official history of the empire, its founding, its justifications, its mythology. He spent forty years writing what he was told to write." },
      { type: "paragraph", text: "He also spent forty years writing what he was not supposed to know. In the margins. In footnotes. In the bracketed asides that no official reader was meant to take seriously. The annotations begin small—a date that doesn't align, a geographic inconsistency. By the final volume they are essays." },
      { type: "quote", text: "I have written the empire's story as instructed. I have written my own in the spaces between. One of them is true. I leave it to the reader to determine which." },
      { type: "paragraph", text: "He was never tried for sedition. The official version is that his annotations were considered harmless academic eccentricities. The unofficial version, recorded in the very annotations he was not tried for, is that the Sultana read every word and chose silence as the cleaner execution." },
      { type: "paragraph", text: "Seven copies of his annotated Codex are known to have existed. Six were destroyed. The location of the seventh is the most valuable secret in the empire—not because it proves the Great Theft, but because it proves the empire already knows." }
    ]
  }
];
