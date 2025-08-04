"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { DataServices } from "@/helpers/data";
import { IService } from "@/interfaces/services";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const services: IService[] = DataServices;

  const desktopLinkStyle =
    "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-graywhite after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-softblack text-graywhite shadow-lg fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center h-16 overflow-hidden w-full">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold max-w-[160px] overflow-hidden">
          <div className="flex items-center">
            <img
              src="/images/bubble.png"
              alt="Logo"
              className="h-16 w-auto max-w-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center relative">
          <div className="relative">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className={`${desktopLinkStyle} transition`}
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

          <Link href="/clientes" className={desktopLinkStyle}>
            Clientes
          </Link>
          <Link href="/contacto" className={desktopLinkStyle}>
            Contacto
          </Link>
        </div>

        {/* Mobile hamburger icon */}
        <button
          className={`md:hidden focus:outline-none text-graywhite z-50`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-4 py-2 space-y-4 md:hidden bg-softblack text-graywhite animate-fade-in-down w-full overflow-hidden">
          {/* Links simples sin hover celeste */}
          <div className="space-y-2 pb-2">
            <Link href="/clientes" className="block border-b border-white pb-2">
              Clientes
            </Link>
            <Link href="/contacto" className="block border-b border-white">
              Contacto
            </Link>
          </div>

          {/* Submenú de servicios */}
          <div>
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="w-full text-left border-b border-white"
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
                        `hover:to-${to}`
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
