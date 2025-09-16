import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/OtpPage";
import Layout from "./components/Layout";
import OtpPage from "./pages/OtpPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/create-account/otp" element={<OtpPage />} />
        <Route path="/user/create-account/sign-in" element={<LoginPage />} />

  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
