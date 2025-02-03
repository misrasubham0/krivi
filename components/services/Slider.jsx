import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          Why Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 w-full mt-16">
        <div className="col-span-1">
          <img
            src="/services_slider.webp"
            className="object-cover w-full h-full"
            alt="services_slider"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl md:mt-0 mt-5 md:text-4xl font-semibold">
            Drive Growth With Proven B2B Strategies
          </h1>
          <p className="text-base md:text-lg mt-5">
            We tap into existing market demand to maximize your ROI through
            targeted pull marketing. By connecting with decision-makers at the
            right moment in their buying journey, we transform your B2B outreach
            into measurable results. Our data-backed approach aligns perfectly
            with how your buyers actually make purchasing decisions, helping you
            acquire valuable corporate clients more efficiently.
          </p>

          <div className="mt-10">
            <Swiper
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
            >
              {[
                "Target the Right B2B Prospects",
                "Focus on Sales Pipeline Growth",
                "Transform Data into ROI",
                "Build Long-term Relationships",
              ].map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="md:h-56 h-40 border p-5 flex flex-col justify-between border-t-[4px] cursor-pointer hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group md:mt-0 mt-4">
                    <h1 className="font-semibold text-lg md:text-xl transition-all duration-300">
                      {item}
                    </h1>

                    <p className="flex items-center text-red-700 font-medium cursor-pointer">
                      More{" "}
                      <span>
                        <FaCaretRight className="mt-1 group-hover:translate-x-1 transition-all" />
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
