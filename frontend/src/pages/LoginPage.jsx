import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  const [formData, setformData] = useState({});

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setformData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    try {
      const res = axios.post("http://localhost:8090/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <NavBar showAll={false} />

      <section className="w-full h-[90vh]  border-t-[1px]  font-mulish bg-[#15171e] text-white">
        <form className="w-[40%]  gap-5 mx-auto mt-10   flex flex-col border-[1px] rounded-lg px-10 py-10 pb-20">
          <p className="font-extrabold text-2xl">Login / Signup</p>

          <p className="text-[14px]">
            Sign In with <span className="text-[#ff6666]">Email</span> Or Mobile
          </p>

          <input
            onChange={handleChange}
            type="email"
            required

            placeholder="Enter Email"
            name="email"
            className=" placeholder-gray-400 outline-none text-[15px] text-white bg-transparent border-b-2 border-[#ad443b]"
          />

          <button className="bg-[#fa7e35] py-2 rounded-sm">Send OTP</button>

          <div className="flex flex-row justify-center items-center  gap-3">
            <hr className="w-[50%]" /> <p>OR</p> <hr className="w-[50%]" />
          </div>

          <button className="flex flex-row gap-3 border-[1px] justify-center items-center text-[14px]  py-3 ">
            <img
              src="https://minio.codingblocks.com/public/google-logo.png"
              className="w-7"
            />{" "}
            Sign in with Google
          </button>

          <button className="flex flex-row gap-3 border-[1px] justify-center items-center  text-[14px]   py-3 ">
            <img
              src="https://minio.codingblocks.com/public/facebook-logo.png"
              className="w-7"
            />{" "}
            Sign in with facebook
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
