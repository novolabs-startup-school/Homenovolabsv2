import { MessageCircle } from 'lucide-react';

export function WhatsAppBanner() {
  return (
    <a
      href="https://wa.me/5491163544698"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-8 rounded-[22px] bg-[#1a1a1a] border border-white/10 p-6 md:p-8 transition-all duration-300 hover:border-white/20 group"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-white mb-1 text-xl md:text-2xl">
            ¿Tienes otra pregunta?
          </h3>
        
        </div>
        <div className="hidden md:block flex-shrink-0">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors">
            <path d="M15 10L25 20L15 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <div className="rounded-full bg-[#25D366] px-4 md:px-6 py-3 md:py-3.5 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <span className="text-white font-bold text-sm md:text-base whitespace-nowrap">Abrir WhatsApp</span>
          </div>
        </div>
      </div>
    </a>
  );
}