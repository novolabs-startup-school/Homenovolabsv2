import { Button } from "./Button";
import { X, Check, Minus, Radio } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import novolabsTeam from "figma:asset/437662ccc23415b3cab7efa4dd151815fd59420a.png";

export function ProgramSection() {
  const soloItems = [
    "Adivinás el problema que creés que vale la pena resolver",
    "Adivinás la solución antes de hablar con clientes",
    "Adivinás el precio",
    "No tenés feedback real en el día a día",
    "Te trabás durante semanas sin saber si vas bien",
    "Invertís horas y dinero sin evidencia",
    "Podés construir algo que nadie quiere comprar",
  ];

  const withNovolabsItems = [
    "Validás el problema con entrevistas reales",
    "Diseñás la solución recién después de entender al cliente",
    "Definís una oferta clara y un precio validado",
    "Recibís feedback todas las semanas",
    "Destrabás rápido con mentorías 1:1",
    "Avanzás con foco y entregables concretos",
    "Lanzás más rápido y con mucho menos riesgo",
  ];

  const programIncludes = [
    {
      title: "Metodología paso a paso",
      description:
        "en videos cortos para ejecutar sin perderte",
    },
    {
      title: "Sesiones grupales en vivo",
      description:
        "para avanzar, mostrar tu progreso y recibir feedback",
    },
    {
      title: "Mentorías 1:1",
      description: "para destrabar bloqueos críticos",
    },
    {
      title: "Sistema de Agentes de IA",
      description:
        "para acelerar análisis, decisiones y ejecución",
    },
    {
      title: "Club de Fundadores",
      description:
        "para no emprender solo y sostener el proceso",
    },
  ];

  return (
    <>
      {/* Section 1: Comparison - Black Background */}
      <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
        <div className="max-w-[var(--max-width)] mx-auto px-5">
          {/* Title */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] leading-tight mb-6 tracking-[-0.01em] text-white">
              Emprender solo es muy difícil.
              <br />
              <span className="text-[var(--color-novogreen)]">
                Acompañado es mucho mejor.
              </span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Solo */}
            <div className="rounded-[24px] bg-gradient-to-br from-[rgba(255,59,48,0.04)] to-[rgba(255,59,48,0.01)] border border-[var(--color-novored)]/20 p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-novored)]/15 flex items-center justify-center">
                  <X className="w-7 h-7 text-[var(--color-novored)]" />
                </div>
                <h3 className="text-2xl md:text-[1.75rem] text-white">
                  Si emprendes solo
                </h3>
              </div>
              <ul className="space-y-4">
                {soloItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Minus className="w-5 h-5 text-[var(--color-novored)] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b4b4b4] text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Novolabs */}
            <div className="rounded-[24px] bg-gradient-to-br from-[rgba(198,255,62,0.04)] to-[rgba(198,255,62,0.01)] border border-[var(--color-novogreen)]/20 p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-novogreen)]/15 flex items-center justify-center">
                  <Check className="w-7 h-7 text-[var(--color-novogreen)]" />
                </div>
                <h3 className="text-2xl md:text-[1.75rem] text-white">
                  Con Novolabs
                </h3>
              </div>
              <ul className="space-y-4">
                {withNovolabsItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Wide Image */}
          <div className="max-w-5xl mx-auto">
            <ImageWithFallback
              src={novolabsTeam}
              alt="Programa de acompañamiento"
              className="w-full h-auto max-h-[400px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Program Details - Dark Gray Background */}
      <section className="py-24 md:py-32 bg-[rgb(21,21,21)]">
        <div className="max-w-[var(--max-width)] mx-auto px-5">
          {/* Program Details */}
          <div className="text-center mb-12">
            <p className="text-[var(--color-novogreen)] text-[11px] md:text-base mb-4 uppercase tracking-wide font-bold">
              Programa de Acompañamiento · Novolabs Startup
              School
            </p>
            <h3 className="md:text-4xl lg:text-[3rem] leading-tight mb-10 tracking-[-0.01em] text-white text-[56px]">
              Lanzá tu startup y conseguí tus primeros clientes
              con el{" "}
              <span className="text-[var(--color-novogreen)]">
                Sistema de Validación Paga™
              </span>
            </h3>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Y evitá perder meses de tu vida (y miles de
              dólares) construyendo algo que el mercado nunca
              pidió.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 rounded-full bg-gradient-to-br from-[rgba(198,255,62,0.08)] to-[rgba(198,255,62,0.02)] border border-[var(--color-novogreen)]/30">
                <span className="text-white text-base md:text-lg">
                  Mentoría 1:1 personalizada
                </span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-br from-[rgba(198,255,62,0.08)] to-[rgba(198,255,62,0.02)] border border-[var(--color-novogreen)]/30">
                <span className="text-white text-base md:text-lg">
                  Sesiones grupales en vivo
                </span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-br from-[rgba(198,255,62,0.08)] to-[rgba(198,255,62,0.02)] border border-[var(--color-novogreen)]/30">
                <span className="text-white text-base md:text-lg">
                  16 semanas
                </span>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="rounded-[24px] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[var(--color-border-subtle)] p-10 md:p-14 mb-12">
            <h3 className="text-2xl md:text-3xl mb-10 text-center text-white">
              Qué incluye el Programa:
            </h3>
            <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
              {programIncludes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-novogreen)] flex-shrink-0 mt-3" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      <span className="text-white font-semibold">
                        {item.title}
                      </span>{" "}
                      <span className="text-[#b4b4b4]">
                        {item.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-8">
            <Button
              variant="primary"
              className="mb-6"
              href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7"
            >
              Aplicar al Programa
            </Button>
            <div className="space-y-2">
              <p className="text-white text-lg">
                Inscripciones abiertas. Sólo 20 cupos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}