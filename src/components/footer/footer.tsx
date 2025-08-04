"use client"

import { useState, useEffect } from "react";
import ServicesMenu from "./servicesMenu";
import ContactInfo from "./contactInfo";
import FooterImage from "./footerImage";

export default function Footer() {
  const [showServices, setShowServices] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-softblack text-graywhite px-6 pt-12 pb-12">
      {/* Secciones principales */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
        {/* Servicios (colapsable en mobile) */}
        <div className="w-full lg:w-1/2">
          <div className="lg:hidden mb-4">
            <button
              className="text-graywhite px-2 py-2 underline"
              onClick={() => setShowServices(!showServices)}
            >
              Información
            </button>
          </div>

          {isClient && showServices && (
            <div className="lg:hidden">
              <ServicesMenu />
            </div>
          )}

          <div className="hidden lg:block">
            <ServicesMenu />
          </div>
        </div>

        {/* Contacto */}
        <div className="w-full lg:w-1/2">
          <ContactInfo />
        </div>
      </div>

      {/* Imagen inferior opcional */}
      {/* <div className="mt-8">
        <FooterImage />
      </div> */}
    </footer>
  );
}
