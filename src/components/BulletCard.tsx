interface BulletCardProps {
  title: string;
  description: string;
}

export function BulletCard({ title, description }: BulletCardProps) {
  return (
    <div className="group rounded-[var(--radius-md)] bg-gradient-to-br from-[#151515] to-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-6 text-[var(--color-text-muted)] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <strong className="text-[var(--color-text-main)] text-base md:text-lg block mb-2 relative z-10">{title}</strong>
      <span className="relative z-10 leading-relaxed text-sm md:text-base">{description}</span>
    </div>
  );
}