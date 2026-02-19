export type LoreType = "character" | "faction" | "location" | "event" | "concept" | "artifact";
export type EraType = "Mythic Age" | "Imperial Age" | "Post-Ascension Era";
export type CanonicalStatus = "current" | "deprecated" | "mythic" | "contested";

export interface LoreBlock {
  type: "paragraph" | "quote" | "heading" | "header";
  text: string;
}

// FIXED: Restored 'category' which is required for Sidebar grouping
interface BaseLoreEntry {
  id: string; 
  title: string;
  category: string; // <-- This was missing
  type: LoreType;
  summary: string;
  aliases: string[]; 
  related_entries: string[]; 
  blocks: LoreBlock[];
  era?: EraType;
  canonical_status?: CanonicalStatus;
  timeline_position?: number;
  visuals?: {
    main_image?: string;
    tags?: string[];
  };
}

export interface CharacterEntry extends BaseLoreEntry {
  type: "character";
  infobox?: {
    allegiance?: string;
    status?: "Active" | "Deceased" | "MIA" | "Stasis" | "Immortal";
    firstAppearance?: string;
    abilities?: string[];
  };
}

export interface FactionEntry extends BaseLoreEntry {
  type: "faction";
  infobox?: {
    founded?: string | number;
    members?: string[];
    ideology?: string;
    capital?: string;
  };
}

export interface LocationEntry extends BaseLoreEntry {
  type: "location";
  infobox?: {
    region?: string;
    population?: number | string;
    keyEvents?: string[];
  };
}

export interface EventEntry extends BaseLoreEntry {
  type: "event";
  infobox?: {
    date?: string | number;
    participants?: string[];
    location?: string;
    outcome?: string;
  };
}

export interface ConceptEntry extends BaseLoreEntry {
  type: "concept";
  infobox?: {
    origin?: string;
    practitioners?: string[];
  };
}

export interface ArtifactEntry extends BaseLoreEntry {
  type: "artifact";
  infobox?: {
    creator?: string;
    material?: string;
    powerLevel?: string;
    currentOwner?: string;
  };
}

export type LoreEntry = 
  | CharacterEntry 
  | FactionEntry 
  | LocationEntry 
  | EventEntry 
  | ConceptEntry 
  | ArtifactEntry;