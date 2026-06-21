import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Trees, Mountain, Waves } from 'lucide-react';
import { AreaInfoModal } from './AreaInfoModal';

const conservationAreas = [
  { id: 1, name: 'Guanacaste', x: 25, y: 20, color: '#27C5D8', icon: Mountain },
  { id: 2, name: 'Tempisque', x: 30, y: 35, color: '#8B6B4A', icon: Trees },
  { id: 3, name: 'Arenal-Tempisque', x: 40, y: 30, color: '#27C5D8', icon: Mountain },
  { id: 4, name: 'Huetar Norte', x: 45, y: 25, color: '#1E3A2B', icon: Trees },
  { id: 5, name: 'Tortuguero', x: 65, y: 30, color: '#27C5D8', icon: Waves },
  { id: 6, name: 'Central Volcánica', x: 50, y: 45, color: '#1E3A2B', icon: Mountain },
  { id: 7, name: 'Pacífico Central', x: 35, y: 55, color: '#8B6B4A', icon: Waves },
  { id: 8, name: 'Amistad-Caribe', x: 65, y: 55, color: '#27C5D8', icon: Mountain },
  { id: 9, name: 'Amistad-Pacífico', x: 50, y: 65, color: '#1E3A2B', icon: Trees },
  { id: 10, name: 'Osa', x: 40, y: 80, color: '#27C5D8', icon: Waves },
  { id: 11, name: 'Isla del Coco', x: 15, y: 90, color: '#1E3A2B', icon: Waves },
];

const areaDetails = {
  1: {
    name: 'Guanacaste',
    description:
      'Una de las áreas más importantes de Costa Rica, hogar de ecosistemas únicos de bosque seco tropical y una biodiversidad extraordinaria.',
    hectares: '147,000',
    parks: 12,
    visitors: '450K',
    image:
      'https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBjb25zZXJ2YXRpb24lMjBwcm90ZWN0ZWQlMjBhcmVhcyUyMG5hdHVyZXxlbnwxfHx8fDE3ODA1NDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  2: {
    name: 'Tempisque',
    description:
      'Protege importantes humedales y manglares que son vitales para la vida marina y las aves migratorias.',
    hectares: '215,000',
    parks: 15,
    visitors: '320K',
    image:
      'https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxDb3N0YSUyMFJpY2ElMjBjb25zZXJ2YXRpb24lMjBwcm90ZWN0ZWQlMjBhcmVhcyUyMG5hdHVyZXxlbnwxfHx8fDE3ODA1NDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
};

export function ConservationMap() {
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);
  const [selectedArea, setSelectedArea] = useState<number | null>(null);

  return (
    <section id="conservation-areas" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A2B] mb-4">
            Áreas de Conservación
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Costa Rica está organizada en 11 Áreas de Conservación que protegen y gestionan los
            recursos naturales del país
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] bg-gradient-to-br from-[#1E3A2B]/5 to-[#27C5D8]/5 rounded-3xl p-8 shadow-xl"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
              >
                <path
                  d="M 35 10 Q 40 8, 45 12 L 50 18 Q 52 20, 55 18 L 60 15 Q 65 12, 68 15 L 70 25 Q 72 30, 68 35 L 65 45 Q 62 50, 58 52 L 50 58 Q 45 62, 42 66 L 38 72 Q 35 78, 32 82 L 28 88 Q 25 92, 30 95 L 25 95 Q 20 92, 22 88 L 25 82 Q 28 76, 32 70 L 35 62 Q 38 56, 42 50 L 45 42 Q 48 36, 45 30 L 42 22 Q 38 16, 35 10 Z"
                  fill="#1E3A2B"
                  opacity="0.15"
                  stroke="#1E3A2B"
                  strokeWidth="0.5"
                />
              </svg>

              {conservationAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: area.id * 0.05 }}
                    whileHover={{ scale: 1.3 }}
                    onHoverStart={() => setHoveredArea(area.id)}
                    onHoverEnd={() => setHoveredArea(null)}
                    onClick={() => {
                      if (areaDetails[area.id as keyof typeof areaDetails]) {
                        setSelectedArea(area.id);
                      }
                    }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${area.x}%`,
                      top: `${area.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: area.color,
                        boxShadow:
                          hoveredArea === area.id
                            ? `0 0 20px ${area.color}`
                            : `0 4px 8px ${area.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      {hoveredArea === area.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-xl whitespace-nowrap z-10"
                        >
                          <div className="text-sm font-medium text-[#1E3A2B]">{area.name}</div>
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                        </motion.div>
                      )}
                    </div>

                    <motion.div
                      animate={{
                        scale: hoveredArea === area.id ? [1, 1.5, 1] : 1,
                        opacity: hoveredArea === area.id ? [0.5, 0, 0.5] : 0,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: area.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4">
              {conservationAreas.slice(0, 6).map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                  onHoverStart={() => setHoveredArea(area.id)}
                  onHoverEnd={() => setHoveredArea(null)}
                  className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    hoveredArea === area.id
                      ? 'bg-[#27C5D8]/10 shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: area.color }}
                  />
                  <span className="font-medium text-[#1E3A2B]">{area.name}</span>
                  <MapPin
                    className={`w-4 h-4 ml-auto transition-colors ${
                      hoveredArea === area.id ? 'text-[#27C5D8]' : 'text-gray-400'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-[#1E3A2B] text-white rounded-xl font-medium hover:bg-[#2d5942] transition-colors shadow-lg"
            >
              Ver todas las áreas de conservación
            </motion.button>
          </motion.div>
        </div>
      </div>

      <AreaInfoModal
        isOpen={selectedArea !== null}
        onClose={() => setSelectedArea(null)}
        area={
          selectedArea !== null
            ? areaDetails[selectedArea as keyof typeof areaDetails] || null
            : null
        }
      />
    </section>
  );
}
