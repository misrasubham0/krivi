import { HowWeCanHelpCardData } from "@/data/HomePage";
import React, { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

const HowWeCanHelp = () => {
  const [readMore, setReadMore] = useState(false);
  const text1 =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt eos ab dolore quasi accusamus harum ducimus sit voluptatem eaque soluta aliquam qui ratione velit iusto dolor maxime, consequuntur vero repellendus? Eos, magni esse! Lorem ipsum dolor sit amet consectetur.";
  const text2 =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt eos ab dolore quasi accusamus harum ducimus sit voluptatem eaque soluta aliquam qui ratione velit iusto dolor maxime, consequuntur vero repellendus? Eos, magni esse! Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius est debitis quaerat, iure illo temporibus velit ullam adipisci perferendis.";

  const getTextPreview = (text) => {
    const words = text.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };

  return (
    <>
      <section className="h-auto w-full px-4 md:px-10 py-10">
        <div className="px-4 md:px-36 mt-10">
          <p className="text-lg md:text-2xl leading-8">
            {readMore ? text1 : getTextPreview(text1)}
          </p>
          <p className="text-lg md:text-2xl leading-8 mt-10">
            {readMore ? text2 : getTextPreview(text2)}
          </p>

          <div
            className={`py-4 flex items-center justify-center relative after:absolute after:w-full ${
              readMore ? "after:h-0" : "after:h-full"
            } after:bg-gradient-to-t from-white after:-top-full after:left-0`}
          >
            <p
              className="flex items-center gap-1 font-semibold cursor-pointer hover:text-red-700 transition-all"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
              <FaCaretDown className={`${readMore ? "rotate-180" : ""}`} />
            </p>
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
          <h1
            className="text-center font-semibold text-2xl md:text-3xl block px-4"
            style={{ maxWidth: "80%" }}
          >
            How Can We Help
          </h1>
        </div>
        <p className="text-center mt-3 font-medium text-base md:text-lg">
          Aspect solution for every aspect of your marketing journey.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          {HowWeCanHelpCardData.map((card, idx) => (
            <div
              key={idx}
              className="md:h-64 h-40 border p-5 flex flex-col justify-between border-t-[4px] cursor-pointer hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group md:mt-0 mt-4"
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
    </>
  );
};

export default HowWeCanHelp;
