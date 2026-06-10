import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    if (email.toLowerCase().includes('admin')) {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-nordic-bg pt-32 pb-24 flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-[24px] shadow-2xl border border-black/5"
      >
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl mb-2">Logg Inn</h2>
          <p className="text-sm text-nordic-muted font-light">Skriv inn din e-post for å fortsette (bruk "admin@..." for eiertilgang).</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-nordic-muted mb-2">E-postadresse</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="din@epost.no"
              className="w-full bg-transparent border border-black/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light" 
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-nordic-muted mb-2">Passord</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full bg-transparent border border-black/10 p-4 outline-none focus:border-nordic-accent transition-colors font-light" 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-4 bg-nordic-black text-white uppercase tracking-widest text-[10px] rounded-full hover:bg-nordic-accent transition-colors mt-8"
          >
            Logg inn
          </button>
        </form>
      </motion.div>
    </div>
  );
}
