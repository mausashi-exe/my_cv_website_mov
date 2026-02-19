import { LORE_COSMOLOGY } from "./cosmology";
import { LORE_FACTIONS, LORE_ARS_ARCANA } from "./factions";
import { LORE_CHARACTERS } from "./characters";
import { LORE_BESTIARY, LORE_UTILITY } from "./bestiary";
import { LoreEntry } from "./types";

// The Unified Graph Export
export const ALL_LORE: LoreEntry[] = [
  ...LORE_COSMOLOGY,
  ...LORE_FACTIONS,
  ...LORE_ARS_ARCANA,
  ...LORE_CHARACTERS,
  ...LORE_BESTIARY,
  ...LORE_UTILITY
];

// Graph Resolution Engine (Alias -> ID)
export const ALIAS_MAP: Record<string, string> = {};

const buildAliasMap = () => {
  ALL_LORE.forEach((entry) => {
    // Treat the title itself as an inherent alias
    const allAliases = [entry.title, ...(entry.aliases || [])];
    
    allAliases.forEach((alias) => {
      // IMPLEMENTATION: Whitespace normalization to prevent silent errors
      const key = alias.trim().toLowerCase();
      
      // FAIL-FAST: Duplicate Collision Detection
      if (ALIAS_MAP[key] && ALIAS_MAP[key] !== entry.id) {
        throw new Error(
          `[Lore System Error] Duplicate alias collision detected: "${alias}" resolves to both ${ALIAS_MAP[key]} and ${entry.id}. Fix your schema.`
        );
      }
      
      ALIAS_MAP[key] = entry.id;
    });
  });
};

// Execute on boot
buildAliasMap();