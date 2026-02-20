import svgPaths from "./svg-dottmusz52";
import imgImage653 from "figma:asset/a7a995632ed24dba886ef007e8d63a8d47e83d3f.png";
import imgVector from "figma:asset/8646599936dbc0f9dd5b7787fb8065639ee76ef1.png";

function Iso() {
  return (
    <div className="absolute inset-[0_0_0.02%_91.85%]" data-name="Iso">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0656 21.9949">
        <g id="Iso">
          <path d={svgPaths.p1d281200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p16f2ee00} fill="var(--fill-0, #FA1C38)" id="Vector_2" />
          <path d={svgPaths.p291eb00} fill="var(--fill-0, #FA1C38)" id="Vector_3" />
          <path d={svgPaths.p37f5ed70} fill="var(--fill-0, #FA1C38)" id="Vector_4" />
          <path d={svgPaths.p9c63b80} fill="var(--fill-0, #FA1C38)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute inset-[7.37%_12.2%_0_0]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.944 20.3777">
        <g id="Mask group">
          <mask height="21" id="mask0_2112_918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="130" x="0" y="0">
            <g id="Logo">
              <path d={svgPaths.p38849a80} fill="#222831" />
              <path d={svgPaths.p2bb58200} fill="#222831" />
              <path d={svgPaths.p265b7600} fill="#222831" />
              <path d={svgPaths.p14fb1200} fill="#222831" />
              <path d={svgPaths.p231ac800} fill="url(#paint0_linear_2112_918)" />
              <path d={svgPaths.p34e17000} fill="url(#paint1_linear_2112_918)" />
              <path d={svgPaths.p2f34fc80} fill="url(#paint2_linear_2112_918)" />
              <path d={svgPaths.p3fe8fc80} fill="url(#paint3_linear_2112_918)" />
            </g>
          </mask>
          <g mask="url(#mask0_2112_918)">
            <rect fill="var(--fill-0, #FA1C38)" height="20.3776" id="Rectangle 22724" width="56.0856" x="73.901" />
            <rect fill="var(--fill-0, white)" height="20.4409" id="Rectangle 22725" width="69.7771" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[22px] relative shrink-0 w-[148px]" data-name="Logo">
      <Iso />
      <MaskGroup />
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Logo />
    </div>
  );
}

function EpArrowUp() {
  return (
    <div className="relative size-[16px]" data-name="ep:arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ep:arrow-up">
          <path d={svgPaths.p1c147200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Recursos</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <EpArrowUp />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0" data-name="Column">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Nosotros</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Programa Lanzar</p>
      <Frame3 />
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Testimonios de alumnos</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Prensa</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff3a20] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff3a20] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white">Unirme al NovoLetter</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Column">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip px-[64px] py-0 relative shrink-0 w-[1440px]" data-name="Navbar">
      <Container />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap" data-name="Content">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold relative shrink-0">{`WEBINAR EXCLUSIVO  |  `}</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium relative shrink-0">Aprende a validar tu idea de negocios - 3 horas en vivo</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#ff3a20] text-[16px] text-nowrap underline">Reserva tu lugar ahora</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[48px] pr-0 py-0 relative w-full">
          <Content />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame 1686557527">
          <path d={svgPaths.p24207900} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[12px] relative shrink-0 w-full" data-name="Container">
      <Content1 />
      <Frame25 />
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#d4ff78] content-stretch flex flex-col items-center justify-center overflow-clip px-[64px] py-0 relative shrink-0 w-[1440px]" data-name="Banner">
      <Container1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-black text-center w-full">
      <p className="font-['Thunder:Bold_LC',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[112px] uppercase w-[927px]">aprende directo de los mejores</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[18px] w-[min-content]">Las NovoTalks son un espacio diseñado para compartir los errores y aprendizajes que ayudaron a grandes emprendedores a ir de 0 a 1 y convertirse en los referentes que hoy son dentro del ecosistema.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff3a20] content-stretch flex h-[48px] items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff3a20] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Ver lista de Episodios</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[932px]" data-name="Section Title">
      <Frame21 />
      <Button2 />
    </div>
  );
}

