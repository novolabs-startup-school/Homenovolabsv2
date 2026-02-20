import { Button } from './Button';
import imgCourse from 'figma:asset/f7100c08154729b7852f3d5c2850f15a6084a476.png';

interface CTASectionProps {
  title: string | React.ReactNode;
  subtitle: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryCTAHref?: string;
  secondaryCTAHref?: string;
}

export function CTASection({ title, subtitle, primaryCTA, secondaryCTA, primaryCTAHref, secondaryCTAHref }: CTASectionProps) {
  return (
    <div className="group bg-[radial-gradient(circle_at_top_left,#1a1a1a_0,#050505_58%)] rounded-[32px] p-10 border-2 border-white/[0.08] flex flex-col gap-6 shadow-[var(--shadow-xl)] hover:shadow-[0_30px_60px_rgba(255,59,48,0.15)] transition-all duration-500 hover:border-white/20 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[var(--color-novored)] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
      
      <div className="relative z-10 w-full">
        <div className="mb-3 text-xl md:text-2xl font-semibold leading-tight">
          {title}
        </div>
        <div className="text-[var(--color-text-muted)] mt-2 text-base hidden md:block">
          {subtitle}
        </div>
      </div>
      
      <img 
        src={imgCourse} 
        alt="Curso Sistema de Validación Paga"
        className="relative z-10 w-full rounded-2xl"
      />
      
      <div className="flex flex-col md:flex-row gap-3 relative z-10 w-full">
        {primaryCTA && <Button variant="primary" className="flex-1" href={primaryCTAHref}>{primaryCTA}</Button>}
        <Button variant="secondary" className="flex-1">Agendar Entrevista de Inscripción</Button>
      </div>
      
      <div className="relative z-10 flex justify-center">
        <div className="inline-flex items-center gap-2.5 rounded-[var(--radius-full)] px-4 py-2.5 backdrop-blur-sm bg-[rgba(198,255,62,0)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-novogreen)] shadow-[0_0_12px_rgba(198,255,62,0.9)] animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="font-medium text-[13px]">Próxima Edición inicia el 12 de Enero</span>
        </div>
      </div>
    </div>
  );
}