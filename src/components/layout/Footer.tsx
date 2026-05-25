import { Link } from "react-router";
import { Shield, ArrowRight, Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Cybersecurity",
  "AI Solutions",
  "Networking",
  "Cloud Computing",
  "Software Development",
  "IT Consultancy",
];

export default function Footer() {
  return (
    <footer className="bg-qht-dark text-white relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-qht-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-qht-primary/10 blur-[80px] rounded-full" />

      <div className="container-custom pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-qht-primary flex items-center justify-center shadow-glow">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Quantum Hydra</span>
                <span className="text-[10px] font-medium text-white/50 uppercase tracking-widest leading-tight">
                  Technologies LTD
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Innovating the future of technology through smart ICT solutions, advanced cybersecurity, AI systems, and digital transformation.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-qht-primary/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-qht-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-qht-secondary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-qht-primary/50"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-lg bg-qht-primary flex items-center justify-center hover:bg-qht-accent transition-colors shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-qht-secondary shrink-0" />
                <span>Mbale Vihiga county Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-qht-secondary shrink-0" />
                <span>+254793535552</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-qht-secondary shrink-0" />
                <span>quantumhydratech@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Quantum Hydra Technologies LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
