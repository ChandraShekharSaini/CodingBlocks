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

      <div className="bg-[#15171e]  w-full font-mulish">
        <div className=" flex   justify-center text-white text-[40px]">
          <SwiperComp />
        </div>

        <HomeOne />

        <div className="flex flex-col gap-16 mt-10  py-4 text-white">
          <div className="flex flex-col gap-3">
            <p className="ml-6 text-[20px] font-bold">Live Courses</p>
            <CourseCard typeOfCourse="Live" />
          </div>

          <div className="flex flex-col gap-3">
            <p className="ml-6 text-[20px] font-bold">Classroom Courses</p>
            <CourseCard typeOfCourse="Classroom" />
          </div>
        </div>

        <HomeTwo />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
