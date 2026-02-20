import svgPaths from "./svg-idoj9bkynk";
import img202305811 from "figma:asset/a96d0f36b58364b6582064c27aef65d9cab2c977.png";
import imgSncupBanner2 from "figma:asset/be6d5fe0c31e5d6e9dc385a8df15400bdfdafd6e.png";
import imgImage650 from "figma:asset/2c95f0e073efe0fa2b7a3c3b72ab218df699512b.png";
import imgCapturaDePantalla20241106ALas1406082 from "figma:asset/1bf2481b52009818dd27b9b4f5d389aca55c7df3.png";
import imgImage205 from "figma:asset/1c38da8c90b04ecc312acdfd432f8899a1540dbc.png";
import imgNotionSymbol1 from "figma:asset/beb01cedb6cbc5d3f137597f6d822db747796edc.png";
import imgMicrosoftAzureLogo1 from "figma:asset/c558cb0996f41776c6bc860e4ae53457761ddb71.png";
import img1CzqOmYaaNDhd6RTi4VtsuQ1 from "figma:asset/8b565394c1c343a58a4d646b28dd8cb688768ea9.png";
import imgImage634 from "figma:asset/cab350a7cb1eb330496f7d0b1fc6c4b378b520c1.png";
import imgImage633 from "figma:asset/c57aa088a3fc03561f8461f48c985e100047aefc.png";
import imgAvatarImage from "figma:asset/07eded6c2faa092529dafdceeb1e26e17f69f92a.png";

