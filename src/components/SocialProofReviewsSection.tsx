import { Star, Award, TrendingUp, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import linkedinLogo from 'figma:asset/2c0c833adaba3eaa596de7315ea35a8315698214.png';
import linkedinLogoReviews from 'figma:asset/929c7bfc3dfef4603d898d2dda9e0ef1cc825255.png';
import raulMongeThumbnail from 'figma:asset/0ba2a044bcbab16554a443a7fac72d4b2c7a312f.png';
import lauraMartinezThumbnail from 'figma:asset/9ac1a6ccf4f8b46511a94807695c5955f8ba4cda.png';
import robertoJimenezThumbnail from 'figma:asset/4e4b0c8392cb0766884cddd12062ccce9944ae58.png';
import valentinLlorensThumbnail from 'figma:asset/a5581dba223bb0c9bac7da1e88237b4c316ea876.png';
import magdalenaBiassutoThumbnail from 'figma:asset/26edca017d0b259ab49e6b9b2fb01fba3a4a5b1f.png';
import gabrielVicentinThumbnail from 'figma:asset/0eab3d0d9a32a51b77ee917ad85ce002873b059e.png';
import diegoAkermanAvatar from 'figma:asset/de04e846de2141c76b2da2477fc3c6edd80ab0b0.png';
import magdalenaLaplacetteAvatar from 'figma:asset/f0a201ef318e2a92d8c9729ce0676bcf881850b3.png';
import nahuelTuranoAvatar from 'figma:asset/b826307c1178bb26d738d1a5abc920cc1c3d2fba.png';
import alvaroGuzmanAvatar from 'figma:asset/1cb40146d832c70dc63e54cdd2e1212f386fcb98.png';
import silvinaFernandezAvatar from 'figma:asset/bf28a639bd429d0644f6ee14dc50f442eb3cd5f6.png';
import hernanSuarezAvatar from 'figma:asset/7f2f1b04251c9bee93736c9c7af149d58c1cb35a.png';
import sandraJaramilloAvatar from 'figma:asset/ea1f7dfa38fa5e656da1ebae7b66b44c573b5766.png';
import tatianaDominguezAvatar from 'figma:asset/471cab870c17956f1e0bf216366082bf7fe47982.png';
import alexyNarvaezAvatar from 'figma:asset/b56ca6f0e53cbed92396bf06a7b9bf6a0470bd36.png';
import henryGearyAvatar from 'figma:asset/19b3eafc6183cf08e5b81ba35d6bfaa9b51b57a1.png';
import juanCarlosPazAvatar from 'figma:asset/8aaa524b7f6fb86c07271e13315b55befaf18b74.png';
import mercedesReyAvatar from 'figma:asset/9f0402852b02ba1df82e38e24a2a7ab19d5a09cc.png';

export function SocialProofReviewsSection() {
  const reviews = [
    {
      name: 'Diego Akerman',
      image: diegoAkermanAvatar,
      text: 'La experiencia es realmente memorable, no sólo por lo que aprendés, sino también por sentirte parte de una familia que quiere que te vaya bien. Me ayudaron a enfocarme en lo importante, a validar mis ideas, a construir sobre bases sólidas y a avanzar! Novolabs es la mejor forma de entrar al mundo emprendedor.',
      location: 'Argentina'
    },
    {
      name: 'Magdalena Laplacette',
      image: magdalenaLaplacetteAvatar,
      text: 'Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiándote a ir por todo.',
      location: 'Uruguay'
    },
    {
      name: 'Nahuel Turano',
      image: nahuelTuranoAvatar,
      text: 'Lo mejor que pueden hacer en una etapa temprana, llegué sin clientes, nos ayudaron a pivotear. Hoy después de 6 meses de terminar el programa levantamos inversión y ya tenemos más de 15 clientes. No lo duden, aprenden habilidades que les quedan para siempre y les allanan el camino.',
      location: 'Chile'
    },
    {
      name: 'Alvaro Guzman Lopez',
      image: alvaroGuzmanAvatar,
      text: 'Promesa cumplida. Realmente me ayudaron a transitar desde una idea a crear un MVP y lanzar, el framework funciona, la tecnología incorporada al proceso te hace avanzar ágil y rápido, las entregas de avances semanales te permiten no desenfocarte del objetivo final.',
      location: 'México'
    },
    {
      name: 'Silvina Fernandez',
      image: silvinaFernandezAvatar,
      text: 'De cero a MVP con Novolabs. Luego de haber finalizado el programa logre lanzar mi MVP, conocer sobre validar mi idea de negocio y además me llevo lo más importante: Formar parte de una comunidad como Novolabs. A todos los que estén pensando en emprender no duden en que Novo es la mejor opción.',
      location: 'España'
    },
    {
      name: 'Hernan Suarez',
      image: hernanSuarezAvatar,
      text: 'Novo nos cambió toda la manera en que pensábamos las cosas, creíamos que con solo lanzar una aplicación ya todos la iban a usar, y vimos que es todo lo contrario, entendimos como hacer el paso a paso de principio a fin para lanzar una startup y que no se debe hacer jaja, valoro mucho todo el feedback que nos dieron!',
      location: 'Colombia'
    },
    {
      name: 'Sandra Jaramillo',
      image: sandraJaramilloAvatar,
      text: '¡Promesa cumplida! Validé mi idea ágilmente encontrando un ICP para lanzar, aplicando técnicas de venta e innovación con IA, lo que me permitió ahorrar tiempo, costos, adquirir mis primeros clientes y desechar lo que realmente no servía sin deprimirme demasiado :)',
      location: 'Colombia',
      linkedinUrl: 'https://www.linkedin.com/in/jaramillosandra/'
    },
    {
      name: 'Tatiana Dominguez',
      image: tatianaDominguezAvatar,
      text: 'Supero enormemente mis expectativas. Logré hacer cosas que no imaginé poder hacer bajo la asistencia de mentores preparados y súper buena onda.',
      location: 'Perú'
    },
    {
      name: 'Alexy Narvaez',
      image: alexyNarvaezAvatar,
      text: 'Estos muchachos, son un 10, gente muy preparada y dispuesta a ayudar, con experiencia y con muchos recursos para que puedas ir avanzando en tu idea. Para alguien que no sabe de startups y quiere conocer este fascinante mundo, aquí encontrarás todas las herramientas para construir desde cero. Es nuy desafiante, pero sin desafios no se crece.',
      location: 'Argentina'
    },
    {
      name: 'Henry Geary',
      image: henryGearyAvatar,
      text: 'Tenes que estar abierto a nuevas ideas y tener el ego lo suficientemente a nivel para tomar tu hermoso proyecto junto con tu ilusion de startup exitosa y tirarla a la basura antes de darte un cabezazo contra una pared si no hay data empirica que la sostenga... o no, quizá tenes una buena idea y un buen plan, en ese caso discutirlos en el grupo te va a aportar muchisimo valor',
      location: 'Ecuador'
    },
    {
      name: 'Juan Carlos Paz',
      image: juanCarlosPazAvatar,
      text: 'Los guías Tomi y Dami son muy buenos y muy honestos, no venden humo. Tienen un modelo efectivo para ayudar a emprendedores a validar/ pivotar ideas antes de arriesgar dinero y tiempo en algo que puede no funcionar. Siguiendo el programa uno puede hasta vender y cobrar sin haber desarrollado el producto.',
      location: 'Chile'
    },
    {
      name: 'Mercedes Rey',
      image: mercedesReyAvatar,
      text: 'Un después en mi carrera y en mi vida, eternamente agradecida.Aprendí mucho sobre cómo desarrollar un negocio desde cero, y sobre todo, conté con el apoyo incondicional de los mentores, personas formadas, experimentadas y muy respetuosas, que con gran sensiblidad nos fueron guiando mes a mes para que cada uno y cada una vaya logrando sus objetivos. ',
      location: 'Uruguay',
      linkedinUrl: 'https://www.linkedin.com/in/mercedes-rey82/'
    },
    {
      name: 'Raul Monge',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTMzNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'En el acompañamiento y la sinergia de grupo que se hace y además el echo de que te aterrizan las expectativas, no es un sistema vende humos como tal sino que venden la realidad de las cosas y te enseñan a fallar a tiempo antes de que te pueda costar los ahorros de tu vida. Pero no solo eso sino que te enseñan un framework de trabajo para llevar a cabo una idea como debe de ser.',
      location: 'Costa Rica'
    }
  ];

  const videoTestimonials = [
    {
      name: 'Raul Monge',
      industry: 'Logística',
      quote: 'Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses...',
      thumbnail: raulMongeThumbnail,
      videoUrl: 'https://www.youtube.com/embed/7F4_lbbzPKM'
    },
    {
      name: 'Laura Martinez',
      industry: 'Energías Renovables',
      quote: 'Me gustó tanto el Programa que le cuento a todos de Novolabs ...',
      thumbnail: lauraMartinezThumbnail,
      videoUrl: 'https://www.youtube.com/embed/83F0dm9QVmY'
    },
    {
      name: 'Roberto Jimenez',
      industry: 'Legales',
      quote: 'Tengo una idea mucho más sólida y los primeros clientes...',
      thumbnail: robertoJimenezThumbnail,
      videoUrl: 'https://www.youtube.com/embed/XOs8wzErvVw'
    },
    {
      name: 'Valentín Llorens',
      industry: 'Educación',
      quote: 'Descubrí una nueva forma de emprender, me cambiaron la cabeza...',
      thumbnail: valentinLlorensThumbnail,
      videoUrl: 'https://www.youtube.com/embed/_cnUn0Q0uEs'
    },
    {
      name: 'Magdalena Biassuto',
      industry: 'Salud',
      quote: 'Mejoré mi idea original y encontré a mi socio tech dentro del Programa...',
      thumbnail: magdalenaBiassutoThumbnail,
      videoUrl: 'https://www.youtube.com/embed/ESUN3E3aX3g'
    },
    {
      name: 'Gabriel Vicentin',
      industry: 'Deporte',
      quote: 'Ojalá hubiera conocido Novolabs hace muchos años atrás...',
      thumbnail: gabrielVicentinThumbnail,
      videoUrl: 'https://www.youtube.com/embed/uloRdBDJsHw'
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[1.75rem] md:text-4xl lg:text-[3.5rem] leading-[1.15] mb-6 tracking-[-0.01em] text-[rgb(0,0,0)] px-2">
            Opiniones de{" "}
            <span className="text-[var(--color-novored)]">
              +300 emprendedores
            </span>
          </h2>
          <p className="text-[rgb(80,80,80)] text-base md:text-xl max-w-3xl mx-auto">
            Mira lo que dicen los emprendedores que pasaron por Novolabs
          </p>
        </div>

        {/* Primera fila: 3 testimonios texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews.slice(0, 3).map((review, index) => (
            <div 
              key={index}
              className="rounded-3xl bg-gradient-to-br from-white to-[#fafafa] border-2 border-[rgb(220,220,220)] p-8 hover:border-[rgb(180,180,180)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[rgb(240,240,240)] border-2 border-[rgb(220,220,220)] flex-shrink-0">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgb(0,0,0)] font-semibold text-sm">{review.name}</p>
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
              <p className="text-[rgb(60,60,60)] text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Primera fila de videos: 2 video testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
          {videoTestimonials.slice(0, 2).map((video, index) => (
            <div 
              key={index}
              onClick={() => window.open(video.videoUrl, '_blank')}
              className="rounded-3xl bg-black overflow-hidden hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer"
            >
              {/* Video Thumbnail Container */}
              <div className="relative aspect-video bg-black overflow-hidden">
                {/* Thumbnail Image with Zoom Effect */}
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-white text-sm">{video.industry}</p>
                  </div>
                </div>
                
                {/* Name - Below Badge */}
                <div className="absolute top-16 left-4">
                  <p className="text-white font-semibold">{video.name}</p>
                </div>
                
                {/* Play Button - Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff3b30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#e5342a] shadow-lg">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                
                {/* Quote - Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white italic leading-relaxed text-[16px] md:text-[24px] font-bold">
                    {video.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda fila: 3 testimonios texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews.slice(3, 6).map((review, index) => (
            <div 
              key={index + 3}
              className="rounded-3xl bg-gradient-to-br from-white to-[#fafafa] border-2 border-[rgb(220,220,220)] p-8 hover:border-[rgb(180,180,180)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[rgb(240,240,240)] border-2 border-[rgb(220,220,220)] flex-shrink-0">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgb(0,0,0)] font-semibold text-sm">{review.name}</p>
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
              <p className="text-[rgb(60,60,60)] text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Segunda fila de videos: 2 video testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
          {videoTestimonials.slice(2, 4).map((video, index) => (
            <div 
              key={index + 2}
              onClick={() => window.open(video.videoUrl, '_blank')}
              className="rounded-3xl bg-black overflow-hidden hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer"
            >
              {/* Video Thumbnail Container */}
              <div className="relative aspect-video bg-black overflow-hidden">
                {/* Thumbnail Image with Zoom Effect */}
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-white text-sm">{video.industry}</p>
                  </div>
                </div>
                
                {/* Name - Below Badge */}
                <div className="absolute top-16 left-4">
                  <p className="text-white font-semibold">{video.name}</p>
                </div>
                
                {/* Play Button - Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff3b30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#e5342a] shadow-lg">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                
                {/* Quote - Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white italic leading-relaxed text-[16px] font-bold">
                    {video.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tercera fila: 3 testimonios texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews.slice(6, 9).map((review, index) => (
            <div 
              key={index + 6}
              className="rounded-3xl bg-gradient-to-br from-white to-[#fafafa] border-2 border-[rgb(220,220,220)] p-8 hover:border-[rgb(180,180,180)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[rgb(240,240,240)] border-2 border-[rgb(220,220,220)] flex-shrink-0">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgb(0,0,0)] font-semibold text-sm">{review.name}</p>
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
              <p className="text-[rgb(60,60,60)] text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Tercera fila de videos: 2 video testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
          {videoTestimonials.slice(4, 6).map((video, index) => (
            <div 
              key={index + 4}
              onClick={() => window.open(video.videoUrl, '_blank')}
              className="rounded-3xl bg-black overflow-hidden hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer"
            >
              {/* Video Thumbnail Container */}
              <div className="relative aspect-video bg-black overflow-hidden">
                {/* Thumbnail Image with Zoom Effect */}
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-white text-sm">{video.industry}</p>
                  </div>
                </div>
                
                {/* Name - Below Badge */}
                <div className="absolute top-16 left-4">
                  <p className="text-white font-semibold">{video.name}</p>
                </div>
                
                {/* Play Button - Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff3b30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#e5342a] shadow-lg">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                
                {/* Quote - Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white italic leading-relaxed text-[16px] md:text-[24px] font-bold">
                    {video.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cuarta (última) fila: 3 testimonios texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.slice(9, 12).map((review, index) => (
            <div 
              key={index + 9}
              className="rounded-3xl bg-gradient-to-br from-white to-[#fafafa] border-2 border-[rgb(220,220,220)] p-8 hover:border-[rgb(180,180,180)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[rgb(240,240,240)] border-2 border-[rgb(220,220,220)] flex-shrink-0">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgb(0,0,0)] font-semibold text-sm">{review.name}</p>
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
              <p className="text-[rgb(60,60,60)] text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trustpilot Rating - Stats Below */}
        <div className="flex justify-center items-center gap-3">
          <span className="text-2xl md:text-3xl font-semibold text-[rgb(0,0,0)]">4.8</span>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
            ))}
            <div className="relative w-6 h-6">
              <Star className="w-6 h-6 text-[rgb(230,230,230)]" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
              </div>
            </div>
          </div>
          <span className="text-[rgb(80,80,80)]">en</span>
          <span className="text-[rgb(0,0,0)] font-semibold underline">Trustpilot</span>
        </div>
      </div>
    </section>
  );
}