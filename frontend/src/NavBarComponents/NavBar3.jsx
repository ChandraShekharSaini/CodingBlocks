import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar3.module.css";

const NavBar3 = () => {
  return (
    <div className="w-full h-[55px] bg-[#15171e] flex justify-end text-white border-t border-b border-gray-300">
      <div className="w-[50%]  flex items-center gap-6 text-white">
        <Link
          to="/all-courses"
          className={`hover:text-[#ec7203] text-[#f8f4f8]   hover:no-underline text-sm font-mulish transition-colors duration-300 `}
        >
          All Courses
         
        </Link>
        
      
        <Link
          to="/classroom/courses"
          className="hover:text-[#ec7203] text-[#f8f4f8]   hover:no-underline text-sm font-mulish transition-colors duration-300"
        >
          Classroom Courses
        </Link>
        <Link
          to="/live/courses"
          className="hover:text-[#ec7203] text-[#f8f4f8]   hover:no-underline text-sm font-mulish transition-colors duration-300"
        >
          Live Courses
        </Link>
        <Link
          to="/success-stories"
          className="hover:text-[#ec7203] text-[#f8f4f8]   hover:no-underline text-sm font-mulish transition-colors duration-300"
        >
          Success Stories
        </Link>
      </div>
    </div>
  );
};

export default NavBar3;
