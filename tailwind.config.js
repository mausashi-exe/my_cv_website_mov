/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tu paleta Industrial Editorial
        "safety-orange": "#FF4500", // Acento vibrante (Creative/Warning)
        concrete: {
          50: "#f9fafb",
          100: "#f3f4f6", // Fondo Blueprint
          400: "#9ca3af", // Texto secundario
          800: "#374151", // Líneas de estructura
          900: "#111827", // Texto principal
        },
        "nomos-void": "#09090b", // Fondo LoreBook (Negro profundo)
      },
      fontFamily: {
        // Fuentes del sistema para máxima velocidad y estilo "Raw"
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace",
        ],
        serif: [
          "Charter",
          "Bitstream Charter",
          "Sitka Text",
          "Cambria",
          "serif",
        ],
      },
      backgroundImage: {
        // La retícula técnica "Tailwind Grid"
        "grid-pattern":
          "linear-gradient(to right, rgba(55, 65, 81, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
