import React from 'react';
import { Hero } from './home/Hero';
import { About } from './home/About';
import { Services } from './home/Services';
import { Projects } from './home/Projects';
import { BookingForm } from './home/BookingForm';

export function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="py-16 bg-nordic-bg border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center opacity-40 gap-8 grayscale">
           {/* Trust Logos Placeholder */}
           <h3 className="font-serif text-2xl">BONYTT</h3>
           <h3 className="font-serif text-2xl">ELLE DECORATION</h3>
           <h3 className="font-serif text-2xl">VOGUE LIVING</h3>
           <h3 className="font-serif text-2xl">AWARDS 2025</h3>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <BookingForm />
    </div>
  );
}
