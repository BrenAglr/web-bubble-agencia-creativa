import Image from "next/image";
import ContactButton from "../contactButton";

const BannerSlogan = () => {
  return (
    <section className="w-full bg-softblack text-white min-h-[75vh] flex items-center px-6 py-12 md:px-16 relative overflow-hidden">
      <div className="max-w-1xl space-y-6 z-10">
        <h1 className="text-3xl md:text-6xl leading-tight font-gatwickLight">
          IMAGINACIÓN EN ACCIÓN
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 font-gatwickLight">
          Somos una agencia creativa que convierte conceptos en realidades visuales.
        </p>
        <div className="pt-4">
          <ContactButton fromColor="from-[#36A1D3]" toColor="to-[#A570FF]" />
        </div>
      </div>

      {/* Imagen decorativa en esquina inferior izquierda */}
      <div className="absolute -bottom-24 -left-20 w-40 md:w-60 opacity-80 z-0">
        <Image
          src="/images/pez.png"
          alt="Decoración"
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default BannerSlogan;
