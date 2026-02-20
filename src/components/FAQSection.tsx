import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[var(--color-border-subtle)] overflow-hidden hover:border-[var(--color-novogreen)]/20 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-7 flex items-center justify-between gap-4 text-left"
      >
        <span className="text-lg md:text-xl text-white font-medium">{question}</span>
        <ChevronDown 
          className={`w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-10 pb-7">
          <p className="text-[#b4b4b4] text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: '¿Qué pasa si no tengo idea todavía?',
      answer: 'El Programa incluye contenido y ejercicios para ayudarte a identificar oportunidades reales de mercado.'
    },
    {
      question: '¿Esto funciona para cualquier tipo de idea o industria?',
      answer: 'Sí. El método funciona para productos digitales, servicios, apps, SaaS, educación, consultoría, marketplaces y más. Lo validamos con +300 emprendedores en múltiples industrias.'
    },
    {
      question: '¿Necesito tener audiencia o comunidad?',
      answer: 'No. Te enseñamos a encontrar clientes potenciales desde cero y generar conversaciones con gente real que tiene el problema.'
    },
    {
      question: '¿Necesito saber programar?',
      answer: 'No. Vas a validar antes de construir y, cuando llegue el momento, lo harás con IA y No-Code.'
    },
    {
      question: '¿Tengo que exponerme en redes o grabar videos?',
      answer: 'No es obligatorio. Hay múltiples formas de validar sin mostrar tu cara ni crear contenido público.'
    },
    {
      question: '¿Qué pasa si no sé vender?',
      answer: 'El método te guía paso a paso con scripts y ejemplos para tener conversaciones simples y naturales, no ventas agresivas.'
    },
    {
      question: '¿Qué pasa si me da miedo cobrar antes de tener nada construido?',
      answer: 'Te damos formatos, marcos éticos y ejemplos para ofrecer preventas de forma profesional, transparente y alineada al valor que entregás.'
    },
    {
      question: '¿Qué pasa si mi idea no funciona?',
      answer: 'Justamente el objetivo del proceso es determinar si vale la pena avanzar o no, antes de invertir tiempo o dinero. Si la idea no valida, te guiamos a ajustar, pivotear o descartar rápido —sin perder meses ni recursos—.'
    },
    {
      question: '¿Puedo hacerlo si trabajo full-time?',
      answer: 'Sí. La metodología está diseñada para ejecutarse en paralelo a tu trabajo.'
    },
    {
      question: '¿Cuánto tiempo necesito dedicar por semana?',
      answer: 'Entre 4 y 8 horas semanales. El método está diseñado para personas con agendas ajustadas.'
    },
    {
      question: '¿Cuánto tiempo lleva validar una idea?',
      answer: 'Entre 7 y 21 días, dependiendo del ritmo de cada emprendedor.'
    },
    {
      question: '¿Garantizan resultados?',
      answer: 'Garantizamos el proceso, las herramientas y el acompañamiento. Los resultados dependen de tu ejecución.'
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[rgb(0,0,0)]">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-4 tracking-[-0.01em] text-white px-2">
            Preguntas frecuentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12 md:mb-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
          
          {/* WhatsApp Contact Card */}
          <div className="mt-8 rounded-[24px] bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] border border-[var(--color-border-subtle)] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#25D366]/30 transition-all duration-300">
            <h3 className="text-xl md:text-2xl text-white">
              ¿Tienes otra pregunta?
            </h3>
            
            <a
              href="https://wa.me/5491163544698?text=Buenas!%20Vengo%20de%20la%20p%C3%A1gina%20web,%20me%20gustar%C3%ADa%20poder%20hacer%20algunas%20consultas%20respecto%20al%20programa."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(37,211,102,0.2)] hover:shadow-[0_0_50px_rgba(37,211,102,0.3)] hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-white font-normal font-bold">Hablemos por Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}