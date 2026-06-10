import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nordic-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        
        <div className="md:col-span-1">
          <h2 className="font-serif text-2xl mb-6">NORDIC<span className="opacity-50">INTERIOR</span></h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Skandinavisk interiørdesign som forvandler boliger og næringsbygg til tidløse opplevelser.
          </p>
          <div className="flex gap-4 text-white/50">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-white/80">Tjenester</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">Privatboliger</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Næringsdesign</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Renovering</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Materialvalg</a></li>
            <li><a href="#" className="hover:text-white transition-colors">3D-visualisering</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-white/80">Kontakt</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/50">
            <li>Strandgaten 12, 5013 Bergen</li>
            <li>+47 900 00 000</li>
            <li>hello@nordicinterior.no</li>
            <li className="mt-4">
              <span className="block text-white/80 mb-1">Åpningstider</span>
              Man - Fre: 09:00 - 16:00
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-white/80">Nyhetsbrev</h4>
          <p className="text-white/50 text-sm mb-4">Motta inspirasjon og trender direkte i innboksen.</p>
          <div className="flex border-b border-white/20 pb-2">
            <input 
              type="email" 
              placeholder="Din e-postadresse" 
              className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-white/30"
            />
            <button className="text-sm font-medium hover:text-nordic-accent transition-colors uppercase tracking-wider">
              Meld på
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Nordic Interior. Alle rettigheter reservert.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Personvern</a>
          <a href="#" className="hover:text-white transition-colors">Brukervilkår</a>
        </div>
      </div>
    </footer>
  );
}
