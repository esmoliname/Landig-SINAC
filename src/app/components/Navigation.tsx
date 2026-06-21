import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingModal } from './BookingModal';

export function Navigation() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Dashboard AC', href: '/dashboard' },
    { label: 'Áreas de Conservación', href: '#conservation-areas' },
    { label: 'Áreas Silvestres Protegidas', href: '#conservation' },
    { label: 'Turismo Sostenible', href: '#visit' },
    { label: 'Educación Ambiental', href: '#education' },
    { label: 'Documentación', href: '#documentation' },
    { label: 'Trámites y Servicios', href: '#services' },
    { label: 'Noticias', href: '#news' },
    { label: 'Contacto', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      return; // Let standard link behavior handle route change
    }
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E3A2B]/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#27C5D8] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-tight">SINAC</div>
              <div className="text-xs opacity-90">Costa Rica</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.href.startsWith('/')) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white/90 hover:text-[#27C5D8] transition-colors text-sm font-medium relative group whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#27C5D8] transition-all group-hover:w-full" />
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/90 hover:text-[#27C5D8] transition-colors text-sm font-medium relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#27C5D8] transition-all group-hover:w-full" />
                </a>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
              className="hidden sm:flex items-center space-x-2 text-white/90 hover:text-[#27C5D8] transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden lg:block px-6 py-2.5 bg-[#27C5D8] text-white rounded-full font-medium text-sm hover:bg-[#1fa5b5] transition-colors shadow-lg"
            >
              Planifique su visita
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1E3A2B]/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                if (link.href.startsWith('/')) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block text-white/90 hover:text-[#27C5D8] transition-colors text-base font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-white/90 hover:text-[#27C5D8] transition-colors text-base font-medium py-2"
                  >
                    {link.label}
                  </a>
                );
              })}
              <button
                onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                className="flex items-center space-x-2 text-white/90 hover:text-[#27C5D8] transition-colors text-base font-medium py-2"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'ES' ? 'English' : 'Español'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </motion.nav>
  );
}
