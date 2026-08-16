export interface Project {
  slug: string;
  title: string;
  category: 'BRANDING' | 'WEB' | '3D' | 'VIDEO';
  year: string;
  role: string;
  client: string;
  summary: string;
  thumbnail: string;
  heroMedia: string;
  challenge: string;
  approach: string;
  result: string;
  images: string[];
}

export interface UserConfig {
  name: string;
  surname: string;
  brandName: string;
  brandBlurb: string;
  title: string;
  email: string;
  stats: {
    fullCases: number;
    archiveFragments: number;
    catalogItems: number;
  };
  socials: {
    label: string;
    url: string;
  }[];
  awards: {
    name: string;
    count: string;
    textSize: string;
  }[];
}

export const USER_CONFIG: UserConfig = {
  // TODO: [ADD REAL CONTENT] Replace with user's real name & brand details
  name: "KAVINDA",
  surname: "SATHSARA",
  brandName: "Grilled Pixels",
  brandBlurb: `Grilled Pixels is my\npersonal brand - I came up\nwith it in 2004 based on\n"cooking up ideas"`,
  title: "DESIGN & ENGINEERING",
  email: "contact@kavindasathsara.com", // TODO: [ADD REAL CONTENT]
  stats: {
    fullCases: 5,
    archiveFragments: 82,
    catalogItems: 22,
  },
  socials: [
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
    { label: "Twitter", url: "#" },
    { label: "Instagram", url: "#" },
  ],
  awards: [
    { name: "FWA", count: "x1", textSize: "text-sm sm:text-base" },
    { name: "W.", count: "x7", textSize: "text-lg sm:text-xl" },
    { name: "CSSDesignAwards", count: "x22", textSize: "text-[10px] sm:text-xs" },
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: "cyber-kinetic-interface",
    title: "CYBER KINETIC INTERFACE",
    category: "WEB",
    year: "2024",
    role: "Lead Creative Technologist & UI Engineer",
    client: "Kinetic Lab [ADD REAL CONTENT]",
    summary: "High-performance web dashboard & dynamic design system crafted for realtime analytics.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    heroMedia: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    challenge: "Engineered low-latency WebGL viewports to process high-frequency visual streams seamlessly without browser frame drops.",
    approach: "Utilized custom shaders alongside React ecosystem structures to maximize visual impact while preserving sub-16ms render frames.",
    result: "Achieved a 99.8% customer satisfaction score and won FWA Site of the Day.",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  {
    slug: "neon-monolith-brand",
    title: "NEON MONOLITH IDENTITY",
    category: "BRANDING",
    year: "2024",
    role: "Brand Strategist & Art Director",
    client: "Monolith Studios [ADD REAL CONTENT]",
    summary: "Visual identity and design language created for next-generation interactive audio visualizers.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    heroMedia: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
    challenge: "Designing a brand identity capable of scaling across spatial computing interfaces, print collateral, and interactive displays.",
    approach: "Developed a generative typography system combined with strict contrast metrics to ensure accessibility and aesthetic boldness.",
    result: "Featured across top design archives and adopted globally by over 40 media partners.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  {
    slug: "spatial-dimension-3d",
    title: "SPATIAL DIMENSION 3D",
    category: "3D",
    year: "2023",
    role: "3D Motion Designer & WebGL Engineer",
    client: "Aura Creative [ADD REAL CONTENT]",
    summary: "Photorealistic 3D asset pipeline & web viewer created for modern luxury product showcases.",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    heroMedia: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1920&q=80",
    challenge: "Delivering real-time reflections and material depth inside client mobile browsers with minimal load overhead.",
    approach: "Created optimized Draco compressed GLTF models and baked environment lighting into customized PBR materials.",
    result: "Increased digital product page engagement by 140% and reduced page bounce rates.",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  {
    slug: "flux-motion-showcase",
    title: "FLUX MOTION REEL",
    category: "VIDEO",
    year: "2023",
    role: "Video Editor & Sound Designer",
    client: "Flux Media [ADD REAL CONTENT]",
    summary: "Experimental 4K brand film blending practical camera tracking with generative particle effects.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    heroMedia: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80",
    challenge: "Synchronizing rapid rhythm edits with custom sound design to capture immediate viewer attention.",
    approach: "Crafted precise audio-visual keyframe choreography and custom kinetic typography overlays.",
    result: "Over 500,000 organic views on digital launch platforms.",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    ]
  }
];

export const SERVICES_LIST = [
  {
    index: "01",
    title: "Branding",
    description: "Architecting memorable visual identity systems, brand guidelines, logo assets, and strategic positioning to set your brand apart in competitive markets.",
  },
  {
    index: "02",
    title: "Creative Direction & Strategy",
    description: "Aligning vision and technical execution through comprehensive concept development, design systems, art direction, and digital product strategy.",
  },
  {
    index: "03",
    title: "UX/UI Design",
    description: "Crafting intuitive, accessible, and human-centered user interfaces for complex web apps, mobile products, and enterprise platforms.",
  },
  {
    index: "04",
    title: "Web Development (React/Nextjs)",
    description: "Building production-grade, pixel-perfect, scalable web applications with React, TypeScript, Vite, Next.js, and modern CSS architectures.",
  },
  {
    index: "05",
    title: "3D, WebGL / Photography",
    description: "Creating interactive 3D web experiences, real-time shaders, product modeling, high-end renders, and digital art direction.",
  },
  {
    index: "06",
    title: "Video & Animation",
    description: "Producing high-impact motion graphics, kinetic typography, promotional video reels, UI micro-interactions, and sound design.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description: "Deep dive into your brand goals, target audience requirements, project scope, technical constraints, and key success metrics.",
  },
  {
    step: "02",
    title: "Concept & Prototyping",
    description: "Developing rapid interactive wireframes, visual moodboards, motion explorations, and architecture prototypes to finalize design direction.",
  },
  {
    step: "03",
    title: "Design & Engineering",
    description: "Pixel-perfect visual design paired with clean, modular, high-performance React/TypeScript engineering built for maximum longevity.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Comprehensive multi-device responsiveness testing, performance optimization, SEO implementation, accessibility validation, and smooth deployment.",
  },
];
