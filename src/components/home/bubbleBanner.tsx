import ContactButton from "../contactButton";

const BubbleBanner= () => {
  return (
    <div className="relative w-full bg-[#fff8f0] text-gray-800 rounded-xl shadow-md overflow-visible py-12 px-6 flex flex-col items-center text-center gap-4 lg:flex-row lg:justify-between lg:text-left lg:px-16">
      {/* Burbujas decorativas animadas */}
      <img src="/images/burbujasola.png" alt="burbuja flotando" className="absolute top-[-40px] left-[-40px] w-36 h-36 z-0 animate-float" />
      <img src="/images/burbujasola.png" alt="burbuja flotando" className="hidden lg:block absolute bottom-[-50px] right-[0px] w-48 h-48 z-0 animate-float delay-200" />
      <img src="/images/burbujasola.png" alt="burbuja flotando" className="absolute top-[30%] left-[10%] w-20 h-20 z-0 animate-float delay-300" />
      <img src="/images/burbujasola.png" alt="burbuja flotando" className="absolute bottom-[20%] right-[25%] w-24 h-24 z-0 animate-float delay-500" />
      <img src="/images/burbujasola.png" alt="burbuja flotando" className="hidden lg:block absolute bottom-[50%] right-[50%] w-36 h-36 z-0 animate-float delay-200 " />
      <img src="/images/burbujasola.png" alt="burbuja flotando" className="block md:hidden absolute bottom-[-50px] right-[0px] w-20 h-20 z-0 animate-float delay-200" />

 {/* <div className="absolute top-[-40px] left-[-40px] w-36 h-36 bg-indigo opacity-50 rounded-full blur-sm z-0 animate-float" />
      <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-pictonblue opacity-50 rounded-full blur-sm z-0 animate-float delay-200" />
      <div className="absolute top-[30%] left-[10%] w-20 h-20 bg-redish opacity-40 rounded-full blur-sm z-0 animate-float delay-300" />
      <div className="absolute bottom-[20%] right-[25%] w-24 h-24 bg-murray opacity-40 rounded-full blur-sm z-0 animate-float delay-500" /> */}


      {/* Contenido */}
      <div className="z-10 max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Tenemos café, ideas frescas y muchas burbujas creativas ☕🫧
        </h2>
        <p className="text-base sm:text-lg">
          Contanos tu proyecto y lo hacemos realidad juntas.
        </p>
      </div>

    </div>
  );
}
export default BubbleBanner