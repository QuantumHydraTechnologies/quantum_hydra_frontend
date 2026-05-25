import { motion } from "framer-motion";
import { Code2, Atom, Hexagon, Zap, Container, Terminal, Database, Link, Brain } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const techs = [
  { name: "Python", icon: Code2, color: "#3776AB" },
  { name: "React", icon: Atom, color: "#61DAFB" },
  { name: "Laravel", icon: Hexagon, color: "#FF2D20" },
  { name: "FastAPI", icon: Zap, color: "#009688" },
  { name: "Docker", icon: Container, color: "#2496ED" },
  { name: "Linux", icon: Terminal, color: "#FCC624" },
  { name: "MariaDB", icon: Database, color: "#003545" },
  { name: "Blockchain", icon: Link, color: "#8C8C8C" },
  { name: "AI/ML", icon: Brain, color: "#1E90FF" },
];

export default function TechStackSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30,144,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Tech Stack"
          title="Technologies We Master"
          subtitle="Our team is proficient in the latest technologies and frameworks, ensuring cutting-edge solutions for every project."
        />

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                animate={{
                  y: [0, -8, 0],
                }}
                // @ts-ignore
                style={{
                  animationDelay: `${index * 0.5}s`,
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center group-hover:shadow-glow transition-shadow"
                    style={{
                      borderColor: `${tech.color}30`,
                    }}
                  >
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12 transition-colors"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
