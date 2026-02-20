import { Button } from './Button';

export function ClosingSection() {
  return (
    <section className="py-20 md:py-40 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-novored)] opacity-[0.03] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgb(0,0,0)] opacity-[0.02] blur-[120px] rounded-full" />
      
      <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
        <div className="max-w-[56rem] mx-auto text-center">
          {/* Title */}
          <h2 className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-6 md:mb-8 tracking-[-0.01em] text-[rgb(0,0,0)] px-2">
            No fracasa quien lo intenta.
            <br />
            <span className="text-[var(--color-novored)]">Solo quien construye sin validar.</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-[rgb(80,80,80)] text-base md:text-2xl mb-10 md:mb-14 leading-[1.6]">
            Emprendé rodeado de mentores expertos con años de experiencia lanzando empresas. Dejá de improvisar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center justify-center">
            <Button variant="primary-light" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
              Aplicar al Programa
            </Button>
            <Button variant="secondary-light" href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro">
              Acceder al Entrenamiento Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}