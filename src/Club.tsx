import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Star } from 'lucide-react';
import imgNovolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import img202305811 from 'figma:asset/a96d0f36b58364b6582064c27aef65d9cab2c977.png';
import imgSncupBanner2 from 'figma:asset/be6d5fe0c31e5d6e9dc385a8df15400bdfdafd6e.png';
import imgImage650 from 'figma:asset/2c95f0e073efe0fa2b7a3c3b72ab218df699512b.png';
import imgImage205 from 'figma:asset/cc82d8708ae7afac3f47bfc68b4a511ca685e300.png';
import imgNotionSymbol1 from 'figma:asset/beb01cedb6cbc5d3f137597f6d822db747796edc.png';
import imgMicrosoftAzureLogo1 from 'figma:asset/c558cb0996f41776c6bc860e4ae53457761ddb71.png';
import img1CzqOmYaaNDhd6RTi4VtsuQ1 from 'figma:asset/8b565394c1c343a58a4d646b28dd8cb688768ea9.png';
import imgImage634 from 'figma:asset/cab350a7cb1eb330496f7d0b1fc6c4b378b520c1.png';
import imgImage633 from 'figma:asset/c57aa088a3fc03561f8461f48c985e100047aefc.png';
import linkedinLogoReviews from 'figma:asset/929c7bfc3dfef4603d898d2dda9e0ef1cc825255.png';
import diegoAkermanAvatar from 'figma:asset/de04e846de2141c76b2da2477fc3c6edd80ab0b0.png';
import magdalenaLaplacetteAvatar from 'figma:asset/f0a201ef318e2a92d8c9729ce0676bcf881850b3.png';
import nahuelTuranoAvatar from 'figma:asset/b826307c1178bb26d738d1a5abc920cc1c3d2fba.png';
import svgPaths from './imports/svg-3vwh5r6m2x';
import imgHeroBackground from 'figma:asset/08f9c6670a5784a76a503b63a48d2163238417ae.png';
import imgMasterclass from 'figma:asset/35e460a893f44c9775a827ad8046979965ecd436.png';
import imgNetworking1 from 'figma:asset/d68718769a5de7e4c6f6d9715d5f65a8e2f034d0.png';
import imgNetworking2 from 'figma:asset/057154492f255acb1f123ff8f62da81effc892df.png';

