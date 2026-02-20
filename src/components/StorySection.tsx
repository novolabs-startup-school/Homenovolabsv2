import { TrendingUp, RefreshCw, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import alexDantartImg from 'figma:asset/3f07be4223d9ce7dfa6569189776843c145ad2e6.png';
import agustinLinenbergImg from 'figma:asset/448de5957c8e3de2ba5ea545a73f73594f625b9d.png';
import felipePoloImg from 'figma:asset/60db0cc5e51ddcee5ad78be880b8a4788f30c383.png';
import felipeMendigurenImg from 'figma:asset/f40324df878115cdfe384597259b5d3c50ef3837.png';
import davidTomasImg from 'figma:asset/6ff65daa96eb467e0006118279be0119b3694ada.png';
import eduardoAmadeoImg from 'figma:asset/732d5d23b5041072312ebb893601e45946567fa6.png';
import juanjoMostazhoImg from 'figma:asset/5432bfd184c55eb64cb2023cc99f80cacdafd3c0.png';
import emilianoChamorroImg from 'figma:asset/91aa5c197bb65af8dc5eec4f5ad9a6c0e9667a6f.png';
import storyImage from 'figma:asset/7a82821f72d7fe62a42c83bb663550feb9c8fdb8.png';
import teamImage from 'figma:asset/60b70d4cf83b25e16329e1ce7dee4741d0b40519.png';
import pivotImage from 'figma:asset/d68718769a5de7e4c6f6d9715d5f65a8e2f034d0.png';

export function StorySection() {
  const mentors = [
    {
      name: 'Alex Dantart',
      role: 'Lanzó 21 empresas al mercado con sus propias manos.',
      experience: '+30 años emprendiendo',
      image: alexDantartImg,
      linkedinUrl: 'https://www.linkedin.com/in/dantart/'
    },
    {
      name: 'Emiliano Chamorro',
      role: 'Escaló su empresa "Instituto Baikal" a 10 países sin inversión.',
      experience: '+25 años emprendiendo',
      image: emilianoChamorroImg,
      linkedinUrl: 'https://www.linkedin.com/in/emiliano-chamorro-51098ab/'
    },
    {
      name: 'Eduardo Amadeo',
      role: 'Gestionó 5 fondos de inversion en startups y emprendedores.',
      experience: '+25 años emprendiendo',
      image: eduardoAmadeoImg,
      linkedinUrl: 'https://www.linkedin.com/in/eamadeo/'
    },
    {
      name: 'Agustín Linenberg',
      role: 'Escaló su empresa "Aerolab" a facturar+20M USD.',
      experience: '+15 años emprendiendo',
      image: agustinLinenbergImg,
      linkedinUrl: 'https://www.linkedin.com/in/agustinlinenberg/'
    },
    {
      name: 'Felipe Mendiguren',
      role: 'Escaló su empresa "Simball" a facturar +25M USD.',
      experience: '+20 años emprendiendo',
      image: felipeMendigurenImg,
      linkedinUrl: 'https://www.linkedin.com/in/felipe-mendiguren-55ba2a8/'
    },
    {
      name: 'Juanjo Mostazo',
      role: 'Escaló su empresa "Homa Games" a facturar +100M USD.',
      experience: '+15 años emprendiendo',
      image: juanjoMostazhoImg,
      linkedinUrl: 'https://www.linkedin.com/in/jjmostazo/'
    },
    {
      name: 'David Tomás',
      role: 'Escaló su empresa "Cyberclick" a facturar +20M USD.',
      experience: '+25 años emprendiendo',
      image: davidTomasImg,
      linkedinUrl: 'https://www.linkedin.com/in/david-tomas/'
    },
    {
      name: 'Felipe Polo',
      role: 'Escaló su empresa "GuideSmiths" y la vendió en 19M USD.',
      experience: '+10 años emprendiendo',
      image: felipePoloImg,
      linkedinUrl: 'https://www.linkedin.com/in/felipepolo/'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[var(--max-width)] mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-20">
          {/* Mobile Title */}
          <h2 className="md:hidden leading-tight mb-6 tracking-[-0.01em]">
            <span className="block text-2xl text-[rgb(0,0,0)] mb-2 text-[20px]">
              No aprendimos esto estudiando.
            </span>
            <span className="block text-3xl text-[var(--color-novored)]">
              Lo aprendimos haciendo.
            </span>
          </h2>
          
          {/* Desktop Title */}
          <h2 className="hidden md:block text-4xl lg:text-[3.5rem] leading-tight mb-6 tracking-[-0.01em] text-[rgb(0,0,0)]">
            No aprendimos esto estudiando.
            <br />
            <span className="text-[var(--color-novored)]">Lo aprendimos haciendo.</span>
          </h2>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-[24px] bg-white border-2 border-[rgb(240,240,240)] p-6 md:p-10 group hover:border-[var(--color-novored)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="mb-4 -mx-6 -mt-6">
                <ImageWithFallback
                  src={storyImage}
                  alt="Crecimiento empresarial"
                  className="w-full h-40 object-cover rounded-t-[20px]"
                />
              </div>
              <h3 className="text-[26px] leading-tight text-[rgb(0,0,0)] mb-4">
                De repartir pedidos en bici para Uber a facturar +$1M USD
              </h3>
              <p className="text-[rgb(80,80,80)] text-base leading-relaxed">
                En 2020 no podíamos pagar el alquiler, en 2023 liderábamos una agencia con 35 personas en el equipo.
              </p>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="mb-6 -mx-10 -mt-10">
                <ImageWithFallback
                  src={storyImage}
                  alt="Crecimiento empresarial"
                  className="w-full h-48 object-cover rounded-t-[20px]"
                />
              </div>
              <h3 className="text-[26px] mb-4 leading-tight text-[rgb(0,0,0)]">
                De hacer Uber Eats a facturar $1M USD
              </h3>
              <p className="text-[rgb(80,80,80)] leading-relaxed text-[16px]">
                En 2020 no podíamos pagar el alquiler, en 2023 liderábamos una agencia con 35 personas en el equipo.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] bg-white border-2 border-[rgb(240,240,240)] p-6 md:p-10 group hover:border-[var(--color-novored)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="mb-4 -mx-6 -mt-6">
                <ImageWithFallback
                  src={pivotImage}
                  alt="Transformación y cambio"
                  className="w-full h-40 object-cover rounded-t-[20px]"
                />
              </div>
              <h3 className="text-[26px] leading-tight text-[rgb(0,0,0)] mb-4">
                Cerramos la Agencia y lanzamos la School
             </h3>
              <p className="text-[rgb(80,80,80)] text-base leading-relaxed">
Pasamos de ser 35 personas en el equipo a sólo 2 (Tomi y Dami) para lanzar la 'Startup School' de Novolabs.              </p>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="mb-6 -mx-10 -mt-10">
                <ImageWithFallback
                  src={pivotImage}
                  alt="Transformación y cambio"
                  className="w-full h-48 object-cover rounded-t-[20px]"
                />
              </div>
              <h3 className="text-[26px] mb-4 leading-tight text-[rgb(0,0,0)]">
                Cerramos la Agencia y lanzamos la School
              </h3>
              <p className="text-[rgb(80,80,80)] leading-relaxed text-[16px]">
                Pasamos de ser 35 personas en el equipo a sólo 2 (Tomi y Dami) para lanzar la 'Startup School' de Novolabs.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] bg-white border-2 border-[rgb(240,240,240)] p-6 md:p-10 group hover:border-[var(--color-novored)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="mb-4 -mx-6 -mt-6">
                <ImageWithFallback
                  src={teamImage}
                  alt="Equipo startup"
                  className="w-full h-40 object-cover rounded-t-[20px]"
                />
              </div>
              <h3 className="text-[26px] leading-tight text-[rgb(0,0,0)] mb-4">
                Escalamos a $500K USD / año con sólo 4 personas
              </h3>
              <p className="text-[rgb(80,80,80)] text-base leading-relaxed">
                +300 emprendedores en 18 países distintos completaron nuestro programa y lanzaron su proyecto.
              </p>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="mb-6 -mx-10 -mt-10">
                <ImageWithFallback
                  src={teamImage}
                  alt="Equipo startup"
                  className="w-full h-48 object-cover rounded-t-[20px]"
                />
              </div>
              <h3 className="text-[26px] mb-4 leading-tight text-[rgb(0,0,0)]">
Escalamos a $500K USD / año con sólo 4 personas
              </h3>
              <p className="text-[rgb(80,80,80)] leading-relaxed text-[16px]">
                +300 emprendedores en 18 países distintos completaron nuestro programa y lanzaron su proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Statement */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-[rgb(80,80,80)] max-w-3xl mx-auto">
            Aprendimos lo que funciona{' '}
            <span className="text-[rgb(0,0,0)] font-semibold">en la calle</span>, no sólo con la teoría.
          </p>
        </div>

        {/* Mentors Section */}
        <div className="py-12">
          <h3 className="text-xl md:text-3xl mb-16 text-center leading-tight text-[rgb(0,0,0)]">
            Y hoy contamos con el apoyo de mentores que ya transformaron sus ideas<br />
            en empresas que facturan millones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-[rgb(245,245,245)] relative">
                  <ImageWithFallback
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-3 right-3 backdrop-blur-md bg-white/80 text-[rgb(40,40,40)] px-3 py-1.5 rounded-full text-[8px] md:text-[10px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/50 bg-[rgba(255,255,255,0.8)]">
                    {mentor.experience}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-semibold text-[rgb(0,0,0)]">
                    {mentor.name}
                  </h4>
                  {mentor.linkedinUrl && (
                    <a 
                      href={mentor.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[rgb(0,0,0)] hover:text-[#0077b5] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-[rgb(120,120,120)] whitespace-pre-line">
                  {mentor.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}