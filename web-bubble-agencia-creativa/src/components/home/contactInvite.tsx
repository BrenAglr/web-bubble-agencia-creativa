const ContactInvite = () => {
  return (
    <div className="flex flex-col h-full justify-top p-6 sm:p-10 text-softblack">
      <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
        ¿Querés hablar con nosotras?
      </h2>

      <div className=" p-6 rounded-2xl transition ">
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-snug">
          Tenemos café, ideas frescas y muchas burbujas creativas ☕🫧
        </h4>

        <p className="text-base sm:text-lg text-softblack/80">
          Contanos tu proyecto y lo hacemos realidad juntas.
        </p>
      </div>
    </div>
  );
};

export default ContactInvite;
