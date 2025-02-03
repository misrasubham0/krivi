import { servicesCardData } from "@/data/service";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const B2BSEOServices = () => {
  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          Deliverable
        </h1>
      </div>
      <p className="text-center mt-3 font-medium text-base md:text-lg">
        What do our B2B SEO services include?
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
        {servicesCardData.map((card, idx) => (
          <div
            key={idx}
            className="md:h-80 h-64 border p-5 flex flex-col justify-between border-t-[4px] cursor-pointer hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group md:mt-0 mt-4"
          >
            <h1 className="font-semibold text-xl md:text-3xl group-hover:text-lg md:group-hover:text-xl transition-all duration-300">
              {card.name}
            </h1>
            <p className="text-gray-500 transition-all duration-300 md:hidden group-hover:block">
              {card.desc}
            </p>

            <p className="flex items-center text-red-700 font-medium cursor-pointer">
              More{" "}
              <span>
                <FaCaretRight className="mt-1 group-hover:translate-x-1 transition-all" />
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default B2BSEOServices;
