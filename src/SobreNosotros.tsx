import { Footer } from './components/Footer';
import imgNovolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import imgTomasBercun from 'figma:asset/ed7c8c882e6b0e818165c9f9ef785e61b6886603.png';
import imgDamianStanfoni from 'figma:asset/90a90212a9295ec8b59b0858f46399a449ccaad8.png';
import imgFirmaTomasVolonte from 'figma:asset/1abd99c93961ef4809ed56ca2fe911719b19c32b.png';
import imgFirmaDamianSanchez from 'figma:asset/4c753cab77ac2c806182c7d1da4e61dc3792df75.png';

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
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

      {/* Main Content */}
      <main>
        {/* Hero Section - Dark Background */}
        <section className="bg-[rgb(0,0,0)] py-20 md:py-28 lg:py-36">
          <div className="max-w-[800px] mx-auto px-5 md:px-8 text-center">
            <p className="text-[var(--color-novogreen)] text-xs md:text-sm uppercase tracking-wider mb-6">
              SOBRE NOVOLABS
            </p>
            <h1 className="text-white text-[2rem] md:text-4xl lg:text-5xl mb-8 leading-[1.1] md:leading-tight">
              No somos 'otra escuela más' de negocios
            </h1>
            <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Consolidamos la experiencia de los emprendedores más destacados de habla hispana y transformamos el caos en orden a través de nuestra metodología para allanarle el camino a los que están comenzando.
              </p>
              <p>
                Nadie nace siendo un experto. Pero aquí aprenderás directo de ellos.
              </p>
            </div>
          </div>
        </section>

        {/* Press Section - Light Background */}
        <section className="bg-[rgb(0,0,0)] py-8 md:py-12 lg:py-16 border-b border-black/5">
          <div className="max-w-[800px] mx-auto px-5 md:px-8">
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <div className="text-[#b4b4b4] text-xs md:text-sm">
                tal vez nos viste en...
              </div>
              <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
                <img
                  src="https://i.ibb.co/dshP666Q/forbes.png"
                  alt="Forbes"
                  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://i.ibb.co/MyhSG301/clarin.png"
                  alt="Clarín"
                  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://i.ibb.co/fTvW07W/la-nacion.png"
                  alt="La Nación"
                  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://i.ibb.co/KxhFyyDF/iprofesional.png"
                  alt="iProfesional"
                  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Letter/Card Section */}
        <section className="bg-[#fafafa] py-12 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-8">
            {/* White Container - Letter Format */}
            <article className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
              
              {/* Content Flow - Questions and Answers */}
              <div className="space-y-8 text-black/80 leading-relaxed">
                
                {/* Introducción */}
                <div>
                  <p className="text-black/90 mb-4">
                    Ey, qué bueno que hayas llegado hasta acá!
                  </p>
                  <p>
                    Somos Dami y Tomy, co-fundadores de Novolabs, y nos gustaría contarte nuestra historia:
                  </p>
                </div>

                <div>
                  <h3 className="text-black font-bold text-lg md:text-xl mb-3">
                    ¿Cómo llegamos hasta acá?
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Entre noviembre de 2019 y junio de 2023 Novolabs fue una agencia de producto enfocada en emprendedores en fases tempranas.
                    </p>
                    <p>
                      En ese período ayudamos a +200 emprendedores a validar, construir y lanzar su MVP.
                    </p>
                    <p>
                      Vimos de todo. Desde productos que nunca lograban llamar la atención de sus potenciales clientes, hasta otros crecían de forma muy rápida.
                    </p>
                    <p>
                      A medida que lanzábamos más y más startups, entendimos que lo más importante al comienzo es entender profundamente a tu cliente, sus problemas, necesidades y deseos.
                    </p>
                    <p>
                      Un negocio existe cuando resuelve un problema significativo para un grupo determinado de usuarios de manera más efectiva que las alternativas actuales.
                    </p>
                    <p>
                      Si bien para nosotros el inicio de la Startup School representa una nueva aventura...
                    </p>
                    <p className="font-medium text-black/90">
                      Nuestra misión es la misma que hace casi 4 años: Acompañar al emprendedor desde el inicio, para que construya una solución (startup) que responda a una necesidad real.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-bold text-lg md:text-xl mb-3">
                    ¿Para quién NO es Novolabs?
                  </h3>
                  <div className="space-y-3">
                    <p>
                      No es un lugar para los que vienen a aparentar, a malgastar el tiempo, a mirar el techo.
                    </p>
                    <p>
                      No es para quienes se quejan, se excusan o buscan atajos para evitar cumplir con sus responsabilidades.
                    </p>
                    <p>
                      No es para los que sólo se preocupan por sí mismos, incapaces de ver más allá de sus propias necesidades.
                    </p>
                    <p>
                      No es para mentes cerradas, ni para quienes ven al cambio como una amenaza.
                    </p>
                    <p>
                      No es para quienes consideran la ética y los valores como algo negociable.
                    </p>
                    <p>
                      No es para los que se excusan, los que se rinden.
                    </p>
                    <p className="font-medium text-black/90 pt-2">
                      Si te identificas con estas palabras, Novo no es para ti.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-bold text-lg md:text-xl mb-3">
                    ¿Para quién es Novolabs?
                  </h3>
                  <div className="space-y-3">
                    <p>
                      Es para quienes aspiran a un futuro mejor y se comprometen a hacerlo realidad.
                    </p>
                    <p>
                      Es para los soñadores, para los inconformistas, para los que desafían el status quo y escriben sus propias reglas.
                    </p>
                    <p>
                      Es para los que tienen hambre de propósito y significado, no solo de éxito.
                    </p>
                    <p>
                      Es para quienes están dispuestos a enfrentar la incertidumbre y asumir riesgos en búsqueda del objetivo.
                    </p>
                    <p>
                      Es para quienes mantienen la ética como un principio innegociable y la integridad como un valor esencial.
                    </p>
                    <p>
                      Es para los que no aceptan excusas y se esfuerzan incansablemente para convertir sus sueños en realidad.
                    </p>
                    <p className="font-medium text-black/90 pt-2">
                      Si estas palabras resuenan contigo, Novo es para ti.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-bold text-lg md:text-xl mb-3">
                    ¿Qué esperamos conseguir?
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Creemos firmemente que la innovación, la creación de nuevas empresas y de empleo calificado son la clave para generar prosperidad en el mundo y mejorar la vida de las personas.
                    </p>
                    <p>
                      Desde Novolabs queremos darle las herramientas y conocimientos necesarios a la nueva generación de emprendedores para que su camino, si bien duro, sea más claro y con una mayor probabilidad de éxito.
                    </p>
                    <p>
                      En 5 años nos haría muy felices decir que, gracias al ecosistema que hemos generado, se crearon más de 1.000 empresas rentables que resuelven problemas reales y dan empleo de calidad a otras personas.
                    </p>
                    <p>
                      Sabemos que no será fácil pero de algo estamos seguro: tenemos el nivel de locura suficiente para superar desafíos de esta magnitud.
                    </p>
                    <p className="italic text-black/70 pt-2">
                      Cómo dice Naval Ravikant, "Las personas que tienen éxito son irracionalmente apasionadas por algo."
                    </p>
                  </div>
                </div>

                {/* Founders Section */}
                <div className="pt-12 mt-12 border-t border-black/10">
                  <p className="text-black/60 mb-8 text-center">
                    Fundado y liderado por:
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    
                    {/* Tomás */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 border-2 border-black/5">
                        <img 
                          src={imgTomasBercun} 
                          alt="Tomás Bercun"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-black font-bold text-sm md:text-base mb-1">
                        Tomás Volonté
                      </h4>
                      <p className="text-black/60 text-xs md:text-sm">
                        Co-fundador & CEO
                      </p>
                      <div className="w-32 h-16 md:w-40 md:h-20 mt-3">
                        <img 
                          src={imgFirmaTomasVolonte} 
                          alt="Firma de Tomás Volonté"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Damián */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 border-2 border-black/5">
                        <img 
                          src={imgDamianStanfoni} 
                          alt="Damián Stanfoni"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-black font-bold text-sm md:text-base mb-1">
                        Damián Sánchez
                      </h4>
                      <p className="text-black/60 text-xs md:text-sm">
                        Co-fundador & CPO
                      </p>
                      <div className="w-32 h-16 md:w-40 md:h-20 mt-3">
                        <img 
                          src={imgFirmaDamianSanchez} 
                          alt="Firma de Damián Sánchez"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}