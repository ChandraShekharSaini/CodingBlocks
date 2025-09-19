import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./components/Layout";
import OtpPage from "./pages/OtpPage";
import CoursePage from "./pages/CoursePage";
import LiveCourse from "./pages/LiveCourse";
import ClassRoomCourse from "./pages/ClassRoomCourse";
import AllCourses from "./pages/AllCourses";
import Ide from "./pages/Ide";
import DashBoard from "./pages/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/create-account/otp" element={<OtpPage />} />
        <Route path="/user/create-account/sign-in" element={<LoginPage />} />
        <Route path="/user/create-account/sign-up" element={<SignUpPage />} />

        <Route path="/create-course" element={<CoursePage />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/live/courses" element={<LiveCourse />} />

        <Route path="/classroom/courses" element={<ClassRoomCourse />} />
        <Route path="/code/ide" element={<Ide />} />

        <Route path="/user/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
