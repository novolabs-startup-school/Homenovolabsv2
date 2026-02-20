import { Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import imgNovolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

export default function Prensa() {
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
        <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 tracking-[-0.01em]">
                Qué dicen de nosotros
              </h1>
              <p className="text-[#b4b4b4] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Descubrí la historia de Novolabs contada por Medios de Comunicación, Programas de TV / Radio y Podcasts de Emprendimiento.
              </p>
            </div>

            {/* Media Logos */}
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60">
              <img 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe046140a88bbe4334aa_Group%20(18).svg"
                alt="La Nación"
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe0f951533c4da1b8220_Grupo%20260.svg"
                alt="iProfesional"
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe1ae4af6e734e864db3_Vector%20(28).svg"
                alt="Forbes"
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe239e9cbc67e8d0aa6c_layer1%20(1).svg"
                alt="Clarín"
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[var(--max-width)] mx-auto px-5 space-y-24">
            {/* Article #1 - La Nación */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea5d94a6779d304a484e9_image%20657.svg"
                  alt="La Nación"
                  className="h-10 mb-8"
                />
                <p className="text-lg md:text-xl text-[rgb(0,0,0)] leading-relaxed mb-8">
                  "La barrera de entrada para emprender está en su piso más bajo de la historia. Sin embargo, la barrera mental está muy alta -muchos piensan que tienen que ser Galperin [fundador de Mercado Libre]- y eso genera parálisis. A veces, les da vergüenza reconocer que necesitan ayuda para su negocio y eso los lleva al fracaso. Pero es importante entender que es imposible tener todas las ideas uno mismo. Muy poca gente logra hacerlo solo".
                </p>
                <a 
                  href="https://www.lanacion.com.ar/economia/negocios/crearon-una-academia-que-promete-bajar-el-porcentaje-de-fracaso-de-los-emprendimientos-nid18072024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-novored)] hover:underline font-semibold"
                >
                  Ver nota <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea53ed7714a7e02dfffe6_image%20662.png"
                  alt="La Nación Article"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Article #2 - iProfesional */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea6b9b060bf32391dde00_image%20658.svg"
                  alt="iProfesional"
                  className="h-10 mb-8"
                />
                <p className="text-lg md:text-xl text-[rgb(0,0,0)] leading-relaxed mb-8">
                  "Nos enfocamos mucho en la transformación del emprendedor. No nos interesa, como a las incubadoras, ver cuál es el caballo ganador para entrenarlo y venderlo. Nosotros tratamos por igual a todos y a todos les damos las mismas herramientas para que hoy o en el futuro, con cualquier nueva idea de negocio, estén mejor preparados para lanzar una compañía exitosa, pero de acuerdo con su propia definición de éxito."
                </p>
                <a 
                  href="https://www.iprofesional.com/negocios/407963-como-funciona-novolabs-primera-escuela-argentina-que-busca-salvar-a-emprendimientos-del-fracaso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-novored)] hover:underline font-semibold"
                >
                  Ver nota <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea6a83e857e1557b07b95_image%20662%20(1).png"
                  alt="iProfesional Article"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article #3 - Forbes (Featured with black background) */}
        <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea76c5651f3c752401e05_Vector%20(27).svg"
                  alt="Forbes"
                  className="h-10 mb-8"
                />
                <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
                  Cómo dos jóvenes argentinos transformaron su experiencia en la primera escuela de startups: el secreto para evitar el fracaso emprendedor
                </h2>
                <a 
                  href="https://www.forbesargentina.com/negocios/como-dos-jovenes-argentinos-transformaron-su-experiencia-primera-escuela-startups-secreto-evitar-fracaso-emprendedor-n57606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-novored)] hover:underline font-semibold"
                >
                  Ver nota <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea7d0db6c79bb4a1f3f5d_Frame%201686557502.png"
                  alt="Forbes Article"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles #4 & #5 - Side by side */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Article #4 - Clarín */}
              <div className="rounded-2xl border-2 border-[rgb(240,240,240)] p-8 hover:shadow-xl transition-shadow">
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea9c76dce78c3e57e73ae_Frame%201686557502%20(1).png"
                  alt="Clarín Article"
                  className="w-full rounded-xl mb-6"
                />
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea9fbc36b3a4decdd536d_image%20655.svg"
                  alt="Clarín"
                  className="h-8 mb-4"
                />
                <h3 className="text-xl md:text-2xl text-[rgb(0,0,0)] mb-4 leading-tight">
                  Emprendedores: cómo funciona la escuela que evita que tu negocio fracase y cómo anotarte
                </h3>
                <p className="text-[rgb(80,80,80)] mb-6 leading-relaxed">
                  "Las chances de armar un negocio exitoso son casi nulas", aclaran en Novolabs y explican que en este tipo de emprendimientos se maneja mucha incertidumbre.
                </p>
                <a 
                  href="https://www.clarin.com/servicios/emprendedores-funciona-escuela-evita-negocio-fracase-anotarte_0_0hiWZPOVjM.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-novored)] hover:underline font-semibold"
                >
                  Ver nota <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Article #5 - iProUP */}
              <div className="rounded-2xl border-2 border-[rgb(240,240,240)] p-8 hover:shadow-xl transition-shadow">
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aeaa7f6dce78c3e57f0bb6_Frame%201686557502%20(2).png"
                  alt="iProUP Article"
                  className="w-full rounded-xl mb-6"
                />
                <img 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/68bee2c8b26737f904a5efcb_iproup%202.svg"
                  alt="iProUP"
                  className="h-8 mb-4"
                />
                <h3 className="text-xl md:text-2xl text-[rgb(0,0,0)] mb-4 leading-tight">
                  Dos amigos argentinos crearon la primera escuela de startups
                </h3>
                <p className="text-[rgb(80,80,80)] mb-6 leading-relaxed">
                  "Cada uno de los pasos son validados y contrastados con la realidad, con el fin de que no se trate solo de buenas ideas sino productos o servicios que el mercado esté dispuesto a incorporar", explican los jóvenes casi a coro.
                </p>
                <a 
                  href="https://www.iproup.com/startups/48166-novolabs-la-historia-de-la-primera-escuela-de-startups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-novored)] hover:underline font-semibold"
                >
                  Ver nota <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All Media List */}
        <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-20">
              Descubre todos los medios en los que estuvimos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaList.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-[var(--color-novoverde)] transition-colors">
                    {item.media}
                  </h3>
                  <p className="text-[#b4b4b4] text-sm mb-4 leading-relaxed">
                    {item.title}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--color-novored)] text-sm font-semibold">
                    Ver nota <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[rgb(0,0,0)] mb-8">
              ¿Te gustaría hacernos una entrevista?
            </h2>
            <p className="text-xl md:text-2xl text-[rgb(80,80,80)] mb-12">
              Haz clic en el botón de acá abajo y envianos tu propuesta.
            </p>
            <Button 
              variant="primary-light" 
              href="https://api.whatsapp.com/send/?phone=5491163544698&text&type=phone_number&app_absent=0"
            >
              Hablanos por WhatsApp
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const mediaList = [
  {
    media: "C5N",
    title: "Crearon la primera escuela argentina de startups: cómo funciona",
    url: "https://www.c5n.com/sociedad/crearon-la-primera-escuela-argentina-startups-como-funciona-n162663"
  },
  {
    media: "TN",
    title: "La UTN lanza una aceleradora de proyectos y talentos: \"Buscamos innovar en el sistema educativo\"",
    url: "https://tn.com.ar/tecno/novedades/2024/06/16/la-utn-lanza-una-aceleradora-de-proyectos-y-talentos-buscamos-innovar-en-el-sistema-educativo/"
  },
  {
    media: "El Cronista",
    title: "Dos argentinos crearon la primera escuela de start ups y tienen alumnos de toda Latinoamérica",
    url: "https://www.cronista.com/negocios/dos-argentinos-crearon-la-primera-escuela-de-start-ups-y-tienen-alumnos-de-toda-latinoamerica/"
  },
  {
    media: "Fortuna",
    title: "Emprendieron por todo el mundo y ahora fundaron la primera escuela de startups en Argentina",
    url: "https://fortuna.perfil.com/noticias/emprendedores/emprendieron-por-todo-el-mundo-y-ahora-fundaron-la-primera-escuela-de-startups-en-argentina.phtml"
  },
  {
    media: "El informatorio",
    title: "Novolabs: Tomás Volonté y Damián Sánchez crearon la primera escuela para startups de la Argentina",
    url: "https://elinformatorio.blogspot.com/2024/06/novolabs-tomas-volonte-y-damian-sanchez.html"
  },
  {
    media: "Las Provincias",
    title: "De trabajar en delivery a fundar desde Valencia la primera escuela de startups argentina",
    url: "https://www.lasprovincias.es/economia/startups/trabajar-delivery-fundar-valencia-primera-escuela-startups-20240715105652-nt.html"
  },
  {
    media: "Tiempo Argentino",
    title: "Crean la primera escuela argentina de startups: un negocio en donde muy pocos sobreviven",
    url: "https://www.tiempoar.com.ar/ta_article/startups-negocio-sobreviven/"
  },
  {
    media: "Business Plan - Eco Medios",
    title: "Damian Sánchez (Fundador de Novolabs Junto a Tomás Volonté)",
    url: "https://www.youtube.com/watch?v=IA9yb3SafeA&t=229s"
  },
  {
    media: "Rebill",
    title: "¿Por qué Rebill es el producto favorito de Tomás para pagos en LATAM en 2024 (CEO, Novolabs Startup School)?",
    url: "https://www.youtube.com/watch?v=0RpAQKzkakA&t=202s"
  },
  {
    media: "Tiene que haber algo más",
    title: "Tomás Volonté: Co Fundador de Novolabs. Emprender y el proceso de cerrar su empresa",
    url: "https://www.youtube.com/watch?v=QIM0bG1Cql8"
  },
  {
    media: "Detrás del puesto",
    title: "Cómo validar tu idea de negocio antes de invertir miles de USD || Founders Novolabs",
    url: "https://www.youtube.com/watch?v=f_jTHwYRjfE"
  },
  {
    media: "UTN LABS",
    title: "Entrevista a Damián Sánchez - Founder Novolabs, en UTN.LABS V5",
    url: "https://www.youtube.com/watch?v=j6aGyDt8POU"
  },
  {
    media: "UTN LABS",
    title: "Entrevista a Tomás Volonté, Co founder & CEO at Novolabs, en el lanzamiento de UTN LABS",
    url: "https://www.youtube.com/watch?v=gkMcHSO0uOM"
  },
  {
    media: "GO4CLICK",
    title: "Claves para acelerar el Onboarding - Tomas Volonte (Novolabs)",
    url: "https://www.youtube.com/watch?v=sqkYfYyywMQ&t=138s"
  },
  {
    media: "MAS WEB 3",
    title: "De la Playa a la Blockchain: La Historia de Novolabs y su Transformación a Escuela de Startups",
    url: "https://www.youtube.com/watch?v=e9-zAnJ-qMA&t=1003s"
  },
  {
    media: "Entrepreguntas",
    title: "Talento Tech ft Tomás Volonté",
    url: "https://www.youtube.com/watch?v=LuqtnviSsUY"
  },
  {
    media: "Innovación sin fronteras",
    title: "Cómo llevar tu idea al mercado de manera rápida y a bajo costo - Tomás Volonté",
    url: "https://www.youtube.com/watch?v=EL7nesw5OLA&t=571s"
  },
  {
    media: "Uibeax",
    title: "Cómo Crear un Mindset Emprendedor y lanzar tu MVP",
    url: "https://www.youtube.com/watch?v=_i_pvZ95B-s&t=998s"
  }
];