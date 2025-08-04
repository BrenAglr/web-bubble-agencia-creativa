import Image from "next/image";

export default function TextWork() {
  return (
    <section className="flex flex-col items-start gap-6 w-full max-w-full box-border px-4 sm:px-6 md:px-8 py-6 overflow-hidden">
      <div className="flex-1 max-w-full box-border">
        <h3 className="font-gatwickLight mb-4 text-2xl sm:text-3xl md:text-4xl leading-snug">¿CÓMO TRABAJAMOS?</h3>
        <p className="text-base text-softblack max-w-lg break-words">
          La estrategia cobra vida cuando nuestras áreas trabajan en equipo.
        </p>
      </div>
      <div className="relative group w-full max-w-full h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/images/open.png"
          alt="Nuestro equipo trabajando"
          fill
          className=" transition-opacity duration-500 group-hover:opacity-0"
          sizes="100vw"
          priority
        />
        <Image
          src="/images/open.png"
          alt="Nuestro equipo trabajando (hover)"
          fill
          className=" opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}

  // 🧠 Bubble Brain piensa, 🖋️ Bubble Lab crea,  📸 Bubble Studio captura y 💻 Bubble Code desarrolla.