import { ImageWithFallback } from './figma/ImageWithFallback';
import imgForbes from 'figma:asset/703b5dedebffe029a7e02674bb9d9e555c683cd0.png';
import imgIprop from 'figma:asset/d399663dc68a8a2b9a5d52ff995252cfd2750bae.png';
import imgClarin from 'figma:asset/5e56563d4d2f43f6cacabbb74f2e241e7a5e1c1d.png';
import imgArticleCover from 'figma:asset/0f1ff1f276e25d064370028abbd2e0134c7a79b3.png';

export function PressSection() {
  return (
    <div className="mt-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl text-[var(--color-text-muted)]">
          Mencionados en
        </h3>
      </div>

      {/* Logos Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
        {/* Forbes Logo Placeholder */}
        <div className="h-8 w-24 flex items-center justify-center">
          <ImageWithFallback 
            src={imgForbes}
            alt="Forbes"
            className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Iprop Logo Placeholder */}
        <div className="h-8 w-24 flex items-center justify-center">
          <ImageWithFallback 
            src={imgIprop}
            alt="Iprop"
            className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Clarin Logo Placeholder */}
        <div className="h-8 w-24 flex items-center justify-center">
          <ImageWithFallback 
            src={imgClarin}
            alt="Clarin"
            className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Featured Article Image */}
      <div className="max-w-[700px] mx-auto">
        <div>
          <ImageWithFallback 
            src={imgArticleCover}
            alt="Portada de noticia"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}