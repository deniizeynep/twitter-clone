import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import ForgotPassword from "../components/LoginRegister/ForgotPassword";
import LoginPage from "../components/LoginRegister/LoginPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  );
}
