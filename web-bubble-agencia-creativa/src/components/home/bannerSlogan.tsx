import ContactButton from "../contactButton";

const BannerSlogan = () => {
    return (
      <section className="w-full bg-softblack text-white min-h-[75vh] flex items-center px-6 py-12 md:px-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Potenciamos ideas. <br /> Creamos experiencias.
          </h1>
          <p className="text-lg md:text-2xl text-gray-400">
            Somos una agencia creativa que convierte conceptos en realidades visuales.
          </p>
          <div className="pt-4">
            <ContactButton fromColor="from-[#36A1D3]" toColor="to-[#A570FF]" />
          </div>
        </div>
      </section>
    );
  }
  export default BannerSlogan