function Logo() {
  return (
    <div className="h-[27px] relative shrink-0 w-[63px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 27">
        <g clipPath="url(#clip0_2145_1066)" id="logo">
          <path d={svgPaths.p2c9dcb70} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p17d35c70} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pabf7c00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pfd22780} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_2145_1066">
            <rect fill="white" height="27" width="63" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <Logo />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Nav Link Dropdown">
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Link Four</p>
      <ChevronDown />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0" data-name="Column">
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Link One</p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Link Two</p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Link Three</p>
      <NavLinkDropdown />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap">Log in</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff3a20] content-stretch flex h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff3a20] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Get started</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Column">
      <Button />
      <Button1 />
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-white content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Column">
      <Column1 />
      <Column2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Column />
      <Column3 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-center justify-center overflow-clip px-[64px] py-0 relative shrink-0 w-[1440px]" data-name="Navbar / 1 /">
      <Container />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_0px_0px_black]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff3a20] content-stretch flex h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff3a20] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Aplicar al Programa</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[24px] items-center ml-[336px] mt-[233px] relative w-[768px]" data-name="Column">
      <p className="font-['Thunder:Bold_LC',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[112px] text-black text-center text-nowrap uppercase">
        {`Club de Fundadores, `}
        <br aria-hidden="true" />
        alumni exclusivo
      </p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-black text-center w-[566px]">Donde podes conectar con emprendedores e inversores de todo LATAM y España para llevar tu proyecto al siguiente nivel.</p>
      <Button2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[810px] ml-0 mt-0 relative w-[1440px]" data-name="20230581 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202305811} />
      </div>
      <Column4 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-white" data-name="List Item">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full">500+</p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Projects completed</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-white" data-name="List Item">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full">200%</p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Year on year growth</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start px-0 py-[8px] relative shrink-0 w-[616px]" data-name="Row">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-white" data-name="List Item">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full">$50m</p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Funded</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-white" data-name="List Item">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full">10k</p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Downloads</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start px-0 py-[8px] relative shrink-0 w-[616px]" data-name="Row">
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0" data-name="List">
      <Row />
      <Row1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px pb-[64px] pt-0 px-0 relative self-stretch shrink-0" data-name="Content">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[0px] text-[32px] text-white w-[min-content]">
        <span className="font-['Satoshi_Variable:Regular',sans-serif] font-normal">{`Accede a una comunidad curada de emprendedores e inversores con la misma filosofía: `}</span>Construir
      </p>
      <List />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f9f9f9] h-[540px] overflow-clip relative rounded-tl-[48px] shrink-0 w-[596px]" data-name="Background">
      <div className="absolute h-[540px] left-1/2 top-0 translate-x-[-50%] w-[916px]" data-name="SNCUP BANNER 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[5.41%] max-w-none top-[-0.01%] w-[88.41%]" src={imgSncupBanner2} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#141414] content-stretch flex gap-[80px] items-start pb-0 pl-[64px] pr-0 pt-[120px] relative rounded-bl-[40px] rounded-tl-[40px] shrink-0 w-[1376px]">
      <Content />
      <Background />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip pb-[80px] pl-[64px] pr-0 pt-[112px] relative shrink-0" data-name="Layout / 25 /">
      <Frame5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black w-[644px]" data-name="Content">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] text-nowrap">Eventos de networking</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[22px] text-center w-[min-content]">Para que conectes con personas de España y Latinoamérica.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <div className="basis-0 grow h-[300px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="image 650">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage650} />
      </div>
      <div className="basis-0 grow h-[300px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="image 651">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage650} />
      </div>
      <div className="basis-0 grow h-[300px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="image 652">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage650} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center pb-[112px] pt-[80px] px-[64px] relative shrink-0 w-[1440px]" data-name="Container">
      <Content1 />
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#eeeded] h-[349px] overflow-clip relative rounded-[16px] shrink-0 w-[544px]">
      <div className="absolute h-[238.919px] left-1/2 top-[calc(50%-0.04px)] translate-x-[-50%] translate-y-[-50%] w-[544px]" data-name="Captura de pantalla 2024-11-06 a las 14.06.08 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20241106ALas1406082} />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[32px] text-nowrap">Masterclass en vivo</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[22px] text-center w-[min-content]">Inspírate con historias reales de emprendedores exitosos gracias a nuestras masterclass en vivo</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded-[32px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[80px] pt-[48px] px-[48px] relative w-full">
          <Frame10 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[32px] text-nowrap">Sesiones en grupo</p>
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[22px] text-center w-[min-content]">Pensadas para que pidas ayuda o feedback a otros emprendedores para mejorar tu startup.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-[#141414] grow min-h-px min-w-px relative rounded-[32px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[80px] pt-[48px] px-[48px] relative w-full">
          <div className="h-[349px] relative rounded-[20px] shrink-0 w-[544px]" data-name="image 205">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img alt="" className="absolute h-[116.14%] left-[-5.59%] max-w-none top-[-7.97%] w-[111.18%]" src={imgImage205} />
            </div>
          </div>
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 text-black w-[636px]" data-name="Content">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] w-[622px]">Acceso a +3.000 USD en beneficios exclusivos</p>
      <div className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[22px] w-[min-content]">
        <p className="mb-0">Descuentos en los mejores servicios y herramientas</p>
        <p>para impulsar tu startup sin gastar dinero.</p>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="[grid-area:1_/_1] h-[304px] ml-0 mt-[32px] relative w-[547.005px]" data-name="Vector">
      <div className="absolute inset-[-0.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 547.005 305.5">
          <g id="Vector">
            <path d={svgPaths.p26607700} id="Vector 2" stroke="var(--stroke-0, #C1C7D0)" strokeWidth="1.5" />
            <path d={svgPaths.pc4fd880} id="Vector 3" stroke="var(--stroke-0, #C1C7D0)" strokeWidth="1.5" />
            <path d={svgPaths.p1c64f600} id="Vector 4" stroke="var(--stroke-0, #C1C7D0)" strokeWidth="1.5" />
            <path d={svgPaths.p20514ca0} id="Vector 6" stroke="var(--stroke-0, #C1C7D0)" strokeWidth="1.5" />
            <path d={svgPaths.p3f1af780} id="Vector 5" stroke="var(--stroke-0, #C1C7D0)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[19.088px] relative shrink-0 w-[31.999px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.0881">
        <g id="Group">
          <path d={svgPaths.p349fe140} fill="var(--fill-0, #252F3E)" id="Vector" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p5e49da0} fill="var(--fill-0, #FF9900)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p12fe5c00} fill="var(--fill-0, #FF9900)" fillRule="evenodd" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Square1() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex h-[64px] items-center justify-center ml-0 mt-0 overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Square 1">
      <Group />
    </div>
  );
}

