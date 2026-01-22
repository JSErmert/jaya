import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { siteData } from '../content/siteData';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  // Determine if current page has a dark hero (Home, Story, Wholesale)
  const hasDarkHero = location.pathname === '/' || 
                      location.pathname.includes('Home') || 
                      location.pathname.includes('Story') || 
                      location.pathname.includes('Wholesale');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Determine text color based on scroll and page type
  const getTextColor = () => {
    if (scrolled) return 'text-[#1A1A1A]';
    return hasDarkHero ? 'text-white' : 'text-[#1A1A1A]';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#F8F6F1]/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')} 
              className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${getTextColor()}`}
            >
              Jaya
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.href === '/' ? createPageUrl('Home') : createPageUrl(item.href)}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-60 ${getTextColor()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 transition-colors ${getTextColor()}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#F8F6F1]"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-16">
                <span className="font-serif text-2xl tracking-wide text-[#1A1A1A]">
                  Jaya
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#1A1A1A]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {siteData.navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href === '/' ? createPageUrl('Home') : createPageUrl(item.href)}
                      onClick={() => setMobileOpen(false)}
                      className="text-3xl font-serif text-[#1A1A1A] hover:text-[#B8956C] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}