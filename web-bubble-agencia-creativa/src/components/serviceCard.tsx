'use client'

import { useState } from 'react';
import { IService } from '@/interfaces/services';
import Link from 'next/link';
import clsx from "clsx";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  service: IService;
}

const ServiceCard = ({ service }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDetail = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={clsx(
      `min-h-screen w-full text-graywhite py-16 px-6 bg-gradient-to-br`,
      `from-${service.from}`,
      `to-${service.to}`,
    )}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">{service.description}</p>

        <Link
          href="/contacto"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition mb-10"
        >
          Contactá con nosotras
        </Link>

        <ul className="space-y-4">
          {service.detail.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li key={index} className="bg-white bg-opacity-10 rounded-xl p-4">
                <button
                  onClick={() => toggleDetail(index)}
                  className="flex items-center justify-between w-full text-left font-semibold text-lg"
                >
                  <span>{item.title}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                <div
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm text-white">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServiceCard;
