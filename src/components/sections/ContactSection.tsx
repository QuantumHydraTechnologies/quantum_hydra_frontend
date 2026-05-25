import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("https://quantum-hydra-backend.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          subtitle="Ready to transform your business? Reach out and let's discuss how Quantum Hydra Technologies can help you achieve your goals."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-qht-primary/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-qht-primary/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-qht-primary/50 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="cybersecurity">Cybersecurity Services</option>
                      <option value="ai">AI Solutions</option>
                      <option value="software">Software Development</option>
                      <option value="cloud">Cloud Computing</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-qht-primary/50 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-qht-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-qht-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">
                    Mbale Town vihiga county, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-qht-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-qht-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+254758882563</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-qht-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-qht-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground">quantumhydratech@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-qht-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-qht-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Working Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    24/7 Emergency Support
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden h-[200px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
