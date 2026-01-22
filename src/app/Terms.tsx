import React from 'react';
import { siteData } from '../components/content/siteData';
import ReactMarkdown from 'react-markdown';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Terms() {
  const { legal } = siteData;

  return (
    <main className="bg-[#F8F6F1] min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
              Legal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A]">
              {legal.terms.title}
            </h1>
            <p className="text-[#1A1A1A]/50 mt-4">
              Last updated: {legal.terms.lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-40">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="prose prose-lg prose-slate max-w-none
              prose-headings:font-serif prose-headings:text-[#1A1A1A]
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-[#1A1A1A]/70 prose-p:leading-relaxed
              prose-li:text-[#1A1A1A]/70
              prose-a:text-[#B8956C] prose-a:no-underline hover:prose-a:underline
            ">
              <ReactMarkdown>
                {legal.terms.content}
              </ReactMarkdown>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}