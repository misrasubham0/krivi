import { faqs } from "@/data/service";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Nav from "@/components/Nav";
import { servicesCardData } from "@/data/service";
import { FaCaretRight } from "react-icons/fa";
const aboutus = () => {
    const [openFaq, setOpenFaq] = useState(1);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <>
            <Nav />
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

                            {/* <img
                                src="/services_slider.webp"
                                className="object-cover w-full h-4/5"
                                alt="services_slider"
                            /> */}

                            <p className="flex items-center text-red-700 mt-4 font-medium cursor-pointer">
                                Passion{" "}
                                <span>
                                    <FaCaretRight className="mt-1 group-hover:translate-x-1 transition-all" />
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="h-auto px-4 md:px-10 mt-8 py-10 bg-blue-100 flex justify-end">
                    <button type="button" class="px-8 py-3.5 text-white bg-[#24292F] hover:bg-[#8DA2FB]/90 focus:ring-4 focus:outline-none focus:ring-[#8DA2FB]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#046C4E]/30 me-2 mb-2">
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
                        <div className="mt-8 bg-cover 
                        transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110
                         bg-no-repeat bg-right bg-[url('https://www.bain.com/contentassets/d13a20dfb0774479a2b7ffbd90942685/choreograph-magnified_16-9_option-2.png?width=1440&height=810&mode=crop')]
                        ">

                            <h1 class="text-4xl font-bold">ECTA</h1>
                            <h2 class="text-xl font-medium w-3/5 mt-8">

                                WE blend decades of B2B expertise with innovative digital strategies
                                to drive business growth. Our team leverages proven business principles
                                while staying ahead of digital trends, ensuring your company captures today's
                                opportunities while preparing for tomorrow's challenges.
                            </h2>
                            {/* <img 
                            src="https://www.bain.com/contentassets/d13a20dfb0774479a2b7ffbd90942685/choreograph-magnified_16-9_option-2.png?width=1440&height=810&mode=crop"
                            className="object-cover w-full h-36 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 "
                            alt="services_slider"
                        /> */}
                        </div>
                    </div>

                </div>

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




                </div>
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

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
                    {servicesCardData.map((card, idx) => (
                        <div
                            key={idx}
                            className="md:h-80 h-64 border p-5 flex flex-col justify-between border-t-[4px] cursor-pointer hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group md:mt-0 mt-4"
                        >
                            {/* <h1 className="font-semibold text-xl md:text-3xl group-hover:text-lg md:group-hover:text-xl transition-all duration-300">
                                {card.name}
                            </h1> */}
                            {/* <p className="text-gray-500 transition-all duration-300 md:hidden group-hover:block">
                              {card.desc}
                            </p> */}

                            <img
                                src="/services_slider.webp"
                                className="object-cover w-full h-4/5"
                                alt="services_slider"
                            />

                            <p className="flex items-center text-red-700 mt-4 font-medium cursor-pointer">
                                Financial Services{" "}
                                <span>
                                    <FaCaretRight className="mt-1 group-hover:translate-x-1 transition-all" />
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

            </section>

            <section className="h-auto px-4 md:px-10 py-10 ">

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
            </section>
        </>
    );

};

export default aboutus;