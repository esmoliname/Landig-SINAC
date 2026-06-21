import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, CreditCard, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  parkName?: string;
}

export function BookingModal({ isOpen, onClose, parkName = 'Parque Nacional Volcán Tenorio' }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    visitors: '2',
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      onClose();
      setStep(1);
      setIsSuccess(false);
      setFormData({ date: '', visitors: '2', name: '', email: '', phone: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A2B]">Planifique su visita</h2>
                <p className="text-gray-600 text-sm mt-1">{parkName}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="flex items-center space-x-4 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                          step >= s
                            ? 'bg-[#27C5D8] text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {step > s ? <Check className="w-5 h-5" /> : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 transition-colors ${
                            step > s ? 'bg-[#27C5D8]' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A2B] mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Fecha de visita
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C5D8] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1E3A2B] mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Número de visitantes
                      </label>
                      <select
                        name="visitors"
                        value={formData.visitors}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C5D8] focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'persona' : 'personas'}
                          </option>
                        ))}
                        <option value="10+">Más de 10 personas</option>
                      </select>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-lg p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tarifa de entrada</span>
                        <span className="font-medium text-[#1E3A2B]">$15 por persona</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Visitantes</span>
                        <span className="font-medium text-[#1E3A2B]">{formData.visitors}</span>
                      </div>
                      <div className="border-t border-gray-300 pt-2 flex justify-between">
                        <span className="font-bold text-[#1E3A2B]">Total estimado</span>
                        <span className="font-bold text-[#27C5D8]">
                          ${parseInt(formData.visitors) * 15}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A2B] mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C5D8] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1E3A2B] mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C5D8] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1E3A2B] mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+506 8888-8888"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C5D8] focus:border-transparent"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-gradient-to-br from-[#27C5D8]/10 to-[#1E3A2B]/10 rounded-lg p-6 space-y-4">
                      <h3 className="font-bold text-[#1E3A2B] text-lg mb-4">Resumen de reserva</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Parque</span>
                          <span className="font-medium text-[#1E3A2B]">{parkName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fecha</span>
                          <span className="font-medium text-[#1E3A2B]">
                            {new Date(formData.date).toLocaleDateString('es-ES', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Visitantes</span>
                          <span className="font-medium text-[#1E3A2B]">{formData.visitors}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nombre</span>
                          <span className="font-medium text-[#1E3A2B]">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email</span>
                          <span className="font-medium text-[#1E3A2B]">{formData.email}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-3 flex justify-between">
                          <span className="font-bold text-[#1E3A2B]">Total</span>
                          <span className="font-bold text-[#27C5D8] text-xl">
                            ${parseInt(formData.visitors) * 15}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Nota:</strong> Esta es una reserva de demostración. En la versión
                        final, procesaría el pago y enviaría confirmación por email.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center space-x-3 pt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Anterior
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && (!formData.date || !formData.visitors)) ||
                        (step === 2 && (!formData.name || !formData.email || !formData.phone))
                      }
                      className="flex-1 px-6 py-3 bg-[#27C5D8] text-white rounded-lg font-medium hover:bg-[#1fa5b5] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-[#27C5D8] text-white rounded-lg font-medium hover:bg-[#1fa5b5] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          <span>Confirmar reserva</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A2B] mb-2">¡Reserva confirmada!</h3>
                <p className="text-gray-600 mb-4">
                  Hemos enviado la confirmación a {formData.email}
                </p>
                <p className="text-sm text-gray-500">
                  Recibirás un código QR para presentar el día de tu visita
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
