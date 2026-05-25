import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { target: 5, suffix: "+", label: "Projects Completed" },
  { target: 5, suffix: "+", label: "Enterprise Clients" },
  { target: 1, suffix: "+", label: "Years Experience" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
];

const timeline = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Quantum Hydra Technologies was established with a vision to revolutionize enterprise technology solutions.",
  },
  {
    year: "2026",
    title: "First Client Projects Delivered",
    description: "Successfully completed and deployed our first technology solutions for local businesses and institutions.",
  }
    //{
    //year: "2018",
    //title: "Global Expansion",
    //description: "Opened offices across three continents, serving Fortune 500 companies worldwide.",
  //}
  //{
    //year: "2021",
    //title: "Cybersecurity Excellence",
    //description: "Achieved ISO 27001 certification and launched our flagship AI-driven security platform.",
  //},
  //{
    //year: "2024",
    //title: "Quantum Leap",
    //description: "Pioneering quantum-resistant cryptography and next-generation threat intelligence systems.",
  //},
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="About Us"
          title="Building Tomorrow's Technology Today"
          subtitle="We are a team of passionate technologists, engineers, and innovators dedicated to delivering cutting-edge solutions that transform businesses."
        />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-qht-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-qht-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower organizations with innovative technology solutions that drive growth, enhance security, and create sustainable competitive advantages. We bridge the gap between complex technology and real-world business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-qht-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-qht-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in transformative technology solutions, recognized for our innovation, integrity, and impact. We envision a world where technology seamlessly enhances human potential and organizational excellence.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="absolute left-1/2 top-20 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`glass-card rounded-xl p-6 inline-block ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <span className="text-qht-primary font-mono font-bold text-lg">{item.year}</span>
                    <h4 className="text-xl font-semibold mt-2 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm max-w-sm">{item.description}</p>
                  </div>
                </div>
                <div className="relative z-10 w-10 h-10 rounded-full bg-qht-primary flex items-center justify-center shadow-glow shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