function Square2() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-start ml-0 mt-[76px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Square 2">
      <div className="relative shrink-0 size-[32px]" data-name="notion-symbol 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.87%] left-0 max-w-none top-[-25.94%] w-[270%]" src={imgNotionSymbol1} />
        </div>
      </div>
    </div>
  );
}

function Square3() {
  return (
    <div className="[grid-area:1_/_1] ml-[76px] mt-[76px] relative size-[64px]" data-name="Square 3">
      <div className="absolute inset-[-1.56%_-3.13%_-4.69%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
          <g filter="url(#filter0_d_2145_1121)" id="Square 3">
            <rect fill="var(--fill-0, white)" height="64" rx="16" width="64" x="2" y="1" />
            <path clipRule="evenodd" d={svgPaths.p14452a00} fill="var(--fill-0, #146EF5)" fillRule="evenodd" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68" id="filter0_d_2145_1121" width="68" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2145_1121" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2145_1121" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Square4() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-start ml-0 mt-[228px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Square 4">
      <div className="relative shrink-0 size-[32px]" data-name="Microsoft-Azure-logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[207.5%] left-[-3.19%] max-w-none top-[-55.63%] w-[368.89%]" src={imgMicrosoftAzureLogo1} />
        </div>
      </div>
    </div>
  );
}

function Square5() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex h-[64px] items-center justify-center ml-0 mt-[152px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Square 5">
      <div className="h-[30px] relative shrink-0 w-[32px]" data-name="1_czqOMYaaNDhd6RTi4VtsuQ 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.08%] left-[-1.6%] max-w-none top-[-4.71%] w-[539.58%]" src={img1CzqOmYaaNDhd6RTi4VtsuQ1} />
        </div>
      </div>
    </div>
  );
}

function Square6() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-center justify-center ml-[76px] mt-[228px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[64px]" data-name="Square 6">
      <div className="h-[32px] relative shrink-0 w-[27px]" data-name="image 634">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[204.69%] left-[-40.74%] max-w-none top-[-47.66%] w-[485.19%]" src={imgImage634} />
        </div>
      </div>
    </div>
  );
}

function Adalo() {
  return (
    <div className="absolute inset-[-5.74%_-7.78%_5.62%_5.56%]" data-name="Adalo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.711 32.0395">
        <g id="Adalo">
          <path d={svgPaths.p1f4bea00} fill="var(--fill-0, #3A3A3A)" id="Element" />
          <path clipRule="evenodd" d={svgPaths.p257de180} fill="var(--fill-0, #C4C4C4)" fillRule="evenodd" id="Element_2" />
          <path clipRule="evenodd" d={svgPaths.p2b98ab00} fill="var(--fill-0, #3A3A3A)" fillRule="evenodd" id="Element_3" />
          <path clipRule="evenodd" d={svgPaths.p353dab80} fill="var(--fill-0, #3A3A3A)" fillRule="evenodd" id="Element_4" />
          <path clipRule="evenodd" d={svgPaths.p3b074800} fill="var(--fill-0, #3A3A3A)" fillRule="evenodd" id="Element_5" />
          <path clipRule="evenodd" d={svgPaths.p15e25100} fill="var(--fill-0, #3A3A3A)" fillRule="evenodd" id="Element_6" />
          <path clipRule="evenodd" d={svgPaths.pfb10800} fill="var(--fill-0, #00B3A2)" fillRule="evenodd" id="Element_7" />
          <path clipRule="evenodd" d={svgPaths.p3b6eef00} fill="var(--fill-0, #F94929)" fillRule="evenodd" id="Element_8" />
          <path clipRule="evenodd" d={svgPaths.p932c700} fill="var(--fill-0, #FFC300)" fillRule="evenodd" id="Element_9" />
        </g>
      </svg>
    </div>
  );
}

function Logomark() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Logomark">
      <Adalo />
    </div>
  );
}

function Square7() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-start ml-[76px] mt-[152px] overflow-clip p-[16px] relative rounded-[16px]" data-name="Square 7">
      <Logomark />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_10.95%_11.11%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3859 32">
        <g id="Group">
          <path d={svgPaths.p1e875700} fill="var(--fill-0, #262626)" id="Vector" />
          <path d={svgPaths.p16d37200} fill="var(--fill-0, #0000FF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BubbleIconSeeklogo() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[33px]" data-name="bubble-icon-seeklogo 1">
      <Group1 />
    </div>
  );
}

