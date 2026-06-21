import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Check,
} from 'lucide-react';

const footerLinks = {
  about: [
    { label: 'Sobre SINAC', href: '#about' },
    { label: 'Misión y Visión', href: '#mission' },
    { label: 'Historia', href: '#history' },
    { label: 'Organigrama', href: '#org' },
  ],
  conservation: [
    { label: 'Áreas de Conservación', href: '#areas' },
    { label: 'Parques Nacionales', href: '#parks' },
    { label: 'Refugios de Vida Silvestre', href: '#refuges' },
    { label: 'Reservas Biológicas', href: '#reserves' },
  ],
  visit: [
    { label: 'Planifique su Visita', href: '#plan' },
    { label: 'Comprar Entradas', href: '#tickets' },
    { label: 'Horarios y Tarifas', href: '#schedule' },
    { label: 'Guía de Visitantes', href: '#guide' },
  ],
  resources: [
    { label: 'Investigación', href: '#research' },
    { label: 'Publicaciones', href: '#publications' },
    { label: 'Biblioteca Digital', href: '#library' },
    { label: 'Datos Abiertos', href: '#data' },
  ],
  transparency: [
    { label: 'Transparencia', href: '#transparency' },
    { label: 'Contrataciones', href: '#contracts' },
    { label: 'Presupuesto', href: '#budget' },
    { label: 'Informes Anuales', href: '#reports' },
  ],
  accessibility: [
    { label: 'Accesibilidad', href: '#accessibility' },
    { label: 'Mapa del Sitio', href: '#sitemap' },
    { label: 'Política de Privacidad', href: '#privacy' },
    { label: 'Términos de Uso', href: '#terms' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor ingrese un correo válido');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="bg-[#1E3A2B] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-[#27C5D8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div>
                <div className="font-bold text-xl leading-tight">SINAC</div>
                <div className="text-sm opacity-80">Costa Rica</div>
              </div>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              Sistema Nacional de Áreas de Conservación de Costa Rica. Protegiendo la
              biodiversidad y promoviendo el turismo sostenible desde 1998.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#27C5D8]" />
                <span>San José, Costa Rica</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#27C5D8]" />
                <span>+506 2522-6500</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#27C5D8]" />
                <span>info@sinac.go.cr</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-[#27C5D8] rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-3 gap-8 lg:gap-12 lg:pl-12">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#27C5D8]">Sobre SINAC</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#27C5D8] transition-colors text-sm flex items-center space-x-1 group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-lg mb-4 mt-8 text-[#27C5D8]">Conservación</h3>
              <ul className="space-y-2">
                {footerLinks.conservation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#27C5D8] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#27C5D8]">Visite</h3>
              <ul className="space-y-2">
                {footerLinks.visit.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#27C5D8] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-lg mb-4 mt-8 text-[#27C5D8]">Recursos</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#27C5D8] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#27C5D8]">Transparencia</h3>
              <ul className="space-y-2">
                {footerLinks.transparency.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#27C5D8] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-lg mb-4 mt-8 text-[#27C5D8]">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.accessibility.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#27C5D8] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#27C5D8]">Suscríbase</h3>
              <p className="text-white/70 text-sm mb-4">
                Reciba noticias y actualizaciones sobre nuestras áreas protegidas
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Su correo electrónico"
                    disabled={isSubmitting || isSuccess}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#27C5D8] transition-colors text-sm disabled:opacity-50"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.95 }}
                    disabled={isSubmitting || isSuccess}
                    className="px-6 py-3 bg-[#27C5D8] hover:bg-[#1fa5b5] rounded-lg font-medium transition-colors text-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Suscrito!</span>
                      </>
                    ) : (
                      <span>Suscribirse</span>
                    )}
                  </motion.button>
                </div>
                {error && <p className="text-red-300 text-xs">{error}</p>}
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 SINAC Costa Rica. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#27C5D8] transition-colors">
                Política de Cookies
              </a>
              <a href="#" className="text-white/60 hover:text-[#27C5D8] transition-colors">
                Accesibilidad
              </a>
              <a href="#" className="text-white/60 hover:text-[#27C5D8] transition-colors">
                Contáctenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
