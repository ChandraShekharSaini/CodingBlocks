import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { userAuthAPI } from "../utils/Api";

const LoginPage = () => {
  const [formData, setformData] = useState({});
  const navigate = useNavigate();

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setformData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    console.log("Inside data", formData);

    try {
      const res = await  userAuthAPI.post(
        "/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res.data.status);

      // navigate(`/user/create-account/otp?email=${formData.email}`);

      if (res.data.status) {
        navigate("/user/create-account/sign-in");
      }

      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleAuth = () => {
    window.location = "http://localhost:3400/auth/google";
  };

  const handleGithubAuth = () => {
    window.location = "http://localhost:3400/auth/github";
  };

  return (
    <Layout>
      <section className="w-full h-[90vh]  border-t-[1px]  font-mulish bg-[#15171e] text-white">
        <form
          onSubmit={handleSubmit}
          className="w-[40%]  gap-5 mx-auto mt-10   flex flex-col border-[1px] rounded-lg px-10 py-10 pb-20"
        >
          <p className="font-extrabold text-2xl">Sign Up</p>

          <p className="text-[14px]">
            Sign In with <span className="text-[#ff6666]">Email</span>
          </p>

          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter Email"
            name="email"
            className=" placeholder-gray-400 outline-none text-[15px] text-white bg-transparent border-b-2 border-[#ad443b]"
          />

          <button type="submit" className="bg-[#fa7e35] py-2 rounded-sm">
            Send OTP
          </button>

          <div className="flex flex-row justify-center items-center  gap-3">
            <hr className="w-[50%]" /> <p>OR</p> <hr className="w-[50%]" />
          </div>

          <button
            onClick={handleGoogleAuth}
            type="button"
            className="flex flex-row gap-3 border-[1px] justify-center items-center text-[14px]  py-3 "
          >
            <img
              src="https://minio.codingblocks.com/public/google-logo.png"
              className="w-7"
            />{" "}
            Sign in with Google
          </button>

          <button
            onClick={handleGithubAuth}
            type="button"
            className="flex flex-row gap-3 border-[1px] justify-center items-center  text-[14px]   py-3 "
          >
            <img
              src="https://minio.codingblocks.com/public/facebook-logo.png"
              className="w-7"
            />{" "}
            Sign in with facebook
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default LoginPage;

//  "http://localhost:3400/api/v1/mentor/auth/send-otp"
