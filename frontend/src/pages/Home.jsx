import React from "react";
import NavBar from "../components/NavBar";
import SwiperComp from "../components/Swipper";
import HomeOne from "../HomeComponents/HomeOne";
import Footer from "../components/Footer";
import HomeTwo from "../HomeComponents/HomeTwo";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="bg-[#15171e]  w-full">

        <div className=" flex   justify-center text-white text-[40px]">
          <SwiperComp />
        </div>

        <HomeOne />

        <HomeTwo />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
