import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-40 transition-all duration-500",
      scrolled ? "luxury-glass shadow-sm py-4" : "bg-nordic-bg py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col transition-colors text-nordic-black">
          <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">Nordic</span>
          <span className="text-xl font-light tracking-[0.2em] uppercase">Interior</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className="text-xs uppercase tracking-widest hover:text-nordic-accent transition-colors text-nordic-black/70">Hjem</Link>
          <a href="/#services" className="text-xs uppercase tracking-widest hover:text-nordic-accent transition-colors text-nordic-black/70">Tjenester</a>
          <a href="/#projects" className="text-xs uppercase tracking-widest hover:text-nordic-accent transition-colors text-nordic-black/70">Prosjekter</a>
          <a href="/#about" className="text-xs uppercase tracking-widest hover:text-nordic-accent transition-colors text-nordic-black/70">Om oss</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center gap-2 text-[10px] uppercase tracking-widest px-5 py-2 border rounded-full transition-all hover:bg-white hover:text-nordic-black border-nordic-black/10 text-nordic-black">
                <UserIcon size={14} />
                Min Side
              </Link>
              <button onClick={logout} className="text-[10px] uppercase tracking-widest text-red-500/80 hover:text-red-500 transition-colors">Logg ut</button>
            </div>
          ) : (
            <Link to="/login" className="text-[10px] uppercase tracking-widest px-5 py-2 border rounded-full transition-all hover:bg-white hover:text-nordic-black border-nordic-black/10 text-nordic-black">
              Logg inn
            </Link>
          )}

          <a href="#booking" className="px-6 py-3 bg-nordic-accent text-white rounded-full text-[10px] uppercase tracking-widest hover:bg-nordic-accent-hover transition-all shadow-sm">
            Bestill Konsultasjon
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-nordic-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nordic-bg absolute top-full left-0 w-full overflow-hidden shadow-lg border-t border-black/5"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-nordic-black">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Hjem</Link>
              <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Tjenester</a>
              <a href="/#projects" onClick={() => setMobileMenuOpen(false)}>Prosjekter</a>
              <a href="/#about" onClick={() => setMobileMenuOpen(false)}>Om oss</a>
              
              <div className="h-px w-full bg-black/10" />
              
              {user ? (
                <>
                  <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} onClick={() => setMobileMenuOpen(false)}>Min Side</Link>
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-left text-red-500">Logg ut</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Logg inn</Link>
              )}
              
              <a href="/#booking" onClick={() => setMobileMenuOpen(false)} className="px-5 py-3 bg-nordic-black text-white text-center rounded-sm">
                Bestill Konsultasjon
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
