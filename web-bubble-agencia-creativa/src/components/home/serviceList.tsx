"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { DataServices } from "@/helpers/data";

const services = DataServices

const ServiceList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-6 text-black">
      {services.map(({ name, description, link, from, to }, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={name} className="pb-4 border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className={clsx(
                "w-full flex items-center justify-between text-left text-2xl font-bold transition-all duration-300",
                "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r",
                `hover:from-${from}`,
                `hover:to-${to}`
              )}
            >
              <span className="flex items-center gap-2">
                {isOpen ? "▼" : "▶"} {name}
              </span>
            </button>

            <div
              className={clsx(
                "overflow-hidden transition-all duration-500 ease-in-out",
                isOpen ? "max-h-70 opacity-100 mt-3" : "max-h-0 opacity-0"
              )}
            >
              <div className="pl-7 text-base space-y-2">
                <p>{description}</p>
                <Link
                  href={link}
                  className={clsx(
                    "inline-flex items-center gap-1 font-medium transition-colors duration-300 text-pictonblue",
                    "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r",
                    `hover:from-${from}`,
                    `hover:to-${to}`
                  )}
                >
                  Conocé más <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
