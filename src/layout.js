import React from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/ui/SmoothScroll';

export default function Layout({ children }) {
  return (
    <>
      <SmoothScroll />
      {/* Custom Fonts & Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --color-bone: #F8F6F1;
          --color-charcoal: #1A1A1A;
          --color-gold: #B8956C;
          --color-terracotta: #9C6B4E;
        }
        
        html {
          scroll-behavior: auto;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Smooth momentum scrolling */
        html, body {
          overflow-x: hidden;
          height: 100%;
        }
        
        body {
          overscroll-behavior-y: none;
        }
        
        #smooth-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          will-change: transform;
        }
        
        #smooth-content {
          will-change: transform;
        }
        
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        html {
          scroll-padding-top: 100px;
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
        }
        
        /* Selection */
        ::selection {
          background-color: var(--color-gold);
          color: white;
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--color-bone);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--color-charcoal);
          border-radius: 0;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-gold);
        }
      `}</style>
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen bg-[#F8F6F1] text-[#1A1A1A]">
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}