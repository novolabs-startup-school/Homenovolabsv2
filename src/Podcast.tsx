import imgNovolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgMagaliBajar from 'figma:asset/a7a995632ed24dba886ef007e8d63a8d47e83d3f.png';
import imgVector from 'figma:asset/8646599936dbc0f9dd5b7787fb8065639ee76ef1.png';
import imgNovoTalk01 from 'figma:asset/e5c1c7801e3aadf1f9d551f05a95a62fafadfeb1.png';
import imgNovoTalk02 from 'figma:asset/8c6b0d6ab1d392b882b8ea0a80a4c11397a17356.png';
import imgNovoTalk03 from 'figma:asset/5a08599a67f8b7ff59ae5c971c8eaa478501c110.png';
import imgNovoTalk04 from 'figma:asset/255233e80513ccb295e90a79133d836ed4085659.png';
import imgNovoTalk05 from 'figma:asset/32051dabc704adc84befc30eadd81b58b359d238.png';
import imgNovoTalk06 from 'figma:asset/b148cdb909371010324ef37679acdde32dee13fd.png';
import imgNovoTalk07 from 'figma:asset/b9b4f199cfba701fd6a69678d0674059ca0ac5db.png';
import imgNovoTalk08 from 'figma:asset/c19361f95fb7b0bfeb2957de9c459ee2688b9232.png';
import imgNovoTalk09 from 'figma:asset/dcb1598d0cf20100c8b690c7bb152cf6961555bc.png';
import imgNovoTalk10 from 'figma:asset/239e710df32cb826628ad64a49fca09a5f3b07b6.png';
import imgNovoTalk11 from 'figma:asset/07575b58075ac193165012cd5575b918856372fd.png';
import imgNovoTalk12 from 'figma:asset/2d5da6a7273f679230e3b7cd086bc6a4fc591f38.png';
import imgNovoTalk13 from 'figma:asset/88fbeaf3b4c52a759c10b18d4476aad7307f3840.png';
import imgNovoTalk14 from 'figma:asset/f8ca546f78fa3c1e5accbe11c591b7e243f56208.png';
import imgNovoTalk15 from 'figma:asset/39224fd69a0d86dd60826b3082d2a667007bd0c5.png';
import imgNovoTalk16 from 'figma:asset/180c2b9f60f41591a5fcd4480eabd8f4cc4af460.png';
import imgNovoTalk17 from 'figma:asset/a29fe1fc262457fdef484f148c94b91e2e17b1ca.png';
import imgNovoTalk18 from 'figma:asset/4f357f78d1d29927f0b887b45da286b581fb7ea3.png';
import imgNovoTalk19 from 'figma:asset/28742637cec60c0fa7d4c679e81f6f710aedeb99.png';
import imgNovoTalk20 from 'figma:asset/526f229cac5f28d8b1dd1d3cf72bea77c933fc66.png';
import imgNovoTalk21 from 'figma:asset/b10fd36255c7d2c75404a863283880704fe669a9.png';
import imgNovoTalk22 from 'figma:asset/eb956ddb44b2a684c3648a220ef33a0f1a851846.png';
import imgNovoTalk23 from 'figma:asset/22e367808730c5a2936d1ffa249acb0a47420967.png';
import imgNovoTalk24 from 'figma:asset/af70cd46c490534c2dfb5a4fb6666502f5d67497.png';
import imgNovoTalk25 from 'figma:asset/71a5382d2bce6c8fd90cf703faf477ae2f8604ff.png';
import imgNovoTalk26 from 'figma:asset/d1967e2879d10fb7a850960f90c0413f04acbd85.png';
import imgNovoTalk27 from 'figma:asset/6104ea095926f41eb2cb6bbcfa4206af9ab3ea83.png';
import imgNovoTalk28 from 'figma:asset/1940c3f2c1f749fab93cb015e081055344066e95.png';
import imgNovoTalk29 from 'figma:asset/eb5cb59d7a181ca0d0d4ca9be0bdf17dc439b393.png';
import imgNovoTalk30 from 'figma:asset/fa8ec6b55f7172e79b1a91f3412ac40e1f47d734.png';
import imgNovoTalk31 from 'figma:asset/5f86ab6f45387bb3cc18815892fdc142b2575cc1.png';
import imgNovoTalk32 from 'figma:asset/7ea45ac297d97cf42bbe923caa47aec242caa4a7.png';
import imgNovoTalk33 from 'figma:asset/d1bd12691922a0aba342c5ee05bd71595173303a.png';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Podcast() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    'Emprendimiento',
    'Inversión',
    'Innovación',
    'Crecimiento Personal',
    'Fintech',
    'Inteligencia Artificial',
    'Ventas'
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
    setCurrentPage(1); // Reset to first page when filtering
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setCurrentPage(1); // Reset to first page when clearing filters
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
    console.log('Registered:', email);
  };

  // Data for 33 podcast episodes
  const allEpisodes = [
    {
      id: 1,
      number: 33,
      title: 'De un Local de Sushi a Liderar un Ecosistema Foodtech en Latam',
      guest: 'Uriel Krimer',
      guestRole: 'Co-fundador de Atomic Kitchens',
      duration: '68m',
      category: 'Emprendimiento',
      image: imgNovoTalk33,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=RVo8SWoE1no'
    },
    {
      id: 2,
      number: 32,
      title: 'Cómo prepararte para levantar capital y no morir en el intento',
      guest: 'Cristóbal Perdomo',
      guestRole: 'Co-fundador de Jaguar Ventures',
      duration: '72m',
      category: 'Inversión',
      image: imgNovoTalk32,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=ZGH3cffIPQw'
    },
    {
      id: 3,
      number: 31,
      title: 'De vender mates a lanzar apps virales sin saber programar',
      guest: 'Jonathan Kraayenbrink',
      guestRole: 'Fundador Aiselfi.es',
      duration: '65m',
      category: 'Inteligencia Artificial',
      image: imgNovoTalk31,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=_hCtmCueJDg'
    },
    {
      id: 4,
      number: 30,
      title: 'Cómo crear una comunidad con 20 millones de visitas al mes',
      guest: 'Max Kraszewski',
      guestRole: 'Co-fundador Minimalart',
      duration: '70m',
      category: 'Innovación',
      image: imgNovoTalk30,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=BPEr5ENDIvA'
    },
    {
      id: 5,
      number: 29,
      title: 'Aprendizajes de Fundar y Escalar una Startup en Latam',
      guest: 'Julian Bender',
      guestRole: 'Co-fundador de Selenios.com',
      duration: '63m',
      category: 'Ventas',
      image: imgNovoTalk29,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=hiXuqJCr4eI'
    },
    {
      id: 6,
      number: 28,
      title: 'Cómo es emprender en el mundo crypto desde el 2013',
      guest: 'Manuel Beaudroit',
      guestRole: 'Co-fundador de Belo',
      duration: '67m',
      category: 'Fintech',
      image: imgNovoTalk28,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=O1e9oX7nSEA'
    },
    {
      id: 7,
      number: 27,
      title: 'Cómo escalar 25 años una empresa de marketing digital con David Tomas',
      guest: 'David Tomas',
      guestRole: 'Co-fundador de Cyberclick',
      duration: '75m',
      category: 'Crecimiento Personal',
      image: imgNovoTalk27,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=Y0u7DtV2_cM'
    },
    {
      id: 8,
      number: 26,
      title: '25 años Construyendo el Ecosistema Emprendedor',
      guest: 'Martín Vivas',
      guestRole: 'Co-fundador de BEYONDFUTURE.tech',
      duration: '69m',
      category: 'Innovación',
      image: imgNovoTalk26,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=lrAmPt1-YIY'
    },
    {
      id: 9,
      number: 25,
      title: 'Aprendizajes de +30 años Construyendo e Invirtiendo en Startups',
      guest: 'Alex Dantart',
      guestRole: 'Fundó +20 empresas',
      duration: '78m',
      category: 'Emprendimiento',
      image: imgNovoTalk25,
      bgImage: imgVector,
      url: 'https://youtu.be/aIJfzIlfXJo?si=W9D1GjxLCJRv1D-W'
    },
    {
      id: 10,
      number: 24,
      title: 'Qué Aprendí de Ser Inversor en +40 Empresas con Eduardo Amadeo',
      guest: 'Eduardo Amadeo',
      guestRole: 'Venture Partner Kamay Ventures',
      duration: '71m',
      category: 'Inversión',
      image: imgNovoTalk24,
      bgImage: imgVector,
      url: 'https://youtu.be/92gbD7jxiyo?si=ajO4mh2H2Ao1n-u6'
    },
    {
      id: 11,
      number: 23,
      title: 'Como Emprender y Generar Ventas Aplicando la Empatía',
      guest: 'Juampi Villani',
      guestRole: 'Co-fundador PACS, Aquí Estoy y Brandtrack',
      duration: '66m',
      category: 'Ventas',
      image: imgNovoTalk23,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=fcvhHWslxD4'
    },
    {
      id: 12,
      number: 22,
      title: 'Cómo Fundar una Empresa que Factura 100M USD por Año',
      guest: 'Juanjo Mostazo',
      guestRole: 'Co-fundador Homa Games',
      duration: '73m',
      category: 'Inteligencia Artificial',
      image: imgNovoTalk22,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=3fFr1NcbH3Y'
    },
    {
      id: 13,
      number: 21,
      title: 'Cómo Escalar una Agencia Boutique de LATAM al Mundo',
      guest: 'Agustín Linenberg',
      guestRole: 'Co-fundador Aerolab',
      duration: '68m',
      category: 'Ventas',
      image: imgNovoTalk21,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=0pfjnbFYuXs'
    },
    {
      id: 14,
      number: 20,
      title: 'Cómo Crear tu Estrategia Perfecta de Ventas B2B',
      guest: 'Andrés Bruzzoni',
      guestRole: 'Co-fundador Samu.ai',
      duration: '64m',
      category: 'Ventas',
      image: imgNovoTalk20,
      bgImage: imgVector,
      url: 'https://youtu.be/FyuUJymLSf0?si=-wD2ltZTWw4c0qPr'
    },
    {
      id: 15,
      number: 19,
      title: 'El Grave Error que Arruinó mi Empresa (y Cómo Evitarlo)',
      guest: 'Jonás Mosse',
      guestRole: 'Co-fundador de TREO Lab',
      duration: '59m',
      category: 'Innovación',
      image: imgNovoTalk19,
      bgImage: imgVector,
      url: 'https://youtu.be/Yi1u2bX78ng?si=N2I4XwVxs2P9dMcs'
    },
    {
      id: 16,
      number: 18,
      title: 'Cómo Crear un Fondo de Inversión de Startups en Menos de 1 Año',
      guest: 'Corina Marion',
      guestRole: 'Co-fundadora y Managing Partner de Babasú Ventures',
      duration: '70m',
      category: 'Inversión',
      image: imgNovoTalk18,
      bgImage: imgVector,
      url: 'https://youtu.be/XsAk5wWJBGk?si=HDlfTTFhMmEd4LZ6'
    },
    {
      id: 17,
      number: 17,
      title: 'Cómo Usar la Opinión de tus Clientes para Mejorar tu Negocio',
      guest: 'Paula Riquelme',
      guestRole: 'Co-fundadora de Inpla',
      duration: '62m',
      category: 'Emprendimiento',
      image: imgNovoTalk17,
      bgImage: imgVector,
      url: 'https://youtu.be/dh3fhEKJPXI?si=CS4twVMZ2IsuIlcl'
    },
    {
      id: 18,
      number: 16,
      title: 'De 0 a +700k USD Procesados en 3 Meses con una Fintech',
      guest: 'Agustín Tormakh',
      guestRole: 'Co-fundador de Talo',
      duration: '67m',
      category: 'Fintech',
      image: imgNovoTalk16,
      bgImage: imgVector,
      url: 'https://youtu.be/NgoI1XksGiM?si=QCxdQxtAm1NewUpJ'
    },
    {
      id: 19,
      number: 15,
      title: 'Cómo Desarrollar un Mindset Imparable para Emprender con Jorge Inda',
      guest: 'Jorge Inda',
      guestRole: 'Coach de Empleo',
      duration: '72m',
      category: 'Crecimiento Personal',
      image: imgNovoTalk15,
      bgImage: imgVector,
      url: 'https://youtu.be/G6Vbn82f_Sw?si=40QdYkf9xExopsT0'
    },
    {
      id: 20,
      number: 14,
      title: 'De Estar Endeudado a los 20 Años a Invertir +50M en Startups',
      guest: 'Jorge Dobón',
      guestRole: 'Fundador y Managing Partner de Demium',
      duration: '76m',
      category: 'Inversión',
      image: imgNovoTalk14,
      bgImage: imgVector,
      url: 'https://youtu.be/ZGFpzm1fmfI?si=NDDyc6UGSNzV_IvB'
    },
    {
      id: 21,
      number: 13,
      title: 'De Trabajar 15 Años en Corpo a Emprender',
      guest: 'Leandro Cartelli',
      guestRole: 'Co-fundador de Lana Talent',
      duration: '65m',
      category: 'Emprendimiento',
      image: imgNovoTalk13,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=v10k70A1qZU'
    },
    {
      id: 22,
      number: 12,
      title: 'De Crear un Podcast a Construir un Negocio Online',
      guest: 'Magali Bejar',
      guestRole: 'Fundadora Build With Talent',
      duration: '68m',
      category: 'Crecimiento Personal',
      image: imgNovoTalk12,
      bgImage: imgVector,
      url: 'https://link-al-episodio.com'
    },
    {
      id: 23,
      number: 11,
      title: 'Cómo Fundar y Escalar una Fintech en Latinoamérica',
      guest: 'Simón Bouché',
      guestRole: 'Co-fundador de Takenos',
      duration: '70m',
      category: 'Fintech',
      image: imgNovoTalk11,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=-N74A999hoM'
    },
    {
      id: 24,
      number: 10,
      title: 'De Trabajar en la Corpo a Emprender una Fintech',
      guest: 'Josefina "Fini" Cafferata',
      guestRole: 'Co-fundadora de Manda',
      duration: '63m',
      category: 'Fintech',
      image: imgNovoTalk10,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=AK5LMOh9Sw4'
    },
    {
      id: 25,
      number: 9,
      title: 'Cómo Monetizar tu Pasión con un Negocio Digital',
      guest: 'Franco T. Hernández',
      guestRole: 'Co-fundador de ÉTER y Ex-CPO de Coderhouse',
      duration: '69m',
      category: 'Crecimiento Personal',
      image: imgNovoTalk09,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=9GsjfEMdFpE'
    },
    {
      id: 26,
      number: 8,
      title: '¿Unicornio o Camello? Revaluando el Éxito de una Startup',
      guest: 'Jorge Araujo Muller',
      guestRole: 'Co-fundador de NoBullshitCompany',
      duration: '64m',
      category: 'Emprendimiento',
      image: imgNovoTalk08,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=6nC6xZnoqg8'
    },
    {
      id: 27,
      number: 7,
      title: 'De Fundar Una Empresa En La Universidad A Venderla A La Corpo',
      guest: 'Matías Williams',
      guestRole: 'Co-fundador de Wolox (Adquirida por Accenture)',
      duration: '71m',
      category: 'Emprendimiento',
      image: imgNovoTalk07,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=MiGVgs9Hicg'
    },
    {
      id: 28,
      number: 6,
      title: 'Desafíos de Emigrar y Crear Una Startup de IA',
      guest: 'Gerónimo Marsico',
      guestRole: 'Co-fundador TwinTune AI',
      duration: '66m',
      category: 'Emprendimiento',
      image: imgNovoTalk06,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=ssEWmqke0tw'
    },
    {
      id: 29,
      number: 5,
      title: 'Volver A Emprender Después De Un Exit',
      guest: 'Lautaro Schiaffino y Ezequiel Sculli',
      guestRole: 'Co-fundadores de Darwin AI',
      duration: '73m',
      category: 'Inteligencia Artificial',
      image: imgNovoTalk05,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=8peizdg0Dyg'
    },
    {
      id: 30,
      number: 4,
      title: 'Cómo Fusionar Arte y Ciencia para Crear Productos con Impacto',
      guest: 'Santi Echazú',
      guestRole: 'Co-fundador de Paisanos',
      duration: '68m',
      category: 'Emprendimiento',
      image: imgNovoTalk04,
      bgImage: imgVector,
      url: 'https://www.youtube.com/watch?v=0fXkUmZBFrc'
    },
    {
      id: 31,
      number: 3,
      title: 'Revolucionando las Finanzas Open Source',
      guest: 'Javier Borkenztain',
      guestRole: 'Co-fundador de Fiter',
      duration: '65m',
      category: 'Fintech',
      image: imgNovoTalk03,
      bgImage: imgVector,
      url: 'https://link-al-episodio.com'
    },
    {
      id: 32,
      number: 2,
      title: 'Cómo Facturar los primeros $10,000 MRR en tu SaaS',
      guest: 'Francisco Roig',
      guestRole: 'Co-fundador de TuGerente',
      duration: '72m',
      category: 'Emprendimiento',
      image: imgNovoTalk02,
      bgImage: imgVector,
      url: 'https://youtu.be/TUmFkjAwk9g?si=_rshAv_R1XH5Ojjr'
    },
    {
      id: 33,
      number: 1,
      title: 'Cómo lanzar startups rentables bootstrappeadas',
      guest: 'Lucas Lopatin',
      guestRole: 'Fundador de Indie Build',
      duration: '69m',
      category: 'Emprendimiento',
      image: imgNovoTalk01,
      bgImage: imgVector,
      url: 'https://youtu.be/PTWjk3taIvU?si=rpEmcIQKU2p9E0TY'
    }
  ];

  // Filter episodes based on selected filters
  const filteredEpisodes = selectedFilters.length > 0
    ? allEpisodes.filter(episode => selectedFilters.includes(episode.category))
    : allEpisodes;

  // Pagination logic
  const EPISODES_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredEpisodes.length / EPISODES_PER_PAGE);
  const startIndex = (currentPage - 1) * EPISODES_PER_PAGE;
  const endIndex = startIndex + EPISODES_PER_PAGE;
  const currentEpisodes = filteredEpisodes.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to episodes section
    document.getElementById('episodios')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show current page with 2 pages before and after
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);
      
      // Adjust if at the beginning
      if (currentPage <= 3) {
        endPage = maxPagesToShow;
      }
      
      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxPagesToShow + 1;
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text-main)]">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/90 border-b border-white/[0.02]">
        <div className="max-w-[var(--max-width)] mx-auto px-5 py-3.5 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
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
        {/* Hero Section */}
        <section id="episodios" className="py-16 md:py-32 bg-[rgb(0,0,0)]">
          <div className="max-w-[var(--max-width)] mx-auto px-6">
            {/* Filter Section */}
              <div className="max-w-[var(--max-width)] mx-auto px-0">
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <h1 className="text-white mb-6 font-['Geist']">
                <span className="block text-[2rem] md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                  Aprende directo de los mejores
                </span>
              </h1>
              <p className="text-base md:text-xl text-white/60 leading-[1.6] mb-12">
                Las NovoTalks son un espacio diseñado para compartir los errores y aprendizajes que ayudaron a grandes emprendedores a ir de 0 a 1 y convertirse en los referentes que hoy son dentro del ecosistema.
              </p>

            </div>
            </div>
         
              
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-4 md:px-5 py-2 text-sm md:text-base rounded-full border transition-all ${
                      selectedFilters.includes(filter)
                        ? 'bg-white/10 border-white text-white'
                        : 'border-white/50 text-white/50 hover:border-white/70 hover:text-white/70'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
                {selectedFilters.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="p-2.5 md:p-3 rounded-full bg-[rgb(68,68,68)] hover:bg-[rgb(85,85,85)] transition-colors"
                    aria-label="Limpiar filtros"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                )}
              </div>
           

            {/* Episodes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {currentEpisodes.map((episode) => (
                <div key={episode.id}>
                  {/* Episode Card */}
                  <a
                    href={episode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-[rgb(20,20,20)] border border-white/10 hover:border-white/20 transition-all group cursor-pointer h-[340px] md:h-[360px] block"
                  >
                    {/* Background with gradient overlay */}
                    <div className="absolute inset-0">
                      {/* Guest Image as Background */}
                      <img 
                        src={episode.image} 
                        alt={episode.guest}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Dark gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                      <div className="space-y-4 md:space-y-6">
                        <span className="inline-block text-lg md:text-xl text-[var(--color-novoverde)] uppercase font-bold tracking-tight font-normal not-italic no-underline">
                          NovoTalk #{episode.number}
                        </span>
                        <h3 className="text-[1.5rem] md:text-[32px] text-white leading-tight tracking-tight pr-8 md:pr-12 font-bold font-['Geist']">
                          {episode.title}
                        </h3>
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <p className="text-base md:text-lg text-white/80">
                          Con <span className="font-bold text-white">{episode.guest}</span>
                        </p>
                        <p className="text-sm md:text-base text-white/50">
                          {episode.guestRole}
                        </p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-5 md:top-6 right-5 md:right-6">
                      <span className="px-2.5 md:px-3 py-1.5 bg-[#c6ff3e] text-black text-xs md:text-sm font-bold rounded-full">
                        {episode.category}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <button 
                className="p-2.5 md:p-3 rounded-full bg-[rgb(49,49,49)] hover:bg-[rgb(68,68,68)] transition-colors rotate-180"
                aria-label="Página anterior"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              
              {getPageNumbers().map(page => (
                <button
                  key={page}
                  className={`w-10 h-10 md:w-12 md:h-12 text-sm md:text-base rounded-full flex items-center justify-center ${
                    page === currentPage ? 'bg-[var(--color-novored)] text-white' : 'text-[rgb(66,66,66)] hover:text-white transition-colors'
                  }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}
              
              <button 
                className="p-2.5 md:p-3 rounded-full bg-[rgb(49,49,49)] hover:bg-[rgb(68,68,68)] transition-colors"
                aria-label="Página siguiente"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}