import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Brain, Network, Code2, Cloud, Cpu, MessageSquare, Globe } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Brain,
  Network,
  Code2,
  Cloud,
  Cpu,
  MessageSquare,
  Globe,
};

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeader
          label="Services"
          title="Comprehensive Technology Solutions"
          subtitle="From cybersecurity to AI, we deliver end-to-end technology services that drive digital transformation and business growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredId === service.id ? 1.1 : 1,
                      rotate: hoveredId === service.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-xl bg-qht-primary/10 flex items-center justify-center mb-5"
                  >
                    <IconComponent className="w-7 h-7 text-qht-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Features on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredId === service.id ? 1 : 0,
                      height: hoveredId === service.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-qht-primary font-medium flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-qht-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="inline-flex items-center text-sm font-medium text-qht-primary group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
