import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import B2BSEOServices from "@/components/services/B2BSEOServices";
import Slider from "@/components/services/Slider";
import React from "react";

const services = () => {
  return (
    <>
       
      <Nav />
   
   <img
          src="/services_img.webp"
          alt="service"
          className="object-cover w-full h-full absolute top-0 left-0"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />

      <div class="md:container md:mx-auto">
      <header className="h-auto w-full px-4 md:px-10 py-10 ">
        <div className="w-full h-screen mt-8 relative flex items-center px-4 md:px-10">
        {/* <img
          src="/services_img.webp"
          alt="service"
          className="object-cover w-full h-full absolute top-0 left-0"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        /> */}
        <div className="text-white relative p-4 md:p-0">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Engaging and Attracting Customers with Ease
          </h1>
          <h2 className="text-xl md:text-2xl mt-3">
            Grow With B2B SEO Services
          </h2>
          <p className="mt-7 text-base md:text-lg md:w-1/2">
            Pull Marketing is marketing to individuals and organizations with an
            express demand for one's services or products. By targeting an
            interested audience lets companies capitalize on existing demand,
            and ensure that they are part of each potential client's buying
            journey.
          </p>
        </div>
        </div>
        
      </header>
      </div>

      <section className="h-auto w-full px-4 md:px-10 py-10">
        <div className="grid mt-10 grid-cols-1 md:grid-cols-1 gap-4" style={{display: "flex"}}>
          <div className="border p-4 hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group border-t-[4px] cursor-pointer">
            <h1 className="font-semibold text-xl md:text-2xl">Approach</h1>
            <p className="mt-2 text-base md:text-lg">
              Customer-Centric and Data-Driven Marketing: By focusing on
              customer needs and perspectives, organizations can bridge the
              traditional divide between marketing and sales teams for maximum
              impact.
            </p>
          </div>
          <div className="border md:mt-0 mt-5 p-4 hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group border-t-[4px] cursor-pointer">
            <h1 className="font-semibold text-lg">
              <strong>.+</strong> Transform Your Customer Journey Through Search
            </h1>
            <p className="mt-1 text-base md:text-lg">
              When your potential clients need solutions, 94% of them turn to
              search engines first. By optimizing your digital presence, we
              ensure your company connects with decision-makers at crucial
              moments in their buying journey. Our SEO strategies put your
              services in front of the right eyes, transforming searches into
              meaningful business relationships.
            </p>
            <h1 className="font-semibold mt-3 text-lg">
              <strong>.+</strong> Data-Driven SEO Excellence
            </h1>
            <p className="mt-1 text-base md:text-lg">
              Our approach begins with comprehensive analysis that uncovers both
              the technical foundation and market opportunities for your website.
              We dive deep into search engine requirements and user behavior
              patterns to create a powerful optimization strategy. Every
              recommendation is backed by data, allowing us to target
              investments for maximum impact and accelerate your path to
              improved visibility.
            </p>
            <h1 className="font-semibold mt-3 text-lg">
              <strong>.+</strong> Global B2B Search Engine
            </h1>
            <p className="mt-1 text-base md:text-lg">
              Mastery: As specialists in B2B search engine optimization, we
              understand that effective SEO transcends simple keyword placement.
              Our expertise spans diverse markets and industries, allowing us to
              craft multifaceted strategies that combine regional insights with
              content excellence. We leverage market data to pinpoint the most
              impactful opportunities for your business, ensuring resources are
              invested where they matter most.
            </p>
          </div>
        </div>
      </section>

      <B2BSEOServices />
      <Slider />
      <Faq />
      <Footer />
      
    </>
  );
};

export default services;
