import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const CONSERVATION_AREAS = [
  {
    name: 'ÁREA DE CONSERVACIÓN ARENAL HUETAR NORTE (ACAHN)',
    headquarters: 'Ciudad Quesada, San Carlos, Alajuela',
    address: '150 norte y 200 este del Hospital de San Carlos, Ciudad Quesada, San Carlos, Alajuela',
    phone: '(506) 2460-0055 / 2460-1412',
    email: 'acahn.info@sinac.go.cr',
    url: 'https://www.google.com/maps/search/150+norte+200+este+Hospital+San+Carlos+Ciudad+Quesada+Alajuela+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1592593210599-492c25d93ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc4MTA3NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN ARENAL TEMPISQUE (ACAT)',
    headquarters: 'Tilarán, Guanacaste',
    address: 'De las instalaciones de la Fuerza Pública 275 metros al Sur, contiguo a la Estación de Bomberos, edificio blanco esquinero, Tilarán, Guanacaste',
    phone: '(506) 2695-5180',
    url: 'https://www.google.com/maps/search/Fuerza+Publica+Tilaran+Guanacaste+Costa+Rica+SINAC+ACAT',
    image: 'https://images.unsplash.com/photo-1623385521692-4a591e66619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc4MTA3NjY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN GUANACASTE (ACG)',
    headquarters: 'Liberia, Guanacaste',
    address: 'Sub-región Liberia, Guanacaste',
    phone: '(506) 2666-0630',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+Guanacaste+Liberia+Costa+Rica',
    note: 'Patrimonio Natural de la Humanidad UNESCO (1999)',
    image: 'https://images.unsplash.com/photo-1592593210599-492c25d93ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc4MTA3NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN TEMPISQUE (ACT)',
    headquarters: 'Nicoya, Guanacaste',
    address: 'Oficina Regional, Nicoya, Guanacaste',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+Tempisque+Nicoya+Guanacaste+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1623385521692-4a591e66619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc4MTA3NjY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN CARIBE (ACLAC)',
    headquarters: 'Guápiles / Limón',
    address: 'Oficina Regional, zona del Caribe costarricense',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+Caribe+Guapiles+Limon+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1592593210599-492c25d93ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc4MTA3NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN CENTRAL (ACC)',
    headquarters: 'San Miguel de Santo Domingo, Heredia',
    address: 'Del segundo cruce de San Miguel de Santo Domingo de Heredia 450 metros al noreste, sobre la carretera Braulio Carrillo',
    phone: '(506) 2268-8091 / 2268-8087',
    email: 'acc.info@sinac.go.cr',
    url: 'https://www.google.com/maps/search/San+Miguel+Santo+Domingo+Heredia+carretera+Braulio+Carrillo+SINAC+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1623385521692-4a591e66619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc4MTA3NjY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN LA AMISTAD CARIBE (ACLAC)',
    headquarters: 'Turrialba, Cartago',
    address: 'Oficina Regional, Turrialba, Cartago',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+La+Amistad+Caribe+Turrialba+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1592593210599-492c25d93ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc4MTA3NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN LA AMISTAD PACÍFICO (ACLAP)',
    headquarters: 'San Isidro del General, Pérez Zeledón',
    address: 'Oficina Regional, San Isidro del General, Puntarenas',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+La+Amistad+Pacifico+San+Isidro+General+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1623385521692-4a591e66619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc4MTA3NjY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN OSA (ACOSA)',
    headquarters: 'Golfito, Puntarenas',
    address: '800 metros norte de la pista de aterrizaje de Golfito, Antiguo Naranjal, Golfito, Puntarenas',
    phone: '(506) 2775-1210',
    email: 'acosa.info@sinac.go.cr',
    url: 'https://www.google.com/maps/search/SINAC+ACOSA+800+norte+pista+aterrizaje+Golfito+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1592593210599-492c25d93ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc4MTA3NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN PACÍFICO CENTRAL (ACOPAC)',
    headquarters: 'Quepos, Puntarenas',
    address: 'Oficina Regional, Quepos, Puntarenas',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+Pacifico+Central+Quepos+Costa+Rica',
    image: 'https://images.unsplash.com/photo-1623385521692-4a591e66619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc4MTA3NjY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'ÁREA DE CONSERVACIÓN MARINA COCOS (ACMC)',
    headquarters: 'San José (Oficina Administrativa)',
    phone: '(506) 2291-1215 / 2291-1216',
    email: 'acmc.info@sinac.go.cr',
    url: 'https://www.google.com/maps/search/SINAC+Area+Conservacion+Marina+Cocos+San+Jose+Costa+Rica',
    note: 'Área completamente marina. Administra la Isla del Coco, Patrimonio Natural de la Humanidad UNESCO.',
    image: 'https://images.unsplash.com/photo-1592593210599-492c25d93ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc4MTA3NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#111827] text-white overflow-hidden flex flex-col font-sans">
      {/* Navigation Bar */}
      <header className="h-20 bg-[#1F2937]/80 backdrop-blur-md border-b border-[#374151] flex items-center justify-between px-8 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <ImageWithFallback 
            src="https://cocosisland.org/wp-content/uploads/2018/11/logo-sinac.png" 
            alt="SINAC Logo" 
            className="h-12 object-contain"
          />
          <div className="h-8 w-[1px] bg-gray-600 hidden sm:block"></div>
          <h1 className="text-xl font-semibold text-gray-200 hidden sm:block tracking-wide">
            Portal Institucional de Áreas de Conservación
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm text-gray-400 hover:text-[#00CED1] transition-colors">
            Volver al Inicio
          </Link>
          <button className="px-5 py-2 bg-[#00CED1]/10 text-[#00CED1] border border-[#00CED1]/30 rounded-full text-sm font-medium hover:bg-[#00CED1]/20 transition-all shadow-[0_0_15px_rgba(0,206,209,0.15)]">
            Acceso Interno
          </button>
        </div>
      </header>

      {/* Main Layout 2-Column Split */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: Scrollable Content Viewport (40%) */}
        <section className="w-full lg:w-[40%] xl:w-[45%] h-full overflow-y-auto bg-gradient-to-b from-[#111827] to-[#0B0F19] p-6 lg:p-8 custom-scrollbar">
          <div className="max-w-2xl mx-auto space-y-8 pb-20">
            
            <div className="mb-10">
              <h2 className="text-sm font-bold tracking-widest text-[#00CED1] uppercase mb-2">Directorio Oficial</h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Áreas de Conservación de Costa Rica
              </h3>
              <p className="mt-4 text-gray-400 text-base leading-relaxed">
                Explore las direcciones, información de contacto y ubicaciones en el mapa de las 11 Áreas de Conservación administradas por el SINAC.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {CONSERVATION_AREAS.map((area, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  key={area.name}
                  className="group relative bg-[#1F2937]/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00CED1]/50 transition-colors duration-300 shadow-xl"
                >
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-4 pr-10 leading-snug">
                      {area.name}
                    </h4>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#00CED1] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-300">Sede: {area.headquarters}</div>
                          {area.address && (
                            <div className="text-sm text-gray-500 mt-1">{area.address}</div>
                          )}
                        </div>
                      </div>
                      
                      {(area.phone || area.email) && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2 border-t border-gray-700/50">
                          {area.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm text-gray-300">{area.phone}</span>
                            </div>
                          )}
                          {area.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm text-gray-300">{area.email}</span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {area.note && (
                        <div className="flex items-start gap-2 pt-2">
                          <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-sm italic text-amber-200/80">{area.note}</span>
                        </div>
                      )}
                    </div>

                    <a 
                      href={area.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#00CED1] hover:bg-[#00b2b5] text-[#0B0F19] font-bold py-3 px-6 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-[0_4px_14px_rgba(0,206,209,0.3)] hover:shadow-[0_6px_20px_rgba(0,206,209,0.4)]"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Ver ubicación en Google Maps</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>

        {/* RIGHT COLUMN: Map Visualization (60%) */}
        <section className="hidden lg:block lg:w-[60%] xl:w-[55%] relative bg-[#1F2937]">
          {/* Map Image Placeholder */}
          <div className="absolute inset-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjBtYXAlMjBvciUyMGFlcmlhbHxlbnwxfHx8fDE3ODEwNzY2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Costa Rica Conservation Map"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            {/* Gradient Overlay for dark premium effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#111827]/10 via-[#111827]/40 to-[#111827] pointer-events-none" />
            <div className="absolute inset-0 bg-[#00CED1]/5 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Floating UI Elements on Map */}
          <div className="absolute top-8 right-8 bg-[#111827]/80 backdrop-blur-md border border-gray-700 p-4 rounded-xl shadow-2xl max-w-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-[#00CED1] shadow-[0_0_8px_#00CED1]"></div>
              <h4 className="font-semibold text-white">Mapa Interactivo</h4>
            </div>
            <p className="text-xs text-gray-400">
              Seleccione un área en el listado para ver su sede administrativa. Este mapa ilustrativo cubre el 25% del territorio nacional protegido.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(55, 65, 81, 1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 1);
        }
      `}</style>
    </div>
  );
}
