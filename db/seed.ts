import { getDb } from "../api/queries/connection";
import { contacts, newsletterSubscribers, projects, testimonials, teamMembers } from "./schema";

async function seed() {
  const db = getDb();
  console.log("Seeding database...");

  // Seed projects
  await db.insert(projects).values([
    {
      title: "Adaptive Real-Time AI Cybersecurity Intelligence System",
      slug: "ai-cybersecurity-system",
      description: "An advanced AI-driven cybersecurity platform that provides real-time threat intelligence, adaptive defense mechanisms, and automated incident response.",
      category: "Cybersecurity",
      imageUrl: "/images/portfolio/ai-cybersecurity.jpg",
      technologies: JSON.stringify(["Python", "TensorFlow", "React", "FastAPI", "Docker", "PostgreSQL"]),
      features: JSON.stringify(["Real-time threat detection", "AI-powered anomaly detection", "Automated incident response", "Behavioral analytics engine", "Threat intelligence dashboard", "SIEM integration"]),
      githubUrl: "https://github.com/quantumhydra",
      demoUrl: "#",
    },
    {
      title: "Smart Threat Detection System",
      slug: "smart-threat-detection",
      description: "A next-generation threat detection system utilizing deep learning algorithms to identify and classify cyber threats across network traffic, endpoints, and cloud environments.",
      category: "Cybersecurity",
      imageUrl: "/images/portfolio/smart-threat.jpg",
      technologies: JSON.stringify(["Python", "PyTorch", "Kafka", "Elasticsearch", "Kubernetes"]),
      features: JSON.stringify(["Deep learning-based threat classification", "Network traffic analysis", "Endpoint behavior monitoring", "Automated threat remediation", "Cross-platform compatibility", "Custom threat rule engine"]),
      githubUrl: "https://github.com/quantumhydra",
      demoUrl: "#",
    },
    {
      title: "LEARNWAVE E-Learning Platform",
      slug: "learnwave-elearning",
      description: "A comprehensive e-learning platform designed for modern education, featuring interactive courses, live virtual classrooms, AI-powered tutoring assistance, and comprehensive analytics.",
      category: "Education",
      imageUrl: "/images/portfolio/learnwave.jpg",
      technologies: JSON.stringify(["React", "Node.js", "MongoDB", "Socket.io", "AWS"]),
      features: JSON.stringify(["Interactive video courses", "Live virtual classrooms", "AI tutoring assistant", "Progress tracking analytics", "Gamification elements", "Mobile-responsive design"]),
      githubUrl: "https://github.com/quantumhydra",
      demoUrl: "#",
    },
    {
      title: "AI Career Guidance System",
      slug: "ai-career-guidance",
      description: "An intelligent career guidance platform that uses AI to analyze user skills, interests, and market trends to provide personalized career recommendations and learning paths.",
      category: "AI",
      imageUrl: "/images/portfolio/ai-career.jpg",
      technologies: JSON.stringify(["Python", "OpenAI", "React", "FastAPI", "Vector DB"]),
      features: JSON.stringify(["Skills assessment engine", "Personalized career paths", "Market trend analysis", "Job matching algorithm", "Resume optimization", "Interview preparation AI"]),
      githubUrl: "https://github.com/quantumhydra",
      demoUrl: "#",
    },
    {
      title: "CBET Tutoring Platform",
      slug: "cbet-tutoring",
      description: "An advanced tutoring platform with interactive whiteboards, real-time collaboration tools, AI-assisted homework help, and comprehensive student progress tracking.",
      category: "Education",
      imageUrl: "/images/portfolio/cbet-tutoring.jpg",
      technologies: JSON.stringify(["React", "Laravel", "MySQL", "WebRTC", "Redis"]),
      features: JSON.stringify(["Interactive digital whiteboard", "Real-time video collaboration", "AI homework assistance", "Student progress dashboard", "Scheduling system", "Parent portal access"]),
      githubUrl: "https://github.com/quantumhydra",
      demoUrl: "#",
    },
    {
      title: "Quantum Hydra WiFi Hotspot System",
      slug: "wifi-hotspot-system",
      description: "Enterprise-grade WiFi hotspot management system with captive portal, bandwidth management, user analytics, and seamless integration with existing network infrastructure.",
      category: "Networking",
      imageUrl: "/images/portfolio/wifi-hotspot.jpg",
      technologies: JSON.stringify(["Linux", "Python", "React", "MariaDB", "Docker"]),
      features: JSON.stringify(["Captive portal authentication", "Bandwidth allocation", "User analytics dashboard", "Multi-venue management", "Social media login", "Real-time monitoring"]),
      githubUrl: "https://github.com/quantumhydra",
      demoUrl: "#",
    },
  ]).onDuplicateKeyUpdate({
    set: { title: "Adaptive Real-Time AI Cybersecurity Intelligence System" },
  });

  // Seed testimonials
  await db.insert(testimonials).values([
    {
      name: "Richard Morrison",
      role: "Chief Technology Officer",
      company: "Apex Financial Group",
      avatar: "/images/testimonials/client1.jpg",
      quote: "Quantum Hydra Technologies transformed our cybersecurity posture completely. Their AI-driven threat detection system identified vulnerabilities we didn't know existed and prevented what could have been a devastating breach.",
      rating: "5",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Director of IT Operations",
      company: "GlobalHealth Medical Systems",
      avatar: "/images/testimonials/client2.jpg",
      quote: "The level of expertise and professionalism Quantum Hydra brings is unmatched. They delivered our custom e-learning platform ahead of schedule, and the AI tutoring features have revolutionized how we train our medical staff.",
      rating: "5",
    },
    {
      name: "Marcus Webb",
      role: "Founder & CEO",
      company: "NexGen Startups Inc.",
      avatar: "/images/testimonials/client3.jpg",
      quote: "Working with Quantum Hydra felt like having an elite tech team in-house. Their smart systems integration for our IoT infrastructure was flawless, and their ongoing support has been exceptional.",
      rating: "5",
    },
  ]).onDuplicateKeyUpdate({
    set: { quote: "Quantum Hydra Technologies transformed our cybersecurity posture completely." },
  });

  // Seed team members
  await db.insert(teamMembers).values([
    {
      name: "Alexander Reeves",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in enterprise technology, driving innovation in cybersecurity and AI solutions across global markets.",
      avatar: "/images/team/ceo.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      displayOrder: "0",
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Chief Technology Officer",
      bio: "PhD in Machine Learning from MIT. Pioneered multiple AI frameworks and leads our research division in next-gen cybersecurity.",
      avatar: "/images/team/cto.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      displayOrder: "1",
    },
    {
      name: "James Chen",
      role: "Head of Cybersecurity",
      bio: "Former NSA security architect with expertise in threat intelligence, ethical hacking, and enterprise security infrastructure.",
      avatar: "/images/team/cyber-lead.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      displayOrder: "2",
    },
    {
      name: "Sarah Mitchell",
      role: "Lead Software Architect",
      bio: "Full-stack expert specializing in scalable cloud architectures, distributed systems, and high-performance web applications.",
      avatar: "/images/team/architect.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      displayOrder: "3",
    },
  ]).onDuplicateKeyUpdate({
    set: { name: "Alexander Reeves" },
  });

  console.log("Database seeded successfully.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
