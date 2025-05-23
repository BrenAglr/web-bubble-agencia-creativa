"use client";

import { useState } from "react";

export default function ContactForm() {
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  return (
    <div className="w-full flex items-start justify-center px-0">
      <form
        className="w-full max-w-xl rounded-2xl p-8 space-y-6 text-gray-800
          bg-white/10 backdrop-blur-md border border-white/20 
          shadow-xl shadow-black/30"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* NOMBRE */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-base font-semibold text-gray-700">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            required
            className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
          />
        </div>

        {/* EMPRESA */}
        <div className="flex flex-col">
          <label htmlFor="company" className="text-base font-semibold text-gray-700">
            Nombre de la empresa <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            required
            className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
          />
        </div>

        {/* TELÉFONO */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-base font-semibold text-gray-700">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-base font-semibold text-gray-700">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
          />
        </div>

        {/* MENSAJE */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-base font-semibold text-gray-700">
            Descripción del proyecto o consulta <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={3}
            className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base resize-none placeholder-gray-500"
            placeholder="Contanos sobre tu idea o en qué podemos ayudarte"
          />
        </div>

        {/* CHECK PRIVACIDAD */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="privacy"
            checked={acceptedPolicy}
            onChange={() => setAcceptedPolicy(!acceptedPolicy)}
            className="accent-black"
            required
          />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            Acepto la política de privacidad <span className="text-red-500">*</span>
          </label>
        </div>

        {/* BOTÓN */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-black text-white text-sm px-6 py-2 rounded-md hover:bg-opacity-80 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
