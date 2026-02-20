interface TimelineCardProps {
  label: string;
  title: string;
  description: string;
}

export function TimelineCard({ label, title, description }: TimelineCardProps) {
  return (
    <div className="group bg-[var(--color-bg-card-soft)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-6 hover:bg-[#1a1a1a] hover:border-[var(--color-novogreen)]/30 transition-all duration-300 hover:scale-105 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--color-novogreen)] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500" />
      <div className="text-[var(--color-novogreen)] uppercase tracking-[0.18em] mb-3 text-xs font-bold flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--color-novogreen)] animate-[pulse_2s_ease-in-out_infinite]" />
        {label}
      </div>
      <div className="font-semibold mb-2 text-base md:text-lg">
        {title}
      </div>
      <div className="text-[var(--color-text-muted)] text-sm leading-relaxed">
        {description}
      </div>
    </div>
  );
}