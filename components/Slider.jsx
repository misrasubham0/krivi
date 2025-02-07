import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import "swiper/css";
import { slideData } from "@/data/HomePage";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideChangeOnClick = (idx) => {
    setActiveSlide(idx);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(idx);
    }
  };

  return (
    <div className="md:h-[112vh] h-[80vh] text-white relative w-full">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="mySwiper h-full w-full"
      >
        {slideData.map((slide, idx) => (
          <SwiperSlide key={idx} className="overflow-hidden">
            <div className="h-full w-full">
              <div
                className={`w-full h-full ${
                  activeSlide === idx ? "animate-image-slide" : ""
                }`}
                style={{
                  left: "-50%",
                  marginLeft: "50%",
                  maxWidth: "none",
                  overflow: "hidden",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  zIndex: -1,
                }}
              >
                <div
                  className="hero__overlay absolute top-0 left-0 w-full h-full z-20"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 83%);",
                  }}
                ></div>

                <div className="h-full w-full">
                  <img
                    src={slide.image}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
              </div>

                
              <div className="h-full md:px-10 px-4 flex justify-center items-start flex-col w-full">
                <div className={`${activeSlide === idx ? "animate-text-slide" : ""}`}>
                  <h1 className="text-4xl font-semibold">{slide.heading}</h1>
                  <h2 className="text-2xl mt-3">{slide.subHeading}</h2>
                  <p className="mt-7 text-lg md:w-1/2">{slide.para}</p>
                </div>

                <button className={`mt-10 flex group items-center gap-3 font-semibold uppercase ${activeSlide === idx ? "animate-button-slide" : ""}`}>
                  Read More
                  <span>
                    <LiaArrowRightSolid className="text-2xl group-hover:translate-x-2 transition-all duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:grid grid-cols-4 hidden w-full absolute left-0 bottom-0 z-20 py-8 md:px-10 px-4">
        {slideData.map((slide, idx) => (
          <div key={idx} className="relative">
            <h1
              onClick={() => handleSlideChangeOnClick(idx)}
              className="font-semibold text-lg w-fit relative cursor-pointer hover:text-red-700 transition-all"
            >
              <div
                className={`absolute h-[3px] bg-red-700 transition-all  -top-2 left-0 ${
                  activeSlide === idx
                    ? "w-full duration-[5000ms]"
                    : "w-0 duration-[0ms]"
                }`}
              ></div>
              {slide.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
