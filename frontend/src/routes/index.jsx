import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import Login from "../components/LoginRegister/Login Page/Login";
import Register from "../components/LoginRegister/Register Page/Register";
import ForgotPassword from "../components/LoginRegister/Forgot Password/ForgotPassword";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/loginpage" element={<Login />} />
    </Routes>
  );
}
