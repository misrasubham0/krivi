import { marketingData } from "@/data/HomePage";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Marketing = () => {
  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          Marketing that Works
        </h1>
      </div>
      <p className="text-center mt-3 font-medium text-base md:text-lg">
        (Expertise n Knowledge X Data + Creativity X Ideas) + (Out of the Box) =
        Results
      </p>

      <div className="mt-16 px-4 md:px-20 flex flex-wrap justify-center">
        {marketingData.map((card, idx) => (
          <div key={idx} className="w-full md:w-1/2  inline-block p-3">
            <div className="flex items-center group cursor-pointer justify-between h-28 px-5 bg-black transition-all duration-300 hover:bg-gradient-to-bl from-red-500 to-[#8D0A48]">
              <h2 className="text-white duration-300 font-medium transition-all group-hover:hidden">
                {card.heading}
              </h2>
              <p className="hidden duration-300 delay-75 text-white text-sm transition-all group-hover:block">
                {card.desc}
              </p>
              <div className="h-10 duration-300 group-hover:hidden w-10 rounded-full bg-gray-800 flex items-center justify-center">
                <button className="h-8 w-8 rounded-full flex items-center justify-center text-white bg-red-600">
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketing;
