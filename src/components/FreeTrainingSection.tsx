import { Button } from "./Button";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import trainingImg from "figma:asset/13404d91066d048300f525c4bfafec1f401c9b8e.png";

export function FreeTrainingSection() {
  const learnings = [
    "El error más caro que comete el 90% de los emprendedores",
    "La nueva forma de emprender basada en evidencia",
    "Cómo descubrir problemas reales sin encuestas trampa",
    "Cómo validar demanda con una oferta irresistible",
    "Cómo construir un MVP con IA y No-Code sin programar",
  ];

  return (
    <section className="py-16 md:py-32 bg-[rgb(250,250,250)]">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h3 className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-8 tracking-[-0.01em] text-[rgb(0,0,0)] px-2">
            ¿No sabés si tu idea de negocios es buena?
            <br />
            <span className="text-[var(--color-novored)]">
              Podes descubrirlo gratis
            </span>
          </h3>
        </div>

        {/* Content Card */}
        <div className="rounded-[20px] md:rounded-[24px] bg-white border-2 border-[rgb(240,240,240)] p-6 md:p-14 max-w-4xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <h3 className="text-xl md:text-3xl mb-8 md:mb-10 text-left text-[rgb(0,0,0)]">
            En este{" "}
            <span className="text-[var(--color-novored)]">
              entrenamiento gratuito
            </span>{" "}
            aprenderás:
          </h3>

          {/* Training Image */}
          <div className="mb-8 md:mb-10 rounded-2xl overflow-hidden flex justify-center">
            <ImageWithFallback
              src={trainingImg}
              alt="Entrenamiento Sistema de Validación Paga"
              className="w-auto max-w-full md:max-w-[450px] h-auto max-h-[300px] md:max-h-[450px] object-contain"
            />
          </div>

          {/* Learnings List */}
          <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
            {learnings.map((learning, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--color-novored)]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[var(--color-novored)]/15 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-novored)]" />
                </div>
                <p className="text-lg text-[rgb(0,0,0)] leading-relaxed">
                  {learning}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="primary-light"
              href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro"
            >
              Acceder Gratis Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}