import { ImageWithFallback } from './figma/ImageWithFallback';
import moduleIcon from 'figma:asset/46e16cea6a10e763d5fb39e2c293d909354ce0b0.png';
import moduleIcon2 from 'figma:asset/2ebcc370b99fdbffba06f1b78a290a3f6ad357fa.png';
import moduleIcon3 from 'figma:asset/86ba8895476ce642704b0c54ce67aba3c4c99384.png';
import moduleIcon4 from 'figma:asset/abd48fbc165cc614d14dc9e63618b8f8871ca657.png';
import moduleIcon5 from 'figma:asset/9ed767061d839a646bab40314c0dd208f38e64ad.png';

export function ModulesSection() {
  const modules = [
    {
      number: 1,
      weeks: 'Semana 1-2',
      emoji: '🎯',
      icon: moduleIcon,
      title: 'Diseñás tu Modelo de Negocios',
      description: 'Descubrís qué modelo encaja con tu contexto y habilidades → avanzás con claridad sin copiar fórmulas ajenas.'
    },
    {
      number: 2,
      weeks: 'Semana 3-6',
      emoji: '🔍',
      icon: moduleIcon2,
      title: 'Detectás el Problema Real',
      description: 'Identificás dolores urgentes y concretos del cliente → evitás construir basándose en suposiciones.'
    },
    {
      number: 3,
      weeks: 'Semana 7',
      emoji: '💡',
      icon: moduleIcon3,
      title: 'Definís la Solución (sin construir nada)',
      description: 'Diseñás una solución deseable y simple → evitás malgastar meses desarrollando features innecesarias.'
    },
    {
      number: 4,
      weeks: 'Semana 8',
      emoji: '✨',
      icon: moduleIcon4,
      title: 'Creás una Oferta Irresistible para el mercado',
      description: 'Transformás tu idea en una propuesta irresistible → comunicás valor con precisión y generás interés real.'
    },
    {
      number: 5,
      weeks: 'Semana 9-12',
      emoji: '💰',
      icon: moduleIcon5,
      title: 'Validás con Clientes que Pagan antes de construir',
      description: 'Conseguís tus primeros compradores antes de tener el producto → obtenés evidencia objetiva de mercado.'
    },
    {
      number: 6,
      weeks: 'Semana 13-16',
      emoji: '🚀',
      icon: moduleIcon,
      title: 'Construís y lanzas tu MVP (solo si vale la pena)',
      description: 'Si el mercado lo confirma, usas IA +  No-Code para crear un MVP simple y enfocado → evitando invertir de más.'
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[rgb(0,0,0)] relative">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-4 tracking-[-0.01em] text-white px-2">
            Dentro del{" "}
            <span className="text-[var(--color-novogreen)]">
              Sistema de Validación Paga™
            </span>
          </h2>
        </div>

        {/* Modules Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          {modules.map((module, index) => (
            <div 
              key={module.number}
              className="rounded-[28px] bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[var(--color-border-subtle)] p-6 md:p-12 group backdrop-blur-sm"
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                {/* First Row: Icon + Module Number + Title */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[var(--color-novogreen)]/10 to-[var(--color-novogreen)]/5 border border-[var(--color-novogreen)]/20 flex items-center justify-center">
                      {module.number === 6 ? (
                        <svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="w-7 h-7"
                        >
                          <path d="M4.5 16.5c-1.5 1.25-2 5-2 5s3.75-.5 5-2c.625-.75 1-1.5 1-2.5 0-1-.375-1.75-1-2.5-.625-.75-1.5-1-2.5-1s-1.75.375-2.5 1z"/>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                        </svg>
                      ) : (
                        <img src={module.icon} alt="Module icon" className="w-7 h-7" />
                      )}
                    </div>
                  </div>
                  
                  {/* Module Number + Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--color-novogreen)]/60 font-semibold text-xs uppercase tracking-wider">
                        {module.weeks}
                      </span>
                    </div>
                    <h3 className="text-lg leading-tight text-white tracking-[-0.01em]">
                      {module.title}
                    </h3>
                  </div>
                </div>
                
                {/* Second Row: Description */}
                <p className="text-[#e0e0e0] text-base leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-start gap-8">
                {/* Emoji Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-[20px] bg-gradient-to-br from-[var(--color-novogreen)]/10 to-[var(--color-novogreen)]/5 border border-[var(--color-novogreen)]/20 flex items-center justify-center">
                    {module.number === 6 ? (
                      <svg 
                        width="56" 
                        height="56" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="w-12 h-12 md:w-14 md:h-14"
                      >
                        <path d="M4.5 16.5c-1.5 1.25-2 5-2 5s3.75-.5 5-2c.625-.75 1-1.5 1-2.5 0-1-.375-1.75-1-2.5-.625-.75-1.5-1-2.5-1s-1.75.375-2.5 1z"/>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                      </svg>
                    ) : (
                      <img src={module.icon} alt="Module icon" className="w-12 h-12 md:w-14 md:h-14" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Module Number */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-[var(--color-novogreen)]/60 font-semibold text-sm uppercase tracking-wider">
                      {module.weeks}
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-novogreen)]/10"></div>
                  </div>

                  {/* Title */}
                  <h3 className="md:text-[2rem] mb-5 leading-tight text-white tracking-[-0.01em] text-[30px]">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#e0e0e0] text-lg md:text-xl leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-novogreen)]/0 to-transparent rounded-b-[28px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}