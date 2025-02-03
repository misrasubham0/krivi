import React from "react";

const CoreCapablities = () => {
  return (
    <section className="h-auto w-full px-4 md:px-10 py-10">
      <div className="mt-10 flex items-center justify-center w-full relative after:flex-1 after:flex-grow after:content-[''] after:block after:border-t-[1px] after:border-gray-300 before:flex-1 before:flex-grow before:content-[''] before:block before:border-t-[1px] before:border-gray-300">
        <h1
          className="text-center font-semibold text-2xl md:text-3xl block px-4"
          style={{ maxWidth: "80%" }}
        >
          Our Core Capabilities - Marketing Oprations managed services
        </h1>
      </div>
      <p className="text-center mt-3 font-medium text-base md:text-lg">
        Driven growth through intregrated digital solutions
      </p>

      <div className="grid mt-20 grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group border-t-[4px] cursor-pointer">
          <h1 className="font-semibold text-xl md:text-2xl">CXM</h1>
          <p className="mt-2 text-base md:text-lg">
            Build meaningful cutomer relationships through data-driven insights
            and personalized experiences.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Core Capabilities: <br />
            - AI-powered omnichannel personalization at scale
            <br />
            - Advance customer profiling and journey optimization <br />
            - Data-driven campaign strategy and execution <br />- Automated lead
            generation and qualification
          </p>
        </div>
        <div className="border md:mt-0 mt-5 p-4 hover:bg-gray-50 transition-all after:absolute after:w-0 relative after:h-[4px] after:-top-[4px] after:left-0 after:bg-red-700 after:transition-all hover:after:w-full after:duration-300 group border-t-[4px] cursor-pointer">
          <h1 className="font-semibold text-xl md:text-2xl">
            Digital Marketing & Media Growth Solutions
          </h1>
          <p className="mt-2 text-base md:text-lg">
            Driven measurable results through strategic media planning and
            performance optimization.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Core Capabilities: <br />
            - Precision audience targeting and channel optimization
            <br />
            - Advance analytics and attribution modeling <br />
            - Dynamic content creation and deployement <br />- Comprehensive
            brand safety and fraud prevention
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreCapablities;
