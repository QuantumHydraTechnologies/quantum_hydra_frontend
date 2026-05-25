import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonialsData } from "@/data/testimonialsData";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonialsData.length - 1;
      if (next >= testimonialsData.length) next = 0;
      return next;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom max-w-5xl">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by industry leaders worldwide, our solutions have transformed businesses across every sector."
        />

        <div className="relative">
          <div className="overflow-hidden min-h-[320px] md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-qht-primary shadow-glow">
                        <img
                          src={testimonialsData[current].avatar}
                          alt={testimonialsData[current].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-qht-primary flex items-center justify-center">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonialsData[current].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      "{testimonialsData[current].quote}"
                    </blockquote>

                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonialsData[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonialsData[current].role} at{" "}
                        {testimonialsData[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-qht-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-qht-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-qht-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
