import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { BookingModal } from './BookingModal';

export function Hero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1602948577571-896d79713b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWb2xjYW4lMjBUZW5vcmlvJTIwbmF0aW9uYWwlMjBwYXJrJTIwQ29zdGElMjBSaWNhfGVufDF8fHx8MTc4MDU0Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Río Celeste Waterfall at Parque Nacional Volcán Tenorio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-8 max-w-3xl"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block px-4 py-2 bg-[#27C5D8]/20 backdrop-blur-sm border border-[#27C5D8]/30 rounded-full text-[#27C5D8] text-sm font-medium"
              >
                Sistema Nacional de Áreas de Conservación
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                Descubra la riqueza natural de{' '}
                <span className="text-[#27C5D8]">Costa Rica</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                Protegiendo la biodiversidad, promoviendo el turismo sostenible y conectando a
                las personas con la naturaleza.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingModalOpen(true)}
                className="group px-8 py-4 bg-[#27C5D8] text-white rounded-full font-medium text-lg flex items-center justify-center space-x-2 hover:bg-[#1fa5b5] transition-colors shadow-lg shadow-[#27C5D8]/30"
              >
                <span>Planifique su visita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('conservation-areas')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium text-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Explorar áreas protegidas
              </motion.button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#27C5D8]">28%</div>
                <div className="text-sm text-white/70">del territorio protegido</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#27C5D8]">170+</div>
                <div className="text-sm text-white/70">áreas protegidas</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#27C5D8]">5%</div>
                <div className="text-sm text-white/70">biodiversidad mundial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Featured Cards - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <div className="space-y-4 w-72">
          {[
            {
              title: 'Parque Nacional Volcán Tenorio',
              category: 'Parques Nacionales',
              image: 'https://images.unsplash.com/photo-1602948577571-896d79713b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWb2xjYW4lMjBUZW5vcmlvJTIwbmF0aW9uYWwlMjBwYXJrJTIwQ29zdGElMjBSaWNhfGVufDF8fHx8MTc4MDU0Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              title: 'Río Celeste',
              category: 'Maravillas Naturales',
              image: 'https://images.unsplash.com/photo-1633716898262-0e1469d55bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWb2xjYW4lMjBUZW5vcmlvJTIwbmF0aW9uYWwlMjBwYXJrJTIwQ29zdGElMjBSaWNhfGVufDF8fHx8MTc4MDU0Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              title: 'Áreas Silvestres Protegidas',
              category: 'Conservación',
              image: 'https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBjb25zZXJ2YXRpb24lMjBwcm90ZWN0ZWQlMjBhcmVhcyUyMG5hdHVyZXxlbnwxfHx8fDE3ODA1NDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              title: 'Programas de Conservación',
              category: 'Sostenibilidad',
              image: 'https://images.unsplash.com/photo-1614931454423-4b4bac270e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0JTIwYmlvZGl2ZXJzaXR5JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzgwNTQyODcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ x: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-medium text-[#27C5D8] mb-1">{card.category}</div>
                <h3 className="text-sm font-bold text-white">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('visit')}
          className="text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        parkName="Parque Nacional Volcán Tenorio"
      />
    </section>
  );
}
