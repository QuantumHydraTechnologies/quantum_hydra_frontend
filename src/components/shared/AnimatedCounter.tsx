import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCountUp, useScrollAnimation } from "@/hooks/useAnimations";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { ref, isInView } = useScrollAnimation(0.3);
  const { count, start } = useCountUp(target, duration);

  useEffect(() => {
    if (isInView) {
      start();
    }
  }, [isInView, start]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl md:text-5xl font-bold font-mono text-qht-primary">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
}
