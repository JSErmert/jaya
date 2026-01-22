import React from 'react';
import { siteData } from '../content/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function ProofOfOrigin() {
  const { proofOfOrigin } = siteData;

  return (
    <section className="bg-[#F8F6F1] py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
              Provenance
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A]">
              {proofOfOrigin.headline}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/10">
          {proofOfOrigin.items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#F8F6F1] p-8 lg:p-12 h-full group hover:bg-white transition-colors duration-500">
                <div className="flex flex-col h-full">
                  <span className="font-serif text-5xl lg:text-6xl text-[#B8956C] mb-2 transition-colors group-hover:text-[#9C6B4E]">
                    {item.metric}
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/60 mb-6">
                    {item.label}
                  </span>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}