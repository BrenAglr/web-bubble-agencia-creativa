import Image from "next/image";

export default function TextWork() {
  return (
    <section className="flex flex-col items-start gap-6 px-8 py-6 w-full">
      <div className="flex-1">
        <h3 className="text-3xl font-semibold mb-4">¿Cómo trabajamos?</h3>
        <p className="text-base text-softblack max-w-lg">
          La estrategia cobra vida cuando nuestras áreas trabajan en equipo.
        </p>
      </div>
      <div className="relative group w-full h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/images/close.jpeg"
          alt="Nuestro equipo trabajando"
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src="/images/open.jpeg"
          alt="Nuestro equipo trabajando (hover)"
          fill
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </section>
  );
  }

  // 🧠 Bubble Brain piensa, 🖋️ Bubble Lab crea,  📸 Bubble Studio captura y 💻 Bubble Code desarrolla.