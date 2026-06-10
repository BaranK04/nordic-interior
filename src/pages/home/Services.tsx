import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, PaintRoller, Armchair, Lightbulb, Box } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} strokeWidth={1.5} />,
    title: "Privatboliger",
    description: "Helhetlig interiørdesign for hus, hytter og leiligheter, skreddersydd din livsstil og smak."
  },
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: "Næringsdesign",
    description: "Premium konsepter for hoteller, restauranter, butikker og moderne kontorlandskap."
  },
  {
    icon: <PaintRoller size={32} strokeWidth={1.5} />,
    title: "Renoveringsplanlegging",
    description: "Tett oppfølging gjennom hele byggefasen med detaljerte plantegninger og belysningsplaner."
  },
  {
    icon: <Armchair size={32} strokeWidth={1.5} />,
    title: "Møblering",
    description: "Kuratering av designmøbler og spesialdesignede plassbyggede løsninger."
  },
  {
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
    title: "Belysningsdesign",
    description: "Strategisk lyssetting som fremhever arkitektur og skaper riktig atmosfære."
  },
  {
    icon: <Box size={32} strokeWidth={1.5} />,
    title: "3D Visualisering",
    description: "Fotorealistiske 3D-modeller lar deg oppleve rommet før det bygges."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-nordic-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Våre Tjenester</h2>
          <p className="text-nordic-muted max-w-2xl mx-auto text-lg font-light">
            Vi tilbyr et komplett spekter av interiørtjenester, fra tidlig konseptutvikling til ferdigstillelse og styling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-nordic-white p-10 rounded-3xl group hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 border border-black/[0.03]"
            >
              <div className="text-nordic-accent mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {s.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-nordic-black">{s.title}</h3>
              <p className="text-nordic-muted font-light leading-relaxed mb-8">{s.description}</p>
              
              <a href="#booking" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium text-nordic-black group-hover:text-nordic-accent transition-colors">
                Les mer
                <span className="ml-2 bg-nordic-black w-4 h-[1px] group-hover:bg-nordic-accent group-hover:w-8 transition-all duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
