interface VideoCardProps {
  category: string;
  name: string;
  quote: string;
}

export function VideoCard({ category, name, quote }: VideoCardProps) {
  return (
    <article className="group relative rounded-[24px] overflow-hidden bg-[radial-gradient(circle_at_top,#283116_0,#050505_60%)] border-2 border-[rgba(198,255,62,0.4)] p-6 shadow-[var(--shadow-soft)] hover:shadow-[0_30px_60px_rgba(198,255,62,0.25)] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
      <div className="absolute inset-0 opacity-20 mix-blend-lighten bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4)_0,transparent_60%)] group-hover:opacity-30 transition-opacity duration-500" />
      <div className="text-[var(--color-text-muted)] mb-6 relative z-[2] text-sm">
        {category} · <span className="text-white font-medium">{name}</span>
      </div>
      <div className="w-[56px] h-[56px] rounded-full border-2 border-[var(--color-novogreen)] inline-flex items-center justify-center bg-black/70 text-[var(--color-novogreen)] mb-5 shadow-[0_0_30px_rgba(198,255,62,0.8)] group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
        <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
      <div className="text-[#f5f5f5] text-base leading-relaxed relative z-[2]">
        "{quote}"
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-novogreen)] via-[var(--color-novogreen)]/50 to-transparent" />
    </article>
  );
}