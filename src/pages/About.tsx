import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";

function CompactHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative pt-32 pb-20 bg-qht-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-qht-dark via-qht-dark/95 to-qht-accent/20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-white/70 max-w-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <CompactHero
        title="About Quantum Hydra"
        subtitle="Discover our story, mission, and the team driving innovation in technology."
      />
      <AboutSection />
      <StatsSection />
      <TeamSection />
    </>
  );
}
