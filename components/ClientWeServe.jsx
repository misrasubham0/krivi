import { clientWeServeData } from "@/data/HomePage";
import Image from "next/image";
import React from "react";

const ClientWeServe = () => {
  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          Client We Serve
        </h1>
      </div>
      <p className="text-center mt-3 font-medium text-base md:text-lg">
        Tailored solutions for your sector's unique challenges.
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {clientWeServeData.map((card, idx) => (
          <div key={idx}>
            <Image src={card.image} alt={card.name} width={500} height={500} />
            <h1 className="font-semibold text-xl md:text-2xl text-center mt-5">
              {card.name}
            </h1>
            <p className="text-gray-500 mt-4 text-base md:text-lg">{card.desc}</p>
          </div>
        ))}
      </div>

      <button className="mt-20 block mx-auto border-2 border-red-700 px-5 md:px-7 py-3 text-red-700 font-semibold hover:bg-red-700 hover:text-white transition-all uppercase">
        learn more about our clients
      </button>
    </section>
  );
};

export default ClientWeServe;