const imgHeroBackgroundOld = 'https://images.unsplash.com/photo-1643290274113-1ff22efe2ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBhdmF0YXJzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzEwNTU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export default function Club() {
  const stats = [
    { value: '300+', label: 'Miembros Activos' },
    { value: '200%', label: 'Crecimiento anual' },
    { value: '18', label: 'Países con miembros activos' },
    { value: '150+', label: 'Startups activas' }
  ];

  const benefits = [
    { logo: imgNotionSymbol1, name: 'Notion' },
    { logo: imgMicrosoftAzureLogo1, name: 'Microsoft Azure' },
    { logo: img1CzqOmYaaNDhd6RTi4VtsuQ1, name: 'Stripe' },
    { logo: imgImage634, name: 'Webflow' },
    { logo: imgImage633, name: 'Make' }
  ];

  const testimonials = [
    {
      name: 'Diego Akerman',
      role: 'Argentina',
      text: 'Novolabs es la mejor forma de entrar al mundo emprendedor. La experiencia es realmente memorable, no sólo por lo que aprendés, sino también por sentirte parte de una familia que quiere que te vaya bien. Me ayudaron a enfocarme en lo importante, a validar mis ideas, a construir sobre bases sólidas y a avanzar!',
      avatar: diegoAkermanAvatar
    },
    {
      name: 'Magdalena Laplacette',
      role: 'Uruguay',
      text: 'Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiándote a ir por todo.',
      avatar: magdalenaLaplacetteAvatar
    },
    {
      name: 'Nahuel Turano',
      role: 'Chile',
      text: ' Hoy después de 6 meses de terminar el programa levantamos inversión y ya tenemos más de 15 clientes. Lo mejor que pueden hacer en una etapa temprana, llegué sin clientes, nos ayudaron a pivotear. No lo duden, aprenden habilidades que les quedan para siempre y les allanan el camino.',
      avatar: nahuelTuranoAvatar
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/90 border-b border-white/[0.02]">
        <div className="max-w-[var(--max-width)] mx-auto px-5 py-3.5 flex items-center justify-between">
          <a 
            href="#/" 
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
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
              className="hidden sm:block px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-bold"
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

      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[600px] lg:h-[810px] overflow-hidden bg-white">
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-[768px] px-4 md:px-6 py-8 md:py-10">
            <h1 className="text-black mb-6 md:mb-6">
              <span className="block text-[2.5rem] md:text-7xl lg:text-[112px] leading-[1] md:leading-[0.9] tracking-tight font-bold font-normal font-['Geist']">
                Club de Fundadores,
                <br />
                alumní exclusivo
              </span>
            </h1>
            <p className="text-black text-base md:text-lg leading-[1.6] mb-8 max-w-[566px] mx-auto">
              Donde podes conectar con emprendedores e inversores de todo LATAM y España para llevar tu proyecto al siguiente nivel.
            </p>
            <Button variant="primary" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
              Aplicar al Programa
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[rgb(20,20,20)] py-16 md:py-28">
        <div className="max-w-[var(--max-width)] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-white text-2xl md:text-[32px] leading-tight mb-8">
                  Accede a una comunidad exclusiva y lanza tu proyecto rodeado de emprendedores e inversores con la misma filosofía:{' '}
                  <span className="font-bold">Construir.</span>
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-white text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </p>
                    <p className="text-white/70 text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] md:h-[540px] rounded-tl-[48px] overflow-hidden">
              <img 
                src={imgSncupBanner2} 
                alt="Comunidad Novolabs"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Eventos de Networking */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-5 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-black text-3xl md:text-[40px] font-bold mb-6">
              Eventos de networking
            </h2>
            <p className="text-black/70 text-xl md:text-[22px] max-w-2xl mx-auto">
              Para que aprendas directo de emprendedores que ya pasaron por lo que vos estás pasando.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[300px] rounded-[24px] overflow-hidden">
              <img 
                src={imgNetworking1} 
                alt="Evento de networking 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[300px] rounded-[24px] overflow-hidden">
              <img 
                src={imgImage650} 
                alt="Evento de networking 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[300px] rounded-[24px] overflow-hidden">
              <img 
                src={imgNetworking2} 
                alt="Evento de networking 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Masterclass & Sesiones */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Masterclass Card */}
            <div className="bg-[rgb(249,249,249)] rounded-[32px] p-12 flex flex-col items-center">
              <div className="h-[349px] w-full rounded-[16px] overflow-hidden mb-8">
                <img 
                  src={imgMasterclass} 
                  alt="Masterclass en vivo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black text-[32px] font-bold mb-4 text-center">
                Masterclass en vivo
              </h3>
              <p className="text-black/70 text-[22px] text-center">
                Inspírate con historias reales de emprendedores exitosos gracias a nuestras masterclass en vivo
              </p>
            </div>

            {/* Sesiones en Grupo Card */}
            <div className="bg-[rgb(20,20,20)] rounded-[32px] p-12 flex flex-col items-center">
              <div className="h-[349px] w-full rounded-[20px] overflow-hidden mb-8">
                <img 
                  src={imgImage205} 
                  alt="Sesiones en grupo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-[32px] font-bold mb-4 text-center">
                Sesiones en grupo
              </h3>
              <p className="text-white/70 text-[22px] text-center">
                Pensadas para que pidas ayuda o feedback a otros emprendedores para mejorar tu startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-5 md:px-16">
          <div className="bg-[#f9f9f9] rounded-[32px] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between pl-8 lg:pl-24 pr-0 py-16 lg:py-16">
              {/* Left Column - Text */}
              <div className="w-full lg:w-[636px] mb-12 lg:mb-0 px-4 lg:px-0">
                <h2 className="text-black text-3xl md:text-[40px] font-bold mb-6 leading-[1.2]">
                  Acceso a +5.000 USD en beneficios exclusivos
                </h2>
                <p className="text-black/70 text-xl md:text-[22px] leading-[1.5]">
                  Descuentos en los mejores servicios y herramientas para impulsar tu startup sin gastar dinero.
                </p>
              </div>

              {/* Right Column - Benefits Visualization */}
              <div className="relative w-full lg:w-auto flex items-center justify-center lg:justify-end pr-8 lg:pr-0">
                <div className="relative" style={{ width: '547px', height: '368px' }}>
                  {/* Vector Lines */}
                  <div className="absolute" style={{ left: '0', top: '32px', width: '547px', height: '305.5px' }}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 547.005 305.5">
                      <g>
                        <path d={svgPaths.p26607700} stroke="#C1C7D0" strokeWidth="1.5" />
                        <path d={svgPaths.pc4fd880} stroke="#C1C7D0" strokeWidth="1.5" />
                        <path d={svgPaths.p1c64f600} stroke="#C1C7D0" strokeWidth="1.5" />
                        <path d={svgPaths.p20514ca0} stroke="#C1C7D0" strokeWidth="1.5" />
                        <path d={svgPaths.p3f1af780} stroke="#C1C7D0" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>

                  {/* Logo Squares - Positioned Absolutely */}
                  {/* AWS */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '0', top: '0', width: '64px', height: '64px' }}>
                    <svg className="w-8 h-5" fill="none" viewBox="0 0 32 19.0881">
                      <path d={svgPaths.p349fe140} fill="#252F3E" />
                      <path clipRule="evenodd" d={svgPaths.p5e49da0} fill="#FF9900" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p12fe5c00} fill="#FF9900" fillRule="evenodd" />
                    </svg>
                  </div>

                  {/* Notion */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '0', top: '76px', width: '64px', height: '64px' }}>
                    <img src={imgNotionSymbol1} alt="Notion" className="h-8 w-8 object-contain" />
                  </div>

                  {/* Dropbox */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '76px', top: '76px', width: '64px', height: '64px' }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 68 68">
                      <rect fill="white" height="64" rx="16" width="64" x="2" y="1" />
                      <path clipRule="evenodd" d={svgPaths.p14452a00} fill="#146EF5" fillRule="evenodd" />
                    </svg>
                  </div>

                  {/* Azure */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '0', top: '228px', width: '64px', height: '64px' }}>
                    <img src={imgMicrosoftAzureLogo1} alt="Azure" className="h-8 object-contain" />
                  </div>

                  {/* Stripe */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '0', top: '152px', width: '64px', height: '64px' }}>
                    <img src={img1CzqOmYaaNDhd6RTi4VtsuQ1} alt="Stripe" className="h-7 object-contain" />
                  </div>

                  {/* Webflow */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '76px', top: '228px', width: '64px', height: '64px' }}>
                    <img src={imgImage634} alt="Webflow" className="h-8 object-contain" />
                  </div>

                  {/* Adalo */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '76px', top: '152px', width: '64px', height: '64px' }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 32.711 32.0395">
                      <path d={svgPaths.p1f4bea00} fill="#3A3A3A" />
                      <path clipRule="evenodd" d={svgPaths.p257de180} fill="#C4C4C4" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p2b98ab00} fill="#3A3A3A" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p353dab80} fill="#3A3A3A" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p3b074800} fill="#3A3A3A" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p15e25100} fill="#3A3A3A" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.pfb10800} fill="#00B3A2" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p3b6eef00} fill="#F94929" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p932c700} fill="#FFC300" fillRule="evenodd" />
                    </svg>
                  </div>

                  {/* Bubble */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '76px', top: '152px', width: '64px', height: '64px' }}>
                    <svg className="w-8 h-9" fill="none" viewBox="0 0 29.3859 32">
                      <path d={svgPaths.p1e875700} fill="#262626" />
                      <path d={svgPaths.p16d37200} fill="#0000FF" />
                    </svg>
                  </div>

                  {/* Make */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '152px', top: '152px', width: '64px', height: '64px' }}>
                    <img src={imgImage633} alt="Make" className="h-10 object-contain" />
                  </div>

                  {/* Make (bottom) */}
                  <div className="absolute bg-white rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-center" style={{ left: '0', top: '304px', width: '64px', height: '64px' }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 28.4444 28.4444">
                      <path d={svgPaths.p3044fb00} fill="#6D00CC" />
                      <path d={svgPaths.p2d76b440} fill="white" />
                    </svg>
                  </div>

                  {/* Novolabs Circle - Center Right */}
                  <div className="absolute" style={{ left: '340px', top: '144px', width: '80px', height: '80px' }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 84 84">
                      <circle cx="42" cy="41" fill="black" r="40" />
                      <g>
                        <path d={svgPaths.pb789680} fill="white" />
                        <path d={svgPaths.pccfd500} fill="#FA1C38" />
                        <path d={svgPaths.pc9a8c80} fill="#FA1C38" />
                        <path d={svgPaths.p36ba4680} fill="#FA1C38" />
                        <path d={svgPaths.p36f1880} fill="#FA1C38" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 md:py-28 bg-[rgb(0,0,0)]">
        <div className="max-w-[var(--max-width)] mx-auto px-5 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-[40px] font-bold mb-6">
              Testimonios de miembros
            </h2>
            <p className="text-white/70 text-xl md:text-[22px] max-w-2xl mx-auto">
              Conoce las experiencias de emprendedores que forman parte del club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="rounded-3xl bg-white/5 border-2 border-white/10 p-8 hover:border-white/20 hover:shadow-[0_12px_32px_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                {/* Profile Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border-2 border-white/10 flex-shrink-0">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <img src={linkedinLogoReviews} alt="LinkedIn" className="w-6 h-6 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0" />
                </div>
                
                {/* Review Text */}
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-novored)] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgb(0,0,0)] opacity-[0.02] blur-[120px] rounded-full" />
        
        <div className="max-w-[var(--max-width)] mx-auto px-5 relative z-10">
          <div className="max-w-[56rem] mx-auto text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] leading-tight mb-8 tracking-[-0.01em] text-[rgb(0,0,0)]">
              No fracasa quien lo intenta.
              <br />
              <span className="text-[var(--color-novored)]">Solo quien construye sin validar.</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-[rgb(80,80,80)] text-xl md:text-2xl mb-14">
              Emprendé rodeado de mentores expertos con años de experiencia lanzando empresas. Dejá de improvisar.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5 items-center justify-center">
              <Button variant="primary-light" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
                Aplicar al Programa
              </Button>
              <Button variant="secondary-light" href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro">
                Acceder al Entrenamiento Gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}