import { Clock, Users, DollarSign, Briefcase, TrendingUp } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      text: 'Evitás meses de trabajo perdido'
    },
    {
      icon: Users,
      text: 'Conseguís clientes antes de crear el producto'
    },
    {
      icon: DollarSign,
      text: 'Sólo apostas por ideas que valen la pena'
    },
    {
      icon: Briefcase,
      text: 'Pones de pie el proyecto sin renunciar a tu trabajo'
    },
    {
      icon: TrendingUp,
      text: 'Ganás confianza y claridad sobre el negocio'
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[rgb(0,0,0)]">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-4 tracking-[-0.01em] text-white px-2">
           Los beneficios de aplicar el<br />
            <span className="text-[var(--color-novogreen)]">Sistema de Validación Paga™</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="rounded-[18px] md:rounded-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[var(--color-border-subtle)] p-5 md:p-6 hover:border-[var(--color-novogreen)]/20 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[var(--color-novogreen)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-novogreen)]/15 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-novogreen)]" />
                </div>
                <p className="text-base md:text-xl text-white leading-[1.5]">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}