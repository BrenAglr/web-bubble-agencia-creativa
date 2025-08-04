"use client"

import Image from "next/image";
import { useState } from "react";

const clients = [
  { name: "Casona Perdriel", logo: "/logos/casona.png", logo2: "/logos/casonalogo.png" },
  { name: "Igma Sport", logo: "/logos/igma.png", logo2: "/logos/igmalogo.png" },
  { name: "Equinoterapia Mendoza", logo: "/logos/equino.png", logo2: "/logos/equinologo.png" },
  { name: "Mandala Pilates", logo: "/logos/mandala.png",logo2: "/logos/mandalalogo.png" },
  { name: "Francisco Ortiz", logo: "/logos/fran.png", logo2: "/logos/franlogo.png"},
  { name: "Conexión", logo: "/logos/conexion.png", logo2: "/logos/conexionlogo.png" },
  { name: "FP", logo: "/logos/fp.png", logo2: "/logos/fplogo.png" },
];

const ClientLogos = () => {
    const topRow = clients.slice(0, 4);
    const bottomRow = clients.slice(4);

  return (
     <div className="space-y-16">
      {/* Fila superior */}
      <div className="flex flex-wrap justify-center gap-8">
        {topRow.map(({ name, logo, logo2 }) => (
          <LogoItem key={name} name={name} logo={logo} logo2={logo2} />
        ))}
      </div>

      {/* Fila inferior centrada */}
      <div className="flex justify-center gap-16">
        {bottomRow.map(({ name, logo, logo2 }) => (
          <LogoItem key={name} name={name} logo={logo} logo2={logo2} />
        ))}
      </div>
    </div>
  );
};

const LogoItem = ({ name, logo, logo2 }: { name: string; logo: string; logo2: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-32 h-32 transition-transform duration-300 hover:scale-105 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
       <Image
        src={logo2}
        alt={`Logo de ${name}`}
        fill
        className="object-contain transition-opacity duration-500 group-hover:opacity-0"
      />
      <Image
        src={logo}
        alt={`Logo de ${name}`}
        fill
        className="object-contain grayscale hover:grayscale-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        {name}
      </div>
    </div>
  );
};

export default ClientLogos;

//  <Image
//           src="/images/close.jpeg"
//           alt="Nuestro equipo trabajando"
//           fill
//           className="object-cover transition-opacity duration-500 group-hover:opacity-0"
//         />
//         <Image
//           src="/images/open.jpeg"
//           alt="Nuestro equipo trabajando (hover)"
//           fill
//           className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         />