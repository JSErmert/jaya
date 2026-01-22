import React, { useState, useEffect } from 'react';
import { siteData } from '../components/content/siteData';
import ProductCard from '../components/shop/ProductCard';
import ProductDetail from '../components/shop/ProductDetail';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Shop() {
  const { collection } = siteData;
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle URL params for direct product links
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (productId) {
      const product = collection.products.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  return (
    <main className="bg-[#F8F6F1] min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
              The Collection
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6">
              Shop
            </h1>
            <p className="text-lg text-[#1A1A1A]/60 max-w-lg">
              {collection.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {collection.products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-center">
            <ScrollReveal delay={0}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#B8956C] mb-3">
                Free Shipping
              </h3>
              <p className="text-sm text-[#1A1A1A]/60">
                On orders over $75 within the United States
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#B8956C] mb-3">
                Gift Ready
              </h3>
              <p className="text-sm text-[#1A1A1A]/60">
                Elegant packaging included with every order
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#B8956C] mb-3">
                Satisfaction Guaranteed
              </h3>
              <p className="text-sm text-[#1A1A1A]/60">
                30-day returns on unopened products
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}