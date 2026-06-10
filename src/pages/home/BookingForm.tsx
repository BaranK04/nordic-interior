import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookingService } from '../../services/store';
import { useAuth } from '../../context/AuthContext';

export function BookingForm() {
  const { user } = useAuth();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      userEmail: user?.email || formData.get('email') as string,
      userId: user?.id || 'guest',
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      projectType: formData.get('type') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
      preferredDate: formData.get('date') as string,
    };

    setTimeout(() => {
      BookingService.add(data);
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Start Ditt Prosjekt</h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
            La oss diskutere visjonene for ditt neste rom. Fyll ut skjemaet, så kontakter vi deg for å avtale en uforpliktende og kostnadsfri konsultasjon.
          </p>
          
          <div className="space-y-8 text-white/80">
            <div>
              <h4 className="text-sm tracking-widest uppercase mb-2 text-nordic-accent">Vårt Kontor</h4>
              <p className="font-light">Strandgaten 12, 5013 Bergen</p>
            </div>
            <div>
              <h4 className="text-sm tracking-widest uppercase mb-2 text-nordic-accent">Kontakt</h4>
              <p className="font-light">+47 900 00 000</p>
              <p className="font-light">hello@nordicinterior.no</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === 'success' ? (
            <div className="bg-white/5 border border-white/10 p-12 text-center h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-nordic-accent rounded-full flex items-center justify-center text-2xl mb-6">✓</div>
              <h3 className="font-serif text-2xl mb-4">Mottatt!</h3>
              <p className="text-white/60 font-light">Takk for at du tar kontakt. Vi vil gjennomgå din forespørsel og kontakte deg innen kort tid.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-[10px] uppercase tracking-widest text-nordic-accent hover:text-white transition-colors">Send ny forespørsel</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Navn</label>
                  <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">E-post</label>
                  <input required name="email" type="email" defaultValue={user?.email} className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Telefon</label>
                  <input required name="phone" type="tel" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Type Prosjekt</label>
                  <select required name="type" defaultValue="" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light text-white appearance-none">
                    <option value="" disabled className="text-black">Velg type</option>
                    <option value="Privatbolig" className="text-black">Privatbolig</option>
                    <option value="Kontor" className="text-black">Kontor</option>
                    <option value="Hospitality" className="text-black">Hospitality</option>
                    <option value="Annet" className="text-black">Annet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Melding / Beskrivelse</label>
                <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-5 bg-nordic-accent text-white uppercase tracking-widest text-[10px] hover:bg-nordic-accent-hover transition-colors rounded-full disabled:opacity-70 flex justify-center items-center"
              >
                {status === 'submitting' ? 'Sender...' : 'Send Forespørsel'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
