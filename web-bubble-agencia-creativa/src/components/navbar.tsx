"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { DataServices } from "@/helpers/data";
import { IService } from "@/interfaces/services";

// const colorMap = {
//   murray: "hover:from-murray",
//   orangesh: "hover:from-orangesh",
//   redish: "hover:from-redish",
//   indigo: "hover:from-indigo",
//   pictonblue: "hover:from-pictonblue",
// };

// const toColorMap = {
//   murray: "hover:to-murray",
//   orangesh: "hover:to-orangesh",
//   redish: "hover:to-redish",
//   indigo: "hover:to-indigo",
//   pictonblue: "hover:to-pictonblue",
// };

// const mobileColorMap = {
//   murray: "from-murray",
//   orangesh: "from-orangesh",
//   redish: "from-redish",
//   indigo: "from-indigo",
//   pictonblue: "from-pictonblue",
// };

// const mobileToColorMap = {
//   murray: "to-murray",
//   orangesh: "to-orangesh",
//   redish: "to-redish",
//   indigo: "to-indigo",
//   pictonblue: "to-pictonblue",
// };

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const services: IService[] = DataServices;

  return (
    <nav className="bg-softblack text-graywhite shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <div className="flex items-center">
            <img
              src="/photos/cisa.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center relative">
          {/* Secciones dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="hover:text-pictonblue transition"
            >
              Servicios ▼
            </button>

            <div
              className={`absolute left-0 mt-2 w-48 bg-softblack border rounded-xl shadow-lg z-10 origin-top transition-all duration-200 ease-out ${
                isSubMenuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {services.map(({ slug, name, from, to, link }, index) => (
                <Link
                  key={slug}
                  href={`${link}`}
                  onClick={() => setIsSubMenuOpen(false)}
                  className={clsx(
                    "block px-4 py-2 transition-all duration-300 text-graywhite bg-softblack hover:text-white hover:bg-gradient-to-r",
                    `hover:from-${from}`,
                    `hover:to-${to}`,
                    index === 0 && "rounded-t-xl",
                    index === services.length - 1 && "rounded-b-xl"
                  )}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/clientes" className="hover:text-pictonblue transition">
            Clientes
          </Link>
          <Link href="/contacto" className="hover:text-pictonblue transition">
            Contacto
          </Link>
        </div>

        {/* Mobile hamburger icon */}
        <button
          className={`md:hidden focus:outline-none ${
            isMenuOpen ? "text-pictonblue" : "text-graywhite"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-4 py-2 space-y-4 md:hidden bg-softblack text-graywhite animate-fade-in-down">
          {/* Links simples */}
          <div className="space-y-2 pb-2">
            <Link href="/clientes" className="block border-b border-pictonblue pb-2">
              Clientes
            </Link>
            <Link href="/contacto" className="block border-b border-pictonblue">
              Contacto
            </Link>
          </div>

          {/* Submenú de servicios */}
          <div>
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="w-full text-left border-b border-pictonblue"
            >
              Servicios {isSubMenuOpen ? "▲" : "▼"}
            </button>

            {isSubMenuOpen && (
              <div className="mt-2 space-y-2">
                {services.map(({ slug, name, link, from, to }) => (
                  <Link
                    key={slug}
                    href={`${link}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSubMenuOpen(false);
                    }}
                    className="block"
                  >
                    {name}
                    <div
                      className={clsx(
                        "h-px rounded-full bg-gradient-to-r",
                         `hover:from-${from}`,
                         `hover:to-${to}`,
                      )}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
