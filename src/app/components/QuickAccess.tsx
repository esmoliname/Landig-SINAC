import { useState } from 'react';
import { motion } from 'motion/react';
import { Ticket, Map, Clock, Bell, Microscope, GraduationCap } from 'lucide-react';
import { BookingModal } from './BookingModal';

const quickAccessItems = [
  {
    icon: Ticket,
    title: 'Comprar Entradas',
    description: 'Reserve sus tickets en línea',
    color: 'bg-[#27C5D8]',
    href: 'https://serviciosenlinea.sinac.go.cr/',
  },
  {
    icon: Map,
    title: 'Mapa de Áreas Protegidas',
    description: 'Explore 170+ áreas de conservación',
    color: 'bg-[#1E3A2B]',
    href: '#map',
  },
  {
    icon: Clock,
    title: 'Horarios y Tarifas',
    description: 'Información actualizada',
    color: 'bg-[#8B6B4A]',
    href: '#schedule',
  },
  {
    icon: Bell,
    title: 'Noticias y Alertas',
    description: 'Manténgase informado',
    color: 'bg-[#27C5D8]',
    href: '#news',
  },
  {
    icon: Microscope,
    title: 'Investigación Científica',
    description: 'Proyectos y publicaciones',
    color: 'bg-[#1E3A2B]',
    href: '#research',
  },
  {
    icon: GraduationCap,
    title: 'Educación Ambiental',
    description: 'Programas educativos',
    color: 'bg-[#8B6B4A]',
    href: '#education',
  },
];

export function QuickAccess() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleCardClick = (href: string) => {
    if (href === '#tickets') {
      setIsBookingModalOpen(true);
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="visit" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A2B] mb-4">
            Acceso Rápido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesita para planificar su visita y conocer más sobre nuestras áreas protegidas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item, index) => {
            const Icon = item.icon;
            
            const content = (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-10">
                  <Icon className="w-full h-full text-gray-900" />
                </div>

                <div className="relative z-10">
                  <div
                    className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1E3A2B] mb-2 group-hover:text-[#27C5D8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">{item.description}</p>

                  <div className="mt-4 text-[#27C5D8] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más →
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#27C5D8] to-[#1E3A2B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </>
            );

            const commonProps = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 },
              whileHover: { y: -8, scale: 1.02 },
              className: "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-left w-full block cursor-pointer"
            };

            if (item.href.startsWith('http')) {
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...commonProps}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.button
                key={item.title}
                onClick={() => handleCardClick(item.href)}
                {...commonProps}
              >
                {content}
              </motion.button>
            );
          })}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
