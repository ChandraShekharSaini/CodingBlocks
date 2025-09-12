import React from "react";
import NavBar from "../components/NavBar";
import SwiperComp from "../components/Swipper";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="bg-[#15171e] h-[90vh] w-full flex  justify-center text-white text-[40px]">
        
        <SwiperComp/>

        	
      </div>
    </div>
  );
};

export default Home;
