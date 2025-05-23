import ContactForm from "../contactForm";
import BurbujasForm from "./burbujasForm";
import ContactInvite from "./contactInvite";

const HomeContact = () => {
  return (
    <div
      className="w-full min-h-[90vh] flex flex-col lg:flex-row px-8 py-32 gap-12 relative bg-cover bg-center"
    >
      <BurbujasForm/>
      {/* Optional: Overlay para mejorar contraste */}
      <div className="absolute inset-0 z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex-1 flex items-start">
        <ContactInvite />
      </div>

      <div className="relative z-10 flex-1 flex items-start">
        <ContactForm />
      </div>
    </div>
  );
}
 export default HomeContact