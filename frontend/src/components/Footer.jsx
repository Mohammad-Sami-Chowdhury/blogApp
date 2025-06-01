import React from "react";
import Container from "./Container";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[50%]">
          <img src={Logo} alt="logo" />
          <p className="font-poppins text-base text-[#373737] w-[453px] mt-[20px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="w-[50%] flex text-[#373737] justify-between">
          <div>
            <p className="text-base font-medium font-outfit text-black">
              Quick Links
            </p>
            <a className="text-base font-outfit block" href="#">
              Home
            </a>
            <a className="text-base font-outfit block" href="#">
              Best Sellers
            </a>
            <a className="text-base font-outfit block" href="#">
              Offers & Deals
            </a>
            <a className="text-base font-outfit block" href="#">
              Contact Us
            </a>
            <a className="text-base font-outfit block" href="#">
              FAQs
            </a>
          </div>
          <div>
            <p className="text-base font-medium font-outfit text-black">
              Need help?
            </p>
            <a className="text-base font-outfit block" href="#">
              Delivery Information
            </a>
            <a className="text-base font-outfit block" href="#">
              Return & Refund Policy
            </a>
            <a className="text-base font-outfit block" href="#">
              Payment Methods
            </a>
            <a className="text-base font-outfit block" href="#">
              Track your Order
            </a>
            <a className="text-base font-outfit block" href="#">
              Contact Us
            </a>
          </div>
          <div>
            <p className="text-base font-medium font-outfit text-black">
              Follow Us
            </p>
            <a className="text-base font-outfit block" href="#">
              Instagram
            </a>
            <a className="text-base font-outfit block" href="#">
              Twitter
            </a>
            <a className="text-base font-outfit block" href="#">
              Facebook
            </a>
            <a className="text-base font-outfit block" href="#">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gray-400 mt-[50px]"></div>
      <p className="text-base font-outfit text-gray-400 mt-[15px] text-center">
        Copyright 2025 © QuickBlog All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
