import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-12 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 bg-nordic-bg text-nordic-black min-h-screen items-center">
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-1 md:col-span-7 h-[60vh] md:h-[calc(100vh-140px)] relative group overflow-hidden rounded-[24px] order-2 md:order-1"
      >
        <div className="absolute inset-0 bg-[#E5E5E5] flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Luxury Scandinavian Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        
        <div className="absolute bottom-8 left-8 hidden md:flex space-x-4">
          <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-[0.1em] text-nordic-muted mb-1">Siste Prosjekt</p>
            <p className="text-sm font-medium">Villa Isdalen, Bergen</p>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="col-span-1 md:col-span-5 flex flex-col justify-center order-1 md:order-2 md:pl-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center space-x-2"
        >
          <span className="h-[1px] w-8 bg-nordic-accent"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-nordic-accent font-semibold">Etablert 2014</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl lg:text-6xl font-serif leading-[1.1] mb-8"
        >
          Skandinavisk interiørdesign som forvandler rom til <span className="italic opacity-80 underline underline-offset-8 decoration-1 text-nordic-accent">opplevelser</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-nordic-muted text-lg leading-relaxed mb-10 max-w-md"
        >
          Vi skaper tidløse interiører for boliger og næringsbygg over hele Bergen og Norge. En perfekt balanse mellom form og funksjon.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-12"
        >
          <a href="#booking" className="px-8 py-4 bg-nordic-accent text-white text-[10px] tracking-widest uppercase hover:bg-nordic-accent-hover transition-colors rounded-full w-full sm:w-auto text-center shadow-sm">
            Bestill Konsultasjon
          </a>
          <a href="#projects" className="px-8 py-4 bg-transparent border border-nordic-black/10 text-nordic-black text-[10px] tracking-widest uppercase hover:bg-white transition-colors rounded-full w-full sm:w-auto text-center">
            Se Prosjekter
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex space-x-12 mt-4 border-t border-nordic-black/5 pt-10"
        >
          <div>
            <p className="text-2xl font-serif mb-1">500+</p>
            <p className="text-[10px] uppercase tracking-widest text-nordic-muted">Prosjekter</p>
          </div>
          <div>
            <p className="text-2xl font-serif mb-1">10+</p>
            <p className="text-[10px] uppercase tracking-widest text-nordic-muted">Års Erfaring</p>
          </div>
          <div>
            <p className="text-2xl font-serif mb-1">98%</p>
            <p className="text-[10px] uppercase tracking-widest text-nordic-muted">Tilfredshet</p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
