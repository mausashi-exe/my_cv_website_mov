// --- IMPORTS DE IMÁGENES ---
import drawNomos1 from "../assets/images/drawing_nomos_01.webp";
import drawNomos2 from "../assets/images/drawing_nomos_02.webp";
import drawNomos3 from "../assets/images/drawing_nomos_03.webp";
import drawNomos4 from "../assets/images/drawing_nomos_04.webp";
import drawNomos5 from "../assets/images/drawing_nomos_05.webp";

import brutalist1 from "../assets/images/brutalist_poster_01.webp";
import brutalist2 from "../assets/images/brutalist_poster_02.jpg";
import brutalist3 from "../assets/images/brutalist_poster_03.webp";
import poster1 from "../assets/images/poster_01.webp";
import poster2 from "../assets/images/poster_02.webp";
import poster3 from "../assets/images/poster_03.webp";
import poster4 from "../assets/images/poster_04.webp";
import poster5 from "../assets/images/poster_05.webp";
import posterTemplate1 from "../assets/images/poster_template_01.webp";
import posterTemplate2 from "../assets/images/poster_template_02.webp";

import illus1 from "../assets/images/illustration_01.webp";
import illus2 from "../assets/images/illustration_02.webp";
import illus3 from "../assets/images/illustration_03.webp";
import illus4 from "../assets/images/illustration_04.webp";

import sketch1 from "../assets/images/sketch_01.webp";
import sketch2 from "../assets/images/sketch_02.webp";
import sketch3 from "../assets/images/sketch_03.webp";
import sketch4 from "../assets/images/sketch_04.webp";

import cover1 from "../assets/images/cover_template_01.webp";
import cover2 from "../assets/images/cover_template_02.webp";
import logo1 from "../assets/images/logo_template_01.webp";
import logo2 from "../assets/images/logo_template_02.webp";

export const META_PROJECTS = [
  {
    id: "01",
    title: "Nomos Chronicles",
    category: "Worldbuilding / Ink",
    year: "2025",
    cover: drawNomos1,
    description:
      "Estudios profundos de personajes y facciones para el universo Nomos. Técnica de entintado digital enfocada en capturar la atmósfera 'Biomechanical Baroque'.",
    gallery: [drawNomos1, drawNomos2, drawNomos3, drawNomos4, drawNomos5],
    tech: "Digital Ink / Procreate / Photoshop",
  },
  {
    id: "02",
    title: "Brutalist Posters",
    category: "Graphic Design",
    year: "2024",
    cover: brutalist1,
    description:
      "Exploración tipográfica y de composición desafiando las retículas tradicionales, mezclando texturas analógicas con diseño suizo.",
    gallery: [
      brutalist1,
      poster1,
      brutalist2,
      poster2,
      brutalist3,
      poster3,
      poster4,
      poster5,
      posterTemplate1,
      posterTemplate2,
    ],
    tech: "Typography / Layout Design",
  },
  {
    id: "03",
    title: "Concept Illustrations",
    category: "Digital Art",
    year: "2023-2024",
    cover: illus1,
    description:
      "Ilustraciones conceptuales de gran formato que establecen el tono visual para entornos de ciencia ficción y fantasía oscura.",
    gallery: [illus1, illus2, illus3, illus4],
    tech: "Environmental Concept Art",
  },
  {
    id: "04",
    title: "Raw Sketches",
    category: "Process / Drafts",
    year: "2024",
    cover: sketch1,
    description:
      "Archivo de bocetos rápidos y estudios de gestos que preceden a la obra final, mostrando el proceso de pensamiento detrás de la línea.",
    gallery: [sketch1, sketch2, sketch3, sketch4],
    tech: "Graphite / Digital Sketching",
  },
  {
    id: "05",
    title: "Identity Systems",
    category: "Branding / UI",
    year: "2023",
    cover: cover1,
    description:
      "Desarrollo de identidad visual y templates modulares para documentación técnica y sistemas corporativos.",
    gallery: [cover1, logo1, cover2, logo2],
    tech: "Vector Art / UI Components",
  },
];

export const CONTACT_INFO = {
  email: "maoh2c@gmail.com",
  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/mauricio-olvera" },
    { label: "GitHub", url: "https://github.com/mausashi-exe" },
  ],
};
