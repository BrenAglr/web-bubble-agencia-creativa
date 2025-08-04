import ContactForm from "@/components/contactForm"
import ContactText from "@/components/contactText"
import BurbujasForm from "@/components/home/burbujasForm"

const Contact = () => {
  return (
   <section className="w-full min-h-[90vh] flex flex-col lg:flex-row px-8 py-8 gap-12 relative bg-cover bg-center">
      {/* Burbujas de fondo */}
      <BurbujasForm />

      {/* Contenedor oscuro sutil (opcional para contraste) */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Texto de contacto */}
        <div className="w-full lg:w-1/2">
          <ContactText />
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
