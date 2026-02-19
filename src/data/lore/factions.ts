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
    related_entries: ["CHR_ROXANA", "FAC_XIBAAL", "CON_AQUASOL"],
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
      { type: "paragraph", text: "A civilization built on a graveyard. The Barons mine the actual skeletal structure of the Dragon, believing the fossilized bone and marrow to be 'God's Ore.' They are eating the Titan that supports them." }
    ]
  },
  {
    id: "FAC_XIBAAL",
    type: "faction",
    title: "Xi-Ba'al",
    category: "II. FACTIONS",
    summary: "The First Keepers of the Dragon. The people whose god was stolen.",
    aliases: ["Xi-Ba'al", "The Dragon-Keepers", "The Silenced", "People of the Root", "Teo-Aztlan"],
    related_entries: ["COS_02", "FAC_ALX", "CHR_IBN", "CON_AQUASOL"],
    canonical_status: "current",
    era: "Imperial Age",
    infobox: {
      founded: "Before recorded time",
      ideology: "Sacred Ecology / Dragon-Covenant",
      capital: "Teo-Aztlan (occupied)"
    },
    blocks: [
      { type: "header", text: "What Was Taken" },
      { type: "paragraph", text: "Before Al-Xandris existed, before the name Xandros was spoken, the Xi-Ba'al tended the living Dragon. Not as subjects. As partners. The Dragon did not sleep—it breathed, and they breathed with it, their cities growing from its exhalations, their crops fed by its warmth, their dead returned to its body to become stone." },
      { type: "paragraph", text: "They did not worship the Dragon. They were in covenant with it. This is the distinction the Xandrian Codex has spent four hundred years erasing." },
      { type: "quote", text: "They say the First King discovered the Titan. The Codex does not explain what was there before him. We are the answer to that question." },
      { type: "header", text: "The Covenant Broken" },
      { type: "paragraph", text: "When Xandros cut the heart-shard from the Dragon's chest and built his empire upon it, the Xi-Ba'al did not simply lose their god. They lost the biological relationship that structured their entire civilization—the water cycles, the soil fertility, the seasonal rhythms that the Dragon's body had regulated for millennia. What Al-Xandris calls Golden Water is the Dragon's blood, redirected. What the Xi-Ba'al call it is untranslatable." },
      { type: "paragraph", text: "They survive in the occupied territories of Teo-Aztlan, reduced to a subject people within the empire built on their covenant's corpse. They are taxed in Golden Water—made to purchase, at Xandrian prices, the blood of their own god." }
    ],
    visuals: {
      tags: ["Sacred Ecology", "Mesoamerican", "Covenant", "Occupied"]
    }
  },
  {
    id: "FAC_ZEN",
    type: "faction",
    title: "Amartya-Zen",
    category: "II. FACTIONS",
    summary: "The Shogunate of the Floating Archipelago, masters of vertical space.",
    aliases: ["Amartya-Zen", "The Shogunate", "The Floating Islands", "Zen Archipelago"],
    related_entries: ["UTL_BEETLE"],
    canonical_status: "current",
    era: "Imperial Age",
    infobox: {
      founded: "The Age of Roots",
      ideology: "Shogunate / Vertical Hierarchy",
      capital: "Amartya-Prime (uppermost island)"
    },
    blocks: [
      { type: "paragraph", text: "A civilization built not across land but upward through it. The Shogunate occupies a chain of islands suspended in permanent atmospheric stasis above the Dragon's petrified root system—massive, continent-spanning tendrils of fossilized bone that jut skyward like the ribs of a buried god." },
      { type: "quote", text: "Social rank is literal altitude. The Daimyo live above the clouds. The peasants live in the shadow of the roots. To climb is everything." }
    ],
    visuals: {
      tags: ["Vertical", "Japanese", "Floating", "Shogunate"]
    }
  }
];

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
  },
  {
    id: "CON_AQUASOL",
    type: "artifact",
    title: "Aqua-Sol",
    category: "III. ARS ARCANA",
    summary: "The Golden Water. The blood of the Dragon, redirected. The engine of imperial memory control.",
    aliases: ["Aqua-Sol", "Golden Water", "The Blessed Tide", "Dragon's Blood", "Chich'alha"],
    related_entries: ["FAC_ALX", "FAC_XIBAAL", "COS_02"],
    canonical_status: "current",
    infobox: {
      creator: "FAC_ALX",
      material: "Dragon circulatory fluid",
      powerLevel: "Systemic"
    },
    blocks: [
      { type: "paragraph", text: "Aqua-Sol is the luminous golden fluid that flows through the Hegemony's vast aqueduct network. It glows with soft inner light. It sustains crops in desert soil. It heals minor wounds on contact. Consumed regularly, it produces a gentle euphoria and, over years, a slow erasure of historical memory—particularly memories of what life was like before the empire." },
      { type: "paragraph", text: "The official account: Aqua-Sol is a miraculous gift, discovered by Xandros alongside the Dragon, a natural feature of the land the empire was destined to inherit. The Imperial Hydromancers regulate its flow as a sacred trust, not a mechanism of control." },
      { type: "quote", text: "The people who drink it do not forget everything. They forget specifically. The word for 'covenant.' The name Xi-Ba'al. The memory of a world before Year Zero. It is the most precise amnesia in history." },
      { type: "paragraph", text: "The Xi-Ba'al call it Chich'alha—Blood-That-Was-Stolen. They do not drink it. This is why they remember." },
      { type: "paragraph", text: "Control of Aqua-Sol distribution is the true structure of power in the empire, more fundamental than armies or laws. Cities that resist the Hegemony are not burned. Their aqueducts are simply rerouted. Within two generations, the resistance forgets what it was resisting." }
    ],
    visuals: {
      tags: ["Hydraulic Control", "Memory", "Dragon Biology", "Imperial Mechanism"]
    }
  }
];
