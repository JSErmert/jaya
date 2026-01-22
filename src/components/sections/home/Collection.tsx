import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { siteData } from '../content/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function Collection() {
  const { collection } = siteData;

  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                Shop
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4">
                {collection.headline}
              </h2>
              <p className="text-[#1A1A1A]/60 max-w-md">
                {collection.subheadline}
              </p>
            </div>
            <Link
              to={createPageUrl('Shop')}
              className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#1A1A1A] mt-6 lg:mt-0 hover:text-[#B8956C] transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {collection.products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <Link
                to={`${createPageUrl('Shop')}?product=${product.id}`}
                className="group block"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-[#F8F6F1]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors duration-500" />
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] mb-1 group-hover:text-[#B8956C] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/50">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg text-[#1A1A1A]">
                      ${product.price}
                    </span>
                    <span className="text-xs text-[#1A1A1A]/40 block">
                      {product.weight}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}