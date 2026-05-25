import { motion } from "framer-motion";
import { TrendingUp, Shield, Network, Lock } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { icon: TrendingUp, target: 5, suffix: "+", label: "Projects Completed" },
  { icon: Network, target: 10, suffix: "", label: "Networks Managed" },
  { icon: Shield, target: 50, suffix: "+", label: "Threats Analyzed", format: true },
  { icon: Lock, target: 25, suffix: "%", label: "Systems Secured" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-qht-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30,144,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-qht-primary/20 text-qht-secondary text-xs font-semibold uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-qht-primary/10 border border-qht-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-qht-primary" />
                </div>
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2500}
                />
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-16 bg-white/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
