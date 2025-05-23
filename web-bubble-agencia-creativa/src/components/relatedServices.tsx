// import { IService } from "@/interfaces/services";
// import clsx from "clsx";
// import Link from "next/link";

// interface Props {
//   currentSlug: string;
//   services: IService[];
// }

// const RelatedServices = ({ currentSlug, services }: Props) => {
//   const related = services.filter((s) => s.slug !== currentSlug);

//   return (
//     <section className="w-full py-16 px-6">
//       <h2 className="text-3xl text-softblack font-bold mb-10 text-center">
//         Otros servicios de la agencia
//       </h2>
//       <div className="grid gap-6 md:grid-cols-3">
//         {related.map((service) => (
//           <Link key={service.slug} href={service.link}>
//             <div
//               className={clsx(`rounded-xl p-10 text-graywhite transition-transform hover:scale-105 cursor-pointer bg-gradient-to-br flex items-center justify-center h-40 shadow-xl shadow-black/30`,
//                    `from-${service.from}`,
//                   `to-${service.to}`,
//               )
//               }
//             >
//               <h3 className="text-2xl font-bold text-center">{service.name}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RelatedServices;


"use client"

import { IService } from "@/interfaces/services";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  currentSlug: string;
  services: IService[];
}

const RelatedServices = ({ currentSlug, services }: Props) => {
  const related = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="w-full py-16 px-6">
      <h2 className="text-3xl text-softblack font-bold mb-10 text-center">
        Otros servicios de la agencia
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {related.map((service, index) => (
          <Link key={service.slug} href={service.link}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }} // para que solo se anime una vez, al entrar un 20% del componente
                className={clsx(
                  `rounded-xl p-10 text-graywhite cursor-pointer bg-gradient-to-br flex items-center justify-center h-40 shadow-xl shadow-black/30`,
                  `from-${service.from}`,
                  `to-${service.to}`
                )}
            >
            <h3 className="text-2xl font-bold text-center">{service.name}</h3>
            </motion.div>


          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedServices;