function Filtros() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Online y En Vivo</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros1() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Gratuito</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start opacity-70 relative shrink-0">
      <Filtros />
      <Filtros1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Thunder:Bold_LC',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff3a20] text-[32px] text-nowrap uppercase">
        <p className="leading-[normal]">novotalk #26</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame18 />
      <p className="font-['Thunder:Bold_LC',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[48px] text-black uppercase w-[min-content]">CÓMO DESARROLLAR UN MINDSET IMPARABLE PARA EMPRENDER</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Satoshi_Variable:Medium',sans-serif] font-medium gap-[12px] grow items-start leading-[1.5] min-h-px min-w-px relative shrink-0 text-black">
      <p className="opacity-80 relative shrink-0 text-[20px] text-nowrap">
        <span>{`Con `}</span>
        <span className="font-['Satoshi_Variable:Bold',sans-serif] font-bold text-black">Jorge Inda</span>
      </p>
      <p className="min-w-full opacity-70 relative shrink-0 text-[16px] w-[min-content]">Coach de Empleo con +435k seguidores en LinkedIn</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[68.5px] shrink-0 size-[72px]" data-name="image 653">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[68.5px] size-full" src={imgImage653} />
      </div>
      <Frame16 />
    </div>
  );
}

function Filtros2() {
  return (
    <div className="bg-[#d4ff78] content-stretch flex flex-col items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Miércoles 29 de Enero a las 15 hs 🇲🇽 / 18 hs 🇦🇷 / 22 hs 🇪🇸</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[588px]">
      <Frame15 />
      <Frame7 />
      <Filtros2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative size-full">
          <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#505050] text-[18px] text-nowrap">Ingresa tu correo electrónico</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ff3a20] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Registrarme a la NovoTalk</p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <Button3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Form />
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-white w-full">Al ingresar tu correo electrónico aceptas unirte al NovoLetter. Podrás desuscribirte cuando quieras.</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Actions">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] opacity-70 relative shrink-0 text-[18px] text-nowrap text-white">Reserva tu lugar ingresando tu correo electrónico</p>
      <Frame13 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#1d1d1d] relative rounded-[24px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px pb-0 pt-[9px] px-0 relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[135px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame17 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[48px] items-start p-[56px] relative rounded-[32px] shrink-0 w-[1312px]" data-name="Row">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[24px] text-black w-[588px]">¡Sumate a la próxima NovoTalk!</p>
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Row />
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center overflow-clip pb-[80px] pt-[112px] px-[64px] relative shrink-0 w-[1440px]" data-name="Blog / 1 /">
      <SectionTitle />
      <Frame23 />
    </div>
  );
}

