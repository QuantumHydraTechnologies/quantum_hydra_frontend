import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/15551234567?text=Hello%20Quantum%20Hydra%20Technologies!%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle className="w-6 h-6 relative z-10" />
    </motion.a>
  );
}
