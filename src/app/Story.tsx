import React, { useRef } from 'react';
import { siteData } from '../components/content/siteData';
import ScrollReveal from '../components/ui/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Story() {
  const { story } = siteData;
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-[#F8F6F1]">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img
            src={story.hero.image}
            alt="Sacred Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#F8F6F1]" />
        </motion.div>

        <motion.div 
          className="relative h-full flex items-center"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">
                Our Story
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
                {story.hero.headline}
              </h1>
              <p className="text-xl text-white/80 mt-6 max-w-lg">
                {story.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-32 lg:space-y-48">
            {story.sections.map((section, index) => (
              <div key={index}>
                {section.type === 'text' && (
                  <ScrollReveal>
                    <div className="max-w-3xl mx-auto">
                      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-8">
                        {section.headline}
                      </h2>
                      <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </ScrollReveal>
                )}

                {section.type === 'image' && (
                  <ScrollReveal>
                    <figure className="relative">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={section.image}
                          alt={section.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {section.caption && (
                        <figcaption className="mt-4 text-sm text-[#1A1A1A]/50 text-center italic">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  </ScrollReveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="bg-white py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                The Process
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A]">
                {story.method.headline}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/10">
            {story.method.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 lg:p-12 h-full group hover:bg-[#F8F6F1] transition-colors duration-500">
                  <span className="font-serif text-5xl text-[#B8956C]/30 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#1A1A1A] py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <blockquote className="text-center">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto">
                "The terraces of Maras are not just a place of work. They are a living inheritance, 
                a conversation between the mountain and the people who have cared for it for centuries."
              </p>
              <footer className="mt-10">
                <span className="text-[#B8956C] text-sm tracking-widest uppercase">
                  — A Maras Salt Artisan
                </span>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}