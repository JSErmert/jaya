import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { siteData } from '../content/siteData';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer className="bg-[#1A1A1A] text-white/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl text-white mb-4">Jaya</h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-6">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.href === '/' ? createPageUrl('Home') : createPageUrl(item.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-6">
              Information
            </h4>
            <nav className="flex flex-col gap-3 mb-8">
              {footer.links.map((item) => (
                <Link
                  key={item.label}
                  to={createPageUrl(item.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social */}
            <div className="flex gap-4">
              {footer.social.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={item.platform}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}