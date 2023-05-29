import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import ForgotPassword from "../components/LoginRegister/ForgotPassword";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
