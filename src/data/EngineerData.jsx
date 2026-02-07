export const SKILLS = [
  { label: "Frontend Architecture", level: 90 },
  { label: "JavaScript (ES6+) / React", level: 85 },
  { label: "CSS3 / BEM / Tailwind", level: 95 },
  { label: "Responsive Design", level: 100 },
  { label: "Node.js / API Rest", level: 75 },
];

export const TOOLS = [
  "VS Code",
  "Git",
  "Figma",
  "Webpack",
  "Postman",
  "NPM",
  "Bash",
  "GitHub Pages",
];

export const ENGINEER_DATA = [
  // 1. PROYECTO ACTUAL (CV)
  {
    id: "SYS_01",
    title: "SYSTEM_ROOT_CV",
    client: "Personal Portfolio",
    year: "2025",
    description:
      "Portafolio interactivo desarrollado como una Single Page Application (SPA). Implementa un sistema de enrutamiento por estados para simular una terminal de sistema operativo. Cuenta con animaciones avanzadas orquestadas con Framer Motion, optimización de assets WebP y una arquitectura de componentes modulares en React.",
    tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    liveLink: "https://github.com/mausashi-exe/my_cv_website_mov",
    repoLink: "https://github.com/mausashi-exe/my_cv_website_mov",
    codeSnippet: `
// Viewport Transition Logic
const variants = {
  initial: { opacity: 0, scale: 0.95 },
  enter: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  exit: { opacity: 0, filter: "blur(10px)" }
};`,
  },

  // 2. AROUND THE US
  {
    id: "APP_02",
    title: "AROUND_US_GALLERY",
    client: "Interactive Web App",
    year: "2025",
    description:
      "Aplicación web dinámica construida con JavaScript Puro (Vanilla JS) bajo el paradigma de Programación Orientada a Objetos (OOP). Implementa clases ES6 para la generación modular de tarjetas y validación de formularios. Cuenta con un sistema personalizado de gestión de eventos para modales, likes y eliminación de nodos DOM en tiempo real.",
    tech: ["JavaScript (ES6+)", "OOP", "CSS3 BEM", "Webpack"],
    liveLink: "https://mausashi-exe.github.io/web_project_around/", // GITHUB PAGES NO SIRVE PARA BACKENDS, ESTE LINK ES SOLO ILUSTRATIVO
    repoLink: "https://github.com/mausashi-exe/web_project_around",
    codeSnippet: `
// Card Class Implementation
export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like')
      .addEventListener('click', () => this._handleLikeIcon());
    this._element.querySelector('.card__delete')
      .addEventListener('click', () => this._handleDeleteCard());
  }
}`,
  },

  // 3. COFFEE SHOP
  {
    id: "UI_03",
    title: "TRIPLE_PEAKS_UI",
    client: "Commercial Landing",
    year: "2023",
    description:
      "Interfaz comercial moderna diseñada con enfoque Mobile-First. Utiliza CSS Grid y Flexbox para layouts complejos y adaptativos. Estructurada bajo la metodología BEM para escalabilidad y mantenibilidad de estilos. Incluye integración multimedia, formularios de reserva y animaciones CSS para micro-interacciones de usuario.",
    tech: ["HTML5 Semantic", "CSS Grid", "Flexbox", "BEM"],
    liveLink: "https://mausashi-exe.github.io/web_project_coffeeshop/", // <--- GITHUB PAGES NO SIRVE PARA BACKENDS, ESTE LINK ES SOLO ILUSTRATIVO
    repoLink: "https://github.com/mausashi-exe/web_project_coffeeshop",
    codeSnippet: `
/* BEM Structure & Animation */
.menu__item:hover .menu__image {
  transform: scale(1.05);
  filter: brightness(1.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.booking__form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}`,
  },

  // 4. HOMELAND
  {
    id: "WEB_04",
    title: "HOMELAND_CORE",
    client: "Responsive Layout",
    year: "2025",
    description:
      "Landing page adaptativa enfocada en la semántica HTML5 y la precisión del layout en múltiples breakpoints (320px, 768px, 1280px). Implementa una arquitectura de archivos modular (File Structure by Blocks) para separar componentes lógicos y estilos, optimizando la carga y el mantenimiento del código.",
    tech: ["Responsive Design", "Media Queries", "HTML5", "CSS3"],
    liveLink: "https://mausashi-exe.github.io/web_project_homeland/", // <--- GITHUB PAGES NO SIRVE PARA BACKENDS, ESTE LINK ES SOLO ILUSTRATIVO
    repoLink: "https://github.com/mausashi-exe/web_project_homeland",
    codeSnippet: `
@media screen and (max-width: 768px) {
  .intro__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .lead__title {
    font-size: 42px;
    line-height: 1.1;
  }
}`,
  },

  // 5. LIBRARY APP
  {
    id: "API_05",
    title: "LIB_SYSTEM_API",
    client: "Backend Architecture",
    year: "2025",
    description:
      "API RESTful escalable diseñada para la gestión de inventario y usuarios. Implementada con Node.js y Express, conectada a una base de datos NoSQL (MongoDB). Incluye rutas protegidas, manejo de errores centralizado y controladores modulares para operaciones CRUD completas.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    liveLink: "https://mausashi-exe.github.io/web_project_library_es/", // <--- GITHUB PAGES NO SIRVE PARA BACKENDS, ESTE LINK ES SOLO ILUSTRATIVO
    repoLink: "https://github.com/mausashi-exe/web_project_library_es",
    codeSnippet: `
// Item Controller
module.exports.createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  
  Item.create({ name, weather, imageUrl, owner: req.user._id })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data passed' });
      } else {
        res.status(500).send({ message: 'Server error' });
      }
    });
};`,
  },

  // 6. E-COMMERCE (Backend puro, sin frontend visual por ahora)
  {
    id: "API_06",
    title: "PAYMENT_GATEWAY_APP",
    client: "Backend Architecture",
    year: "2025",
    description:
      "Servicio backend dedicado para el procesamiento de pagos. Implementa la API de Stripe V3 para sesiones de checkout seguras, gestión de webhooks y validación de transacciones financieras. Arquitectura modular con Express y middlewares de seguridad (Helmet/CORS).",
    tech: ["Node.js", "Express", "Stripe API", "Security"],
    liveLink: "#", // Este se queda así porque es una API pura sin HTML
    repoLink: "https://github.com/mausashi-exe/ecommerce-payment-app",
    codeSnippet: `
// Stripe Session Logic
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: { name: item.name },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  })),
  mode: 'payment',
  success_url: \`\${process.env.CLIENT_URL}/success\`,
  customer_email: userEmail,
});`,
  },
];
