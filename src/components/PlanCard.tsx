interface PlanCardProps {
  step: string;
  title: string;
  description: string;
}

export function PlanCard({ step, title, description }: PlanCardProps) {
  return (
    <div className="group rounded-[var(--radius-lg)] bg-gradient-to-br from-[#1a1a1a] to-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-8 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-xl)] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-novored)] opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500" />
      <div className="uppercase tracking-[0.16em] text-[var(--color-novored)] mb-4 text-xs font-bold">
        {step}
      </div>
      <h3 className="m-0 mb-4 text-xl md:text-2xl leading-tight">
        {title}
      </h3>
      <p className="text-[var(--color-text-muted)] leading-[1.6] m-0 text-base">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-novored)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}