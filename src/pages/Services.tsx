import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import ServicesSection from "@/components/sections/ServicesSection";
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
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-white/70 max-w-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We begin by understanding your business objectives, current technology landscape, and specific challenges through comprehensive analysis.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Our experts design a tailored technology roadmap that aligns with your goals, budget, and timeline for maximum impact.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the solution using agile methodologies, ensuring transparent communication and iterative delivery throughout the project.",
  },
  {
    number: "04",
    title: "Support & Optimization",
    description: "Post-deployment, we provide ongoing support, monitoring, and continuous optimization to ensure peak performance and ROI.",
  },
];

export default function Services() {
  return (
    <>
      <CompactHero
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to transform your business operations and drive growth."
      />
      <ServicesSection />

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-qht-primary/10 text-qht-primary text-xs font-semibold uppercase tracking-wider mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 relative"
              >
                <span className="text-5xl font-bold text-qht-primary/10 absolute top-4 right-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-qht-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-qht-primary font-semibold hover:bg-white/90 transition-colors"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
