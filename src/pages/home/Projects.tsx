import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    id: 1,
    title: "Villa Fjellsiden",
    category: "Privat",
    image: "https://images.unsplash.com/photo-1600210491369-026cc2d7be85?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Nordic Tech Kontoret",
    category: "Næring",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Boutique Hotel Bergen",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Sentrumsleilighet",
    category: "Privat",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
  }
];

export function Projects() {
  const [filter, setFilter] = useState('Alle');
  const categories = ['Alle', 'Privat', 'Næring', 'Hospitality'];

  const filtered = filter === 'Alle' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-nordic-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Utvalgte Prosjekter</h2>
            <p className="text-nordic-muted max-w-xl text-lg font-light">
              Et innblikk i noen av våre nylige prosjekter, fordelt på private hjem og næringslivskonsepter.
            </p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm tracking-widest uppercase transition-colors whitespace-nowrap ${filter === cat ? 'text-nordic-black font-medium border-b border-black pb-1' : 'text-nordic-muted hover:text-black font-light pb-1 border-b border-transparent'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`group cursor-pointer ${project.id % 2 === 0 ? 'md:mt-16' : ''}`}
               >
                <div className="overflow-hidden aspect-[4/3] bg-nordic-bg mb-6 rounded-3xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{project.title}</h3>
                    <p className="text-nordic-muted uppercase tracking-widest text-[10px]">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
