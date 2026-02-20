import { X, Check, ArrowRight } from "lucide-react";

export function ParadigmShiftSection() {
  return (
    <section className="py-16 md:py-32 bg-[rgb(0,0,0)]" aria-labelledby="paradigm-title">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 id="paradigm-title" className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-6 tracking-[-0.01em] text-white px-2">
            Tus ideas no fracasan por falta de talento.{" "}
            <span className="text-[var(--color-novored)]">
              Fracasan por el orden incorrecto.
            </span>
          </h2>
        </div>

        {/* Traditional Flow */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-2xl mb-8 md:mb-12 text-center text-white">
            Todos empezamos igual:
          </h3>

          {/* Single Card with all steps */}
          <div className="rounded-2xl bg-[rgba(255,59,48,0.04)] border border-[var(--color-novored)]/15 p-6 md:p-10 max-w-6xl mx-auto overflow-x-auto">
            {/* Mobile: Vertical */}
            <div className="flex flex-col md:hidden">
              {[
                "Tenés una idea",
                "La construís",
                "La lanzás",
                "Intentás venderla",
                "Descubrís que nadie la quiere",
              ].map((step, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-novored)]/20 border border-[var(--color-novored)]/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-[#e0e0e0] text-base leading-[1.5]">
                      {step}
                    </span>
                  </div>
                  {index < 4 && (
                    <div className="flex justify-start py-3 pl-2">
                      <ArrowRight className="w-5 h-5 text-[var(--color-novored)]/40 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal */}
            <div className="hidden md:flex items-center justify-between gap-3">
              {[
                "Tenés una idea",
                "La construís",
                "La lanzás",
                "Intentás venderla",
                "Descubrís que nadie la quiere",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-novored)]/20 border border-[var(--color-novored)]/30 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-[#e0e0e0] text-base leading-snug">
                      {step}
                    </span>
                  </div>
                  {index < 4 && (
                    <ArrowRight className="w-4 h-4 text-[var(--color-novored)]/40 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Old Paradigm */}
          <div className="rounded-[20px] md:rounded-[24px] bg-black border border-white/10 p-6 md:p-12 hover:border-[var(--color-novored)]/40 hover:shadow-[0_20px_60px_rgba(255,59,48,0.1)] transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[var(--color-novored)]/10 flex items-center justify-center flex-shrink-0">
                <X
                  className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-novored)]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl md:text-[2rem] text-white leading-tight">
                El problema real
              </h3>
            </div>

            <div className="space-y-4 md:space-y-5 flex-grow">
              <p className="text-[#b4b4b4] text-base md:text-lg leading-[1.6]">
                Esto no es tu culpa. Es el paradigma
                tradicional:{" "}
                <span className="text-[#e0e0e0] font-semibold">
                  crear → lanzar → vender.
                </span>
              </p>

              <p className="text-[#b4b4b4] text-base md:text-lg leading-[1.6]">
                Lanzas una apuesta sin evidencia real y{" "}
                <span className="text-[#e0e0e0] font-semibold">
                  Arriesgas tu tiempo y tu dinero sin sentido.
                </span>
              </p>
            </div>

            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/10">
              <p className="text-[var(--color-novored)] font-semibold text-sm md:text-base">
                Resultado: La idea no funcionó. $15,000+ perdidos + 12 meses
                desperdiciados innecesariamente.
              </p>
            </div>
          </div>

          {/* New Paradigm */}
          <div className="rounded-[20px] md:rounded-[24px] bg-black border border-white/10 p-6 md:p-12 hover:border-[var(--color-novogreen)]/40 hover:shadow-[0_20px_60px_rgba(198,255,62,0.1)] transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[var(--color-novogreen)]/10 flex items-center justify-center flex-shrink-0">
                <Check
                  className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-novogreen)]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl md:text-[2rem] text-white leading-tight">
                Con Novolabs
              </h3>
            </div>

            <div className="space-y-4 md:space-y-5 flex-grow">
              <p className="text-[#b4b4b4] text-base md:text-lg leading-[1.6]">
                Lo que deberías hacer:{" "}
                <span className="text-[#e0e0e0] font-semibold">
                  Validar → Vender → Construir solo si la idea vale la
                  pena.
                </span>
              </p>

              <p className="text-[#b4b4b4] text-base md:text-lg leading-[1.6]">
                Con el{" "}
                <span className="text-[#e0e0e0] font-semibold">
                  Sistema de Validación Paga™
                </span>
                , personas reales{" "}
                <span className="text-[#e0e0e0] font-semibold">
                  te pagan antes de construir
                </span>
                , dándote evidencia real de que tu idea merece la pena.
              </p>
            </div>

            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/10">
              <p className="text-[var(--color-novogreen)] font-semibold text-sm md:text-base">
                Resultado: Sólo invertis tu tiempo y tu dinero cuando conseguís clientes reales para tu idea.
                Cero riesgo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}