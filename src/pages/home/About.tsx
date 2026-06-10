import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-nordic-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80"
            alt="Interior Design Material Detail"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-nordic-bg -z-10 rounded-3xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Design med forankring i skandinavisk enkelhet.
          </h2>
          <div className="space-y-6 text-nordic-muted text-lg font-light leading-relaxed mb-12">
            <p>
              Hos Nordic Interior tror vi at omgivelsene våre har en dyp innvirkning på livskvaliteten. 
              Vår filosofi bygger på rene linjer, naturlige materialer, og en balanse mellom funksjonalitet 
              og estetikk.
            </p>
            <p>
              Enten vi designer et privat hjem, en restaurant, eller et moderne kontorlandskap, 
              er vårt mål å skape rom som føles menneskelige, varme, og tidløse.
            </p>
          </div>
          
          <blockquote className="border-l-2 border-nordic-accent pl-6 py-2">
            <p className="font-serif text-2xl text-nordic-black mb-4 italic">
              "Et vellykket rom er ikke bare vakkert å se på, det fanger følelsen av ro og tilhørighet."
            </p>
            <footer className="text-sm uppercase tracking-widest text-nordic-muted">
              – Ida Johansen, Grunnlegger
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
