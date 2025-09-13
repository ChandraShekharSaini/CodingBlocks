import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/create-account/sign-up" element={<SignUpPage />} />
        <Route path="/user/create-account/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
