import React from "react";
import NavBar from "../components/NavBar";
import SwiperComp from "../components/Swipper";
import HomeOne from "../HomeComponents/HomeOne";
import Footer from "../components/Footer";
import HomeTwo from "../HomeComponents/HomeTwo";
import { signInStart, signInSuccess, signInFailure } from "../redux/userSlicer";

import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams);
    const token = queryParams.get("user");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        dispatch(signInSuccess(decoded.user));
      } catch (error) {
        navigate("create-account/login");
      }
    }
  }, [location.search]);

  return (
    <div>
      <NavBar />

      <div className="bg-[#15171e]  w-full">
        <div className=" flex   justify-center text-white text-[40px]">
          <SwiperComp />
        </div>

        <HomeOne />

       <CourseCard/>

        <HomeTwo />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
