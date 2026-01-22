import React from 'react';
import { siteData } from '../content/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function Testimonials() {
  const { testimonials } = siteData;

  return (
    <section className="bg-[#F8F6F1] py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-16 block text-center">
            From Our Partners
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <blockquote className="relative">
                {/* Quote Mark */}
                <span className="absolute -top-8 -left-4 font-serif text-8xl text-[#B8956C]/20 leading-none">
                  "
                </span>
                
                <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed mb-8 relative">
                  {testimonial.quote}
                </p>
                
                <footer>
                  <cite className="not-italic">
                    <span className="block text-[#1A1A1A] font-medium">
                      {testimonial.author}
                    </span>
                    <span className="text-sm text-[#1A1A1A]/50">
                      {testimonial.title}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}