import { faqs } from "@/data/service";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Nav from "@/components/Nav";
import { servicesCardData } from "@/data/service";
import { FaCaretRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/components/Footer";
const aboutus = () => {
    const [openFaq, setOpenFaq] = useState(1);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <>
            <Nav />
            <div class="md:container md:mx-auto">
            <section className="h-auto w-full px-4 md:px-10 py-10">
                <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
                    <h1
                        className="text-center font-semibold text-2xl md:text-3xl block px-4"
                        style={{ maxWidth: "80%" }}
                    >
                        About Us
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 w-full mt-16">
                    <div className="col-span-2">
                        <div className="mt-8">
                            <h1 class="text-4xl font-bold">Tradition Experts, Future-Forward Digital Marketer</h1>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h2 class="text-2xl font-medium">

                            WE blend decades of B2B expertise with innovative digital strategies
                            to drive business growth. Our team leverages proven business principles
                            while staying ahead of digital trends, ensuring your company captures today's
                            opportunities while preparing for tomorrow's challenges.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 w-full mt-16">

                    <div className="col-span-1">
                        <h2 class="text-2xl font-medium">
                            Every strategy we implement is focused on your revenue growth.
                            Through data-driven campaigns and targeted outreach, we connect you with high-value
                            corporate clients who are ready to engage, delivering measurable ROI that impacts your bottom line.
                        </h2>

                    </div>

                    <div className="col-span-2">
                        <div className="mt-8">
                            <h1 class="text-4xl font-bold">We deliver revenue-generating digital marketing solutions</h1>

                        </div>
                    </div>

                </div>

            </section>

            <section className="h-auto w-full px-4 md:px-10 py-10 ">
                <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
                    <h1
                        className="text-center font-semibold text-2xl md:text-3xl block px-4"
                        style={{ maxWidth: "80%" }}
                    >
                        Building Growth Through Powerful B2B connections
                    </h1>
                </div>

                <div className="mt-20">
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
                        {data:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt eos ab dolore quasi accusamus harum ducimus sit voluptatem eaque soluta aliquam qui ratione velit iusto dolor maxime, consequuntur vero",
                          img:"/google.png",
                          label:"Passion" 
                        },
                        {data:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt eos ab dolore quasi accusamus harum ducimus sit voluptatem eaque soluta aliquam qui ratione velit iusto dolor maxime, consequuntur vero",
                            img:"/facebook.png",
                            label:"Integrity" 
                        },
                        {data:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt eos ab dolore quasi accusamus harum ducimus sit voluptatem eaque soluta aliquam qui ratione velit iusto dolor maxime, consequuntur vero",
                             img:"/linkdin.png",
                             label:"Collaboration" 
                        },
                        {data:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt eos ab dolore quasi accusamus harum ducimus sit voluptatem eaque soluta aliquam qui ratione velit iusto dolor maxime, consequuntur vero",
                             img:"/instagram.png",
                              label:"Progress"
                        },
                      
                        
                      ].map((item, idx) => (
                        <SwiperSlide key={idx}>
                       
                          <div class="grid grid-cols-2 gap-4 border-2 border-light-blue-300">
                            <div>
                                <img
                                    src={item.img}
                                    className="object-cover w-full h-4/7 p-8  "
                                    alt="services_slider"
                                />
                            </div>

                            <div>
                                <p class="font-semibold text-2xl text-red-700">{item.label}</p>
                                <p class="font-semibold text-2xl text-black-700"> {item.data}</p>
                            </div>
                        </div>

                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>


                <div className="h-auto px-4 md:px-10 mt-8 py-10 bg-red-700 flex justify-end">
                    <button type="button" class="px-8 py-3.5 text-black bg-[#F9FAFB] hover:bg-[#8DA2FB]/90 focus:ring-4 focus:outline-none focus:ring-[#8DA2FB]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#046C4E]/30 me-2 mb-2">
                        Talk To Us
                    </button>

                </div>

            </section>

            <section className="h-auto w-full px-4 md:px-10 py-10">
                <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
                    <h1
                        className="text-center font-semibold text-2xl md:text-3xl block px-4"
                        style={{ maxWidth: "80%" }}
                    >
                        Deep Dive
                    </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 w-full mt-16">

                    <div className="col-span-1 ">
                        <h1 class="text-4xl font-bold">Data-Driven Strategies, Expert Execution</h1>
                    </div>

                    <div className="col-span-2 border-solid border-2 border-light-blue-300  h-80 p-6">
                        <div className=" bg-cover 
                    
                        ">
                         {/* bg-no-repeat bg-right bg-[url('https://www.bain.com/contentassets/d13a20dfb0774479a2b7ffbd90942685/choreograph-magnified_16-9_option-2.png?width=1440&height=810&mode=crop')] */}
                            
 {/* transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 */}
                            {/* <h1 class="text-4xl font-bold">ECTA</h1> */}
                            <div class="flex  justify-end">
                            <img 
                            src="https://www.bain.com/contentassets/d13a20dfb0774479a2b7ffbd90942685/choreograph-magnified_16-9_option-2.png?width=1440&height=810&mode=crop"
                            className="object-cover  z-10 absolute w-80  h-80 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 "
                            alt="services_slider"
                        />
                            </div>
                           

                            <h2 class="text-xl font-medium w-3/5 relative z-0">

                                Our approach smart with comprechensive markete analysis, transforming raw data into actionable insights,
                                Thase insights drive every strategic decision, ensuring your marketing are backed by concrete evidence rather than assumptions.
                            </h2>
                            <h2 class="text-xl font-medium w-3/5 relative z-0">
                                We embrace agle methodology to adapt quickly to new apportunities and chalanges. Through continuous manzaing and aptimization, we refine your strategy based on real performance meterics, onsuring sustainable growth and maximum ROI
                            </h2>

                           
                        </div>
                    </div>

                </div>
                {/* 
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 w-full mt-16">


                    <div className="col-span-1 border-solid border-2 border-light-blue-300  h-80 p-6">
                        <h1 class="text-4xl font-bold">ECTA</h1>
                        <h2 class="text-xl font-medium w-3/5 mt-8">

                            WE blend decades of B2B expertise with innovative digital strategies
                            to drive business growth.
                        </h2>
                    </div>

                    <div className="col-span-2   h-3/5 p-6">

                        <div className="mt-8 ">
                            <h2 class="text-xl font-medium w-3/5">
                                Our approach smart with comprechensive markete analysis, transforming raw data into actionable insights,
                                Thase insights drive every strategic decision, ensuring your marketing are backed by concrete evidence rather than assumptions.
                            </h2>

                            <h2 class="text-xl font-medium w-3/5 mt-8">
                                We embrace agle methodology to adapt quickly to new apportunities and chalanges. Through continuous manzaing and aptimization, we refine your strategy based on real performance meterics, onsuring sustainable growth and maximum ROI
                            </h2>
                        </div>
                    </div>




                </div> */}
            </section>

            <section className="h-auto w-full px-4 md:px-10 py-10 ">
                <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
                    <h1
                        className="text-center font-semibold text-2xl md:text-3xl block px-4"
                        style={{ maxWidth: "80%" }}
                    >
                        Our Fintech Insights
                    </h1>
                </div>

               

                <div class="grid grid-cols-5 gap-4 flex items-center justify-center mt-8 divide-x divide-gray-500">
                    <div className="flex items-center ">
                        <img
                            src="/google.png"
                            className="object-cover w-full h-4/5 p-8"
                            alt="services_slider"
                        />
                        <br/>
                        
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/facebook.png"
                            className="object-cover w-full h-4/5 p-8"
                            alt="services_slider"
                        />
                        <br/>
                       
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/instagram.png"
                            className="object-cover w-full h-4/5 p-8"
                            alt="services_slider"
                        />
                        <br/>
                       
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/linkdin.png"
                            className="object-cover w-full h-4/5 p-8"
                            alt="services_slider"
                        />
                        <br/>
                       
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/hubspot.png"
                            className="object-cover w-full h-4/5 p-8"
                            alt="services_slider"
                        />
                        <br/>
                       
                    </div>
                </div>

                <div class="grid grid-cols-5 gap-8 ">
              
                <p className="flex items-center text-red-700 mt-4 ml-28 font-medium cursor-pointer ">Google</p>
                <p className="flex items-center text-red-700 mt-4 ml-28 font-medium cursor-pointer">Facebook</p>
                <p className="flex items-center text-red-700 mt-4 ml-28 font-medium cursor-pointer">Instagram</p>
                <p className="flex items-center text-red-700 mt-4 ml-28 font-medium cursor-pointer">Linkdin</p>
                <p className="flex items-center text-red-700 mt-4 ml-28 font-medium cursor-pointer">Hobspot</p>

           
            </div>

            </section>

            {/* <section className="h-auto px-4 md:px-10 py-10 ">

                <div className="h-auto px-4 md:px-10 mt-8 py-10 bg-gray-300 flex justify-center gap-8">
                    <div>
                        <img
                            src="/google.png"
                            className="object-cover w-full h-7"
                            alt="services_slider"
                        />
                    </div>
                    <div>
                        <img
                            src="/facebook.png"
                            className="object-cover w-full h-7"
                            alt="services_slider"
                        />
                    </div>
                    <div>
                        <img
                            src="/instagram.png"
                            className="object-cover w-full h-7"
                            alt="services_slider"
                        />
                    </div>
                    <div>
                        <img
                            src="/linkdin.png"
                            className="object-cover w-full h-7"
                            alt="services_slider"
                        />
                    </div>
                    <div>
                        <img
                            src="/hubspot.png"
                            className="object-cover w-full h-7"
                            alt="services_slider"
                        />
                    </div>

                </div>
            </section> */}

                <Footer/>
            </div>

        </>
    );

};

export default aboutus;