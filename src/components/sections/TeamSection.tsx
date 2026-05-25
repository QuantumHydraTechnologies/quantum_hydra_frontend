import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { teamData } from "@/data/teamData";

export default function TeamSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="Our Team"
          title="Meet the Experts"
          subtitle="Our leadership team brings decades of combined experience in technology, cybersecurity, and business innovation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Social icons */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-qht-primary transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-qht-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
