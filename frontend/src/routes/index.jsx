import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import Login from "../components/LoginRegister/LoginPage/Login";
import Register from "../components/LoginRegister/RegisterPage/Register";
import Authentication from "../components/LoginRegister/Authentication/Authentication";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
}
