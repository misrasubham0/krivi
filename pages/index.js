import ClientWeServe from "@/components/ClientWeServe";
import CoreCapablities from "@/components/CoreCapablities";
import Footer from "@/components/Footer";
import HowWeCanHelp from "@/components/HowWeCanHelp";
import Marketing from "@/components/Marketing";
import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const index = () => {
  return (
    <>
      <Nav />
      <Slider />
      <HowWeCanHelp/>
      <ClientWeServe />
      <WhyChooseUs />
      <Marketing />
      <CoreCapablities />
      <Footer />
    </>
  );
};

export default index;