function Filtros3() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Emprendimiento</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros4() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Startups</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros5() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Inversión</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros6() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Tecnología</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros7() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Finanzas</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros8() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Innovación</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Filtros9() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Filtros">
      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">Crecimiento personal</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MynauiTrash() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mynaui:trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mynaui:trash">
          <path d={svgPaths.p1640fd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#444] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0 size-[48px]">
      <MynauiTrash />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Filtros3 />
      <Filtros4 />
      <Filtros5 />
      <Filtros6 />
      <Filtros7 />
      <Filtros8 />
      <Filtros9 />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] text-center text-nowrap text-white">Encontrá tu próxima dósis de inspiración emprendedora</p>
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.02%_-21.38%_4.08%_66.75%]" data-name="Group">
      <div className="absolute inset-[-28.95%_-28.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 545.273 545.38">
          <g filter="url(#filter0_f_2112_933)" id="Group">
            <path d={svgPaths.p9693400} fill="url(#paint0_linear_2112_933)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="545.38" id="filter0_f_2112_933" width="545.273" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2112_933" stdDeviation="50" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2112_933" x1="8.8614" x2="350.735" y1="445.38" y2="103.612">
              <stop stopColor="#D4FF78" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[32px] text-white top-[238px] w-[363px]">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] opacity-80 relative shrink-0 text-[20px] text-nowrap">Con Magalí Bejar</p>
      <div className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] opacity-50 relative shrink-0 text-[16px] w-[255px]">
        <p className="mb-0">CEO y Founder de Build with talent</p>
        <p>y Tiene que haber algo más</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#141414] inset-[0_0_0.11%_0] overflow-clip">
      <Group />
      <div className="absolute flex flex-col font-['Thunder:Bold_LC',sans-serif] justify-center leading-[0] left-[32px] not-italic text-[#d4ff78] text-[24px] top-[43px] translate-y-[-50%] uppercase w-[368px]">
        <p className="leading-[normal]">novotalk #12</p>
      </div>
      <p className="absolute font-['Thunder:Bold_LC',sans-serif] leading-[1.2] left-[32px] not-italic text-[40px] text-white top-[78px] uppercase w-[368px]">DE CREAR UN PODCAST A CONSTUIR UN NEGOCIO ONLINE</p>
      <Frame8 />
    </div>
  );
}

function Filtros10() {
  return (
    <div className="absolute bg-[#ff3a20] bottom-[86.68%] content-stretch flex flex-col items-center justify-center left-[calc(50%+228px)] overflow-clip px-[12px] py-0 rounded-[32px] top-[4.44%] translate-x-[-50%]" data-name="Filtros">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Emprendimiento</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[360.397px] relative rounded-[24px] shrink-0 w-[632px]" data-name="Frame 1686557249 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame6 />
        <Filtros10 />
        <div className="absolute inset-[21.64%_-0.03%_-10.68%_57.75%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" height="320.905" src={imgVector} width="267.211" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Regular',sans-serif] font-normal gap-[16px] items-center leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap w-full">
      <p className="relative shrink-0">75m</p>
      <p className="relative shrink-0">07 ene</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[20px] text-white w-full">De Crear un Podcast a Construir un Negocio Online con Magali Bejar</p>
      <Frame4 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[632px]" data-name="Card">
      <Frame26 />
      <Frame5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-[1312px]" data-name="Row">
      {[...Array(2).keys()].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Row1 key={i} />
      ))}
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p32220180} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#313131] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] size-[48px]">
      <IconChevronRight />
    </div>
  );
}

function NumberPage() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Ellipse 1"></g>
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-3.5px)] not-italic text-[#424242] text-[16px] text-nowrap top-[calc(50%-11.5px)]">1</p>
    </div>
  );
}

function NumberPage1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" fill="var(--fill-0, #FF3A20)" id="Ellipse 1" r="23.5" stroke="var(--stroke-0, #FF3A20)" />
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-5px)] not-italic text-[#fdfcfc] text-[16px] text-nowrap top-[calc(50%-12px)]">2</p>
    </div>
  );
}

function NumberPage2() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Ellipse 1"></g>
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-4.5px)] not-italic text-[#424242] text-[16px] text-nowrap top-[calc(50%-11.5px)]">3</p>
    </div>
  );
}

function NumberPage3() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Ellipse 1"></g>
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-4.5px)] not-italic text-[#424242] text-[16px] text-nowrap top-[calc(50%-11.5px)]">4</p>
    </div>
  );
}

function NumberPage4() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Ellipse 1"></g>
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-4.5px)] not-italic text-[#424242] text-[16px] text-nowrap top-[calc(50%-11.5px)]">5</p>
    </div>
  );
}

function NumberPage5() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Ellipse 1"></g>
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-6.5px)] not-italic text-[#424242] text-[16px] text-nowrap top-[calc(50%-11.5px)]">...</p>
    </div>
  );
}

