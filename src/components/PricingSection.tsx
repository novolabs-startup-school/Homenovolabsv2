import { Check, Gift, Shield } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
      <div className="max-w-[800px] mx-auto px-5">
        {/* Header */}
      

       

        {/* Pricing Card */}
        <div className="rounded-[22px] bg-[rgb(0,0,0)] border border-[#ff3b30]/30 p-8 md:p-10 mb-8">
          <div className="text-center mb-8">
            {/* Premium Steps */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl mb-2">
                Cómo funciona el proceso de inscripción
              </h3>
              
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8 text-left">
              {/* Step 1 */}
              <div className="relative pl-16 pr-4 py-4 rounded-[16px] bg-gradient-to-r from-[#ff3b30]/5 to-transparent border border-[#ff3b30]/20 hover:border-[#ff3b30]/40 transition-all duration-300">
                <div className="absolute left-4 top-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff3b30]/80 flex items-center justify-center text-white shadow-lg shadow-[#ff3b30]/20">
                  <span className="text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg mb-1">Agendar Entrevista de Inscripción</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Duración: 45 minutos</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-16 pr-4 py-4 rounded-[16px] bg-gradient-to-r from-[#c6ff3e]/5 to-transparent border border-[#c6ff3e]/20 hover:border-[#c6ff3e]/40 transition-all duration-300">
                <div className="absolute left-4 top-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#c6ff3e] to-[#c6ff3e]/80 flex items-center justify-center text-black shadow-lg shadow-[#c6ff3e]/20">
                  <span className="text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg mb-1">Recibir tu devolución (por si o no)</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">En máximo 96hs</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-16 pr-4 py-4 rounded-[16px] bg-gradient-to-r from-[#ff3b30]/5 to-transparent border border-[#ff3b30]/20 hover:border-[#ff3b30]/40 transition-all duration-300">
                <div className="absolute left-4 top-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff3b30]/80 flex items-center justify-center text-white shadow-lg shadow-[#ff3b30]/20">
                  <span className="text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg mb-1">Realizar el pago total del programa (o en 6 cuotas)</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Solo si quedaste entre los 20 seleccionados</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-16 pr-4 py-4 rounded-[16px] bg-gradient-to-r from-[#c6ff3e]/5 to-transparent border border-[#c6ff3e]/20 hover:border-[#c6ff3e]/40 transition-all duration-300">
                <div className="absolute left-4 top-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#c6ff3e] to-[#c6ff3e]/80 flex items-center justify-center text-black shadow-lg shadow-[#c6ff3e]/20">
                  <span className="text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg mb-1">Iniciar el onboarding al programa</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Solo si quedaste entre los 20 seleccionados</p>
                </div>
              </div>
            </div>

            {/* Premium CTA */}
            <button className="w-full bg-gradient-to-r from-[#ff3b30] to-[#ff3b30]/90 text-white py-5 px-8 rounded-[14px] mb-4 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff3b30]/30 hover:scale-[1.02] relative group overflow-hidden cta-sway">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent premium-shine-effect"></div>
              <span className="relative flex items-center justify-center gap-2 text-lg">
                <span>Agendar mi entrevista ahora</span>
              </span>
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
              <div className="w-2 h-2 rounded-full bg-[#c6ff3e] animate-pulse"></div>
              <span>La Edición #15 del Programa inicia el 12 de Enero</span>
            </div>
          </div>
        </div>

         {/* Contenido del Curso */}
        <div className="mb-8">
          <h3 className="text-xl mb-4">
            Contenido del Programa de 4 meses:
          </h3>
          <div className="space-y-3">
            {[
              'Acceso por tiempo ilimitado al contenido del programa.',
              'Acceso a 16 sesiones grupales en vivo para compartir avances, recibir y dar feedback.',
              'Acceso a 6 sesiones 1:1 con mentores de Novolabs para avanzar más rápido y evitar errores comunes.',
              'Acceso a 6 masterclass con emprendedores top.',
              'Acceso a 20 Novo-Agentes de IA especializados.',
              'Acceso a +120 lecciones en video de 5-10 minutos para que aprendas a tu ritmo.',
              'Acceso a +20 plantillas para que apliques el conocimiento en tu proyecto.',
              'Acceso al \'Novo Day\' con inversores destacados para que puedas pitchear tu idea.',
              'Acceso al Club de Fundadores de Novolabs por 1 año.',
              'Certificación de \'Emprendedor Novo\' al finalizar el programa con éxito.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c6ff3e]/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#c6ff3e]" />
                </div>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contenido Bonus */}
        <div className="mb-10">
          <h3 className="text-xl mb-4">
            Contenido Bonus
          </h3>
          <div className="space-y-3">
            {[
              'Bonus #1: Curso "Generación de Ideas y Detección de nichos".',
              'Bonus #2: Curso "Cómo crear tu App sin programar con VibeCoding".',
              'Bonus #3: Curso "Fundamentos y Mindset Emprendedor".'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Gift className="w-5 h-5 text-[#ff3b30]" />
                </div>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <button 
            className="w-full bg-[var(--color-novored)] hover:bg-[#ff4d42] text-white px-8 py-4 rounded-full transition-all duration-200 text-xl font-bold shadow-[0_8px_30px_rgb(255,59,48,0.3)] hover:shadow-[0_12px_40px_rgb(255,59,48,0.4)] hover:scale-[1.02] relative overflow-hidden"
            onClick={() => window.open('https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent premium-shine-effect"></div>
            <span className="relative flex items-center justify-center gap-2">
              
              <span>Quiero aplicar al programa</span>
            </span>
          </button>
           <div className="flex items-center justify-center gap-4 text-sm text-[var(--color-text-muted)] mb-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#c6ff3e]"></div>
              <span>La Edición #15 del Programa inicia el 12 de Enero</span>
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="max-w-[600px] mx-auto mt-6 mb-4">
            <div className="rounded-[16px] bg-[#c6ff3e] p-5 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-black mb-1">Nuestra garantía</h4>
                <p className="text-black/80 text-sm">
                  Te devolvemos el 100% del dinero si quedas seleccionado en el Programa, implementas el Sistema de Validación Paga™ y al finalizar no conseguís los resultados que estabas buscando.
                </p>
              </div>
            </div>
          </div>

         
          <p className="text-sm text-white/60 font-bold">
            Más de 300 personas ya lanzaron su proyecto con Novolabs
          </p>
        </div>
      </div>
    </section>
  );
}