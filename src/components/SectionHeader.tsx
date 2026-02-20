import { BeforeAfterSlider } from './BeforeAfterSlider';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  maxWidth?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function SectionHeader({ 
  kicker, 
  title, 
  description, 
  maxWidth = '640px',
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel
}: SectionHeaderProps) {
  return (
    <div className="mb-8 animate-[slideInUp_0.6s_ease-out]">
      <div style={{ maxWidth }}>
        {kicker && (
          <div className="uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4 text-sm font-semibold flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-[var(--color-novored)] to-transparent" />
            {kicker}
          </div>
        )}
        <h2 
          className="m-0 mb-5 text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.1]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className="text-[var(--color-text-muted)] leading-[1.7] text-lg">
            {description}
          </p>
        )}
      </div>
      
      {beforeImage && afterImage && (
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
        />
      )}
    </div>
  );
}