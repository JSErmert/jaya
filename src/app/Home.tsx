import React from 'react';
import Hero from '../components/home/Hero';
import ProofOfOrigin from '../components/home/ProofOfOrigin';
import Collection from '../components/home/Collection';
import Terraces from '../components/home/Terraces';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofOfOrigin />
      <Collection />
      <Terraces />
      <Testimonials />
      <Newsletter />
    </main>
  );
}