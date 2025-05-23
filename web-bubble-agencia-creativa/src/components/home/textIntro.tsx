'use client'
import { useState } from 'react';

export default function TextIntro() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full text-softblack px-8 py-12">
      <h2 className="text-4xl font-bold mb-4">Sobre nosotras</h2>
      
      <p className={`text-lg max-w-3xl transition-all duration-300 ease-in-out
        ${expanded ? '' : 'line-clamp-5 md:line-clamp-none'}`}>
        Somos una agencia que combina <strong>creatividad, visión y conexión</strong>. Nuestro propósito es acompañar a las empresas que quieren <strong>crecer</strong> de verdad, otorgándole las herramientas necesarias para el <strong>éxito</strong> en el ✨mundo digital. ✨
        No creemos en fórmulas mágicas; confiamos en la estrategia pensada <strong>a medida</strong>, el trabajo en <strong>equipo</strong> y la <strong>calidez</strong>. Porque cada marca es <strong>única</strong>, y nos encanta descubrir qué la hace <strong>brillar</strong>.
      </p>

      {/* Botón solo en mobile */}
      <div className="mt-2 md:hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-murray font-semibold underline hover:opacity-80 transition"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </section>
  );
}
