import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import TechStackSection from "@/components/sections/TechStackSection";
import StatsSection from "@/components/sections/StatsSection";

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
            <span className="text-white">Technologies</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-white/70 max-w-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

const expertiseAreas = [
  {
    title: "Artificial Intelligence",
    description: "Machine learning, deep learning, natural language processing, computer vision, and predictive analytics.",
    skills: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn"],
  },
  {
    title: "Cybersecurity",
    description: "Threat intelligence, penetration testing, security audits, incident response, and compliance management.",
    skills: ["SIEM", "SOAR", "Zero Trust", "ISO 27001", "NIST"],
  },
  {
    title: "Cloud Architecture",
    description: "Multi-cloud strategies, serverless computing, containerization, and infrastructure as code.",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
  {
    title: "Web & Mobile",
    description: "Modern web applications, progressive web apps, cross-platform mobile development.",
    skills: ["React", "Next.js", "React Native", "Flutter", "TypeScript"],
  },
  {
    title: "Data Engineering",
    description: "Big data processing, ETL pipelines, data warehousing, and real-time analytics.",
    skills: ["Apache Spark", "Kafka", "Airflow", "dbt", "Snowflake"],
  },
  {
    title: "DevOps & SRE",
    description: "CI/CD pipelines, monitoring, observability, and site reliability engineering.",
    skills: ["Jenkins", "GitLab CI", "Prometheus", "Grafana", "ELK Stack"],
  },
];

export default function Technologies() {
  return (
    <>
      <CompactHero
        title="Our Technologies"
        subtitle="We leverage cutting-edge technologies to deliver world-class solutions for our clients."
      />
      <TechStackSection />

      {/* Expertise Areas */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-qht-primary/10 text-qht-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Areas of Excellence</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md bg-qht-primary/10 text-qht-primary text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}
