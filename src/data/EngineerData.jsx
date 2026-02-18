/*
ENGINEER DATA MANIFEST
System: Biomechanical Portfolio
Content: Skills, Tools, and Project fabrication logs.
Upgrade: Added 'aiManifest' for Generative Workflow Documentation.
*/

export const SKILLS = [
  { label: "Frontend Architecture", level: 90 },
  { label: "AI Orchestration / RAG", level: 85 },
  { label: "React 18 / Next.js", level: 95 },
  { label: "Tailwind / Design Systems", level: 100 },
  { label: "Node.js / API Design", level: 75 },
];

export const TOOLS = [
  "VS Code",
  "Git / GitHub Actions",
  "Figma (Dev Mode)",
  "Docker",
  "Postman",
  "OpenAI API",
  "Bash / Zsh",
  "Vercel Edge Functions",
];

export const ENGINEER_DATA = [
  // 1. PROYECTO ACTUAL (CV)
  {
    id: "SYS_01",
    title: "SYSTEM_ROOT_CV",
    client: "Personal Portfolio",
    year: "2026",
    description:
      "Hydraulic SPA simulating a biomechanical operating system. Features GPU-accelerated layout transitions, a finite state machine for layout management, and strict containment architecture.",
    tech: ["React 18", "Framer Motion", "Tailwind", "Vite"],
    liveLink:
      "https://my-cv-website-ne1wig19c-mausashi-exes-projects.vercel.app/",
    repoLink: "https://github.com/mausashi-exe/my_cv_website_mov",
    codeSnippet: `
// Hydraulic Physics Engine
const SPRING_PHYSICS = { 
  type: "spring", 
  stiffness: 300, 
  damping: 40, 
  mass: 1.2 
};

// Layout Containment (Performance)
<motion.div
  style={{ 
    contain: "layout paint", 
    willChange: "width" 
  }}
  animate={{ width: currentWidth }}
/>`,
    // NEW: AI Orchestration Log
    aiManifest: {
      model: "GPT-4o",
      tokens: 8192,
      context_window: "128k",
      pipeline: [
        {
          step: 1,
          action: "Architectural_Analysis",
          status: "COMPLETE",
          latency: "120ms",
        },
        {
          step: 2,
          action: "Physics_Simulation_Tuning",
          status: "OPTIMIZED",
          latency: "85ms",
        },
        {
          step: 3,
          action: "Component_Fabrication",
          status: "COMPLETE",
          latency: "240ms",
        },
      ],
      params: {
        temperature: 0.2,
        system_prompt:
          "Act as Senior Frontend Architect. Enforce strict CSS containment.",
        refusal_guardrails: "strict",
      },
    },
  },

  // 2. AROUND THE US
  {
    id: "APP_02",
    title: "AROUND_US_GALLERY",
    client: "Interactive Web App",
    year: "2025",
    description:
      "Dynamic image gallery built with Vanilla JS (ES6+) using strict OOP principles. Features custom event delegation, modal management, and DOM sanitation patterns.",
    tech: ["JavaScript (ES6+)", "OOP Patterns", "Webpack", "CSS BEM"],
    liveLink: "https://mausashi-exe.github.io/web_project_around/",
    repoLink: "https://github.com/mausashi-exe/web_project_around",
    codeSnippet: `
// Class-Based Component Generation
export default class Card {
  constructor(data, selector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document.querySelector(this._selector)
      .content.querySelector('.card')
      .cloneNode(true);
  }
}`,
    aiManifest: {
      model: "GPT-3.5-Turbo",
      tokens: 4096,
      context_window: "16k",
      pipeline: [
        {
          step: 1,
          action: "Legacy_Code_Refactor",
          status: "COMPLETE",
          latency: "60ms",
        },
        {
          step: 2,
          action: "OOP_Pattern_Enforcement",
          status: "COMPLETE",
          latency: "90ms",
        },
      ],
      params: {
        temperature: 0.5,
        mode: "Refactor",
        target: "ES6 Classes",
      },
    },
  },

  // 3. COFFEE SHOP
  {
    id: "UI_03",
    title: "TRIPLE_PEAKS_UI",
    client: "Commercial Landing",
    year: "2024",
    description:
      "High-performance landing page focusing on Critical Rendering Path optimization. Implements BEM methodology for scalable CSS and responsive Grid layouts.",
    tech: ["HTML5 Semantic", "CSS Grid", "BEM Methodology", "Figma"],
    liveLink: "https://mausashi-exe.github.io/web_project_coffeeshop/",
    repoLink: "https://github.com/mausashi-exe/web_project_coffeeshop",
    codeSnippet: `
/* BEM Structure & Micro-Interactions */
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
    aiManifest: {
      model: "Claude-3-Sonnet",
      tokens: 2048,
      context_window: "200k",
      pipeline: [
        {
          step: 1,
          action: "Visual_Design_Parsing",
          status: "COMPLETE",
          latency: "150ms",
        },
        {
          step: 2,
          action: "CSS_Grid_Calculation",
          status: "OPTIMIZED",
          latency: "45ms",
        },
      ],
      params: {
        temperature: 0.3,
        style_guide: "BEM Strict",
        accessibility: "WCAG AA",
      },
    },
  },

  // 4. HOMELAND
  {
    id: "WEB_04",
    title: "HOMELAND_CORE",
    client: "Responsive Layout",
    year: "2024",
    description:
      "Adaptive layout engine built with mobile-first architecture. Utilizes fluid typography and container queries to ensure consistency across 12 distinct breakpoints.",
    tech: ["Responsive Design", "Media Queries", "HTML5", "CSS3"],
    liveLink: "https://mausashi-exe.github.io/web_project_homeland/",
    repoLink: "https://github.com/mausashi-exe/web_project_homeland",
    codeSnippet: `
@media screen and (max-width: 768px) {
  .intro__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .lead__title {
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.1;
  }
}`,
    aiManifest: {
      model: "GPT-4-Turbo",
      tokens: 1024,
      context_window: "32k",
      pipeline: [
        {
          step: 1,
          action: "Breakpoint_Analysis",
          status: "COMPLETE",
          latency: "110ms",
        },
        {
          step: 2,
          action: "Fluid_Typography_Gen",
          status: "COMPLETE",
          latency: "30ms",
        },
      ],
      params: {
        temperature: 0.1,
        viewport_targets: ["320px", "768px", "1024px", "1440px"],
      },
    },
  },

  // 5. LIBRARY APP
  {
    id: "API_05",
    title: "LIB_SYSTEM_API",
    client: "Backend Architecture",
    year: "2025",
    description:
      "RESTful API designed for high-throughput inventory management. Features JWT authentication, rate limiting, and MongoDB aggregation pipelines for complex data retrieval.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    liveLink: "https://mausashi-exe.github.io/web_project_library_es/",
    repoLink: "https://github.com/mausashi-exe/web_project_library_es",
    codeSnippet: `
// Aggregation Pipeline
const stats = await Item.aggregate([
  { $match: { createdAt: { $gte: lastMonth } } },
  { 
    $group: {
      _id: '$category',
      count: { $sum: 1 },
      avgPrice: { $avg: '$price' }
    }
  }
]);`,
    aiManifest: {
      model: "GPT-4o",
      tokens: 6000,
      context_window: "128k",
      pipeline: [
        {
          step: 1,
          action: "Schema_Validation",
          status: "COMPLETE",
          latency: "200ms",
        },
        {
          step: 2,
          action: "Query_Optimization",
          status: "INDEXED",
          latency: "12ms",
        },
      ],
      params: {
        temperature: 0.0,
        security_level: "High",
        database: "MongoDB Atlas",
      },
    },
  },

  // 6. E-COMMERCE (Backend)
  {
    id: "API_06",
    title: "PAYMENT_GATEWAY",
    client: "FinTech Module",
    year: "2025",
    description:
      "Secure payment processing microservice integrating Stripe API. Implements idempotent webhooks, signature verification, and atomic transactions for financial integrity.",
    tech: ["Node.js", "Stripe API", "Security", "Webhooks"],
    liveLink: "#",
    repoLink: "https://github.com/mausashi-exe/ecommerce-payment-app",
    codeSnippet: `
// Webhook Signature Verification
const event = stripe.webhooks.constructEvent(
  req.body,
  signature,
  process.env.STRIPE_WEBHOOK_SECRET
);

if (event.type === 'checkout.session.completed') {
  await fulfillOrder(event.data.object);
}`,
    aiManifest: {
      model: "GPT-4-Turbo",
      tokens: 5000,
      context_window: "128k",
      pipeline: [
        {
          step: 1,
          action: "Security_Audit",
          status: "PASSED",
          latency: "320ms",
        },
        {
          step: 2,
          action: "Idempotency_Check",
          status: "VERIFIED",
          latency: "40ms",
        },
      ],
      params: {
        temperature: 0.0,
        compliance: "PCI-DSS",
        error_handling: "Robust",
      },
    },
  },
];
