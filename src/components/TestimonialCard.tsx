interface TestimonialCardProps {
  name: string;
  rating?: number;
  quote: string;
}

export function TestimonialCard({ name, rating = 5, quote }: TestimonialCardProps) {
  return (
    <article className="group bg-gradient-to-br from-[#1a1a1a] to-[var(--color-bg-card)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-6 text-[var(--color-text-muted)] shadow-[var(--shadow-subtle)] hover:shadow-xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[120px] leading-none text-white/5 font-serif select-none">"</div>
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div className="text-[var(--color-text-main)] font-semibold text-base">
          {name}
        </div>
        <div className="text-[var(--color-novogreen)] text-base">
          {'★'.repeat(rating)}
        </div>
      </div>
      <div className="relative z-10 leading-relaxed">
        "{quote}"
      </div>
    </article>
  );
}