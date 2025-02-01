import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Dashboard from "../Admin/dashboard";
import AuthRoot from "./AuthRoot";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={
        <AuthRoot>
          <Dashboard />
        </AuthRoot>
        } />
    </Routes>
  </BrowserRouter>
);

export default Root;
