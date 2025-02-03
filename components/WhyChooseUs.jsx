import { whyChooseUsData } from "@/data/HomePage";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          Why Choose Us
        </h1>
      </div>
      <p className="text-center mt-3 font-medium text-base md:text-lg">
        We drive sustainable growth by intregating customer-centricity into your
        sales and marketing DNA, optimizing every touchpoint of the cutomer
        journey. Beyond strategy, we provide hands-on execution support with
        proven tools and metrics to transform your cutomer relationships and
        build lasting loyalty.
      </p>

      <div className="mt-24 flex flex-wrap justify-center">
        {whyChooseUsData.map((card, idx) => (
          <div
            key={idx}
            className={`w-full sm:w-1/2 md:w-1/4 inline-block md:mt-0 mt-14 ${
              [0, 1, 2, 4, 5].includes(idx) ? "border-r border-gray-300" : ""
            } ${idx > 3 ? "mt-12 md:mt-24" : ""}`}
          >
            <h1 className="font-bold text-4xl md:text-6xl text-center">{card.num}</h1>
            <p className="text-gray-500 mt-4 md:mt-8 text-lg md:text-xl text-center">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
