import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 md:px-10 mt-10 text-white py-6 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-lg md:text-xl leading-8">
            Stay ahead in a rapidly changing world. Subscribe to Bain Insights,
            our monthly look at the critical issues facing global businesses.
          </p>

          <Image
            src={"/logo_white-bain.svg"}
            alt="logo"
            width={200}
            className="cursor-pointer mt-8 md:mt-14"
            height={100}
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-3/4 h-14 md:h-14 px-3 bg-[#424242] placeholder:text-white"
            />
            <button className="bg-red-700 w-full md:w-1/4 h-14 md:h-14 uppercase font-medium hover:bg-red-600 transition-all">
              Subscribe
            </button>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <input type="checkbox" id="subscribe" className="w-6 h-6 bg-red" />
            <label htmlFor="subscribe" className="text-lg">
              *I have read the Privacy Policy and agree to its terms.
            </label>
          </div>

          <div className="w-full flex items-center justify-center md:justify-end gap-4 mt-8 md:mt-14">
            <FaLinkedinIn className="text-xl" />
            <FaFacebookF className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>

      <p className="mt-8 md:mt-14 text-lg text-[#424242] font-semibold text-center md:text-left">
        © 1996-2025 Bain & Company, Inc.
      </p>
    </footer>
  );
};

export default Footer;
