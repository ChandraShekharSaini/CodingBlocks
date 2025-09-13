import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#08090c] px-44 pt-10 ">
      <div className="flex flex-row items-center justify-between border-t border-gray-500 py-10 mt-11">
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp"
          alt="logo_image"
          width={"120px"}
          className="border-2px border-red-600 py-2"
        />

        <div className="flex flex-col text-[13px] gap-1 text-[#c0c1c1] text-center">
          <p className="cursor-pointer">Privacy Policy | Terms of Service</p>

          <p>Copyright 2022 - CODING BLOCKS PRIVATE LIMITED</p>

          <p className="text-red-600 font-bold">
            Made with ♥ & passion by Coding Blocks
          </p>
        </div>

        <div className="flex flex-row gap-5">
          <FaYoutube className="text-white text-[22px] cursor-pointer" />
          <FaInstagram className="text-white text-[22px]  cursor-pointer" />
          <FaFacebookF className="text-white text-[22px]  cursor-pointer" />
          <FaLinkedinIn className="text-white text-[22px]  cursor-pointer" />
          <IoLogoGithub className="text-white text-[22px]  cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
