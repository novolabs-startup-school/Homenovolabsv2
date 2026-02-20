import { Target, Users, Zap } from "lucide-react";

export function ValidationSystemSection() {
  const benefits = [
    {
      icon: Target,
      number: "1",
      title: "Validas con clientes antes de construir",
      description:
        "Evita malgastar miles de dólares o meses de tu vida en la idea equivocada",
    },
    {
      icon: Users,
      number: "2",
      title: "Elimina el ruido innecesario y da velocidad",
      description:
        "Te guía paso a paso para que ejecutes sólo lo que es importante en cada momento.",
    },
    {
      icon: Zap,
      number: "3",
      title:
        "Avanzas con la evidencia en lugar de con suposiciones.",
      description:
        "Cada decisión que tomas en tu negocio se apoya en datos que obtenes del proceso.",
    },
  ];

  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden"
      aria-labelledby="validation-title"
    >
      {/* Decorative Background Elements - reduced blur for performance */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-novored)]/[0.02] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-novogreen)]/[0.02] rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-[var(--max-width)] mx-auto px-5 relative">
        {/* Title */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="inline-block mb-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-novored)]/10 to-[var(--color-novored)]/5 border border-[var(--color-novored)]/20">
            <span className="text-[var(--color-novored)] font-semibold text-sm uppercase tracking-wider">
              Nuestro Método
            </span>
          </div>
          <h2
            id="validation-title"
            className="text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.1] mb-8 tracking-[-0.02em] text-[rgb(0,0,0)]"
          >
            Sistema de Validación Paga™:{" "}
            <span className="text-[var(--color-novored)] relative inline-block">
              una nueva forma de construir negocios basados en
              evidencia real
            </span>
          </h2>
        </div>
        <p className="text-center text-[rgb(0,0,0)] text-lg md:text-xl max-w-3xl mx-auto font-semibold mb-8">
          ¿Por qué funciona?
        </p>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="group relative rounded-[32px] bg-white border border-[rgb(240,240,240)] p-14 md:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,59,48,0.12)] hover:border-[var(--color-novored)]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-novored)]/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>

              {/* Number Watermark */}
              <div className="absolute top-8 right-8 text-[8rem] leading-none text-[var(--color-novored)]/[0.04] font-semibold select-none group-hover:text-[var(--color-novored)]/[0.08] transition-all duration-700 group-hover:scale-110">
                {benefit.number}
              </div>

              <div className="relative">
                <div className="mb-8">
                  <h3 className="md:text-[2.125rem] mb-5 leading-[1.15] text-[rgb(0,0,0)] tracking-[-0.02em] text-[32px]">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-[rgb(80,80,80)] text-lg md:text-xl leading-[1.65] tracking-[-0.01em]">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-novored)]/0 to-transparent group-hover:via-[var(--color-novored)]/40 transition-all duration-700"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}