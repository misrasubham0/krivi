import {
  aboutData,
  bottomNavHeadData,
  consultingServices,
  industries,
  insightsData,
  topNavData,
} from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [topDropdowns, setTopDropdowns] = useState({
    offices: false,
    global: false,
  });
  const [bottomDropdowns, setBottomDropdowns] = useState({
    about: false,
    insights: false,
    consultingServices: false,
    industries: false,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleOpenDropdown = (name) => {
    if (name === "offices") {
      setTopDropdowns({ offices: !topDropdowns.offices, global: false });
      setBottomDropdowns({
        industries: false,
        consultingServices: false,
        insights: false,
        about: false,
      });
    } else if (name === "global | english") {
      setTopDropdowns({ global: !topDropdowns.global, offices: false });
      setBottomDropdowns({
        industries: false,
        consultingServices: false,
        insights: false,
        about: false,
      });
    }
  };

  const handleOpenDropdownBottom = (name) => {
    if (name === "Industries") {
      setBottomDropdowns({
        industries: !bottomDropdowns.industries,
        consultingServices: false,
        insights: false,
        about: false,
      });
      setTopDropdowns({ offices: false, global: false });
    } else if (name === "Consulting Services") {
      setBottomDropdowns({
        industries: false,
        insights: false,
        consultingServices: !bottomDropdowns.consultingServices,
        about: false,
      });
      setTopDropdowns({ offices: false, global: false });
    } else if (name === "Insights") {
      setBottomDropdowns({
        industries: false,
        consultingServices: false,
        insights: !bottomDropdowns.insights,
        about: false,
      });
      setTopDropdowns({ offices: false, global: false });
    } else if (name === "About") {
      setBottomDropdowns({
        industries: false,
        consultingServices: false,
        insights: false,
        about: !bottomDropdowns.about,
      });
      setTopDropdowns({ offices: false, global: false });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

   
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full z-50 h-auto fixed top-0 left-0 bg-white flex flex-col justify-between items-center  py-4 transition-all border-b border-gray-500  
 `
}
    >
      {/* top */}

      <div
        className={`hidden justify-between pb-4 items-center w-full px-10 
          
        `}
      >
        {topNavData.map((position, idx) => (
          <div key={idx}>
            <ul className="flex items-center gap-8">
              {position.data.map((data, idx) => (
                <>
                  <li
                    onClick={() => handleOpenDropdown(data.name)}
                    key={idx}
                    className="uppercase flex items-center gap-1 text-xs font-semibold cursor-pointer "
                  >
                    {data.name}

                    {data.subItems && (
                      <span>
                        <FaCaretDown
                          className={`text-[15px] transition-all ${
                            topDropdowns.offices
                              ? data.name === "offices"
                                ? "transform rotate-180"
                                : ""
                              : topDropdowns.global
                              ? data.name === "global | english"
                                ? "transform rotate-180"
                                : ""
                              : ""
                          }`}
                        />
                      </span>
                    )}
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}

        {/* Dropdown For Offices */}
        <div
          className={`w-full transition-all px-10 z-10 overflow-y-auto text-black bg-white absolute top-12 left-0 ${
            topDropdowns.offices ? "py-6 h-[30rem]" : "py-0 h-[0rem]"
          }`}
        >
          <h1 className="text-2xl text-black/80 font-semibold">
            {topNavData[0].data[0].subItems.heading}
          </h1>

          <div className="grid grid-cols-3">
            {topNavData[0].data[0].subItems.items.map((office, idx) => (
              <div
                key={idx}
                className={`mt-5 ${
                  idx !== 2 ? "border-r border-black/50 mr-8" : ""
                }`}
              >
                <h1 className="font-semibold text-xl mb-5">
                  {office.country.name}
                </h1>
                <ul>
                  {office.country.state.map((state, idx) => (
                    <li key={idx} className="mt-2 cursor-pointer">
                      {state}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="mt-10 text-xl text-red-600 cursor-pointer">
              See all offices
            </p>
          </div>
        </div>

        {/* Dropdown For globlal lan */}

        <div
          className={`w-full transition-all px-10 z-10 overflow-y-auto text-black bg-white absolute top-12 left-0 ${
            topDropdowns.global ? "py-6 h-auto" : "py-0 h-[0rem]"
          }`}
        >
          <h1 className="text-2xl text-black/80 font-semibold">
            {topNavData[1].data[0].subItems.heading}
          </h1>

          <div className="grid grid-cols-4">
            {topNavData[1].data[0].subItems.items.map((lan, idx) => (
              <div key={idx} className="mt-5">
                <h1 className="font-semibold text-xl mb-5">
                  {lan.region.name}
                </h1>
                <ul>
                  {lan.region.state.map((state, idx) => (
                    <li key={idx} className="mt-2 cursor-pointer">
                      {state}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`flex transition-all relative w-full md:px-10 px-4 items-center justify-between`}
      >
        <ul className="flex items-center gap-6">
          <li>
            <MdMenu className="text-2xl" />
          </li>
          <Link href="/">
            <li>
              <Image
                src={
                  "/logo_red_bain.png"
                  
                }
                alt="logo"
                width={150}
                className="cursor-pointer h-8 w-32"
                height={20}
              />
            </li>
          </Link>
          {bottomNavHeadData.map((links, idx) => (
            <li
              onClick={() => handleOpenDropdownBottom(links.name)}
              key={idx}
              className={`hover:text-red-700 md:flex hidden items-center gap-1 relative cursor-pointer hover:after:bg-red-700 hover:after:w-full hover:after:h-[1px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:transition-all `}
            >
              {links.name}
              {links.subItems && (
                <span>
                  <FaCaretDown
                    className={`text-[15px] transition-all ${
                      bottomDropdowns.industries
                        ? links.name === "Industries"
                          ? "transform rotate-180"
                          : ""
                        : bottomDropdowns.consultingServices
                        ? links.name === "Consulting Services"
                          ? "transform rotate-180"
                          : ""
                        : bottomDropdowns.insights
                        ? links.name === "Insights"
                          ? "transform rotate-180"
                          : ""
                        : bottomDropdowns.about
                        ? links.name === "About"
                          ? "transform rotate-180"
                          : ""
                        : ""
                    }`}
                  />
                </span>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-3 font-semibold cursor-pointer">
            Explore
            <span>
              <CiSearch className="text-[15px]" />
            </span>
          </li>
          <span className="md:block hidden">|</span>
          <li className="md:flex hidden items-center gap-3 font-semibold cursor-pointer">
            <AiOutlineSave className="text-[25px]" />
          </li>
        </ul>

        {/* Industry Dropdown */}
        <div
          className={`w-full overflow-hidden bg-white absolute top-10 rounded-b-xl  border-red-500 left-0 px-10 z-10 ${
            bottomDropdowns.industries ? "h-auto py-6 border-b-8" : "h-0"
          }`}
        >
          <h1 className="text-2xl text-black/80 mb-3 font-semibold">
            Industries
          </h1>

          <div className="grid grid-cols-4 w-full text-black">
            {industries.map((industry, idx) => (
              <div key={idx}>
                {industry.map((item, idx) => (
                  <div key={idx} className="mt-3">
                    <h1 className="font-semibold mb-2">{item.heading}</h1>
                    <ul>
                      {item.sub &&
                        item.sub.map((sub, idx) => (
                          <li
                            key={idx}
                            className="mt-2 ml-4 font-normal cursor-pointer"
                          >
                            {sub}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Consulting Services Dropdown */}
        <div
          className={`w-full overflow-hidden bg-white absolute top-10 rounded-b-xl  border-red-500 left-0 px-10 z-10 ${
            bottomDropdowns.consultingServices
              ? "h-auto py-6 border-b-8"
              : "h-0"
          }`}
        >
          <h1 className="text-2xl text-black/80 mb-3 font-semibold">
            Consulting Services
          </h1>

          <div className="grid grid-cols-4 w-full text-black">
            {consultingServices.map((consultingService, idx) => (
              <div key={idx}>
                {consultingService.map((item, idx) => (
                  <div key={idx} className="mt-3">
                    <h1 className="font-semibold mb-2">{item.heading}</h1>
                    <ul>
                      {item.sub &&
                        item.sub.map((sub, idx) => (
                          <li
                            key={idx}
                            className="mt-2 ml-4 font-normal cursor-pointer"
                          >
                            {sub}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Insights Dropdown */}

        <div
          className={`w-full overflow-hidden flex gap-10 text-black bg-white absolute top-10 rounded-b-xl  border-red-500 left-0 px-10 z-10 ${
            bottomDropdowns.insights ? "h-auto py-6 border-b-8" : "h-0"
          }`}
        >
          <div className="shrink-0 border-r pr-10">
            <h1 className="font-semibold text-2xl mb-5">Insights</h1>
            <ul>
              {insightsData[0].map((data, idx) => (
                <li key={idx} className="mt-2 font-semibold cursor-pointer">
                  {data}
                </li>
              ))}
              <p className="mt-5 text-xl text-red-600 cursor-pointer">
                View all insights
              </p>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-gray-600 text-xl mb-5">Featured topics</h1>
            <div className="grid grid-cols-3 w-full">
              {insightsData[1].map((divs, idx) => (
                <div key={idx}>
                  <ul>
                    {divs.map((data, idx) => (
                      <li
                        key={idx}
                        className="mt-2 font-semibold cursor-pointer"
                      >
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-xl mt-4 text-red-600 cursor-pointer">
                View all featured topics
              </p>
            </div>
          </div>
        </div>

        {/* About Dropdown */}

        <div
          className={`w-full overflow-hidden flex gap-10 text-black bg-white absolute top-10 rounded-b-xl  border-red-500 left-0 px-10 z-10 ${
            bottomDropdowns.about ? "h-auto py-6 border-b-8" : "h-0"
          }`}
        >
          <div className="shrink-0">
            <h1 className="font-semibold text-2xl mb-5">About</h1>
            <div className="grid grid-cols-2 border-r pr-6 gap-14">
              {aboutData.map((divs, idx) => (
                <div key={idx}>
                  <ul>
                    {divs.map((data, idx) => (
                      <li
                        key={idx}
                        className="mt-2 font-semibold cursor-pointer"
                      >
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-gray-600 text-xl mb-5">
              Further: Our global responsibility
            </h1>

            <div className="grid grid-cols-2 gap-10 w-full">
              <ul className="shrink-0">
                <li className="mt-2 mb-2 font-semibold cursor-pointer">
                  Diversity, Equity & Inclusion
                </li>
                <ul>
                  <li className="font-normal ml-4 mt-2">
                    2024 Diversity, Equity, and Inclusion Report
                  </li>
                  <li className="font-normal ml-4 mt-2">
                    2023 Diversity, Equity, and Inclusion Report
                  </li>
                </ul>
              </ul>
              <ul>
                <li className="mt-2 font-semibold cursor-pointer">
                  Social Impact
                </li>
                <li className="mt-2 font-semibold cursor-pointer">
                  Sustainability
                </li>
                <li className="mt-2 font-semibold cursor-pointer">
                  World Economic Forum
                </li>
              </ul>
            </div>
            <p className="mt-5 text-xl text-red-600 cursor-pointer">
              Learn more about Further
            </p>
          </div>
        </div>
      </div>
    </nav>
  
  );
};

export default Nav;
