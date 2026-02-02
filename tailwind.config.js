/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tu paleta Industrial
        "safety-orange": "#FF4500", // Un naranja vibrante y técnico
        concrete: {
          100: "#f3f4f6", // Hormigón claro
          400: "#9ca3af", // Cemento fresco
          800: "#374151", // Estructura oscura
          900: "#111827", // Asfalto
        },
        "nomos-void": "#09090b", // Negro profundo para el fondo
      },
      fontFamily: {
        // Usamos fuentes del sistema para mantenerlo rápido y "raw"
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
