import { Button } from "./Button";
import { Star, Award, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="pt-20 pb-20 md:py-40 relative overflow-hidden bg-[rgb(0,0,0)]"
      aria-labelledby="hero-title"
    >
      {/* Background decorative elements - reduced blur for performance */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-novored)] opacity-[0.02] blur-[80px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-novogreen)] opacity-[0.02] blur-[80px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
        <div className="max-w-[62rem] mx-auto text-center">
          <h1
            id="hero-title"
            className="m-0 mb-8 leading-[1.05] text-[2.75rem] md:text-5xl lg:text-[6rem] tracking-[-0.02em] text-white"
          >
            Lanzá tu startup paso a paso con el{" "}
            <span className="text-[var(--color-novogreen)]">
              Sistema de Validación Paga™
            </span>
          </h1>
          <p className="text-[#b4b4b4] max-w-[48rem] mx-auto mb-10 text-lg md:text-2xl leading-[1.6]">
            Y evita malgastar 12 meses de tu vida (y miles de
            dólares) para lanzar algo que nadie te quiera
            comprar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <Button
              variant="primary"
              href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro"
            >
              Entrenamiento Gratuito
            </Button>
            <Button variant="secondary" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
              Aplicar al Programa
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row flex-wrap pt-8 gap-8 sm:gap-12 items-center justify-center border-t border-white/[0.06]">
            <div className="inline-flex items-center gap-3">
              <div className="text-center sm:text-left">
                <div className="text-white font-semibold text-base">
                  +300 emprendedores
                </div>
                <div className="text-[#b4b4b4] text-sm">
                  completaron nuestro programa
                </div>
              </div>
            </div>
            <div
              className="w-px h-12 bg-white/[0.06] hidden sm:block"
              aria-hidden="true"
            />
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="text-white font-semibold text-base">
                  4.8 en Trustpilot
                </div>
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="4.8 de 5 estrellas"
                >
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#00b67a] text-[#00b67a]"
                      aria-hidden="true"
                    />
                  ))}
                  <div className="relative w-5 h-5">
                    <Star
                      className="w-5 h-5 text-white/20"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "80%" }}
                    >
                      <Star
                        className="w-5 h-5 fill-[#00b67a] text-[#00b67a]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#b4b4b4] text-sm">
                valoraciones verificadas
              </div>
            </div>
            <div
              className="w-px h-12 bg-white/[0.06] hidden sm:block"
              aria-hidden="true"
            />
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#b4b4b4] text-sm">
                tal vez nos viste en...
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/dshP666Q/forbes.png"
                  alt="Forbes"
                  className="h-4 sm:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://i.ibb.co/MyhSG301/clarin.png"
                  alt="Clarín"
                  className="h-4 sm:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://i.ibb.co/fTvW07W/la-nacion.png"
                  alt="La Nación"
                  className="h-4 sm:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://i.ibb.co/KxhFyyDF/iprofesional.png"
                  alt="iProfesional"
                  className="h-4 sm:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}