import React from 'react';
import { Link } from 'react-router-dom';
import { ALIAS_MAP } from '../data/lore/index';

// Memoized regex singleton
let globalAliasRegex: RegExp | null = null;

const getAliasRegex = (): RegExp => {
  if (globalAliasRegex) return globalAliasRegex;
  
  // Sort by length descending to prevent partial word collisions
  const aliases = Object.keys(ALIAS_MAP).sort((a, b) => b.length - a.length);
  
  if (aliases.length === 0) {
    // Fallback if map is empty to prevent regex errors
    return new RegExp('(?=a)b', 'g'); // unmatchable regex
  }

  // Escape regex special characters
  const escaped = aliases.map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  
  // Strict word boundaries
  globalAliasRegex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  return globalAliasRegex;
};

/**
 * Parses raw text and replaces matching aliases with React Router Links.
 * Scoped per entry render.
 */
export const parseLoreText = (text: string, currentEntryId: string): React.ReactNode[] => {
  if (!text) return [];
  
  const regex = getAliasRegex();
  // Splitting by regex with a capture group returns [text, match, text, match...]
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    // Even indices are raw text, odd indices are regex matches
    if (index % 2 === 0) {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    } else {
      const matchLower = part.toLowerCase();
      const targetId = ALIAS_MAP[matchLower];
      
      // Prevent self-linking
      if (targetId && targetId !== currentEntryId) {
        return (
          <Link 
            key={index} 
            to={`/lore/${targetId}`}
            className="text-[#d4af37] hover:text-[#fffebb] underline decoration-[#d4af37]/30 hover:decoration-[#d4af37] transition-colors cursor-pointer font-bold"
          >
            {part}
          </Link>
        );
      }
      
      // Fallback if self-reference
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });
};