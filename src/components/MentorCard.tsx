interface MentorCardProps {
  name: string;
  title: string;
  imageUrl: string;
  badge?: string;
  linkedinUrl?: string;
}

export function MentorCard({
  name,
  title,
  imageUrl,
  badge,
  linkedinUrl
}: MentorCardProps) {
  return (
    <div className="group">
      <div className="rounded-[18px] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-4 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="aspect-square rounded-[12px] overflow-hidden mb-4 bg-[#0a0a0a] relative">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          {badge && (
            <div className="absolute top-3 left-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm border border-white/10 text-white">
                {badge}
              </span>
            </div>
          )}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="font-semibold">{name}</div>
            {linkedinUrl && (
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(255,255,255)] hover:text-[#004182] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">{title}</div>
        </div>
      </div>
    </div>
  );
}