import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ChevronDown } from 'lucide-react';

export default function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: "How should I store this salt?",
      answer: "Store in a cool, dry place away from direct sunlight. Keep in an airtight container to maintain freshness and prevent moisture absorption."
    },
    {
      question: "Where do you ship?",
      answer: "We ship to most countries worldwide. Shipping times vary by destination, typically 3-7 business days domestically and 7-14 days internationally."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns of unopened products within 30 days of delivery. Please contact us to initiate a return."
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="bg-[#F8F6F1] w-full max-w-5xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="aspect-square lg:aspect-auto lg:h-full bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
                {product.subtitle}
              </span>
              
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
                {product.name}
              </h2>
              
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-2xl text-[#1A1A1A]">${product.price}</span>
                <span className="text-sm text-[#1A1A1A]/40">{product.weight}</span>
              </div>

              <p className="text-[#1A1A1A]/70 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Sensory Notes */}
              <div className="border-t border-[#1A1A1A]/10 pt-8 mb-8">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/60 mb-6">
                  Sensory Notes
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-xs tracking-wide uppercase text-[#B8956C] w-20 shrink-0">Texture</span>
                    <span className="text-sm text-[#1A1A1A]/70">{product.sensory.texture}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xs tracking-wide uppercase text-[#B8956C] w-20 shrink-0">Finish</span>
                    <span className="text-sm text-[#1A1A1A]/70">{product.sensory.finish}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xs tracking-wide uppercase text-[#B8956C] w-20 shrink-0">Best Uses</span>
                    <span className="text-sm text-[#1A1A1A]/70">{product.sensory.bestUses}</span>
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-[#1A1A1A]/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-[#1A1A1A]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button className="flex-1 py-4 bg-[#1A1A1A] text-white text-sm tracking-widest uppercase hover:bg-[#B8956C] transition-colors">
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>

              {/* Product Details */}
              <div className="mb-8">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/60 mb-4">
                  Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-sm text-[#1A1A1A]/70 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#B8956C] mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div className="border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/60 mb-4">
                  Questions
                </h3>
                <div className="space-y-0">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[#1A1A1A]/10">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full py-4 flex items-center justify-between text-left"
                      >
                        <span className="text-sm text-[#1A1A1A]">{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-[#1A1A1A]/40 transition-transform ${
                            expandedFaq === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-[#1A1A1A]/60 pb-4">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}