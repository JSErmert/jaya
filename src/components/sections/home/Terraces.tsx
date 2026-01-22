import React, { useRef } from 'react';
import { siteData } from '../content/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Terraces() {
  const { terraces } = siteData;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative bg-[#1A1A1A] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={terraces.image}
          alt="Maras Salt Terraces"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-[#1A1A1A]/30" />
      </motion.div>

      {/* Content */}
      <div className="relative py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div>
              <ScrollReveal>
                <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                  The Source
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                  {terraces.headline}
                </h2>
                <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                  {terraces.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Stats */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-3 gap-6">
                {terraces.stats.map((stat, index) => (
                  <ScrollReveal key={index} delay={index * 0.15}>
                    <div className="text-center lg:text-left">
                      <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#B8956C] block mb-2">
                        {stat.value}
                      </span>
                      <span className="text-xs tracking-[0.15em] uppercase text-white/50">
                        {stat.label}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}