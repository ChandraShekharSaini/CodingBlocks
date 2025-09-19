import React from "react";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div className="w-full h-[70px] bg-[#15171e]  flex justify-center">
      <div className="w-[75%] bg-[#15171e]     flex justify-between">
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp"
          alt="logo_image"
          width={"120px"}
          className="border-2px border-red-600 py-2"
        />

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1 h-full ">
            <div className="flex flex-col justify-center items-center gap-1 hover:bg-[#1a1c25] h-full px-4">
              <img 
                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconLearn.webp"
                alt="image"
                className="w-7"
              />

              <Link
                to={"#"}
                className="hover:text-[#ec7203] text-[#f8f4f8]   hover:no-underline  font-mulish transition-colors duration-300"
              >
                Learn
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center gap-1  hover:bg-[#1a1c25]  h-full px-4 transition-colors duration-700">
              <img
                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconMonitor.webp"
                alt="image"
                className="w-6"
              />

              <Link
                to={"#"}
                className="hover:text-[#ec7203] text-[#f8f4f8]   hover:no-underline text-sm font-mulish transition-colors duration-300"
              >
                Practise
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center gap-1  hover:bg-[#1a1c25]  h-full px-4">
              <img
                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconHire.webp"
                alt="image"
                className="w-6"
              />
              <Link
                to={"#"}
                className="hover:text-[#ec7203] text-sm text-[#f8f4f8]   hover:no-underline font-mulish transition-colors duration-300"
              >
                Get Hired
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center gap-1  hover:bg-[#1a1c25]  h-full px-4">
              <img
                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconIDE.webp "
                alt="image"
                className="w-6"
              />
              <Link
                to={"/code/ide"}
                className="hover:text-[#ec7203] text-sm text-[#f8f4f8]    hover:no-underline font-mulish transition-colors duration-300"
              >
                IDE
              </Link>
            </div>
          </div>

          <Link to={"/user/create-account/sign-up"}>
            <button className="bg-[#f36c3d] text-sm font-mulish text-[#f8f4f8]    hover:no-underline bg-gradient-to-r from-[#f36c3d] via-[#f77639] to-[#fa7f34] px-4 py-2 rounded-sm cursor-pointer">
              Login/Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
