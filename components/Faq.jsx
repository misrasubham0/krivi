import { faqs } from "@/data/service";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          FAQ
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 w-full mt-16">
        <div className="col-span-2">
        <div className="mt-8">
        <div className="mb-4 py-4 px-3 bg-gray-100 transition-all hover:bg-gray-200">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(1)}
          >
            <h2 className="text-lg font-medium">What is B28 SEO?</h2>
            <span
              className={`transform transition-transform duration-300 ${openFaq === 1 ? "rotate-180" : "rotate-0"
                }`}
            >
              <IoIosArrowDown />
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${openFaq === 1 ? "max-h-screen" : "max-h-0"
              }`}
          >
            <p className="mt-2">
              B28 SEO is a strategic approach to search engine optimization
              designed for businesses targeting corporate cients. Unlike
              traditional SEO, it focuses on high-value, competiive keywords
              that decision-makers use when searching for business solutions.
              This approach prioritizes industry-specic terms and
              purchase-intent keywords over broader search terms.
            </p>
          </div>
        </div>

        <div className="mb-4 py-4 px-3 bg-gray-100 transition-all hover:bg-gray-200">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(2)}
          >
            <h2 className="text-lg font-medium">What are B2B SEO services?</h2>
            <span
              className={`transform transition-transform duration-300 ${openFaq === 2 ? "rotate-180" : "rotate-0"
                }`}
            >
              <IoIosArrowDown />
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${openFaq === 2 ? "max-h-screen" : "max-h-0"
              }`}
          >
            <p className="mt-2">
              B2B SEO services are comprehensive optimization strategies
              tailored for companies targeting enterprise clients. These
              services focus on positioning your business for high-competition
              keywords while maintaining and improving existing rankings to
              capture quaified corporate traffic.
            </p>
          </div>
        </div>

        {/* <div className="mb-4 py-4 px-3 bg-gray-100 transition-all hover:bg-gray-200">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(3)}
          >
            <h2 className="text-lg font-medium">
              What's included in B2B SEO services?
            </h2>
            <span
              className={`transform transition-transform duration-300 ${openFaq === 3 ? "rotate-180" : "rotate-0"
                }`}
            >
              <IoIosArrowDown />
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${openFaq === 3 ? "max-h-screen" : "max-h-0"
              }`}
          >
            <p className="mt-3">Our comprehensive B28 SEO package includes:</p>
            <p className="mt-2">
              - Our comprehensive B28 SEO package includes:
            </p>
            <p>- Strategic planning and competitive analysis</p>
            <p>- High-value keyword targeting </p>
            <p>- Technical website optimization</p>
            <p>- Professional content development</p>
            <p>- Multi-channel SEO (video, images, news)</p>
            <p>- Regular performance reporting</p>
            <p>- Dedicated 5+ member account team </p>
            <p>- Integrated social media strategy</p>

            <p className="mt-4">
              We also offer complementary services like PPC management, content
              marketing, and social media advertising to create a complete
              digital marketing ecosystem for your business.
            </p>
          </div> 

        </div> */}

        <h4>What's included in B2B SEO services?</h4>

        <span class="text-xs">Our comprehensive B28 SEO package includes:</span>
        <br /> <br />
        {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            test
          </span>
        </button> */}

        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Strategic planning and competitive analysis
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          High-value keyword targeting
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Technical website optimization
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Professional content development
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Multi-channel SEO (video, images, news)
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Regular performance reporting
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Dedicated 5+ member account team
        </button>
        <button type="button" class="text-red-600 bg-gray-100 hover:bg-red-500 hover:text-red-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:hover:bg-red-600 me-2 mb-2">
          Integrated social media strategy
        </button>

      </div>
        </div>
        <div className="col-span-1">

          <img
            src="/services_slider.webp"
            className="object-cover w-full h-full"
            alt="services_slider"
          />
          <div className="mt-10">

          </div>
        </div>
      </div>







      {/* faqs start from here  */}
    
    </section>
  );
};

export default Faq;
