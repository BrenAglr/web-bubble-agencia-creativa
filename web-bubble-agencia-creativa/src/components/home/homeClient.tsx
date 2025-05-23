import ClientLogos from "./clientLogos";

const HomeClient = () => {
  return (
    <section className="w-full bg-softblack text-white px-4 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Nuestros clientes</h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Estas son algunas de las marcas que confiaron en nuestro trabajo para impulsar su comunicación visual y digital.
          </p>
        </div>

        <ClientLogos />
      </div>
    </section>
  );
};

export default HomeClient;