function Square9() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-center justify-center ml-[76px] mt-[152px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[64px]" data-name="Square 10">
      <BubbleIconSeeklogo />
    </div>
  );
}

function Square10() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-center justify-center ml-[152px] mt-[152px] overflow-clip p-[16px] relative rounded-[16px] size-[64px]" data-name="Square 11">
      <div className="h-[40px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[23px]" data-name="image 633">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-1.22%] max-w-none top-0 w-[424.18%]" src={imgImage633} />
        </div>
      </div>
    </div>
  );
}

function Make() {
  return (
    <div className="absolute inset-[5.56%]" data-name="Make">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4444 28.4444">
        <g id="Make">
          <path d={svgPaths.p3044fb00} fill="var(--fill-0, #6D00CC)" id="Element" />
          <path d={svgPaths.p2d76b440} fill="var(--fill-0, white)" id="Element_2" />
        </g>
      </svg>
    </div>
  );
}

function Logomark1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Logomark">
      <Make />
    </div>
  );
}

function Square8() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-start ml-0 mt-[304px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Square 9">
      <Logomark1 />
    </div>
  );
}

function Square() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Square">
      <Square1 />
      <Square2 />
      <Square3 />
      <Square4 />
      <Square5 />
      <Square6 />
      <Square7 />
      <Square9 />
      <Square10 />
      <Square8 />
    </div>
  );
}

function Circle() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]" data-name="Circle">
      <div className="absolute inset-[-1.25%_-2.5%_-3.75%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
          <g filter="url(#filter0_d_2145_1090)" id="Circle">
            <circle cx="42" cy="41" fill="var(--fill-0, black)" id="Ellipse 1" r="40" />
            <g id="Iso">
              <path d={svgPaths.pb789680} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.pccfd500} fill="var(--fill-0, #FA1C38)" id="Vector_2" />
              <path d={svgPaths.pc9a8c80} fill="var(--fill-0, #FA1C38)" id="Vector_3" />
              <path d={svgPaths.p36ba4680} fill="var(--fill-0, #FA1C38)" id="Vector_4" />
              <path d={svgPaths.p36f1880} fill="var(--fill-0, #FA1C38)" id="Vector_5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84" id="filter0_d_2145_1090" width="84" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2145_1090" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2145_1090" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[340px] mt-[144px] place-items-start relative" data-name="Link">
      <Circle />
    </div>
  );
}

function Item() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Item">
      <Vector />
      <Square />
      <Link />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[496px] items-center justify-between overflow-clip pl-[96px] pr-0 py-[64px] relative rounded-[32px] shrink-0 w-[1312px]">
      <Content4 />
      <Item />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center p-[64px] relative shrink-0 w-[1440px]" data-name="Container">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#d4ff78] content-stretch flex items-start justify-center left-[287px] p-[64px] rounded-[16px] top-[688.5px] w-[866px]">
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#141414] text-[32px] text-nowrap">CTA</p>
    </div>
  );
}

function Argentina() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="argentina">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2145_1078)" id="argentina">
          <path d={svgPaths.p1c665200} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p16933700} fill="var(--fill-0, #338AF3)" id="Vector_2" />
            <path d={svgPaths.pc4cce00} fill="var(--fill-0, #338AF3)" id="Vector_3" />
          </g>
          <path d={svgPaths.p1c01c00} fill="var(--fill-0, #FFDA44)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_2145_1078">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#232323] text-[18px] text-nowrap">Emilia Vicini</p>
      <Argentina />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame4 />
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[14px] text-black text-nowrap">Co-founder de EIOU Academy</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <Frame1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Content">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-end p-[32px] relative w-full">
          <p className="font-['Satoshi_Variable:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black w-full">“Buscábamos una metodología clara para validar iniciativas. En Novo la encontramos. Definitivamente nos ahorró mucho tiempo, muchos dolores de cabeza y muchos gastos.”</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[287px] items-center justify-center left-[64px] top-[240.5px] w-[1312px]">
      {[...Array(3).keys()].map((_, i) => (
        <Content5 key={i} />
      ))}
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-white h-[1030px] overflow-clip relative shrink-0 w-[1440px]" data-name="Blog / 1 /">
      <div className="absolute flex h-[603px] items-center justify-center left-1/2 top-[427.5px] translate-x-[-50%] w-[1440px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-black h-[603px] w-[1440px]" />
        </div>
      </div>
      <Frame2 />
      <p className="absolute font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] left-[720px] text-[40px] text-black text-center text-nowrap top-[112.5px] translate-x-[-50%]">Testimonios de miembros</p>
      <Frame3 />
    </div>
  );
}

