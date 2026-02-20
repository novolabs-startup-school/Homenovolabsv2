import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import imgNovolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import { HeroSection } from './components/HeroSection';
import { IdentificationSection } from './components/IdentificationSection';
import { ParadigmShiftSection } from './components/ParadigmShiftSection';
import { ValidationSystemSection } from './components/ValidationSystemSection';
import { ModulesSection } from './components/ModulesSection';
import { StorySection } from './components/StorySection';
import { BenefitsSection } from './components/BenefitsSection';
import { FreeTrainingSection } from './components/FreeTrainingSection';
import { ProgramSection } from './components/ProgramSection';
import { SocialProofReviewsSection } from './components/SocialProofReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import Prensa from './Prensa';
import Podcast from './Podcast';
import Club from './Club';
import SobreNosotros from './SobreNosotros';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle hash routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/prensa') {
        setCurrentPage('prensa');
      } else if (hash === '#/podcast') {
        setCurrentPage('podcast');
      } else if (hash === '#/club') {
        setCurrentPage('club');
      } else if (hash === '#/sobre-nosotros') {
        setCurrentPage('sobre-nosotros');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // SEO Meta Tags - only for home page
    if (currentPage !== 'home') return;
    
    document.title = 'Novolabs Startup School - Sistema de Validación Paga™';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Lanzá tu startup paso a paso con el Sistema de Validación Paga™. Evita malgastar 12 meses y miles de dólares construyendo algo que nadie quiere comprar. Programa de $2500-3750 USD.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'startup school, validación de startups, emprendimiento, sistema validación paga, MVP, lean startup, novolabs, programa startups');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Novolabs Startup School - Sistema de Validación Paga™');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Lanzá tu startup paso a paso con el Sistema de Validación Paga™. Evita malgastar 12 meses y miles de dólares.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    // Twitter Card Tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    // Structured Data - Course
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Novolabs Startup School - Sistema de Validación Paga™",
      "description": "Programa completo para lanzar tu startup paso a paso con el Sistema de Validación Paga™. Aprende a validar tu idea antes de construir.",
      "provider": {
        "@type": "Organization",
        "name": "Novolabs",
        "url": "https://novolabs.xyz"
      },
      "offers": {
        "@type": "Offer",
        "category": "Paid",
        "priceCurrency": "USD",
        "price": "2500-3750"
      },
      "educationalLevel": "Professional",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "Entrepreneur"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const script = document.querySelector('script[type="application/ld+json"]') || document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    if (!document.querySelector('script[type="application/ld+json"]')) {
      document.head.appendChild(script);
    }
  }, [currentPage]);

  // If prensa page, render it
  if (currentPage === 'prensa') {
    return <Prensa />;
  }

  // If podcast page, render it
  if (currentPage === 'podcast') {
    return <Podcast />;
  }

  // If club page, render it
  if (currentPage === 'club') {
    return <Club />;
  }

  // If sobre-nosotros page, render it
  if (currentPage === 'sobre-nosotros') {
    return <SobreNosotros />;
  }

  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text-main)]">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/90 border-b border-white/[0.02]">
        <div className="max-w-[var(--max-width)] mx-auto px-5 py-3.5 flex items-center justify-between">
          <a 
            href="/" 
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Novolabs - Inicio"
          >
            <img 
              src={imgNovolabsLogo} 
              alt="Novolabs Startup School Logo" 
              className="h-7 md:h-8"
            />
          </a>
          
          <nav className="flex items-center gap-3" aria-label="Navegación principal">
            <button 
              className="hidden md:block px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-bold"
              onClick={() => window.open('https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7', '_blank')}
              aria-label="Aplicar al Programa"
            >
              Aplicar al Programa
            </button>
            <a 
              href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro"
              className="px-5 py-2.5 rounded-full bg-[var(--color-novored)] text-white hover:bg-[#ff4d42] transition-colors text-sm font-bold"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acceder al Entrenamiento Gratuito"
            >
              Entrenamiento Gratuito
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <IdentificationSection />
        <ParadigmShiftSection />
        <ValidationSystemSection />
        <BenefitsSection />
        <StorySection />
        <ProgramSection />
        <ModulesSection />
        <SocialProofReviewsSection />
        <FreeTrainingSection />
        <FAQSection />
        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
}