function NumberPage6() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="NumberPage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Ellipse 1"></g>
      </svg>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[calc(50%-9.5px)] not-italic text-[#424242] text-[16px] text-nowrap top-[calc(50%-11.5px)]">24</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <NumberPage />
      <NumberPage1 />
      <NumberPage2 />
      <NumberPage3 />
      <NumberPage4 />
      <NumberPage5 />
      <NumberPage6 />
    </div>
  );
}

function IconChevronRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p32220180} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#313131] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0 size-[48px]">
      <IconChevronRight1 />
    </div>
  );
}

function AllPageState() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="AllPageState2">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame10 />
        </div>
      </div>
      <Frame />
      <Frame12 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-full" data-name="Content">
      <Frame14 />
      <Frame24 />
      <AllPageState />
    </div>
  );
}

function Blog1() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col items-center overflow-clip pb-[112px] pt-[80px] px-[64px] relative shrink-0 w-[1440px]" data-name="Blog / 1 /">
      <Content2 />
    </div>
  );
}

function Iso1() {
  return (
    <div className="absolute inset-[0_0_0.02%_91.85%]" data-name="Iso">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0656 21.9949">
        <g id="Iso">
          <path d={svgPaths.p1d281200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p16f2ee00} fill="var(--fill-0, #FA1C38)" id="Vector_2" />
          <path d={svgPaths.p291eb00} fill="var(--fill-0, #FA1C38)" id="Vector_3" />
          <path d={svgPaths.p37f5ed70} fill="var(--fill-0, #FA1C38)" id="Vector_4" />
          <path d={svgPaths.p9c63b80} fill="var(--fill-0, #FA1C38)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute inset-[7.37%_12.2%_0_0]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.944 20.3777">
        <g id="Mask group">
          <mask height="21" id="mask0_2112_918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="130" x="0" y="0">
            <g id="Logo">
              <path d={svgPaths.p38849a80} fill="#222831" />
              <path d={svgPaths.p2bb58200} fill="#222831" />
              <path d={svgPaths.p265b7600} fill="#222831" />
              <path d={svgPaths.p14fb1200} fill="#222831" />
              <path d={svgPaths.p231ac800} fill="url(#paint0_linear_2112_918)" />
              <path d={svgPaths.p34e17000} fill="url(#paint1_linear_2112_918)" />
              <path d={svgPaths.p2f34fc80} fill="url(#paint2_linear_2112_918)" />
              <path d={svgPaths.p3fe8fc80} fill="url(#paint3_linear_2112_918)" />
            </g>
          </mask>
          <g mask="url(#mask0_2112_918)">
            <rect fill="var(--fill-0, #FA1C38)" height="20.3776" id="Rectangle 22724" width="56.0856" x="73.901" />
            <rect fill="var(--fill-0, white)" height="20.4409" id="Rectangle 22725" width="69.7771" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2112_918" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[148px]" data-name="Logo">
      <Iso1 />
      <MaskGroup1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Logo">
      <Logo2 />
    </div>
  );
}

function IconLinkedIn() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2e106870} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / Instagram">
          <path clipRule="evenodd" d={svgPaths.p1d771200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconYoutube() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / Youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / Youtube">
          <path d={svgPaths.p1ff4c100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Social Links">
      <IconLinkedIn />
      <IconInstagram />
      <IconYoutube />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <Logo3 />
      <SocialLinks />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Regular',sans-serif] font-normal gap-[24px] items-start leading-[1.5] relative shrink-0 text-[14px] text-nowrap text-white underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Políticas de privacidad</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Términos y condiciones</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-nowrap text-white">© 2025 Novolabs Startup School. Todos los derechos reservados.</p>
      <FooterLinks />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#141414] relative shrink-0 w-[1440px]" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[65px] items-center overflow-clip px-[64px] py-[56px] relative rounded-[inherit] w-full">
        <Content3 />
        <Row2 />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop">
      <Navbar />
      <Banner />
      <Blog />
      <Blog1 />
      <Footer />
    </div>
  );
}