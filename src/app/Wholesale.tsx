import React, { useState, useRef } from 'react';
import { siteData } from '../components/content/siteData';
import ScrollReveal from '../components/ui/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Wholesale() {
  const { wholesale } = siteData;
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-[#F8F6F1]">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img
            src={wholesale.hero.image}
            alt="Wholesale Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#F8F6F1]" />
        </motion.div>

        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">
                Partnership
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-2xl">
                {wholesale.hero.headline}
              </h1>
              <p className="text-xl text-white/80 mt-6 max-w-lg">
                {wholesale.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed max-w-3xl">
              {wholesale.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It's For & Packaging */}
      <section className="bg-white py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Who It's For */}
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                  Ideal Partners
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-8">
                  {wholesale.whoItsFor.headline}
                </h2>
                <ul className="space-y-4">
                  {wholesale.whoItsFor.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8956C]" />
                      <span className="text-[#1A1A1A]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Packaging */}
            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                  Options
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-8">
                  {wholesale.packaging.headline}
                </h2>
                <div className="space-y-6">
                  {wholesale.packaging.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-baseline pb-4 border-b border-[#1A1A1A]/10">
                      <span className="text-[#1A1A1A]">{item.format}</span>
                      <span className="text-sm text-[#1A1A1A]/50">{item.sizes}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                  Connect
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                  {wholesale.form.headline}
                </h2>
                <p className="text-[#1A1A1A]/60 mb-8">
                  Tell us about your business and how we might work together. 
                  We review every inquiry personally and respond within 48 hours.
                </p>
                <div className="text-sm text-[#1A1A1A]/40">
                  Or email us directly at{' '}
                  <a href="mailto:wholesale@jayasalt.com" className="text-[#B8956C] hover:underline">
                    wholesale@jayasalt.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {submitted ? (
                <div className="bg-white p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B8956C]/10 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-[#B8956C]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-[#1A1A1A]/60">
                    {wholesale.form.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 space-y-6">
                  {wholesale.form.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#1A1A1A]/60 mb-2">
                        {field.label}
                        {field.required && <span className="text-[#B8956C]"> *</span>}
                      </label>

                      {field.type === 'select' ? (
                        <select
                          required={field.required}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className="w-full px-4 py-3 border border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A] focus:outline-none focus:border-[#B8956C] transition-colors"
                        >
                          <option value="">Select one...</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : field.type === 'textarea' ? (
                        <textarea
                          required={field.required}
                          rows={4}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className="w-full px-4 py-3 border border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#B8956C] transition-colors resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          required={field.required}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className="w-full px-4 py-3 border border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#B8956C] transition-colors"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 py-4 bg-[#1A1A1A] text-white text-sm tracking-widest uppercase hover:bg-[#B8956C] transition-colors mt-8"
                  >
                    {wholesale.form.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}