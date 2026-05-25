import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight, ArrowRight, Users } from "lucide-react";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

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
            <span className="text-white">Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-white/70 max-w-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <>
      <CompactHero
        title="Our Team"
        subtitle="Meet the brilliant minds behind Quantum Hydra Technologies who make innovation happen every day."
      />
      <TeamSection />

      {/* Join Us CTA */}
      <section className="py-20 bg-qht-primary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-white/80 max-w-xl">
                We're always looking for talented individuals who are passionate about technology and innovation. Check out our open positions.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-qht-primary font-semibold hover:bg-white/90 transition-colors shrink-0"
            >
              <Users className="w-5 h-5 mr-2" />
              View Careers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
