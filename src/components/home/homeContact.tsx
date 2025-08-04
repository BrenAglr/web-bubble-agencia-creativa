// HomeContact.jsx
import ContactForm from "../contactForm";
import BurbujasForm from "./burbujasForm";
import ContactInvite from "./contactInvite";

const HomeContact = () => {
  return (
    <div
      className="w-full min-h-[90vh] flex flex-col lg:flex-row px-4 sm:px-8 py-32 gap-12 relative bg-cover bg-center overflow-x-hidden"
    >
      <BurbujasForm />
      {/* Optional: Overlay para mejorar contraste */}
      <div className="absolute inset-0 z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex-1 flex items-start max-w-full box-border">
        <ContactInvite />
      </div>

      <div className="relative z-10 flex-1 flex items-start max-w-full box-border">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeContact;
