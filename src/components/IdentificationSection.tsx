import { Briefcase, Brain, Code, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function IdentificationSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const profiles = [
    {
      icon: Briefcase,
      title: 'Tengo un negocio actualmente',
      quote: '"Tengo mucha experiencia en lo mío... Pero quiero emprender en tecnología y no se cómo hacerlo."',
      solution: 'Tu problema no es falta de ideas. Es falta de validación real antes de invertir.'
    },
    {
      icon: Brain,
      title: 'Me gustaría lanzar un negocio propio',
      quote: '"Tengo ideas… pero no sé si alguna sirve. Me da miedo saltar al vacío y perder mis ahorros."',
      solution: 'No necesitás renunciar antes de empezar. Necesitás evidencia de que tu idea vale la pena.'
    },
    {
      icon: Code,
      title: 'Se construir productos digitales',
      quote: '"Sé como transformar mis ideas en Apps… Pero no consigo hacer que los clientes paguen."',
      solution: 'Tu problema no es la App. Es construir Apps antes de validar con clientes.'
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white" aria-labelledby="identification-title">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 id="identification-title" className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-4 tracking-[-0.01em] text-[rgb(0,0,0)] px-2">
            Si tenés una idea, pero estás trabado o no conseguís clientes,{' '}
            <span className="text-[var(--color-novored)]">esto es para vos.</span>
          </h2>
        </div>

        {/* Cards Grid / Accordion */}
        <div>
          <p className="text-center text-[rgb(0,0,0)] text-base md:text-xl max-w-3xl mx-auto font-semibold mb-6 md:mb-8">
            ¿Con cuál te identificás?
          </p>
          <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-3xl mx-auto">
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              const isOpen = activeAccordion === index;
              
              return (
                <article 
                  key={index}
                  className="rounded-[20px] md:rounded-[24px] bg-white border-2 border-[rgb(240,240,240)] hover:border-[var(--color-novored)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 group overflow-hidden"
                >
                  {/* Header - Always visible and clickable */}
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : index)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                    aria-controls={`profile-content-${index}`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[var(--color-novored)]/10 flex items-center justify-center group-hover:bg-[var(--color-novored)]/15 transition-colors duration-300 shrink-0" aria-hidden="true">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-novored)]" />
                      </div>
                      <h3 className="text-base md:text-xl leading-tight text-[rgb(0,0,0)]">
                        {profile.title}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 md:w-6 md:h-6 text-[rgb(80,80,80)] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Content - Accordion behavior */}
                  <div 
                    id={`profile-content-${index}`}
                    className={`transition-all duration-200 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-[rgb(80,80,80)] mb-5 md:mb-6 text-sm md:text-lg leading-[1.6] italic border-l-2 border-[rgb(230,230,230)] pl-3 md:pl-4">
                        {profile.quote}
                      </p>
                      <p className="text-[rgb(0,0,0)] text-sm md:text-lg leading-[1.6]">
                        {profile.solution}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}