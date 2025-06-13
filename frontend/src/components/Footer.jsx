import React from "react";
import Container from "./Container";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-white mt-12">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Logo & Description */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
            <img src={Logo} alt="logo" className="h-12" />
            <p className="font-poppins text-base text-[#373737] max-w-[453px] mt-5 text-center md:text-left px-2 md:px-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              unde quaerat eveniet cumque accusamus atque qui error quo enim
              fugiat?
            </p>
          </div>
          {/* Links */}
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row lg:justify-between gap-8 md:gap-0 text-[#373737]">
            <div>
              <p className="text-base font-medium font-outfit text-black mb-2">
                Quick Links
              </p>
              <a className="text-base font-outfit block mb-1" href="#">
                Home
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Best Sellers
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Offers & Deals
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Contact Us
              </a>
              <a className="text-base font-outfit block" href="#">
                FAQs
              </a>
            </div>
            <div>
              <p className="text-base font-medium font-outfit text-black mb-2">
                Need help?
              </p>
              <a className="text-base font-outfit block mb-1" href="#">
                Delivery Information
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Return & Refund Policy
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Payment Methods
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Track your Order
              </a>
              <a className="text-base font-outfit block" href="#">
                Contact Us
              </a>
            </div>
            <div>
              <p className="text-base font-medium font-outfit text-black mb-2">
                Follow Us
              </p>
              <a className="text-base font-outfit block mb-1" href="#">
                Instagram
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Twitter
              </a>
              <a className="text-base font-outfit block mb-1" href="#">
                Facebook
              </a>
              <a className="text-base font-outfit block" href="#">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-400 mt-10"></div>
        <p className="text-base font-outfit text-gray-400 mt-4 text-center">
          Copyright 2025 © QuickBlog All Right Reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
