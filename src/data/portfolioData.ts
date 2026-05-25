export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Kaimosi Online Shop",
    slug: "kaimosi-online-shop",
    description: "A modern e-commerce platform designed for local businesses, allowing customers to browse products, place orders seamlessly, and pay securely via card or mobile money. Built with a focus on simplicity, speed, and accessibility for the Kenyan market.",
    category: "E-commerce",
    image: "/images/portfolio/kaimosi-home.png",
    images: [
      "/images/portfolio/kaimosi-home.png",
      "/images/portfolio/kaimosi-products.png",
      "/images/portfolio/kaimosi-product-view.png",
      "/images/portfolio/kaimosi-cart.png",
      "/images/portfolio/kaimosi-checkout.png",
      "/images/portfolio/kaimosi-admin.png",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "M-PESA API"],
    features: [
      "Seamless product discovery and browsing experience",
      "Shopping cart and smooth checkout process",
      "Secure payments via card and M-Pesa integration",
      "Admin dashboard for managing products and orders",
      "Responsive design optimized for mobile and desktop",
      "Guest checkout with optional user registration",
    ],
    githubUrl: "https://github.com/quantumhydra",
    demoUrl: "#",
  },
{
  id: 2,
  title: "E-COMMERCE SYSTEM FOR LOCAL BUSINESSES",
  slug: "e-commerce-local-businesses",
  description: "A modern e-commerce platform designed for local businesses, enabling customers to browse products, place orders seamlessly, and pay securely via card or mobile money. Optimized for the Kenyan market with fast performance, user-friendly interfaces, and scalable architecture.",
  category: "E-commerce",
  image: "/images/portfolio/localbiz.png",
  images: ["/images/portfolio/localbiz.png"],
  technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
  features: [
    "Product catalog with categories and search functionality",
    "Shopping cart and secure checkout system",
    "M-Pesa and card payment integration",
    "Order management and tracking system",
    "Admin dashboard for managing products, orders, and users",
    "User authentication and account management",
    "Mobile-responsive design for all devices",
    "Discounts, coupons, and promotions system",
    "Inventory and stock management"
  ],
  githubUrl: "https://github.com/quantumhydra",
  demoUrl: "#",
},
  {

  id: 3,
  title: "WIFI BILLING SYSTEM FOR INTERNET SERVICE PROVIDERS",
  slug: "wifi-billing-system",
  description: "A comprehensive WiFi billing system designed for Internet Service Providers (ISPs), enabling automated user authentication, real-time bandwidth control, subscription management, and detailed usage analytics for efficient and secure network operations.",
  category: "Networking",
  image: "/images/portfolio/wifi-billing.png",
  images: ["/images/portfolio/wifi-billing.png"],
  technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
  features: [
    "User hotspot authentication (voucher & login system)",
    "Automated billing and subscription management",
    "Real-time bandwidth control and throttling",
    "Usage monitoring and detailed analytics dashboard",
    "Secure payment integration (M-Pesa, cards, etc.)",
    "Admin panel for user and network management",
    "Session tracking and device management",
    "Scalable cloud-based infrastructure",
    "Mobile-responsive user portal"
  ],
  githubUrl: "https://github.com/quantumhydra",
  demoUrl: "#",

  },
  /*
  {
    id: 4,
    title: "AI Career Guidance System",
    slug: "ai-career-guidance",
    description: "An intelligent career guidance platform that uses AI to analyze user skills, interests, and market trends to provide personalized career recommendations, learning paths, and job matching.",
    category: "AI",
    image: "/images/portfolio/ai-career.jpg",
    images: [
      "/images/portfolio/ai-career.jpg",
    ],
    technologies: ["Python", "OpenAI", "React", "FastAPI", "Vector DB"],
    features: [
      "Skills assessment engine",
      "Personalized career paths",
      "Market trend analysis",
      "Job matching algorithm",
      "Resume optimization",
      "Interview preparation AI",
    ],
    githubUrl: "https://github.com/quantumhydra",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "CBET Tutoring Platform",
    slug: "cbet-tutoring",
    description: "An advanced tutoring platform with interactive whiteboards, real-time collaboration tools, AI-assisted homework help, and comprehensive student progress tracking for K-12 and higher education.",
    category: "Education",
    image: "/images/portfolio/cbet-tutoring.jpg",
    images: ["/images/portfolio/cbet-tutoring.jpg"],
    technologies: ["React", "Laravel", "MySQL", "WebRTC", "Redis"],
    features: [
      "Interactive digital whiteboard",
      "Real-time video collaboration",
      "AI homework assistance",
      "Student progress dashboard",
      "Scheduling system",
      "Parent portal access",
    ],
    githubUrl: "https://github.com/quantumhydra",
    demoUrl: "#",
  },
  {
    id: 6,
    title: "Quantum Hydra WiFi Hotspot System",
    slug: "wifi-hotspot-system",
    description: "Enterprise-grade WiFi hotspot management system with captive portal, bandwidth management, user analytics, and seamless integration with existing network infrastructure for hospitality and public venues.",
    category: "Networking",
    image: "/images/portfolio/wifi-hotspot.jpg",
    images: ["/images/portfolio/wifi-hotspot.jpg"],
    technologies: ["Linux", "Python", "React", "MariaDB", "Docker"],
    features: [
      "Captive portal authentication",
      "Bandwidth allocation",
      "User analytics dashboard",
      "Multi-venue management",
      "Social media login",
      "Real-time monitoring",
    ],
    githubUrl: "https://github.com/quantumhydra",
    demoUrl: "#",
  },
  */
];
