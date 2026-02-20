import img202305811 from "figma:asset/a96d0f36b58364b6582064c27aef65d9cab2c977.png";

function Button() {
  return (
    <div className="bg-[#ff3a20] content-stretch flex h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff3a20] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white">Aplicar al Programa</p>
    </div>
  );
}

function Column() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[768px]" data-name="Column">
      <p className="font-['Thunder:Bold_LC',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[112px] text-black text-center text-nowrap uppercase">
        {`Club de Fundadores, `}
        <br aria-hidden="true" />
        alumni exclusivo
      </p>
      <p className="font-['Satoshi_Variable:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-black text-center w-[566px]">Donde podes conectar con emprendedores e inversores de todo LATAM y España para llevar tu proyecto al siguiente nivel.</p>
      <Button />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[810px] left-0 top-0 w-[1440px]" data-name="20230581 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202305811} />
      </div>
      <Column />
    </div>
  );
}