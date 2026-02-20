import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export function FAQItem({ question, answer, isLast = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!isLast ? 'border-b border-white/[0.04]' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-[16px_4px] flex items-center justify-between text-left hover:text-[var(--color-novogreen)] transition-colors group"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-novogreen)] transition-all duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 px-1 text-[var(--color-text-muted)] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}