function Iso() {
  return (
    <div className="absolute inset-[0_0_0.02%_91.85%]" data-name="Iso">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0656 21.9949">
        <g id="Iso">
          <path d={svgPaths.p844d100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1e77bd80} fill="var(--fill-0, #FA1C38)" id="Vector_2" />
          <path d={svgPaths.p3e697480} fill="var(--fill-0, #FA1C38)" id="Vector_3" />
          <path d={svgPaths.p275d4500} fill="var(--fill-0, #FA1C38)" id="Vector_4" />
          <path d={svgPaths.p19987b80} fill="var(--fill-0, #FA1C38)" id="Vector_5" />
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
          <mask height="21" id="mask0_2145_1085" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="130" x="0" y="0">
            <g id="Logo">
              <path d={svgPaths.p38849a80} fill="#222831" />
              <path d={svgPaths.p2bb58200} fill="#222831" />
              <path d={svgPaths.p265b7600} fill="#222831" />
              <path d={svgPaths.p14fb1200} fill="#222831" />
              <path d={svgPaths.p231ac800} fill="url(#paint0_linear_2145_1085)" />
              <path d={svgPaths.p34e17000} fill="url(#paint1_linear_2145_1085)" />
              <path d={svgPaths.p2f34fc80} fill="url(#paint2_linear_2145_1085)" />
              <path d={svgPaths.p3fe8fc80} fill="url(#paint3_linear_2145_1085)" />
            </g>
          </mask>
          <g mask="url(#mask0_2145_1085)">
            <rect fill="var(--fill-0, #FA1C38)" height="20.3776" id="Rectangle 22724" width="56.0856" x="73.901" y="4.999e-08" />
            <rect fill="var(--fill-0, white)" height="20.4409" id="Rectangle 22725" width="69.7771" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2145_1085" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2145_1085" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2145_1085" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
            <stop stopColor="#6D6AFE" />
            <stop offset="0.349653" stopColor="#D86FBD" />
            <stop offset="0.667361" stopColor="#F9847A" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2145_1085" x1="16.243" x2="126.668" y1="20.3777" y2="20.3777">
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
      <Iso />
      <MaskGroup />
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

function Links() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',sans-serif] font-bold gap-[32px] items-start leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white" data-name="Links">
      <p className="relative shrink-0">De idea a tracción</p>
      <p className="relative shrink-0">Club de fundadores</p>
      <p className="relative shrink-0">Sobre nosotros</p>
    </div>
  );
}

function IconLinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Instagram">
          <path clipRule="evenodd" d={svgPaths.p3f3f55f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconYoutube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Youtube">
          <path d={svgPaths.p35f23f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Social Links">
      <IconLinkedIn />
      <IconInstagram />
      <IconYoutube />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <Logo3 />
      <Links />
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
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Row">
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-nowrap text-white">© 2023 novolabs. Todos los derechos reservados.</p>
      <FooterLinks />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Credits">
      <div className="bg-white h-px opacity-[0.15] shrink-0 w-full" data-name="Divider" />
      <Row2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#141414] relative shrink-0 w-[1440px]" data-name="Footer / 4 /">
      <div className="content-stretch flex flex-col gap-[80px] items-center overflow-clip px-[64px] py-[80px] relative rounded-[inherit] w-full">
        <Content6 />
        <Credits />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function About() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="About / 1 /">
      <Navbar />
      <Group2 />
      <Layout />
      <Container1 />
      <Container2 />
      <Blog />
      <Footer />
    </div>
  );
}