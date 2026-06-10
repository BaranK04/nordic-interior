import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'bot', text: string}[]>([
    { role: 'bot', text: 'Hei! Velkommen til Nordic Interior. Hvordan kan jeg hjelpe deg i dag?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Takk for meldingen din. For å gi deg best mulig service anbefaler vi å bestille en gratis konsultasjon. Du kan logge inn og sende oss prosjektdetaljene dine.'
      }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-nordic-accent text-white rounded-full shadow-[0_8px_30px_rgba(182,156,116,0.3)] hover:bg-nordic-accent-hover transition-colors"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-black/5 flex flex-col"
          >
            <div className="bg-nordic-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-serif text-lg font-medium">Nordic AI Assistent</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="h-[300px] overflow-y-auto p-4 flex flex-col gap-3 bg-nordic-bg/30 custom-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-nordic-accent text-white rounded-tr-sm' : 'bg-white border border-black/5 text-nordic-black rounded-tl-sm shadow-sm'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-white border-t border-black/5 flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Skriv en melding..."
                className="flex-1 px-4 py-2 bg-nordic-bg rounded-full outline-none text-sm border border-transparent focus:border-nordic-accent/30 transition-all text-nordic-black"
              />
              <button 
                onClick={handleSend}
                className="p-2 bg-nordic-black text-white rounded-full hover:bg-nordic-accent transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
