interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'primary-light' | 'secondary-light';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({
  variant = 'primary',
  href,
  onClick,
  className = '',
  children,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full font-bold transition-all duration-300 cursor-pointer min-h-[44px]';
  
  const variantClasses = {
    'primary': 'bg-[var(--color-novored)] text-white hover:bg-[#ff4d42]',
    'secondary': 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    'primary-light': 'bg-black text-white hover:bg-[rgb(20,20,20)] border-2 border-black hover:border-[rgb(20,20,20)]',
    'secondary-light': 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
  }[variant];

  const content = children;

  // If it's a hash link (internal anchor), handle smooth scroll
  if (href && href.startsWith('#')) {
    return (
      <button 
        onClick={(e) => {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          onClick?.();
        }}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {content}
      </button>
    );
  }

  // External link
  if (href) {
    return (
      <a 
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  // Regular button
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
}